import defaultAxios from 'axios'
import {
	NAME_REPO,
	NAME_USER
} from './../../constants/api'

const axios = defaultAxios.create({
  baseURL: 'https://api.github.com/',
  headers: {'Content-Type': 'application/json'}
});

export const getAllBranches = async () => {
	try {
		const payload = await axios.get(`repos/${NAME_USER}/${NAME_REPO}/branches`)
		return payload.data
	} catch(err) {
		return console.error(err)
	}
}