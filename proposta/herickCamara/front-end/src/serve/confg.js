import axios from 'axios'
import api from '../data.json'
export const http = axios.create({
    baseURL: 'http://localhost:8081' 
})