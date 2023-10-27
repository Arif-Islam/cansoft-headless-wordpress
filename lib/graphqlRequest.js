export default async function graphqlRequest(query) {
  // const url = "http://arifultest-ca.us.webmyway.ca/graphql";
  const url = "https://dev-headless-wordpress-demo.pantheonsite.io/graphql";
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });

  const resJson = await res.json();
  return resJson;
}
