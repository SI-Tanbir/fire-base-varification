import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova'
import auth from './firebase/firebase.config'

function App() {

    const [loginError,setLoginError]= useState('');
const formHandle =(e)=>{


    e.preventDefault();

    const email=e.target.email.value;
    const password=e.target.password.value;
    console.log(email);
    console.log(password);
    

    createUserWithEmailAndPassword(auth,email,password)
    .then((result) => {

        const user =result.user;
        console.log(user);

    })
    .catch(error=>{
        console.error(error.code);
        console.error(error.message);
        setLoginError(error.message);

       
    })


}


  return (
    <>


<div className="relative flex flex-col justify-center h-screen overflow-hidden">
    <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-purple-700">Login</h1>
        <form className="space-y-4" onSubmit={formHandle}>
            <div>
                <label className="label">
                    <span className="text-base label-text">Email</span>
                </label>
                <input type="text" placeholder="Email Address" className="w-full input input-bordered input-primary" name='email' required />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="password" placeholder="Enter Password" className="w-full input input-bordered input-primary" name='password' required/>
            </div>
            <a href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</a>
            <div>
               <input type="submit" value="submit" className='btn btn-primary' />
            </div>
        </form>
        { loginError && <p>{loginError}</p>}
    </div>
</div>

    </>
  )
}

export default App
