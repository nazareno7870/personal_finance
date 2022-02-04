import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Transactions from './components/Transactions/Transactions';
import LoginForm from './components/Login/Login';
import CreatUser from './components/CreateUser/CreateUser';
import { UserContextProvider } from './context/userContext';
import Statistics from './components/Statistics/Statistics';

function App() {

  return (
    <>
      <UserContextProvider>
        <Router>
          <Routes>
              <Route exact path="/transactions" element={<Transactions/>} />
              <Route exact path="/login" element={<LoginForm/>} />
              <Route exact path="/signup" element={<CreatUser/>} />
              <Route exact path="/statistics" element={<Statistics/>} />
              <Route exact path="/" element={<HomePage/>} />
            </Routes>
        </Router>
      </UserContextProvider>
    </>

  )
}

export default App
