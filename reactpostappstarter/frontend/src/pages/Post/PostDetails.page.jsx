import { Link } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container, Grid, Stack, Text} from "@mantine/core";
import { useMantineTheme, Paper, Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';


function PostDetailsPage() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);
  
  return (
    <>
      <Container>

      <Paper shadow="xl" radius="md" withBorder p="xl">
        <Grid grow gutter="sm">
          <Grid.Col span={mobile ? 12 : 6}>
            <Stack
            h="auto"
            bg="var(--mantine-color-body)"
            >
              <Paper shadow="xl" radius="md" withBorder p="xl">
                <Text size="md">Author</Text>
              </Paper>
              <Paper shadow="xl" radius="md" withBorder p="xl">
                <Text size="md">Title</Text>
              </Paper>
              <Paper shadow="xl" radius="md" withBorder p="xl">
                <Text size="md">Category</Text>
              </Paper>
              <Paper shadow="xl" radius="md" withBorder p="xl">
                <Text size="md">Content</Text>
              </Paper>
            </Stack>
          </Grid.Col>

          <Grid.Col span={mobile ? 12 : 6}>
            <Paper shadow="xl" radius="md" withBorder p="xl">
              <Text size="md">Image</Text>
            </Paper>
          </Grid.Col>

        </Grid>

        <Divider my="xl" />

        <Button style={{ marginTop: theme.spacing.md }}>
          <Link to="/posts">Back to Posts</Link>
        </Button>
        </Paper>

      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  // do something with this
  return null;
};

export default PostDetailsPage;
