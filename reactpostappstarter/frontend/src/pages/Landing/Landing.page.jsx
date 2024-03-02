import { Container, Grid, useMantineTheme  } from "@mantine/core";
import { Image, Paper, Text, Title, Button, Divider, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

import '@mantine/carousel/styles.css';

const images = [
  {url:'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
  {url:'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
];

  //'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
  //'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',

const featureHighlights = [
  "Showcase your best shots with others",
  "Connect with photographers worldwide",
  "Participate in exciting photo challenges"
];


const Landing = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = images.map((image) => (
    <Carousel.Slide key={image.url}>
      <Image 
        src={image.url} 
        radius="md"
        h={300}
        w="auto"
        fit="contain"
      />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Title order={1}>Discover, Share, and Celebrate the Art of Photography</Title>
      <Text size="lg" style={{ marginTop: theme.spacing.sm }}>
        A vibrant community for photographers to showcase their work and connect with fellow enthusiasts.
      </Text>

      <Grid style={{ marginTop: theme.spacing.md }}>
        {featureHighlights.map((feature, index) => (
          <Grid.Col span={4} key={index}>
            <Paper shadow="xs" p="md">
              <Text>{feature}</Text>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>

      <Divider my="xl" />

      <Paper shadow="xs" p="xl">
        <Text>
          Use it to create cards, dropdowns, modals and other components that require background
          with shadow
        </Text>
        <Button variant="filled" color="green" size="md" style={{ marginTop: theme.spacing.xl }}>
          Join the Community
        </Button>
      </Paper>

      <Carousel withIndicators>
        {slides}
      </Carousel>

    </Container>
  );
};

export default Landing;

{/* <SimpleGrid cols={3}>
          {images.map((url, index) => (
            <Image
            radius="md"
            fit="contain"
            src={url}
          />
          ))}
        </SimpleGrid> */}