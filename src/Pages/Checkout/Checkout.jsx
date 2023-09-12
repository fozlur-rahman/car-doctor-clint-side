import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const loadedItem = useLoaderData();
    console.log(loadedItem);
    return (
        <div>

        </div>
    );
};

export default Checkout;