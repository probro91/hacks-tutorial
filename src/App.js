import NavBar from "./components/NavBar"
import Resume from "./pages/Resume"
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import "./index.css"

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/resume" element = {<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
