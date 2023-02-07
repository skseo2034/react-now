import React, {useEffect, useState} from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);
    const handelCountUp = (e) => {
        setCount(count + 1);
    }

    useEffect(() => {
        if (bool) {
            if (count % 2) {
                alert('홀수 입니다.');
            } else {
                alert('짝수 입니다.');
            }
        }

        setBool(true);
    }, [count]);

    
    
    return (
        <>
            <div>{count}</div>
            <button onClick={handelCountUp}>Up!(+1씩 증가)</button>
        </>
    );
}

export default Counter;