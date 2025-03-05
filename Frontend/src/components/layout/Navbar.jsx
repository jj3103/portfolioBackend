import React, { useState } from "react";
import { Bell } from "lucide-react";

const NavBar = () => {
    const [activeTab, setActiveTab] = useState("Project");

    const tabs = ["Project", "Saved", "Shared", "Achievement"];

    return (
        <div className="h-19 bg-white border-b border-gray-200 shadow-md px-4 flex justify-between items-center w-full flex-wrap min-w-0">

            {/* Left Section: Portfolio & Tabs */}
            <div className="flex flex-col sm:hidden">
                <h1 className="text-xl font-bold pb-1 mt-4">Portfolio</h1>
                {/* Tabs - Only Visible on Small Screens */}
                <div className="flex gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-1 text-sm font-medium ${activeTab === tab
                                ? "text-orange-600 border-b-2 border-orange-600"
                                : "text-gray-500 hover:text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 min-w-0"></div>

            {/* Right Section: Notification & Profile */}
            <div className="flex items-center space-x-4">
                {/* Notification Bell */}
                <div className="relative flex-shrink-0">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <Bell className="w-6 h-6 text-gray-500" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            1
                        </span>
                    </button>
                </div>

                {/* User Profile - Only Visible on Large Screens */}
                <div className="hidden sm:flex items-center">
                    <img src="/user.png" alt="User profile" className="h-8 w-8 rounded-full" />
                    <div className="ml-2">
                        <div className="text-sm font-medium">Lorem Ips</div>
                        <div className="text-xs text-gray-500">Manager</div>
                    </div>
                    <button className="ml-2">
                        <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
