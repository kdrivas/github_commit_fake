import React from 'react';
import AppFrame from "./components/AppFrame/AppFrame";
import GroupCommit from "./components/GroupCommit/GroupCommit";
import { Provider } from 'react-redux'
import store from './redux/store'

const App = props => {
	return (
		<Provider store={store}>
			<AppFrame>
				<GroupCommit/>
			</AppFrame>
		</Provider>
	);
};


export default App;