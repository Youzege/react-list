
export const GET = async (url: string, name: string) => {
  const fetchRes = fetch(url)
  return (await fetchRes).json
}
export const POST = async (
  url: string,
  name: string,
  payload: any,
  option?: any
) => {
  console.log(`POST { ${name} }`)

  const fetchPostRes = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    },
    ...option
  })

  return fetchPostRes.json()
}
