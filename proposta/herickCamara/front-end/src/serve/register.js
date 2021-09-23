import {http} from './confg'

export default {
    lista: ()=> http.get('/api')
}