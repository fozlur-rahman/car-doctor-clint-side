import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingItem from "./BookingItem";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";



const MyBooking = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/booking?email=${user.email}`;

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data);
                }
                else {
                    logOut();
                    navigate('/');
                }
            })
    }, [])
    const handleDelete = (id) => {

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
                fetch(`http://localhost:5000/booking/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = bookings.filter(d => d._id != id);
                            setBookings(remaining);
                        }
                        Swal.fire(
                            'Deleted!',
                            'success'
                        )
                    })
            }
        })
    }

    // update status 
    const handleUpdateStatus = (id) => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'confirm' }),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.updatedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBooking = [updated, ...remaining];
                    setBookings(newBooking);
                }
            })
    }
    return (

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        bookings.map(booking => <BookingItem
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleUpdateStatus={handleUpdateStatus}
                        ></BookingItem>)
                    }
                </tbody>
            </table>
        </div>


        // <div className="my-10">
        //     {
        //         bookings.map(booking => <BookingItem
        //             key={booking._id}
        //             booking={booking}
        //         ></BookingItem>)
        //     }
        // </div>
    );
};

export default MyBooking;