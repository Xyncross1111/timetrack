"use client;"
import { FC, useState, useEffect} from "react";
import "./class.css"
import Icon from "@/app/icon/icon";

interface classProps {
    name: string;
    timeStart: string;
    timeEnd: string;
    date: Date;
}
const Class: FC<classProps> = ({name, timeStart, timeEnd, date}) => {

    let cssClassName = "class";
    const classesWithIcons = ["Math","Physics","OOPS","English","UHV"]

    const [currDate, setCurrDate] = useState(new Date());
    const [hour, setHour] = useState(currDate.getHours() + currDate.getMinutes()/60  + currDate.getSeconds()/3600);

    const updateTime = () => {
        const newDateTime = new Date();
        setCurrDate(newDateTime);
        setHour(newDateTime.getHours() + newDateTime.getMinutes()/60 + newDateTime.getSeconds()/3600);
    };

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, [hour]);

    const begin = parseInt(timeStart);
    const end = parseInt(timeEnd);

    if (begin <= hour && hour < end && currDate.toDateString() === date.toDateString()){
        cssClassName += " active";
    }
    if (begin + 2 === end){
        cssClassName += " lab";
    }
    if (name === "Recess"){
        cssClassName += " recess";
    }
    if (date.getTime()<currDate.getTime()) {
        cssClassName += " past"
    }
    return (
        <div className={cssClassName}>
            <h2>{name}</h2>
            <p>{timeStart} to {timeEnd}</p>
            {classesWithIcons.includes(name)&&<Icon class={name} />}
        </div>
    );
}

export default Class;