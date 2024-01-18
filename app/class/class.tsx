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
const Class: FC<classProps> = (props: classProps) => {

    let className = `class - ${props.key} classes`;

    const [currDateTime, setCurrDateTime] = useState(new Date());

    const date = new Date();
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

    const timeStart = parseInt(props.timeStart);
    const timeEnd = parseInt(props.timeEnd);

    // for dev purposes xd
    // if (timeStart === 12 && timeEnd === 13) {
    //     className += " active";
    // }

    if (hour >= timeStart && hour < timeEnd && props.date.getDate() === date.getDate()) {
        className += " active";
    }
    if (timeStart + 2 === timeEnd){
        className += " lab";
    }
    if ((timeEnd <= hour && props.date.getDate() == date.getDate()) || props.date.getDate() < date.getDate()){
        className += " past";
    }
    if (props.name === "Recess"){
        className += " recess";
    }
    if(props.name === "Math" || props.name === "Physics" || props.name === "OOPS" || props.name === "English" || props.name === "UHV"){
        return (
            <div className={className}>
                <h2>{props.name}</h2>
                <p>{props.timeStart} - {props.timeEnd}</p>
                <Icon class={props.name} />
            </div>
        );
    }
    return (
        <div className={className}>
            <h2>{props.name}</h2>
            <p>{props.timeStart} - {props.timeEnd}</p>
        </div>
    );
}

export default Class;