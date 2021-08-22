import defaultAxios from 'axios'
import {
	NAME_REPO,
	NAME_USER
} from './../../constants/api'

const axios = defaultAxios.create({
  baseURL: 'https://api.github.com/',
  headers: {'Content-Type': 'application/json'}
});

export const getAllCommits = async (branchSha, page) => {
	try {
		const payload = await axios.get(`repos/${NAME_USER}/${NAME_REPO}/commits?page=${page}&sha=${branchSha}`)
		return payload.data
	} catch(err) {
		return console.error(err)
	}
}