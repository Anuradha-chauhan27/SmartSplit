import React from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/Inputs/input';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from '../../utils/apiPaths';
const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  // handle login form submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    }
    
    if(password.length < 8){
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");

    //Login API Call
    try{
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
        email,
        password,
      });
      const {token, user} = response.data;
      if(token){
        localStorage.setItem("token",token);
        navigate("/dashboard");
      }
    }catch(error){
      if(error.response && error.response.data.message){
        setError(error.response.data.message);
      } else {
        setError("Sometime went wrong. Please try Again");
      }
    }
  }

  return (
    <AuthLayout>
        <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">Please enter your details to logIn.</p>

        <form onSubmit={handleLogin} >
          <Input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text" 
          label="Email Address"
          placeholder="abc@example.com" 
          className="mb-4" 
          
          />

          <Input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          label="Password"
          placeholder="Min 8 characters" 
          className="mb-4" 
          
          />

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          <button type="submit" className="btn-primary">LogIn</button>

          <p className="text-[13px] text-slate-800 mt-3">
            Don't have an account? {" "} <Link to="/signup" className="font-medium text-purple-500 underline">SignUp</Link>
          </p>
    
          </form>
        </div>
        
   </AuthLayout>
  );
};

export default Login ;