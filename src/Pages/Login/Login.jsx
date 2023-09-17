import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';
import { FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [error, setError] = useState(null);
    const { logIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // create email and pass 
    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then((result) => {
                console.log(result.user);
                navigate(from, { replace: true });
                form.reset();
            })
            .catch((error) => {
                setError('Invalid email or password');
                console.log(error.message);
            })
    }

    // google sign 
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // =================================
    return (
        <div className=" min-h-screen w-full m-0 pt-10">
            <div className="hero-content p-0 w-full flex-col lg:flex-row gap-20">
                <div className="w-1/2 text-center lg:text-left ">
                    <img className='w-[460px] ms-auto' src={login} alt="" />
                </div>


                {/* form  */}
                <div className="w-[600px] card flex-shrink-0 border  p-20 ms-auto">
                    <h1 className='text-center text-4xl font-bold mb-10'>Login</h1>
                    <form onSubmit={handleLogIn} className='space-y-6'>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" id='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" id='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white">Login</button>
                        </div>
                    </form>
                    <small className='text-red-500'>{error}</small>
                    <div className='text-center mt-6 space-y-6'>
                        <p>Or Sign In with</p>
                        <div className='flex w-1/2 mx-auto justify-between gap-5'>
                            <Link onClick={handleGoogleSignIn} className='w-12 btn btn-circle'><FaGoogle className='text-2xl'></FaGoogle></Link>
                            <Link className='w-12 btn btn-circle'><FaLinkedin className='text-2xl'></FaLinkedin></Link>
                            <Link className='w-12 btn btn-circle'><FaFacebook className='text-2xl'></FaFacebook></Link>
                        </div>
                        <p>Have no an account? <Link className='btn btn-link' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;