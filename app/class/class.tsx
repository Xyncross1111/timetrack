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

    let className = `class - ${key} classes`;

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

    if (hour >= begin && hour < end && currDate.getDate() === date.getDate()) {
        className += " active";
    }
    if (begin + 2 === end){
        className += " lab";
    }

    // Removed (  date.getDate() < date.getDate()  ) which made classes of the previous days of the week
    // appear as past classes. Refactor in future to add this feature again.

    if ((end <= hour && currDate.getDate() === date.getDate())){
        className += " past";
    }
    if (name === "Recess"){
        className += " recess";
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