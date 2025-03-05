import { NavLink } from 'react-router-dom';

export default function MobileNav() {
    return (
        <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0 z-10 md:hidden">
            <div className="flex justify-around">
                <NavLink to="/dashboard" className={({ isActive }) => `flex flex-col items-center py-2 ${isActive ? 'text-orange-500' : 'text-gray-600'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10M9 21h6" />
                    </svg>
                    <span className="text-xs">Home</span>
                </NavLink>

                <NavLink to="/" className={({ isActive }) => `flex flex-col items-center py-2 ${isActive ? 'text-orange-500' : 'text-gray-600'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    <span className="text-xs">Portfolio</span>
                </NavLink>

                <NavLink to="/input" className={({ isActive }) => `flex flex-col items-center py-2 ${isActive ? 'text-orange-500' : 'text-gray-600'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-xs">Inputs</span>
                </NavLink>

                <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center py-2 ${isActive ? 'text-orange-500' : 'text-gray-600'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-xs">Profile</span>
                </NavLink>
            </div>
        </nav>
    );
}
