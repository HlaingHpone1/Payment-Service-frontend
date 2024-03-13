import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from "react";
import { images } from "../components/ImgObject";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NumPad from "../components/numPad/NumPad";

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const [phone, setPhone] = useState("");

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const postAPI = `http://localhost:8080/auth/verify?mail=${data.email}`;

    const submitHandler = (e) => {
        setIsLoading(true);

        e.preventDefault();

        axios
            .get(postAPI)
            .then((res) => {
                localStorage.setItem("userEmail", data.email);
                navigate("/verification");
                setIsLoading(false);
            })
            .catch((error) => console.error("Error" + error));
    };

    const receivePhoneNumber = (phoneNumber) => {
        setPhone(phoneNumber);
    };

    // console.log(phone);

    return (
        <>
            <div className="py-5">
                <div className="languages__section mb-14">
                    <div className="languages flex justify-between items-center">
                        <div className="flex justify-start space-x-4 items-center">
                            <div className="icon">
                                <img src={images.EngFlag} alt="" />
                            </div>
                            <p>Languages</p>
                        </div>
                        <div className="icon">
                            <AiOutlineClose className="size-5" />
                        </div>
                    </div>
                </div>
                <div className="talent mb-5">
                    <img
                        className="block size-32 mx-auto mb-5"
                        src={images.RegisterLogo}
                        alt=""
                    />
                    <p className="text-center text-2xl font-bold">
                        Register or Log in with your email or Phone number
                    </p>
                </div>
                <div className="form-wrap">
                    <form action="" method="POST" onSubmit={submitHandler}>
                        <div className="input-box">
                            <input
                                className="block w-3/4 mx-auto bg-transparent border-2 border-black rounded-lg py-3 px-5 focus:outline-teal-500"
                                type="email"
                                name="email"
                                id="email"
                                value={data.email}
                                onChange={inputHandler}
                                placeholder="Enter Your Email"
                            />
                            {/* <input
                            className="block w-3/4 mx-auto bg-transparent border-2 border-black rounded-lg py-3 px-5 focus:outline-teal-500"
                            type="text"
                            name="phone"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            readOnly
                            placeholder="Enter Your Phone Number"
                        /> */}
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-white w-full py-3 rounded-lg mt-5"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                {/* <NumPad receivePhoneNumber={receivePhoneNumber} /> */}
            </div>
            {isLoading && (
                <div className="loading_section absolute top-0 left-0  z-50 bg-black w-full h-full opacity-75">
                    <div
                        aria-label="Loading..."
                        role="status"
                        className="flex items-center space-x-2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                    >
                        <svg
                            className="h-20 w-20 animate-spin stroke-gray-500"
                            viewBox="0 0 256 256"
                        >
                            <line
                                x1="128"
                                y1="32"
                                x2="128"
                                y2="64"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                            <line
                                x1="195.9"
                                y1="60.1"
                                x2="173.3"
                                y2="82.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                            <line
                                x1="224"
                                y1="128"
                                x2="192"
                                y2="128"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                            <line
                                x1="195.9"
                                y1="195.9"
                                x2="173.3"
                                y2="173.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                            <line
                                x1="128"
                                y1="224"
                                x2="128"
                                y2="192"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                            <line
                                x1="60.1"
                                y1="195.9"
                                x2="82.7"
                                y2="173.3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                            <line
                                x1="32"
                                y1="128"
                                x2="64"
                                y2="128"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                            <line
                                x1="60.1"
                                y1="60.1"
                                x2="82.7"
                                y2="82.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="24"
                            ></line>
                        </svg>
                        <span className="text-4xl font-medium text-gray-500">
                            Loading...
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};

export default Register;
