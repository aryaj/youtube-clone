import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SEARCH_RESULT_API } from '../utils/constants';
import ResultListVideoCard from './ResultListVideoCard';

const ResultsList = () => {

    const [searchParams] = useSearchParams();

    const [searchResult, setSearchResults] = useState();

    useEffect(() => {

        const getSearchResult = async (url, searchText) => {
            const response = await fetch(`${url}${searchText}`);
            const results = await response.json();
            setSearchResults(results.items);
        }

        const searchQuery = searchParams.get('search_query');
        getSearchResult(SEARCH_RESULT_API, searchQuery)

    }, [searchParams])
    return (
        <div className='my-10 ml-10'>
            {
                searchResult?.map((video) => {
                    return <ResultListVideoCard video={video} />
                })
            }
        </div>
    )
}

export default ResultsList