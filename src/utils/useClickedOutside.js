import { useEffect } from "react";

function useClickedOutside(ref, callback) {

    function handleClickedOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickedOutside);

        return (() => {
            document.removeEventListener('click', handleClickedOutside)
        })

    }, [ref])
}

export default useClickedOutside;