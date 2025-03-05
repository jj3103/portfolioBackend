import { useState, useCallback } from "react";
import ProjectList from "../components/portfolio/ProjectList";
import SearchBar from "../components/ui/SearchBar";
import Filter from "../components/ui/Filter";
import useMediaQuery from "../hooks/useMediaQuery";
import { filterProjects, searchProjects } from "../services/api";

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("Project");
    const [searchResults, setSearchResults] = useState(null);
    const [error, setError] = useState(null);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const handleFilter = useCallback(async (query) => {
        try {
            const result = await filterProjects(query);
            setSearchResults(result.data);
            setError(result.data.length === 0 ? "No projects found." : null);
        } catch (error) {
            console.error("Filter error:", error);
        }
    }, []);

    const handleSearch = useCallback(async (query) => {
        if (!query.trim()) {
            setSearchResults(null);
            setError(null);
            return;
        }
        try {
            const results = await searchProjects(query);
            setSearchResults(results.data.length ? results.data : []);
            setError(results.data.length === 0 ? "No projects found." : null);
        } catch (error) {
            console.error("Search error:", error);
        }
    }, []);

    return (
        <div className={`${isMobile ? "px-2" : "p-4 bg-white shadow-md rounded-lg w-full max-w-6xl mx-auto"}`}>

            {!isMobile && <div className="text-2xl font-bold pb-3 text-left">Portfolio</div>}


            <div className="pb-3 flex flex-col sm:flex-row sm:justify-between sm:items-center ">

                <div className="hidden sm:flex space-x-6 border-b border-gray-200 w-100">
                    {["Project", "Saved", "Shared", "Achievement"].map((tab) => (
                        <button
                            key={tab}
                            className={`pb-3 text-base ${activeTab === tab
                                ? "border-b-4 border-orange-500 w-20 text-orange-500 font-semibold"
                                : "text-gray-500"
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Search and Filter aligned to tabs */}
                {!isMobile && (
                    <div className="flex items-center space-x-4">
                        <Filter onFilter={handleFilter} />
                        <SearchBar onSearch={handleSearch} />
                    </div>
                )}
            </div>

            {/* SearchBar (Only for Mobile) */}
            {isMobile && (
                <div className="mb-4">
                    <SearchBar onSearch={handleSearch} />
                </div>
            )}

            {/* Project List */}
            {activeTab === "Project" && (
                <>
                    {error ? (
                        <div className="text-center text-gray-500 mt-4">{error}</div>
                    ) : (
                        <ProjectList projects={searchResults} />
                    )}
                </>
            )}

            {/* Floating Filter Button for Mobile */}
            {isMobile && (
                <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
                    <Filter onFilter={handleFilter} />
                </div>
            )}
        </div>
    );
};

export default Portfolio;
