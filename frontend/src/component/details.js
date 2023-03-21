import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Details = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const data = location.state;

    const handleDelete = () => {
        axios.delete(`http://localhost:3000/delete/${data?._id}`)
        .then((res)=>{console.log(res); navigate(-1)})
        .catch((err)=>{console.log(err)})
    }

    return (
        <>
            <div className="flex flex-col items-center mt-10" >
                <h1 className="font-weight-bold text-4xl" >Restaurent Details</h1>
            </div>
            <p>{JSON.stringify(data)}</p>
            <div className="flex flex-col items-center" >
                <table className="table-fixed border-separate border border-green-900 mt-10">

                    <tbody>
                        <tr>
                            <td className="border-r-2 border-black-900 text-2xl m-y-2 mx-2">Restaurent Name</td>
                            <td className="">
                                {data?.ShopName}
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black-900 text-2xl m-y-2 mx-2">Restaurent Type</td>
                            <td className="">
                                {data?.Type_Of_Restaurent}
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black-900 text-2xl m-y-2 mx-2">Open at</td>
                            <td className="">
                                {data?.Timing?.openAt}
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black-900 text-2xl m-y-2 mx-2">Close</td>
                            <td className="">
                                {data?.Timing?.closeAt}
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black-900 text-2xl m-y-2">City</td>
                            <td className="">
                                {data?.City}
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black-900 text-2xl m-y-2">State</td>
                            <td className="">
                                {data?.State}
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black-900 text-2xl m-y-2">Pincode</td>
                            <td className="">
                                {data?.Pincode}
                            </td>
                        </tr>
                        <tr>
                            <td className="border-r-2 border-black-900 text-2xl m-y-2">Contact</td>
                            <td className="">
                                {data?.Contact}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex" >
                    <div className="flex flex-col w-full items-center mt-10 mr-2" >
                        <button onClick={() => { navigate("/update", { state: data?._id }) }} type="button" className=" ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-1 border-green-900 hover:border-transparent rounded-full">
                            Update
                        </button>
                    </div>
                    <div className="flex flex-col w-full items-center mt-10 ml-2" >
                        <button onClick={() => {handleDelete()}} type="button" className=" ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-1 border-green-900 hover:border-transparent rounded-full">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Details;