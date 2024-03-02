import { Container, Group, Anchor } from '@mantine/core';
import HeaderLogo from "./HeaderLogo";
import { useNavigate } from 'react-router-dom';
import classes from './FooterSimple.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/login', label: 'Login' },
];

export function FooterSimple() {
  const navigate = useNavigate(); // Initialize useNavigate

  const items = links.map((link) => (
    <Anchor
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => {
        event.preventDefault();
        navigate(link.link); // Use navigate to go to the specified path
      }}
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
