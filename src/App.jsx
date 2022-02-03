import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Transactions from './components/Transactions/Transactions';
import LoginForm from './components/Login/Login';

function App() {

  return (
    <>
        <Router>
          <Routes>
              <Route exact path="/transactions" element={<Transactions/>} />
              <Route exact path="/login" element={<LoginForm/>} />
              <Route exact path="/" element={<HomePage/>} />
            </Routes>
        </Router>
    </>

  )
}

export default App
