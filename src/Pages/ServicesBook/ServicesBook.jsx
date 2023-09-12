import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const ServicesBook = () => {

    const bookService = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(bookService);

    const handleBook = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = user?.email;
        const price = form.price.value;
        const date = form.date.value;
        const order = {
            customerName: name,
            email: email,
            price,
            date,
            service: bookService?.title,
            service_id: bookService?._id,
            img: bookService?.img
        }

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Booking it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:5000/booking', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(order)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        Swal.fire(
                            'Booked!',
                            `${data.title}`,
                            'success'
                        )
                    })
            }
        })
    }
    return (
        <div className=" min-h-screen w-full m-0 pt-10">
            {/* form  */}
            <div className="w-[800px] card flex-shrink-0 border  p-20 ms-auto">
                <h1 className='text-center text-4xl font-bold mb-10'>{bookService?.title}</h1>
                <form onSubmit={handleBook} className='space-y-6'>
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" id='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" id='email' placeholder="Email" defaultValue={user?.email} className="input input-bordered" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Prices</span>
                            </label>
                            <input type="number" id='price' placeholder="Price: $" defaultValue={bookService?.price} className="input input-bordered" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" id='date' placeholder="" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] text-white">Login</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ServicesBook;