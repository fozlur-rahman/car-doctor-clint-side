import { Link } from "react-router-dom";
import signup from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    return (
        <div className=" min-h-screen w-full m-0 pt-10">
            <div className="hero-content p-0 w-full flex-col lg:flex-row gap-20">
                <div className="w-1/2 text-center lg:text-left ">
                    <img className='w-[460px] ms-auto' src={signup} alt="" />
                </div>


                {/* form  */}
                <div className="w-[600px] card flex-shrink-0 border  p-20 ms-auto">
                    <h1 className='text-center text-4xl font-bold mb-10'>Sign Up</h1>
                    <form onSubmit={handleSingUp} className='space-y-6'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" id="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" id="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" id="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Sign Up</button>
                        </div>
                    </form>
                    <div className='text-center mt-6 space-y-6'>
                        <p>Or Sign Up with</p>
                        <div className='flex w-1/2 mx-auto justify-between gap-5'>
                            <Link className='w-12 btn btn-circle'><FaGoogle className='text-2xl'></FaGoogle></Link>
                            <Link className='w-12 btn btn-circle'><FaLinkedin className='text-2xl'></FaLinkedin></Link>
                            <Link className='w-12 btn btn-circle'><FaFacebook className='text-2xl'></FaFacebook></Link>
                        </div>
                        <p>Already have an account? <Link className="btn btn-link" to='/login'>Login Now</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;