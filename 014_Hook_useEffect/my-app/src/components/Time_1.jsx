import React, {useEffect, useRef, useState} from 'react';

const Time = () => {
    const [nowTime, setNowTime] = useState('');

    const setTime = () => {
        const date = new Date();
        const time = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds();
        setNowTime(`시간 : ${time}시 ${minute}분 ${seconds}초`);
    }

    const interval = useRef();

    useEffect(() => {
        interval.current = setInterval(setTime, 100);
        return () => {
            clearInterval(interval.current);
        }
    });



    return (
        <div>
            {nowTime}
        </div>
    );
};

export default Time;
