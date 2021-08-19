import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'https://api.github.com/',
  headers: {'Content-Type': 'application/json'}
});

export const getAllBranches = async () => {
	try {
		const payload = await axios.get('repos/kdrivas/streamlit_app/branches')
		return payload.data
	} catch(err) {
		return console.error(err)
	}
}