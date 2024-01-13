import { FC } from "react";
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

    const date = new Date();
    let hour = date.getHours();
    const min = date.getMinutes();

    hour += min / 60;

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
    if(props.name === "Math" || props.name === "Physics"){
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