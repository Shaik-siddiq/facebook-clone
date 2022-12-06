
import './App.css';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';
import Feed from "./containers/Feed"
import Widgets from './containers/Widgets';
import Login from './containers/Login';
import {useStateValue} from "./context/StateProvider"
function App() {
  const [state, dispatch] = useStateValue()
  return (
    /* BEM  Nameing convention */
    <div className="app">
  {!state.user?(
    <Login /> 

  ):(<>
     {/* Header */}
     <Header />
     {/* App Body */}
     <div className="app_body">
       {/* side bar */}
       <Sidebar />
     {/* Feed */}
       <Feed />
     {/* Widgets */}
     <Widgets />
     </div>
     </>)}
    </div>
  );
}

export default App;
