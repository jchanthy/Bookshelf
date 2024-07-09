import Header from "../header/header.js";
import { Link } from "react-router-dom";
const Signup =() =>{
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
                    <h className="text-2xl font-bold">Create Account</h>
                    <h className="text-1xl font-bold">Already have a Bookshelf Account? <Link to="/Signin" className="link link-hover">Sign in</Link></h>
                        <label className="label">
                        <span className="label-text">First Name</span>
                        </label>
                        <input type="email" placeholder="sichanbookshelf" className="input input-bordered" required />
                        <label className="label">
                        <span className="label-text">Last Name</span>
                        </label>
                        <input type="email" placeholder="Vai" className="input input-bordered" required />
                        <label className="label">
                        <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="sichanbookshelf@gmail.com" className="input input-bordered" required />
                      </div>
                        <div className="form-control">
                          <label className="label">
                          <span className="label-text">Password</span>
                          </label>
                            <input type="password" placeholder="Newpassword" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                          <label className="label">
                          <span className="label-text">Confirm Password</span>
                          </label>
                          <input type="password" placeholder="Confirm password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up Account</button>
                        <Link to="/Signin" className="link link-hover">Sign in</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </>
    
      );
}

export default Signup;