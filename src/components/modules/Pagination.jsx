import { useState } from "react";

function Pagination() {

    const [page, setPage] = useState(1);

    const previousHandler = () => {

        if (page <= 1) return;
        setPage( page => page - 1 )

    }

    const nextHandler = () => {

        if (page >= 10) return;
        setPage( page => page + 1 )

    }

    return (
        
        <div>

            <button onClick={previousHandler}>previous</button>
            <p>{page}</p>
            <button onClick={nextHandler}>next</button>

        </div>
    
    )

}

export default Pagination;