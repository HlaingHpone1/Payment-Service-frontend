import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/Router";

function App() {
    return (
        <BrowserRouter>
            <div className="py-5">
                <div className="max-w-[450px] bg-slate-200 mx-auto h-[95vh] rounded-2xl shadow-lg relative ">
                    <div className="inner-wrap max-w-[400px] mx-auto">
                        <Router />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
