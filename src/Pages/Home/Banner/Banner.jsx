import banner1 from '../../../assets/images/banner/1.jpg';
import banner2 from '../../../assets/images/banner/2.jpg';
import banner3 from '../../../assets/images/banner/3.jpg';
import banner4 from '../../../assets/images/banner/4.jpg';
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mt-10" >
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className="h-full absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 ">
                    <div className='w-1/3 text-white space-y-10 m-24' >
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn bg-[#FF3811] border-0 me-10 text-white'>Discover More</button>
                            <button className='btn btn-outline  text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-16 bottom-5">
                    <a href="#slide4" className="btn btn-circle bg-[rgba(255, 255, 255, 0.20] hover:bg-[#FF3811] border-0 me-10">❮</a>
                    <a href="#slide2" className="btn btn-circle  bg-[rgba(255, 255, 255, 0.20] hover:bg-[#FF3811] border-0">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="h-full absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 ">
                    <div className='w-1/3 text-white space-y-7 m-24' >
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-error me-10 text-white'>Discover More</button>
                            <button className='btn btn-outline  text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-16 bottom-5">
                    <a href="#slide1" className="btn btn-circle btn-outline hover:bg-red-600 me-10">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="h-full absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 ">
                    <div className='w-1/3 text-white space-y-7 m-24' >
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-error me-10 text-white'>Discover More</button>
                            <button className='btn btn-outline  text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-16 bottom-5">
                    <a href="#slide2" className="btn btn-circle btn-outline hover:bg-red-600 me-10">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="h-full absolute flex bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] top-0 ">
                    <div className='w-1/3 text-white space-y-7 m-24' >
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className='btn btn-error me-10 text-white'>Discover More</button>
                            <button className='btn btn-outline  text-white'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex  transform -translate-y-1/2  right-16 bottom-5">
                    <a href="#slide3" className="btn btn-circle btn-outline hover:bg-red-600 me-10">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;




