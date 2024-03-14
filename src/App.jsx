import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/router/Router";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
    const queryClient = new QueryClient();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div id="App">
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <div className="py-5">
                        <div className="max-w-[450px] bg-slate-200 mx-auto h-[95vh] rounded-2xl shadow-lg relative ">
                            <div className="inner-wrap max-w-[400px] mx-auto">
                                <Router />
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
            </QueryClientProvider>
        </div>
    );
}

export default App;
