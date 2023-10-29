export default async function graphqlRequest(query) {
  const url = "https://arifultest.csoft.ca/graphql";
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify(query),
  });

  const resJson = await res.json();
  return resJson;
}
