import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Listing from 'pages/Listing';
import Form from 'pages/Form';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Listing/>}/>
        <Route path="/form">
          <Route path=":movieId" element={<Form/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
