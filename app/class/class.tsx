import { FC } from "react";
import "./class.css"
import Image from "next/image";

interface classProps {
    key: string;
    name: string;
    timeStart: string;
    timeEnd: string;

    date: Date;
}
const Class: FC<classProps> = (props: classProps) => {

    let className = `class - ${props.key} classes`;

    const date = new Date();
    let hour = date.getHours();
    const min = date.getMinutes();

    hour += min / 60;

    const timeStart = parseInt(props.timeStart);
    const timeEnd = parseInt(props.timeEnd);

    if (hour >= timeStart && hour < timeEnd && props.date.getDate() === date.getDate()) {
        className += " active";
    }
    if(props.name === "Math"){
        return (
            <div className={className}>
                <h2>{props.name}</h2>
                <p>{props.timeStart} - {props.timeEnd}</p>
                <div className="icon">
                    <Image src="/plus.png" alt="" width={50} height={50} />
                </div>
            </div>
        );
    }
    else if(props.name === "Physics"){
        return (
            <div className={className}>
                <h2>{props.name}</h2>
                <p>{props.timeStart} - {props.timeEnd}</p>
                <div className="icon">
                    <Image src="/physics.png" alt="" width={50} height={50} />
                </div>
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