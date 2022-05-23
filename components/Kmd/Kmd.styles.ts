import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  wrapper: {
    height: '80vh',
  },
  scrollIn: {
    height: '100%',
    width: '50%',
    backgroundColor: theme.colorScheme === 'dark' ?
      theme.fn.lighten(theme.black, 0.2) :
      theme.fn.lighten(theme.colors.gray[2], 0.4),
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    padding: 8,
    borderTopLeftRadius: theme.radius.sm,
    borderBottomLeftRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  in: {
    height: '100%',
    ':focus-visible': {
      outline: 'none',
    },
  },
  scrollOut: {
    height: '100%',
    width: '50%',
    backgroundColor: theme.white,
    color: theme.black,
    padding: 8,
    borderTopRightRadius: theme.radius.sm,
    borderBottomRightRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
  out: {
    height: '100%',
  },
}));
