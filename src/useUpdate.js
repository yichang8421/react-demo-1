import {useEffect, useState} from "react";

const useUpdate = (fn, n) => {
    const [nUpdateCount, setNUpdateCount] = useState(0);
    useEffect(() => {
        setNUpdateCount(nUpdateCount => nUpdateCount + 1);
    }, [n]);

    useEffect(() => {
        if (nUpdateCount > 1) {
            fn();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nUpdateCount]);
}

export default useUpdate;