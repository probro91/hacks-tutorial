import NavBar from "./components/NavBar"
import Resume from "./pages/Resume"
import Home from "./pages/Home"
import ContactMe from "./pages/ContactMe"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/resume" element = {<Resume />} />
          <Route path = "/contactme" element = {<ContactMe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
