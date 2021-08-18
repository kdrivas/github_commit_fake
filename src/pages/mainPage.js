import Commit from "../components/Commit/Commit";
import Navbar from "../components/NavBar/Navbar";

const branches = ['hola', 'mundo']
const title = 'hola'
const user = 'mundo'
const daysBefore = 20
const sha = 'lalalaladsadas'

function MainPage() {
  return (
    <div className="App">
			<Navbar branches={branches}/>
      <Commit title={title} user={user} daysBefore={daysBefore} sha={sha}/>
    </div>
  );
}

export default MainPage;
