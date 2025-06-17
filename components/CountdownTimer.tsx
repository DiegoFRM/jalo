"use client"
import React, { useState, useEffect, useRef } from 'react';

const CountdownTimer = ({targetDate}:any) => {
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const intervalRef:any = useRef(null);


    function calculateTimeLeft() {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        if (difference <= 0) {
            //clearInterval(intervalRef.current);
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }


        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [targetDate]);
    
    return (
        <div>
            <span>{timeLeft.days} d </span>
            <span>{timeLeft.hours} h </span>
            <span>{timeLeft.minutes} m </span>
            <span>{timeLeft.seconds} s </span>
        </div>
    );
};

export default CountdownTimer;