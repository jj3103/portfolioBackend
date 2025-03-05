import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

const Filter = ({ onFilter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState({
        language: [],
        author: [],
        grade: [],
        published: '',
        tabs: [],
        locale: []
    });

    const toggleFilter = () => setIsOpen(!isOpen);
    const isMobile = useMediaQuery("(max-width: 768px)");

    const handleCheckboxChange = (filterType, value) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]: prev[filterType].includes(value)
                ? prev[filterType].filter((item) => item !== value)
                : [...prev[filterType], value]
        }));
    };

    const handleTabChange = (tabName) => {
        setFilters((prev) => ({
            ...prev,
            tabs: prev.tabs.includes(tabName)
                ? prev.tabs.filter((item) => item !== tabName)
                : [...prev.tabs, tabName]
        }));
    };

    const applyFilters = () => {

        const filterQuery = {
            ...filters,
            grade: filters.grade.length ? filters.grade.join(',') : undefined,
            language: filters.language.length ? filters.language.join(',') : undefined,
            locale: filters.locale.length ? filters.locale.join(',') : undefined,
            tab: filters.tabs.length ? filters.tabs.join(',') : undefined,
        };

        onFilter(filterQuery);
        setIsOpen(false);
    };

    const resetFilters = () => {
        setFilters({
            language: [],
            author: [],
            grade: [],
            published: '',
            tabs: [],
            locale: []
        });
    };

    return (
        <div className="relative">
            <button
                onClick={toggleFilter}
                className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-orange-500 text-white flex items-center px-4 py-2 rounded-full shadow-lg transition-all z-50 sm:relative sm:bottom-auto sm:left-auto sm:translate-x-0 sm:bg-gray-200 sm:text-black"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                <span className="ml-2 text-sm">Filter</span>
            </button>


            {isOpen && (
                <div className={`
                    fixed -inset-x-30 bottom-30 bg-white border border-gray-200 rounded-t-lg shadow-lg z-50
                    sm:absolute sm:right-10 sm:bottom-auto sm:top-full sm:mt-2 sm:w-64 
                    transition-all duration-300 ease-in-out
                        ${isOpen ? "translate-y-0" : "translate-y-full"}
                        sm:translate-y-0
                        sm:translate-x-30
                        max-w-md mx-auto sm:max-w-xs
                   
                   
                `}>
                    <div className="p-4">
                        {/* Language Filter */}
                        <h3 className="font-medium text-sm mb-2">Language</h3>
                        {["all", "bahasa-sunda", "english"].map((lang) => (
                            <label key={lang} className="flex items-center text-sm">
                                <input type="checkbox" className="mr-2" checked={filters.language.includes(lang)}
                                    onChange={() => handleCheckboxChange("language", lang)} />
                                {lang.replace("-", " ").toUpperCase()}
                            </label>
                        ))}

                        {/* Grade Filter */}
                        <h3 className="font-medium text-sm mt-4 mb-2">Grade</h3>
                        {["A", "B", "C"].map((grade) => (
                            <label key={grade} className="flex items-center text-sm">
                                <input type="checkbox" className="mr-2" checked={filters.grade.includes(grade)}
                                    onChange={() => handleCheckboxChange("grade", grade)} />
                                Grade {grade}
                            </label>
                        ))}



                        {/* Tabs */}
                        <h3 className="font-medium text-sm mt-4 mb-2">Status</h3>
                        {["saved", "shared", "achievement"].map((tab) => (
                            <label key={tab} className="flex items-center text-sm">
                                <input type="checkbox" className="mr-2" checked={filters.tabs.includes(tab)}
                                    onChange={() => handleTabChange(tab)} />
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </label>
                        ))}



                        <div className="mt-4 flex justify-between">
                            <button onClick={resetFilters} className="text-sm text-gray-600 font-medium">Reset</button>
                            <button onClick={applyFilters} className="text-sm text-orange-500 font-medium">Apply</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Filter;

