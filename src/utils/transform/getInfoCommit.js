const getElement = (response) => {

	let userId = response.author.login
	let userName = response.commit.author.name
	let avatarUrl = response.author.avatar_url
	let message = response.commit.message
	let commitSha = response.sha
	let shaUrl = response.html_url
	let repoUrl = response.html_url.replace('/commit/', '/tree/')
	let userUrl = response.author.html_url
	let date = response.commit.author.date

	return {userId, userName, avatarUrl, message, commitSha, shaUrl, repoUrl, userUrl, date}
}

const getGroupDate = (data) => {
	let agrup = {}
	for (let i = 0; i < data.length; i++ ){
		let dateParse = new Date(data[i].date)

		let month = dateParse.getUTCMonth() + 1; 
		let day = dateParse.getUTCDate();
		let year = dateParse.getUTCFullYear();
		let shortMonth = dateParse.toLocaleString('en-us', { month: 'short' })

		if (agrup[`${shortMonth} ${day}, ${year}`]  === undefined){
			agrup[`${shortMonth} ${day}, ${year}`] = [{'userId': data[i].userId, 'userName': data[i].userName, 'avatarUrl': data[i].avatarUrl, 'message': data[i].message, 'commitSha': data[i].commitSha, 'shaUrl': data[i].shaUrl, 'repoUrl':data[i].repoUrl, 'userUrl': data[i].userUrl, 'daysBefore': `${day} ${shortMonth}`}]
		}
		else {
			agrup[`${shortMonth} ${day}, ${year}`].push({'userId': data[i].userId, 'userName': data[i].userName, 'avatarUrl': data[i].avatarUrl, 'message': data[i].message, 'commitSha': data[i].commitSha, 'shaUrl': data[i].shaUrl, 'repoUrl': data[i].repoUrl, 'userUrl': data[i].userUrl, 'daysBefore': `${day} ${shortMonth}`})
		}
	}
	return agrup
}

const getInfoCommit = (response, branch, page) => {
	let info = response.map(element => getElement(element))
	let groupedData = getGroupDate(info)
	return {[`${branch}-${page}`]: groupedData}
}

export default getInfoCommit;