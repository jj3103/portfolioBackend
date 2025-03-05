// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaReact } from "react-icons/fa";

// const Sidebar = () => {
//     return (
//         <div className="bg-[#DF5532] text-white h-full w-64 fixed left-0 top-0 overflow-y-auto">
//             {/* Logo Section */}
//             <div className="flex items-center p-4">
//                 <div className=" bg-opacity-20 p-2 rounded-md">
//                     <FaReact size={30} color="white" />
//                 </div>
//                 <span className="ml-2 text-xl font-semibold">LOGO</span>
//             </div>

//             {/* Navigation */}
//             <nav className="mt-5">
//                 {[
//                     { path: "/dashboard", label: "Dashboard", icon: "🏠" },
//                     { path: "/", label: "Portfolio", icon: "📂" },
//                     { path: "/input", label: "Inputs", icon: "✏️" },
//                     { path: "/profile", label: "Profile", icon: "👤" },
//                 ].map(({ path, label, icon }) => (
//                     <NavLink
//                         key={path}
//                         to={path}
//                         className={({ isActive }) =>
//                             `flex items-center py-3 px-4 rounded-l-lg transition-all duration-300 ${isActive
//                                 ? "bg-gradient-to-r from-[#f8e6e2] to-[#dbc5bd] text-white font-semibold"
//                                 : "hover:bg-opacity-30"
//                             }`
//                         }
//                     >
//                         <span className="mr-3">{icon}</span>
//                         {label}
//                     </NavLink>
//                 ))}
//             </nav>
//         </div>
//     );
// };

// export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { FaReact } from "react-icons/fa";

const Sidebar = () => {
    const navItems = [
        { path: "/dashboard", label: "Dashboard", icon: "🏠" },
        { path: "/", label: "Portfolio", icon: "📂" },
        { path: "/input", label: "Inputs", icon: "✏️" },
        { path: "/profile", label: "Profile", icon: "👤" },
    ];

    return (
        <>
            {/* Desktop Sidebar (Visible on Medium+ Screens) */}
            <div className="hidden md:block bg-[#DF5532] text-white h-full w-64 fixed left-0 top-0 overflow-y-auto">
                <div className="flex items-center p-4">
                    <div className="bg-opacity-20 p-2 rounded-md">
                        <FaReact size={30} color="white" />
                    </div>
                    <span className="ml-2 text-xl font-semibold">LOGO</span>
                </div>

                {/* Navigation */}
                <nav className="mt-5">
                    {navItems.map(({ path, label, icon }) => (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `flex items-center py-3 px-4 rounded-l-lg transition-all duration-300 ${isActive
                                    ? "bg-gradient-to-r from-[#f8e6e2] to-[#dbc5bd] text-white font-semibold"
                                    : "hover:bg-opacity-30"
                                }`
                            }
                        >
                            <span className="mr-3">{icon}</span>
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
