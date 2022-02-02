import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';

function App() {

  return (
    <>
        <Router>
          <Routes>
              <Route exact path="/" element={<HomePage/>} />
            </Routes>
        </Router>
    </>

  )
}

export default App
