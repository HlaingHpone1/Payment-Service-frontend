import { IoIosArrowForward } from "react-icons/io";
import { AiFillEye } from "react-icons/ai";
import React, { useState } from "react";

export const Balance = () => {
    let balance = 23534343;
    const [showBalance, setShowBalance] = useState(false);

    return (
        <div className="bg-primary rounded-3xl shadow-2xl px-5 py-3">
            <div className="text-bloc text-white flex justify-between items-center">
                <div className="title text-lg font-medium">Total Balance</div>
                <button
                    type="button"
                    onClick={() => setShowBalance(!showBalance)}
                >
                    <AiFillEye size={20} />
                </button>
            </div>
            <div className="balance flex justify-end items-center py-8">
                <p className="text-center text-white flex-[5] text-3xl font-semibold">
                    {showBalance
                        ? `${balance.toLocaleString()} Kyats`
                        : " * ".repeat(balance.toString().length)}
                </p>

                <button type="button">
                    <IoIosArrowForward
                        className="text-white flex-1"
                        size={25}
                    />
                </button>
            </div>
        </div>
    );
};

export const TopUpButton = ({ text, icon: Icon }) => {
    return (
        <div className="bg-white w-full shadow-lg flex flex-col justify-center items-center rounded-3xl py-8">
            <div className="icon text-primary ">
                <Icon className="size-9" />
            </div>
            <div className="text-xl font-semibold mt-3">{text}</div>
        </div>
    );
};
