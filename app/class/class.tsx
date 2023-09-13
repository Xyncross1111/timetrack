import {FC} from "react";
import "./class.css"

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

    if(hour >= timeStart && hour < timeEnd && props.date.getDate() === date.getDate()) {
        className += " active";
    }
    return (
        <div className={className}>
            {/*<p>start: {parseInt(props.timeStart)} curr: {hour} end: {parseInt(props.timeEnd)}</p>*/}
            <h2>{props.name}</h2>
            <p>{props.timeStart} - {props.timeEnd}</p>
        </div>
    );
}

export default Class;