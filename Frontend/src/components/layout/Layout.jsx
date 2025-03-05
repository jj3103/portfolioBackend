import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

const Layout = () => {
    return (
        <div className="flex h-screen bg-gray-50">
            <div className="hidden md:block">
                <Sidebar />
            </div>
            <div className="flex flex-col flex-1 md:ml-64 min-h-screen">
                <Navbar />
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </main>
            </div>
            <MobileNav />
        </div>
    );
};

export default Layout;
