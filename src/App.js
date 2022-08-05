import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import ProductDemo from './components/ProductDemo'
import Products from './components/Products'
import Contact from './components/Contact'
import DemoContainer from './components/DemoContainer'
import Graphs from './components/Graphs'
import Settings from './components/Settings'
import Pricing from './components/Pricing'
import Rooms from './components/Rooms'
import CalendarView from './components/CalendarView'
import LoggedOut from './components/LoggedOut'


function App() {

  // NOTE delete this user object when you add the aws code for authentication
  const user = {
    attributes: {
      sub: "db600e48-b353-453b-a02f-dd66307a22fc",
      username: "username",
    }
  }

  return (
        <main>     
          <BrowserRouter>
             
            {/* <div className="absolute top-0 fixed right-0 p-2 bg-indigo-900 text-white text-sm">
              <button className="border border-2 rounded items-center px-3" onClick={signOut}><h3>Sign out</h3></button>
            </div> */}
          
          <Switch>
           <Route exact path="/" component={LandingPage}/>
           <Route path="/demo" component={ProductDemo} />
           <Route path="/products" component={Products} />
           <Route path="/contact" component={Contact} />
           <Route path="/logout" component={LoggedOut} />
          <Route path="/home">
            <Home user={user} signOut={signOut}/>
          </Route>
           {/* <Route path="/home" component={Home} user={user} signOut={signOut}/> */}
           <Route path="/demo_container" component={DemoContainer} />
           <Route path="/settings">
            <Settings user={user}/>
           </Route>
           {/* <Route path="/settings" component={Settings} user={user}/> */}
           <Route path="/graphs">
             <Graphs user={user}/>
           </Route>
           {/* <Route path="/graphs" component={Graphs} /> */}
           <Route path="/pricing" component={Pricing} />
           <Route path="/rooms">
             <Rooms user={user}/>
           </Route>
           {/* <Route path="/rooms" component={Rooms} /> */}
           {/* <Route path="/rooms-/:slug" component={...} /> */}
           
           {/* <Route path="/calendar" component={CalendarView} /> */}
           <Route path="/calendar">
             <CalendarView user={user}/>
           </Route>
          </Switch>
          </BrowserRouter>
        </main>
      )
}

export default App;
