import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import Input from '../../components/Inputs/input';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import ProfilePhotoSelector from '../../components/Inputs/profilePhotoSelector';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = null;

    if(!fullName){
      setError("Please enter your full name.");
      return;
    }
    
    if(!validateEmail(email)){
      setError("Please enter a valid email address.");
      return;
    } 

    if(password.length < 8){
      setError("Password must be at least 8 characters long.");
      return;
    }

    setError("");   

  }

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.</p>

        <form onSubmit={handleSignUp} >

          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              label="Full Name"
              placeholder="John Doe"
              className="mb-4"
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              label="Email Address"
              placeholder="abc@example.com"
              className="mb-4"

            />
            <div className="col-span-2">
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Password"
                placeholder="Min 8 characters"
                className="mb-4"

              />
            </div>
          </div>
          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
          <button type="submit" className="btn-primary">SignUp</button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{" "} <Link to="/login" className="font-medium text-purple-500 underline">LogIn</Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;