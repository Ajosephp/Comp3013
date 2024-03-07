import { Link, useParams } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import {
  Button,
  Container,
  Grid,
  Stack,
  Text,
  Title,
  Image,
} from "@mantine/core";
import { useMantineTheme, Paper, Divider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";

function PostDetailsPage() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  const [post, setPost] = useState(null); // Initialize state to null indicating no data initially
  const { id } = useParams();

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`${DOMAIN}/api/posts/${id}`);
        console.log(response.data);
        setPost(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching post details:", error);
      }
    };

    fetchPostDetails();
  }, [id]);

  if (!post) {
    return <div>Loading post...</div>; // Show a loading message or spinner instead
  }

  return (
    <>
      <Container>
        <Paper shadow="xl" radius="md" withBorder p="xl">
          <Grid grow gutter="sm">
            <Grid.Col span={mobile ? 12 : 6}>
              <Stack h="auto" bg="var(--mantine-color-body)">
                <Paper shadow="xl" radius="md" withBorder p="xl">
                  <Title order={4} size="1.25rem">
                    Author
                  </Title>
                  <Text size="md">{post.author}</Text>
                </Paper>
                <Paper shadow="xl" radius="md" withBorder p="xl">
                  <Title order={4} size="1.25rem">
                    Title
                  </Title>
                  <Text size="md">{post.title}</Text>
                </Paper>
                <Paper shadow="xl" radius="md" withBorder p="xl">
                  <Title order={4} size="1.25rem">
                    Category
                  </Title>
                  <Text size="md">{post.category}</Text>
                </Paper>
                <Paper shadow="xl" radius="md" withBorder p="xl">
                  <Title order={4} size="1.25rem">
                    Content
                  </Title>
                  <Text size="md">{post.content}</Text>
                </Paper>
              </Stack>
            </Grid.Col>

            <Grid.Col span={mobile ? 12 : 6}>
              <Paper shadow="xl" radius="md" withBorder p="xl">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    radius="md"
                    fit="contain"
                    style={{ width: "100%" }}
                  />
                )}
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
  const { id } = params;
  try {
    const response = await fetch(`${DOMAIN}/api/posts/${id}`);

    if (!response.ok) {
      throw new Error("Failed to fetch post details");
    }

    const postDetails = await response.json();
    return postDetails;
  } catch (error) {
    console.error("Error fetching post details:", error);
    return null;
  }
};

export default PostDetailsPage;
