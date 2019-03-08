import { HTTP } from './RequestType'

function query(query) {
    var path = `search/repositories?q=${query}`
    return HTTP.get(path)
}

export default {
    query
}