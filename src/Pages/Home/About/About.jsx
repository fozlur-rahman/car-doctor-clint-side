import aboutPerson from '../../../assets/images/about_us/person.jpg'
import aboutParts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="content flex ">
                <div className=' w-1/2'>
                    <div className='w-4/5 relative'>
                        <img className='w-[460px] h-[470px] overflow-hidden rounded-lg' src={aboutPerson} alt="" />
                        <img className='w-80 h-80 z-10 absolute bottom-[-84px] right-[-60px] border-8 border-white rounded-lg' src={aboutParts} alt="" />
                    </div>
                </div>
                <div className="text-center lg:text-left w-1/2 space-y-10">
                    <h4>About Us</h4>
                    <h1 className="w-96 text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className=" w-4/5 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. </p>
                    <p className=' w-4/5'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className='btn bg-[#FF3811] text-white '>Get More Info</button>
                </div>
            </div>
        </div >
    );
};

export default About;