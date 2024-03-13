import { BiTransferAlt } from "react-icons/bi";
import React from "react";
import { Balance, TopUpButton } from "../components/balance/Balance";
import { IoMdPhonePortrait } from "react-icons/io";
import MenuBar from "../components/menuBar/MenuBar";

const Home = () => {
    return (
        <div className="">
            <h2 className="text-3xl text-center text-primary font-bold pt-5 mb-10">
                Talent Pay
            </h2>
            <Balance />
            <div className="mt-6 flex justify-center items-center space-x-5">
                <TopUpButton text="Top Up" icon={IoMdPhonePortrait} />
                <TopUpButton text="Transfer" icon={BiTransferAlt} />
            </div>
            <MenuBar />
        </div>
    );
};

export default Home;
