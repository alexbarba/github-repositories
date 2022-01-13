const API_URL = 'https://api.github.com'

export const apiFetch = async (url: string) => {
  const res = await fetch(`${API_URL}${url}`)

  const json = await res.json()

  if (res.status !== 200) {
    throw new Error(json.message)
  }

  return json
}

const REPOS_QUERY = `
  query Repos($where: JSON, $start: Int, $limit: Int, $sort: String) {
    items(where: $where, start: $start, limit: $limit, sort: $sort) {
      id
      name
      full_name
    }
  }
`

export const searchRepositories = async ({
  query = '',
  start = 0,
  limit = 30,
  sort = ''
}) => {
  const body = JSON.stringify({
    query: REPOS_QUERY,
    variables: {
      where: {
        name: {
          contains: query
        }
      },
      start,
      limit,
      sort
    }
  })

  const res = await fetch(`${API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  })
  const data = res.json()
  console.log(data)
  return data
}
