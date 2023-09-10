import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json').then(res => res.json()).then(data => setServices(data));
    }, [])
    return (
        <div className="my-10">
            <div className="text-center space-y-5 w-1/2 mx-auto mb-14">
                <h2 className="text-xl font-bold text-[#FF3811]">Services</h2>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;