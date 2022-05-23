import React from 'react';
import { Group } from '@mantine/core';
import { Ctx } from './store';
import KmdIn from './KmdIn';
import KmdOut from './KmdOut';
import useStyle from './Kmd.styles';

export default function Index() {
  const [content, setContent] = React.useState('');
  const { classes } = useStyle(undefined, { name: 'Kmd' });

  return (
    <Ctx.Provider value={{
        docText: content,
        onDocTextChange: (val: string) => {
          setContent(val);
        },
      }}
    >
      <Group className={classes.wrapper} spacing={0} align="flex-start" position="apart" noWrap>
        <KmdIn />
        <KmdOut />
      </Group>
    </Ctx.Provider>
  );
}
