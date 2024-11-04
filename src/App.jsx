import './App.css'
import LogIn from './components/auth/LogIn'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ForgotPass from './components/auth/ForgotPass'
import ResetSuccess from './components/auth/ResetSuccess'
import ResetPassword from './components/auth/ResetPassword'
import ResetDone from './components/auth/ResetDone'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LogIn />} />
    <Route path='/forgotpass' element={<ForgotPass/>}></Route>
    <Route path='/resetsuccess' element={<ResetSuccess/>}></Route>
    <Route path='/reset-password' element={<ResetPassword/>}> </Route>
    <Route path='/ResetDone' element={<ResetDone/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
