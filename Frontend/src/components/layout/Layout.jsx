// import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Navbar from './Navbar';
// import MobileNav from './MobileNav';

// const Layout = () => {  // ❌ Remove `({ children })`
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <div className="flex h-screen bg-gray-50">

//             <div className="hidden md:block">
//                 <Sidebar />
//             </div>

//             {/* Mobile navigation - visible only on small screens */}
//             <div className="md:hidden">
//                 <MobileNav isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
//             </div>

//             {/* Main content area - pushed to the right on desktop */}
//             <div className="flex flex-col flex-1 md:ml-64 min-h-screen">
//                 <Navbar toggleMobileMenu={toggleMobileMenu} />
//                 <main className="flex-1 overflow-y-auto p-4">
//                     <Outlet /> {/* ✅ This renders child pages like Portfolio */}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default Layout;


import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Layout = () => {
    return (
        <div className="flex h-screen bg-gray-50">

            {/* Sidebar - Only for larger screens */}
            <div className="hidden md:block">
                <Sidebar />
            </div>

            {/* Main content area */}
            <div className="flex flex-col flex-1 md:ml-64 min-h-screen">
                <Navbar /> {/* Navbar stays at the top */}
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet /> {/* Renders child pages like Portfolio */}
                </main>
            </div>

            {/* Mobile navigation bar (only on small screens) */}
            <MobileNav />
        </div>
    );
};

export default Layout;
