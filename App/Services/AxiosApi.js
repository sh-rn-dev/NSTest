import * as axios from 'axios'

const baseUrl = 'http://api.openweathermap.org/data/2.5/'
let instance = axios.create()
instance.defaults.baseURL = baseUrl
instance.defaults.timeout = 20000

export { instance as default }
