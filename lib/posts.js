import graphqlRequest from "./graphqlRequest";

export const getAllPosts = async () => {
  const query = {
    query: `query NewQuery {
  posts {
    nodes {
      title
      excerpt
      id
      categories {
        nodes {
          slug
        }
      }
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  const allPosts = resJson.data.posts;

  return allPosts;
};
