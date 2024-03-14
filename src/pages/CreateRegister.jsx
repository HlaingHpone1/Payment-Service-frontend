import React, { useState, useEffect } from "react";
import { images } from "../components/ImgObject";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateRegister = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const date = new Date().toISOString().split("T")[0];

    const [errors, setErrors] = useState({});

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        DOB: "",
        NRC: "",
        phoneNumber: "",
        email: "",
        address: "",
    });

    const inputHandler = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value.trim(),
        });
    };

    // useEffect(() => {
    //     setData({
    //         ...data,
    //         userName: data.firstName + " " + data.lastName,
    //     });
    // }, [data.fieldName, data.lastName]);

    const calculateAge = (dob) => {
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        return age >= 18;
    };

    const api = "http://localhost:8080/users";

    const submitHandler = (e) => {
        e.preventDefault();

        const newErrors = {};

        for (const field in data) {
            if (data[field] == "") {
                newErrors[field] = `${field} is required`;
            }
        }
        console.warn(newErrors);

        let age = calculateAge(data.DOB);

        if (!age) {
            newErrors.ageRestrict = "Age must be over 18 to create Acc";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            axios
                .post(api, {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    userName: data.firstName + " " + data.lastName,
                    phoneNumber: data.phoneNumber,
                    mail: data.email,
                    address: data.address,
                    nrc: data.NRC,
                    dob: data.DOB,
                })
                .then((res) => console.log(res.data))
                .catch((err) => console.log(err));
        }
    };

    console.log(data);

    return (
        <div className="py-2">
            {/* <div className="languages__section mb-3">
                <div className="languages flex justify-between items-center">
                    <div className="flex justify-start space-x-4 items-center">
                        <div className="icon">
                            <img src={images.EngFlag} alt="" />
                        </div>
                        <p>Languages</p>
                    </div>
                    <div className="icon">
                        <button onClick={() => navigate("/register")}>
                            <AiOutlineClose className="size-5" />
                        </button>
                    </div>
                </div>
            </div> */}
            <div className="talent mb-5">
                {Object.keys(errors).length === 0 && (
                    <img
                        className="block size-24 mx-auto mb-5"
                        src={images.RegisterLogo}
                        alt=""
                    />
                )}
                <p className="text-center text-2xl font-bold">Register Form</p>
            </div>
            <div className="form-wrap">
                <form action="" method="POST" onSubmit={submitHandler}>
                    <div className="flex justify-center items-center space-x-5 mb-3">
                        <div className="input-box">
                            <label htmlFor="firstName" className=" block mb-2">
                                First Name
                            </label>
                            <input
                                className="block w-full bg-transparent border-2 border-black rounded-lg py-2 px-5"
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={data.firstName}
                                onChange={inputHandler}
                                placeholder="First Name"
                            />
                            {errors.firstName && (
                                <p className="text-red-700 rounded-lg mt-2 text-sm">
                                    {errors.firstName}
                                </p>
                            )}
                        </div>
                        <div className="input-box">
                            <label htmlFor="lastName" className=" block mb-2">
                                Last Name
                            </label>
                            <input
                                className="block w-full bg-transparent border-2 border-black rounded-lg py-2 px-5"
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={data.lastName}
                                onChange={inputHandler}
                                placeholder="Last Name"
                            />
                            {errors.lastName && (
                                <p className="text-red-700 rounded-lg mt-2 text-sm">
                                    {errors.lastName}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="input-box mb-3">
                        <label htmlFor="email" className=" block mb-2">
                            Email
                        </label>
                        <input
                            className="block w-full bg-transparent border-2 border-black rounded-lg py-2 px-5"
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={inputHandler}
                            placeholder="example@gmail.com"
                        />
                        {errors.email && (
                            <p className="text-red-700 rounded-lg mt-2 text-sm">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="input-box mb-3">
                        <label htmlFor="DOB" className="block mb-2">
                            Date Of Birth
                        </label>
                        <input
                            className="block w-full bg-transparent border-2 border-black rounded-lg py-2 px-5"
                            type="date"
                            name="DOB"
                            id="DOB"
                            value={data.DOB}
                            onChange={inputHandler}
                            placeholder="Date Of Birth"
                            max={date}
                        />
                        {errors.DOB && (
                            <p className="text-red-700 rounded-lg mt-2 text-sm">
                                {errors.DOB}
                            </p>
                        )}
                        {!errors.DOB && errors.ageRestrict && (
                            <p className="text-red-700 rounded-lg mt-2 text-sm">
                                {errors.ageRestrict}
                            </p>
                        )}
                    </div>
                    <div className="input-box mb-3">
                        <label htmlFor="NRC" className="block mb-2">
                            NRC
                        </label>
                        <input
                            className="block w-full bg-transparent border-2 border-black rounded-lg py-2 px-5"
                            type="text"
                            name="NRC"
                            id="NRC"
                            value={data.NRC}
                            onChange={inputHandler}
                            placeholder="NRC"
                        />
                        {errors.NRC && (
                            <p className="text-red-700 rounded-lg mt-2 text-sm">
                                {errors.NRC}
                            </p>
                        )}
                    </div>

                    <div className="input-box mb-3">
                        <label htmlFor="phoneNumber" className="block mb-2">
                            Phone Number
                        </label>
                        <input
                            className="block w-full bg-transparent border-2 border-black rounded-lg py-2 px-5"
                            type="text"
                            name="phoneNumber"
                            id="phoneNumber"
                            value={data.phoneNumber}
                            onChange={inputHandler}
                            placeholder="Enter Your Phone Number"
                        />
                        {errors.phoneNumber && (
                            <p className="text-red-700 rounded-lg mt-2 text-sm">
                                {errors.phoneNumber}
                            </p>
                        )}
                    </div>
                    <div className="input-box">
                        <label htmlFor="address" className="block mb-2">
                            Address
                        </label>
                        <textarea
                            className="block w-full bg-transparent border-2 h-14 border-black rounded-lg py-2 px-5"
                            name="address"
                            id="address"
                            value={data.address}
                            onChange={inputHandler}
                            placeholder="Address"
                        ></textarea>
                        {errors.address && (
                            <p className="text-red-700 rounded-lg mt-2 text-sm">
                                {errors.address}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-primary text-white w-full py-3 rounded-lg mt-2"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateRegister;
