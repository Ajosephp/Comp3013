import { Container, Grid, useMantineTheme  } from "@mantine/core";
import { Image, Paper, Text, Title, Button, Divider, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import { useNavigate } from 'react-router-dom';

import '@mantine/carousel/styles.css';

const images = [
  {url: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
  {url: 'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
  {url: 'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
  {url: 'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
  {url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
  {url: 'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'},
];

const featureHighlights = [
  "Showcase your best shots with others",
  "Connect with photographers worldwide",
  "Participate in exciting photo challenges"
];

const Landing = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };

  const slides = images.map((image) => (
    <Carousel.Slide key={image.url}>
      <Image 
        src={image.url}
        radius="md"
        h={450}
        fit="contain"
        
      />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Title order={1}>Discover, Share, and Celebrate the Art of Photography</Title>
      <Text size="lg" style={{ marginTop: theme.spacing.md }}>
        A vibrant community for photographers to showcase their work and connect with fellow enthusiasts.
      </Text>

      <Grid style={{ marginTop: theme.spacing.md }}>
        {featureHighlights.map((feature, index) => (
          <Grid.Col span={mobile ? 12 : "auto"} key={index}>
            <Paper shadow="xl" radius="md" withBorder p="xl">
              <Text>{feature}</Text>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>

      <Divider my="xl" />

      <Grid style={{ marginTop: theme.spacing.md }}>

        <Grid.Col span={mobile ? 12 : "auto"}>
          <Paper shadow="xl" radius="md" withBorder p="xl">
            <Carousel withIndicators height={450}>
              {slides}
            </Carousel>
          </Paper>
        </Grid.Col>

        <Grid.Col span={mobile ? 12 : "auto"}>
          <Paper shadow="xl" radius="md" withBorder p="xl">
            <Text>
            Embark on your photography adventure now! Join our community and start sharing your unique vision with the world.
            </Text>
            <Button 
            variant="filled" 
            color="green" 
            size="md" 
            style={{ marginTop: theme.spacing.xl }}
            onClick={goToLogin}>
              Join the Community
            </Button>
          </Paper>
        </Grid.Col>

      </Grid>

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