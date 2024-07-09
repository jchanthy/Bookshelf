import Header from "../header/header.js";
import { Link } from "react-router-dom";
const Signin =() =>{
    return (
        <>
            {/* <Header /> */}
            <div className="hero bg-base-250 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold">Study Smart</h1>
                  <p className="py-6">
                    <b>Read anytime, anywhere.</b>
                  </p>
                </div>
                <div className="card bg-base-130 w-full max-w-sm shrink-0 shadow-2xl">
                  <form className="card-body">
                    <div className="form-control">
                    <h className="text-3xl font-bold">Bookshelf</h>
                    <h className="text-2xl font-bold">Sign In</h>
                    <h className="text-1xl font-bold">New here? Create a Bookshelf Account</h>
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="sichan@bookshelf.com" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="password" className="input input-bordered" required />
                      <label className="label">
                        
                        <Link to="/Forgotpassword" className="link link-hover">Forgot Password</Link>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Sign in</button>
                      <p>-------or continue with--------</p>
                      <button className="btn btn-wide">Google</button>
                      <Link to="/Signup" className="link link-hover">Sign Up</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </>
      );
}
export default Signin;