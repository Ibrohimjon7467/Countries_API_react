import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
  
function SingleCountry() {
    const { country } = useParams()
    const url = 'https://restcountries.com/v3.1/name/' + country
    const { data, isPending, error } = useFetch(url)

    console.log(data)
  return (
    <div>{country}</div>
  )
}

export default SingleCountry