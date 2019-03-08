import Axios from 'axios'

export const HTTP = Axios.create({
    baseURL: `https://api.github.com/`
})