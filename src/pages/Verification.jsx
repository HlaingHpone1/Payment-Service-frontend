import React, { useState, useEffect } from "react";
import NumPad from "../components/numPad/NumPad";
import { images } from "../components/ImgObject";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const Verification = () => {
    const [otp, setOtp] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const storedEmail = localStorage.getItem("userEmail");

    const [secondsLeft, setSecondsLeft] = useState(60);
    const [isResending, setIsResending] = useState(false);

    const receivePhoneNumber = (code) => {
        setOtp(code);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const api = "http://localhost:8080/auth/validateOTP";

        console.log(storedEmail);

        const newErrors = {};

        axios
            .post(api, {
                mail: storedEmail,
                otp: otp,
            })
            .then((res) => {
                console.log(res.data);

                if (res.data.data == true) {
                    // localStorage.removeItem("userEmail");
                    navigate("/createAcc");
                } else {
                    console.log(storedEmail);

                    newErrors.invalid = "Invalid Code Plz try Again";
                    setErrors(newErrors);

                    console.log("it is false");
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        const timerId = setInterval(() => {
            if (secondsLeft > 0) {
                setSecondsLeft(secondsLeft - 1);
            } else {
                clearInterval(timerId);
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [secondsLeft]);

    const handleResend = async () => {
        setIsResending(true); // Update button state
        try {
            await refetch();
        } finally {
            setIsResending(false); // Reset button state
        }
    };

    const resendOTP = async () => {
        const postAPI = `http://localhost:8080/auth/verify?mail=${storedEmail}`;
        try {
            const response = await axios.get(postAPI);
            // return response.data;
            setSecondsLeft(60);
        } catch (error) {
            throw error;
        }
    };

    const { isLoading, error, refetch } = useQuery("resendOTP", resendOTP, {
        enabled: false,
    });

    // const reSendOTPCode = () => {
    //     const postAPI = `http://localhost:8080/auth/verify?mail=${storedEmail}`;

    //     axios
    //         .get(postAPI)
    //         .then((res) => {
    //             console.log("success Again");
    //         })
    //         .catch((error) => console.error("Error" + error));
    // };

    return (
        <div className="py-5 h-[90vh]">
            <div className="languages__section mb-14">
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
            </div>
            <div className="talent mb-5">
                <img
                    className="block size-32 mx-auto mb-5"
                    src={images.RegisterLogo}
                    alt=""
                />
                <p className="text-center text-2xl font-bold">
                    Enter Your OTP code
                </p>
            </div>
            <div className="form-wrap">
                <form action="" method="POST" onSubmit={submitHandler}>
                    <div className="input-box">
                        {errors.invalid && (
                            <p className="text-red-500 text-center mb-3">
                                {errors.invalid}
                            </p>
                        )}
                        <input
                            className={`block w-3/4 mx-auto bg-transparent border-2 rounded-lg py-3 px-5 ${
                                errors.invalid
                                    ? "border-red-500"
                                    : "border-black"
                            }  `}
                            type="text"
                            name="phone"
                            id="phone"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            readOnly
                            placeholder="Enter Your OTP Code"
                            maxLength={6}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-primary text-white w-full py-3 rounded-lg mt-5"
                    >
                        Submit
                    </button>
                </form>
                {/* <div className="countdown mt-3 ">
                    {secondsLeft > 0 ? (
                        <p className="text-center">{secondsLeft} seconds</p>
                    ) : (
                        <div className="flex justify-end">
                            <button
                                className=""
                                type="submit"
                                onClick={reSendOTPCode}
                            >
                                Resend Code
                            </button>
                        </div>
                    )}
                </div> */}
                <div className="countdown mt-3 ">
                    {secondsLeft > 0 ? (
                        <p className="text-center">{secondsLeft} seconds</p>
                    ) : (
                        <div className="flex justify-end">
                            <button
                                className=""
                                type="submit"
                                onClick={handleResend}
                                disabled={isLoading || isResending}
                            >
                                {isLoading || isResending
                                    ? "Resending..."
                                    : "Resend Code"}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <NumPad receivePhoneNumber={receivePhoneNumber} />
        </div>
    );
};

export default Verification;
