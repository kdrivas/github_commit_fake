import React from 'react';
import AppFrame from "../components/AppFrame/AppFrame";
import GroupCommit from "../components/GroupCommit/GroupCommit";
import { Provider } from 'react-redux'

const data = [
	{
			"sha": "664616d23ef901c3ed2a53f7e395d28c746735e1",
			"node_id": "MDY6Q29tbWl0Mzg1MTEwMjYwOjY2NDYxNmQyM2VmOTAxYzNlZDJhNTNmN2UzOTVkMjhjNzQ2NzM1ZTE=",
			"commit": {
					"author": {
							"name": "Kervy Rivas Rojas",
							"email": "k.rivas@pucp.edu.pe",
							"date": "2021-07-22T03:50:35Z"
					},
					"committer": {
							"name": "GitHub",
							"email": "noreply@github.com",
							"date": "2021-07-22T03:50:35Z"
					},
					"message": "Update docker-compose.yml",
					"tree": {
							"sha": "b7251c5c91e979fff9670db80111012a96a74800",
							"url": "https://api.github.com/repos/kdrivas/streamlit_app/git/trees/b7251c5c91e979fff9670db80111012a96a74800"
					},
					"url": "https://api.github.com/repos/kdrivas/streamlit_app/git/commits/664616d23ef901c3ed2a53f7e395d28c746735e1",
					"comment_count": 0,
					"verification": {
							"verified": true,
							"reason": "valid",
							"signature": "-----BEGIN PGP SIGNATURE-----\n\nwsBcBAABCAAQBQJg+OsLCRBK7hj4Ov3rIwAA7+kIAFbChGJpMzKYwWsuC+aNGbt9\nEMZNK+oJx/cF2Aj7kEcG5eM6DxxJf685e4wmXnwxemVD0rYjQOpKfpPPPZ/iTQR3\n6D2Rzo9DV1NgGit19aiFe5IKQu2kUjdspBau1kSrWxcjQDUV/SN5lb4UppjL85aj\nXOTts0feDgiC8bONNFVZyDQ4k5RAf7kPl+1t52dGcf4XqB7Avolj78NBGDDa3QVq\nhf6AVVgzEaiH1ytoRZ1rBgCZugIzHCs6ZndAgs66dhdKyiWjnwviA1zJhJRHZdoJ\ncHFyr+QifBA1wN6s73adw6q/1TEv/HDkSFJ03Sz0DUqj0kjSHxDHv5NDUHopL2Y=\n=jKsv\n-----END PGP SIGNATURE-----\n",
							"payload": "tree b7251c5c91e979fff9670db80111012a96a74800\nparent ee31ff98f5c1791b443a67797f9d4a6629e1ec72\nauthor Kervy Rivas Rojas <k.rivas@pucp.edu.pe> 1626925835 -0500\ncommitter GitHub <noreply@github.com> 1626925835 -0500\n\nUpdate docker-compose.yml"
					}
			},
			"url": "https://api.github.com/repos/kdrivas/streamlit_app/commits/664616d23ef901c3ed2a53f7e395d28c746735e1",
			"html_url": "https://github.com/kdrivas/streamlit_app/commit/664616d23ef901c3ed2a53f7e395d28c746735e1",
			"comments_url": "https://api.github.com/repos/kdrivas/streamlit_app/commits/664616d23ef901c3ed2a53f7e395d28c746735e1/comments",
			"author": {
					"login": "kdrivas",
					"id": 19364805,
					"node_id": "MDQ6VXNlcjE5MzY0ODA1",
					"avatar_url": "https://avatars.githubusercontent.com/u/19364805?v=4",
					"gravatar_id": "",
					"url": "https://api.github.com/users/kdrivas",
					"html_url": "https://github.com/kdrivas",
					"followers_url": "https://api.github.com/users/kdrivas/followers",
					"following_url": "https://api.github.com/users/kdrivas/following{/other_user}",
					"gists_url": "https://api.github.com/users/kdrivas/gists{/gist_id}",
					"starred_url": "https://api.github.com/users/kdrivas/starred{/owner}{/repo}",
					"subscriptions_url": "https://api.github.com/users/kdrivas/subscriptions",
					"organizations_url": "https://api.github.com/users/kdrivas/orgs",
					"repos_url": "https://api.github.com/users/kdrivas/repos",
					"events_url": "https://api.github.com/users/kdrivas/events{/privacy}",
					"received_events_url": "https://api.github.com/users/kdrivas/received_events",
					"type": "User",
					"site_admin": false
			},
			"committer": {
					"login": "web-flow",
					"id": 19864447,
					"node_id": "MDQ6VXNlcjE5ODY0NDQ3",
					"avatar_url": "https://avatars.githubusercontent.com/u/19864447?v=4",
					"gravatar_id": "",
					"url": "https://api.github.com/users/web-flow",
					"html_url": "https://github.com/web-flow",
					"followers_url": "https://api.github.com/users/web-flow/followers",
					"following_url": "https://api.github.com/users/web-flow/following{/other_user}",
					"gists_url": "https://api.github.com/users/web-flow/gists{/gist_id}",
					"starred_url": "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
					"subscriptions_url": "https://api.github.com/users/web-flow/subscriptions",
					"organizations_url": "https://api.github.com/users/web-flow/orgs",
					"repos_url": "https://api.github.com/users/web-flow/repos",
					"events_url": "https://api.github.com/users/web-flow/events{/privacy}",
					"received_events_url": "https://api.github.com/users/web-flow/received_events",
					"type": "User",
					"site_admin": false
			},
			"parents": [
					{
							"sha": "ee31ff98f5c1791b443a67797f9d4a6629e1ec72",
							"url": "https://api.github.com/repos/kdrivas/streamlit_app/commits/ee31ff98f5c1791b443a67797f9d4a6629e1ec72",
							"html_url": "https://github.com/kdrivas/streamlit_app/commit/ee31ff98f5c1791b443a67797f9d4a6629e1ec72"
					}
			]
	},
	{
			"sha": "ee31ff98f5c1791b443a67797f9d4a6629e1ec72",
			"node_id": "MDY6Q29tbWl0Mzg1MTEwMjYwOmVlMzFmZjk4ZjVjMTc5MWI0NDNhNjc3OTdmOWQ0YTY2MjllMWVjNzI=",
			"commit": {
					"author": {
							"name": "kervyRivas",
							"email": "a20112128@pucp.pe",
							"date": "2021-07-21T03:46:05Z"
					},
					"committer": {
							"name": "kervyRivas",
							"email": "a20112128@pucp.pe",
							"date": "2021-07-21T03:46:05Z"
					},
					"message": "Update readme",
					"tree": {
							"sha": "f0d4e3acc8eba17a1257b7521e088dff203024dc",
							"url": "https://api.github.com/repos/kdrivas/streamlit_app/git/trees/f0d4e3acc8eba17a1257b7521e088dff203024dc"
					},
					"url": "https://api.github.com/repos/kdrivas/streamlit_app/git/commits/ee31ff98f5c1791b443a67797f9d4a6629e1ec72",
					"comment_count": 0,
					"verification": {
							"verified": false,
							"reason": "unsigned",
							"signature": null,
							"payload": null
					}
			},
			"url": "https://api.github.com/repos/kdrivas/streamlit_app/commits/ee31ff98f5c1791b443a67797f9d4a6629e1ec72",
			"html_url": "https://github.com/kdrivas/streamlit_app/commit/ee31ff98f5c1791b443a67797f9d4a6629e1ec72",
			"comments_url": "https://api.github.com/repos/kdrivas/streamlit_app/commits/ee31ff98f5c1791b443a67797f9d4a6629e1ec72/comments",
			"author": {
					"login": "kdrivas",
					"id": 19364805,
					"node_id": "MDQ6VXNlcjE5MzY0ODA1",
					"avatar_url": "https://avatars.githubusercontent.com/u/19364805?v=4",
					"gravatar_id": "",
					"url": "https://api.github.com/users/kdrivas",
					"html_url": "https://github.com/kdrivas",
					"followers_url": "https://api.github.com/users/kdrivas/followers",
					"following_url": "https://api.github.com/users/kdrivas/following{/other_user}",
					"gists_url": "https://api.github.com/users/kdrivas/gists{/gist_id}",
					"starred_url": "https://api.github.com/users/kdrivas/starred{/owner}{/repo}",
					"subscriptions_url": "https://api.github.com/users/kdrivas/subscriptions",
					"organizations_url": "https://api.github.com/users/kdrivas/orgs",
					"repos_url": "https://api.github.com/users/kdrivas/repos",
					"events_url": "https://api.github.com/users/kdrivas/events{/privacy}",
					"received_events_url": "https://api.github.com/users/kdrivas/received_events",
					"type": "User",
					"site_admin": false
			},
			"committer": {
					"login": "kdrivas",
					"id": 19364805,
					"node_id": "MDQ6VXNlcjE5MzY0ODA1",
					"avatar_url": "https://avatars.githubusercontent.com/u/19364805?v=4",
					"gravatar_id": "",
					"url": "https://api.github.com/users/kdrivas",
					"html_url": "https://github.com/kdrivas",
					"followers_url": "https://api.github.com/users/kdrivas/followers",
					"following_url": "https://api.github.com/users/kdrivas/following{/other_user}",
					"gists_url": "https://api.github.com/users/kdrivas/gists{/gist_id}",
					"starred_url": "https://api.github.com/users/kdrivas/starred{/owner}{/repo}",
					"subscriptions_url": "https://api.github.com/users/kdrivas/subscriptions",
					"organizations_url": "https://api.github.com/users/kdrivas/orgs",
					"repos_url": "https://api.github.com/users/kdrivas/repos",
					"events_url": "https://api.github.com/users/kdrivas/events{/privacy}",
					"received_events_url": "https://api.github.com/users/kdrivas/received_events",
					"type": "User",
					"site_admin": false
			},
			"parents": [
					{
							"sha": "51113751de6f8598ce55862f4ee178f8a5e7aedb",
							"url": "https://api.github.com/repos/kdrivas/streamlit_app/commits/51113751de6f8598ce55862f4ee178f8a5e7aedb",
							"html_url": "https://github.com/kdrivas/streamlit_app/commit/51113751de6f8598ce55862f4ee178f8a5e7aedb"
					}
			]
	},
]

const App = props => {
	return (
		<Provider store={store}>
			<AppFrame>
				<GroupCommit/>
				<GroupCommit/>
			</AppFrame>
		</Provider>
	);
};


export default App;