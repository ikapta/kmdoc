import React, { ReactNode, useMemo, useRef } from 'react';
import Markdoc from '@markdoc/markdoc';
import { Box as MBox, ScrollArea } from '@mantine/core';
import * as Mt from '@mantine/core';
import { useCtx } from './store';
import useStyles from './Kmd.styles';

const boxTagConfig = {
  render: 'Box',
  description: 'Display the enclosed content in a box',
  children: ['paragraph', 'tag', 'list'],
  attributes: {
    type: {
      type: String,
      default: '',
      errorLevel: 'critical',
      description:
        'Any component for mantine.',
    },
    c: {
      type: String,
      default: 'Anchor',
      required: true,
    },
    p: {
      type: Object,
      default: {},
    },
  },
};

function Box({ c, p = {}, children, ...others /** Any component props */ }: {
  /** Mantine component tag name */
  c: string;

  /** Any props for target component `c` */
  p: Record<string, any>;

  /** Component content */
  children: React.ReactNode
}) {
  const MantineComponent = (Mt as any)[c];

  if (MantineComponent && !(typeof MantineComponent === 'function')) {
    return <MantineComponent {...p} {...others}>{children}</MantineComponent>;
  }
  return `[${c}]: Not support!`;
}

const ComponentsMap = {
  Box,
};

const astConfigs = {
  tags: {
    Box: boxTagConfig,
  },
};

export default function KmdOut() {
  const { docText } = useCtx();
  const { classes } = useStyles(undefined, { name: 'Kmd' });
  const lastRenderContent = useRef<ReactNode>();

  const Content = useMemo(() => {
    try {
      const ast = Markdoc.parse(docText);
      // @ts-ignore
      const content = Markdoc.transform(ast, astConfigs);

      return Markdoc.renderers.react(content, React, {
        components: ComponentsMap,
      });
    } catch (e) {
      return lastRenderContent.current || '';
    }
  }, [docText]);

  if (Content) {
    lastRenderContent.current = Content;
  }

  return (
    <ScrollArea className={classes.scrollOut}>
      <MBox className={classes.out}>
      { Content }
      </MBox>
    </ScrollArea>
  );
}
