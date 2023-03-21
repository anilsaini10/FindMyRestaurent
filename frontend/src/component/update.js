import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateForm = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const unique_Id = location.state;
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [contact, setContact] = useState();
    const [restaurentName, setRestaurentName] = useState();
    const [pincode, setPincode] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [typeOfRestaurent, setTypeOfRestaurent] = useState();
    const [openAt, setOpenAt] = useState();
    const [closeAt, setCloseAt] = useState();
    const [imageUrl, setImageUrl] = useState();

    const handleForm = (e) => {
        e.preventDefault();
        const input_data = {
            Name: name,
            Address: address,
            Contact: contact,
            ShopName: restaurentName,
            Type_Of_Restaurent: typeOfRestaurent,
            Timing: { openAt: openAt, closeAt: closeAt },
            Image: imageUrl,
            Pincode: pincode,
            City: city,
            State: state,
        };
        axios.patch(`http://localhost:3000/update/${unique_Id}`, input_data)
            .then((res) => {
                navigate(-1);
            })
            .catch((err) => console.warn("Error", err));

    };

    return (
        <>
            <div className="flex flex-col items-center w-full mt-10" >
                <h1 className="text-4xl" >Update Your Details</h1>
            </div>
            <div className="w-full flex justify-center mb-10" onSubmit={(e) => { handleForm(e) }} >
                <div className="border-x-4 border-x-indigo-500 border-y-4 border-y-[#ea580c] p-2 mt-10 b self-center" >
                    <form class="w-full max-w-lg bg-white" onSubmit={(e) => { handleForm(e) }} >
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Full Name:
                                </label>
                                <input onChange={(event) => { setName(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Address:
                                </label>
                                <input onChange={(event) => { setAddress(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Contact:
                                </label>
                                <input onChange={(event) => { setContact(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Restaurent Name:
                                </label>
                                <input onChange={(event) => { setRestaurentName(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-2">
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    City:
                                </label>
                                <input onChange={(event) => { setCity(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Albuquerque" />
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    State:
                                </label>
                                <input onChange={(event) => { setState(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Albuquerque" />
                            </div>
                            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                                    Pincode:
                                </label>
                                <input onChange={(event) => { setPincode(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="453674" />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Types of Restaurent:
                                </label>
                                <select onChange={(event) => { setTypeOfRestaurent(event.target.value) }} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="">Select</option>
                                    <option value="Veg">Pure Veg</option>
                                    <option value="Non-Veg">Non-Veg</option>
                                    <option value="Both">Both</option>
                                </select>
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Image Url:
                                </label>
                                <input onChange={(event) => { setImageUrl(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
                            </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 mb-6">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    Opens at:
                                </label>
                                <input onChange={(event) => { setOpenAt(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="time" placeholder="" />
                                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Close At:
                                </label>
                                <input onChange={(event) => { setCloseAt(event.target.value) }} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="time" placeholder="" />
                            </div>
                        </div>

                        <div className="flex flex-col w-full items-center mb-4" >
                            <button type="submit" className=" ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-1 border-blue-900 hover:border-transparent rounded-full">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default UpdateForm;