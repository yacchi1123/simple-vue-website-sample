import axios from 'axios'
import constants from '../common/constants'

export const sampleApi = axios.create({
  baseURL: constants.sampleApi.url,
  timeout: constants.sampleApi.timeout
})
