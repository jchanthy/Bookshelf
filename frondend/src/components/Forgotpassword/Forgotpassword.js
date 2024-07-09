import Header from "../header/header.js";
import { Link } from "react-router-dom";
const Forgotpassword =() =>{
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
                    <h className="text-2xl font-bold">Forgot Password? <Link to="/Signin" className="link link-hover">Sign in</Link></h>
                        
                    <h className="text-1xl font-bold">Enter your email address you use to sign in and we'll send you an email to reset your password.</h>
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="sichan@bookshelf.com" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Forgot password</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </>
      );
}
export default Forgotpassword;