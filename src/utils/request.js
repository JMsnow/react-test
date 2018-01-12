import axios from 'axios'
import CONFIG from '@/config/config'

const requestConfig = {
	baseURL: CONFIG.HOST,
    headers: {
	    'Connection': 'Keep-Alive'
    },
	timeout: 30000
}

const $http = axios.create(requestConfig)

export default $http
