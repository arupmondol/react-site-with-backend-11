import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/UserContext';

const Register = () => {
  const {createUser, singInWithGoogle } = useContext(AuthContext)
  const handleRegister = event =>{
    const form = event.value;
    const email = form.email.value;
    const password = form.password.value

    createUser(email, password) 
    .then(result => {
      const user =result.user
      console.log(user)
    })
    .catch(err => console.error(err));
  }

  const handleGoogleSingIn = () =>{
    singInWithGoogle()
      .then(result => {
        const user =  result.user;
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
    <label className="label">
      <span className="label-text">Email</span>
    </label>
    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
  </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already Registerd then Log In</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Rgister</button>
        </div>
      </form>
      <button className='btn' onClick={ handleGoogleSingIn()}>Google login</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Register;