import React from 'react';
import { createStyles, Header, Menu, Group, Center, Burger, Container, ActionIcon } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { ChevronDown, GitMerge } from 'tabler-icons-react';
import { SunIcon } from '@modulz/radix-icons';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export const DocHeaderHeight = 56;

const useStyles = createStyles((theme) => ({
  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function SiteHeader({ links }: HeaderSearchProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDown size={12} />
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={DocHeaderHeight}>
      <Container size="xl">
        <div className={classes.inner}>
          <Group><SunIcon /> KMD</Group>

          <Group spacing={5} className={classes.links}>
            {items}
          </Group>

          <Group>

            <ActionIcon
              color="indigo"
              sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                color: theme.colorScheme === 'dark' ? theme.colors.indigo[4] : theme.colors.indigo[6],
              })}
              // eslint-disable-next-line no-restricted-globals
              onClick={() => { location.href = 'https://github.com/ikapta/kmdoc'; }}
            >
              <GitMerge size={18} />
            </ActionIcon>

            <ColorSchemeToggle />

            <Burger
              opened={opened}
              onClick={() => toggleOpened()}
              className={classes.burger}
              size="sm"
            />
          </Group>
        </div>
      </Container>
    </Header>
  );
}
