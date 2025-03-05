import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        if (!searchQuery.trim()) return;
        onSearch(searchQuery);
    };

    return (
        <div className="w-full">


            {/* Search Bar - Moves to Next Line on Small Screens */}
            <div className="flex flex-col sm:flex-row sm:items-center w-full gap-2">
                <div className="relative w-full sm:w-72">
                    <input
                        type="text"
                        placeholder='Search a project'
                        className="border rounded-lg py-2 pr-10 pl-4 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    {/* Search Icon Inside Input */}
                    <button
                        onClick={handleSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white border rounded w-7 h-7 bg-red-500"
                    >
                        🔍
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
