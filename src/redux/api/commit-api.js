import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'https://api.github.com/',
  headers: {'Content-Type': 'application/json'}
});

export const getAllCommits = async (branch_sha) => {
	try {
		const payload = await axios.get(`repos/kdrivas/streamlit_app/commits?sha=${branch_sha}`)
		return payload.data
	} catch(err) {
		return console.error(err)
	}
}