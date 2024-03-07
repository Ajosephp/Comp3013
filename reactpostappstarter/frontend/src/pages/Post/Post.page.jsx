import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { ArticleCardImage } from "../../components/misc/ArticleCardImage";
import { SimpleGrid, Container } from "@mantine/core";
import { useLoaderData } from "react-router-dom";

export const PostPage = () => {
  const posts = useLoaderData();
  return (
    <Container>
      <SimpleGrid cols={3}>
        {posts?.map((post) => (
          <ArticleCardImage key={post.title} {...post} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export const postsLoader = async () => {
  const res = await axios.get(`${DOMAIN}/api/posts`);
  console.log("I ran!");
  return res.data;
};

// axios making a phonecall
// await is pausing until we get a response - relatively new keyword
// have to mark the function with async to use the ( await ) keyword
// 
