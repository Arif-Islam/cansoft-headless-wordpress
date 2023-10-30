import graphqlRequest from "./graphqlRequest";

export const getMenu = async () => {
  const query = {
    query: `query NewQuery {
  menuItems(where: {location: MENU_1, parentId: "0"}) {
    nodes {
      label
      id
      url
      childItems {
        nodes {
          label
          id
          url
        }
      }
    }
  }
}`,
  };

  const resJson = await graphqlRequest(query);
  const menu = resJson.data.menuItems;

  return menu;
};
