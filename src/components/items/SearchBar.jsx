import { Search } from 'lucide-react';
import React from 'react';

const SearchBar = () => {
    return (
        <div>
            {/* <!-- Search & Hero Section --> */}
            <h1 className="font-display-lg text-4xl font-bold md:text-5xl lg:text-6xl md:text-display-lg text-on-background mb-stack-md py-10">Explore Tech Precision</h1>
            <div className="relative w-full max-w-2xl">
                <Search
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
                />
                <input className="w-full pl-12 pr-4 py-4 rounded-2xl bg-surface-container-low border-none focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-300 placeholder:text-outline/60 text-body-md font-body-md shadow-sm" placeholder="Search gadgets, accessories, or brands..." type="text" />
            </div>
        </div>
    );
};

export default SearchBar;