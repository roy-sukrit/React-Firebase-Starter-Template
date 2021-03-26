import React,{useEffect,lazy,Suspense} from "react";
import {ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route } from "react-router-dom";
import {auth} from './firebase'
import {useDispatch} from 'react-redux'
import { Spin, Space } from 'antd';
const Home = lazy(()=> import( "./pages/Home"));
const Login = lazy(()=> import( "./pages/auth/Login"));
const Register = lazy(()=> import( "./pages/auth/Register"));
const Header = lazy(()=> import( "./components/nav/Header"));
const RegisterComplete = lazy(()=> import( "./pages/auth/RegisterComplete"));
const ForgotPassword = lazy(()=> import( './pages/auth/ForgotPassword'))
const UserRoute = lazy(()=> import( './components/routes/UserRoute'))
const Password = lazy(()=> import( './pages/user/Password'))
const History = lazy(()=> import( './pages/user/History'))



function App() {
  let dispatch = useDispatch();


  useEffect(() => {
    //getting the active user status
    const unsubscribe = auth.onAuthStateChanged(async (user)=>{
      if(user){        
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name:user.displayName,
                email:user.email,
              },
            });         
         
      }
    })
    //stop after getting once
    return () => unsubscribe();
    
  }, [])


  return (
    <Suspense fallback={
      <div className="col text-center d-flex justify-content-center p-5 ">
      <br/>
      <div className="col p-200">
        <Space size="middle">   
            <Spin size="large" />
          </Space>
      </div>
      </div>}>
      <Header/>

      <div className="col  d-flex justify-content-around p-5 ">
  
  </div>
  
   
  
    <ToastContainer />

    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/register/complete" component={RegisterComplete} />
      <Route exact path="/forgot/password" component={ForgotPassword} />'

      <UserRoute exact path="/user/history" component={History} />

      <UserRoute exact path="/user/password" component={Password} />
    </Switch>
    </Suspense>
  );
}

export default App;
