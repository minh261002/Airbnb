'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'
import { useState, useEffect } from 'react'

const NavSearch = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const [search, setSearch] = useState(searchParams.get('search')?.toString() || '');

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        if (value) {
            params.set('search', value);
        } else {
            params.delete('search');
        }

        replace(`/?${params.toString()}`);
    }, 100);

    useEffect(() => {
        const searchParam = searchParams.get('search');
        if (searchParam !== null && searchParam !== search) {
            setSearch(searchParam);
        }
    }, [searchParams]);

    return (
        <input
            type="text"
            placeholder="Find a property ..."
            className="w-full rounded-l-full py-1 px-4 text-gray-700 dark:text-white focus:outline-none border-none"
            value={search}
            onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
            }}
        />
    );
}

export default NavSearch;
