import axios from 'axios'

export const fetchApiData = async()=>{
    const response = await axios.get('https://jsonplaceholder.typicoder.com/posts/1')
    return response.data
}