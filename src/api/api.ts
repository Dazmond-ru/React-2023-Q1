export const fetchData = async (search = '') => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?name=${search}`)
  const data = await response.json()
  return data.results?.slice(0, 10)
}
