import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import Verification from "../../pages/Verification";
import CreateRegister from "../../pages/CreateRegister";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/verification" element={<Verification />}></Route>
                <Route path="/createAcc" element={<CreateRegister />}></Route>
            </Routes>
        </div>
    );
};

export default Router;
