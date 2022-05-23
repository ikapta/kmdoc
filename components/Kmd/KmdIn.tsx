import React, { useEffect } from 'react';
import { Box, ScrollArea } from '@mantine/core';
import { useEventListener } from '@mantine/hooks';
import { useCtx } from './store';
import useStyles from './Kmd.styles';

const DefaultDocContent = `
  ---
  title: What is Kmd?
  ---

  Kmd is a created by Mantine Nextjs Markdoc. Vercel created Kmd to power [our public docs](https://vercel.com/).

  ## How is KMD different?
  Kmd uses a fully declarative approach to composition and flow control, and deep combine with Mantine [Read more](https://mantine.dev/).

  ## Next steps
  - [Explore the Markdoc](https://markdoc.io/)
  - [Explore the Mantine](https://mantine.dev/)

  ## Mantine examples

  {% Box c="Code" p={"color": "red"} %}React{% /Box %} {% Box c="Code" p={"color": "green"} %}Vue{% /Box %} {% Box c="Code" p={"color": "blue"} %}Svelte{% /Box %}

  {% Box c="Button" %}Button{% /Box %} {% Box c="Button" p={"color": "red"} %}Button{% /Box %} {% Box c="Button" p={"variant":"outline"} %}Button{% /Box %}

  {% Box c="Input" p={placeholder: "your email...", "style": {"width": 230}} %}{% /Box %}

  {% Box c="Anchor" %}Anchor{% /Box %}

  {% Box c="Burger" %}{% /Box %}

  {% Box c="Avatar" %}{% /Box %}

  {% Box c="Badge" %}Badge{% /Box %}

  {% Box c="ColorSwatch" %}K{% /Box %}

`;

export default function KmdIn() {
  const { classes } = useStyles(undefined, { name: 'Kmd' });
  const { docText, onDocTextChange } = useCtx();

  const ref = useEventListener('input', (ev) => {
    // @ts-ignore
    onDocTextChange(ev.currentTarget?.innerText);
  });

  const derivedContent = docText || DefaultDocContent;

  useEffect(() => {
    ref.current.innerText = derivedContent;
    onDocTextChange(derivedContent);
  }, []);

  return (
    <ScrollArea className={classes.scrollIn}>
      <Box
        className={classes.in}
        ref={ref}
        contentEditable
      />
    </ScrollArea>
  );
}
