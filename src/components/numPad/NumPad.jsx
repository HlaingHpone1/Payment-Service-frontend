import { BiCheck } from "react-icons/bi";
import { FiDelete } from "react-icons/fi";
import React, { useState, useEffect } from "react";

const NumPad = ({ receivePhoneNumber }) => {
    const [data, setData] = useState({
        phone: "",
    });

    const inputHandler = (e) => {
        setData({
            ...data,
            phone: data.phone + e.target.value,
        });
    };

    // receivePhoneNumber(data.phone);

    useEffect(() => {
        // Call the function to pass the phone number to the parent component
        receivePhoneNumber(data.phone);
    }, [data.phone, receivePhoneNumber]);

    const deleteHandler = () => {
        const newPhoneNumber = data.phone.slice(0, -1); // Remove the last character
        setData({
            ...data,
            phone: newPhoneNumber,
        });
        receivePhoneNumber(data.phone);
    };
    // console.log(data);

    return (
        <div className="num-pad absolute bottom-0 left-0 w-full">
            <div className="grid grid-cols-4 gap-3 ">
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={1}
                    onClick={inputHandler}
                >
                    1
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={2}
                    onClick={inputHandler}
                >
                    2
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={3}
                    onClick={inputHandler}
                >
                    3
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={"-"}
                    onClick={inputHandler}
                >
                    -
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={4}
                    onClick={inputHandler}
                >
                    4
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={5}
                    onClick={inputHandler}
                >
                    5
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={6}
                    onClick={inputHandler}
                >
                    6
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={"+"}
                    onClick={inputHandler}
                >
                    +
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={7}
                    onClick={inputHandler}
                >
                    7
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={8}
                    onClick={inputHandler}
                >
                    8
                </button>

                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={9}
                    onClick={inputHandler}
                >
                    9
                </button>
                <button
                    className="flex justify-center items-center w-full bg-white shadow-md py-3"
                    onClick={deleteHandler}
                >
                    <FiDelete />
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={"#"}
                    onClick={inputHandler}
                >
                    #
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={0}
                    onClick={inputHandler}
                >
                    0
                </button>
                <button
                    className="block w-full bg-white shadow-md py-3"
                    value={"."}
                    onClick={inputHandler}
                >
                    .
                </button>
                <button
                    className="flex justify-center items-center w-full bg-cyan-400 shadow-md py-3"
                    value={"a"}
                    onClick={inputHandler}
                >
                    <BiCheck className="text-white" size={30} />
                </button>
            </div>
        </div>
    );
};

export default NumPad;
