import { Container, Group, Anchor } from '@mantine/core';
import HeaderLogo from "./HeaderLogo"; // Assuming you will use this correctly inside your component
import classes from './FooterSimple.module.css';

const links = [
  { link: '#', label: 'Home' },
  { link: '#', label: 'Login' },
];

export function FooterSimple() {
  const items = links.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <HeaderLogo />
          <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
