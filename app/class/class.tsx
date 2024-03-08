"use client;"
import { FC, useState, useEffect} from "react";
import "./class.css"
import Icon from "@/app/icon/icon";

interface classProps {
    key: string;
    name: string;
    timeStart: string;
    timeEnd: string;
    date: Date;
}
const Class: FC<classProps> = ({key, name, timeStart, timeEnd, date}) => {

    let className = `class - classes`;

    const [currDateTime, setCurrDateTime] = useState(new Date());

    const currDate = new Date();
    const [hour, setHour] = useState(currDateTime.getHours() + currDateTime.getMinutes()/60);

    const updateTime = () => {
        const newDateTime = new Date();
        setCurrDateTime(newDateTime);
        setHour(newDateTime.getHours() + newDateTime.getMinutes()/60);
    };

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const begin = parseInt(timeStart);
    const end = parseInt(timeEnd);

    if (hour >= begin && hour < end && currDate.getDate() === date.getDate() && currDate.getMonth() === date.getMonth() && currDate.getFullYear() === date.getFullYear()){
        className += " active";
    }
    if (begin + 2 === end){
        className += " lab";
    }
    if (name === "Recess"){
        className += " recess";
    }

    // past classses
    if ((end <= hour && currDate.getDate() === date.getDate() && currDate.getMonth() === date.getMonth() && currDate.getFullYear() === date.getFullYear())){
        className += " past";
    }
    if(date.getDate() < currDate.getDate() && date.getMonth() === currDate.getMonth() && date.getFullYear() === currDate.getFullYear()){
        className += " past";
    }
    if(date.getMonth() < currDate.getMonth() && date.getFullYear() === currDate.getFullYear()){
        className += " past";
    }
    if(date.getFullYear() < currDate.getFullYear()){
        className += " past";
    }
    if(name === "Math" || name === "Physics" || name === "OOPS" || name === "English" || name === "UHV"){
        return (
            <div className={className}>
                <h2>{name}</h2>
                <p>{begin} - {end}</p>
                <Icon class={name} />
            </div>
        );
    }
    return (
        <div className={className}>
            <h2>{name}</h2>
            <p>{begin} - {end}</p>
        </div>
    );
}

export default Class;