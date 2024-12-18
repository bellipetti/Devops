// Search.jsx

import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [params] = useSearchParams();
    
    const keyfiled = params.get('keyfield');
    const keyword = params.get('keyword');

    return(
        <>
        <h1>{`keyfiled: ${keyfiled}, keyword: ${keyword}`}</h1>
        </>
    )
}
export default Search;