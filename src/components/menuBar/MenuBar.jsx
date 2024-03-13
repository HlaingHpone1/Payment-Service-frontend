import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineQrcode } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { FaLifeRing } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import React from "react";

const MenuBar = () => {
    return (
        <div className="w-full absolute bottom-0 left-0 bg-white shadow-2xl rounded-t-3xl">
            <div className="w-full flex justify-between px-10 items-center h-20">
                <div className="home-icon text-center">
                    <button>
                        <AiFillHome className="size-6 text-primary" />
                    </button>
                    <p className="text-sm text-primary">Home</p>
                </div>
                <div className="life-icon text-center">
                    <button>
                        <FaLifeRing className="size-6 text-primary" />
                    </button>
                    <p className="text-sm text-primary">Life</p>
                </div>
                <div className="scan-icon bg-white size-20 rounded-full shadow-2xl flex justify-center items-center -translate-y-9 flex-col">
                    <button className="w-full size-8">
                        <BsQrCodeScan className="w-full h-full text-primary" />
                    </button>
                    <p className="text-sm text-primary">Scan</p>
                </div>
                <div className="qr-icon text-center">
                    <button>
                        <AiOutlineQrcode className="size-6 text-primary" />
                    </button>
                    <p className="text-sm text-primary">QR Code</p>
                </div>
                <div className="profile-icon text-center">
                    <button>
                        <AiOutlineUser className="size-6 text-primary" />
                    </button>
                    <p className="text-sm text-primary">Profiles</p>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
