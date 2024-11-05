import './App.css'
import LogIn from './components/auth/LogIn'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ForgotPass from './components/auth/ForgotPass'
import ResetSuccess from './components/auth/ResetSuccess'
import ResetPassword from './components/auth/ResetPassword'
import ResetDone from './components/auth/ResetDone'
import SignUp from './components/auth/SignUp'
import EmailVerification from './components/auth/EmailVerification'
import SucessRegistration from './components/auth/SucessRegistration'

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
    <Route path='/SignupPage' element={<SignUp/>}></Route>
    <Route path='/emailVerification' element={<EmailVerification/>}></Route>
    <Route path='/success-registration' element={<SucessRegistration/>}> </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App
