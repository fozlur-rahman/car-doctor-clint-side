import { FaRegTrashAlt } from "react-icons/fa";


const BookingItem = ({ booking, handleDelete, handleUpdateStatus }) => {
    console.log(booking);
    const { service, img, price, date, _id, status } = booking;
    return (
        <tr className="">
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)}><FaRegTrashAlt></FaRegTrashAlt></button>

                </label>
            </th>
            <td>
                <img className="w-[100px]" src={img} alt="" />
            </td>
            <td>
                <h2 className="text-1xl font-bold">{service}</h2>
            </td>
            <td>
                <p className="font-bold">${price}</p>
            </td>
            <td>{date}</td>

            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleUpdateStatus(_id)} className="btn btn-ghost btn-xs">Confrim</button>
                }

            </th>
        </tr>
    );
};

export default BookingItem;