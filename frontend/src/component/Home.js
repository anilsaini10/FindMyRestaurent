import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const [data, setData] = useState();
    useEffect(() => {

        axios.get(`http://localhost:3000/`)
            .then((res) => {
                console.log(res)
                setData(res?.data?.data);
            })
            .catch((err) => console.warn("Error", err));
    }, [])

    return (
        <>
            <div className="flex flex-col w-full items-end mt-4 " >
                <button onClick={()=>{navigate("/register")}} className="mr-10 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Register
                </button>
            </div>
            <div className="flex flex-col items-center" >
                {data?.map((item, index) => {
                    return (
                        <>
                            <div className="mt-4 mb-4" onClick={()=>{ navigate("/details",{state:item}) }}>
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" alt="Sunset in the mountains" />
                                    <div className="px-6 py-4">
                                        <div className="font-bold text-xl mb-2">{item?.ShopName}</div>
                                        <p className="text-gray-700 text-base">
                                            {item?.Address}
                                        </p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item?.Name}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item?.City}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item?.State}</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    );
};

export default Home;