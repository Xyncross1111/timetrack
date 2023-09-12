import {FC} from "react";
import "./class.css"

interface classProps {
    key: string;
    name: string;
    timeStart: string;
    timeEnd: string;
}
const Class: FC<classProps> = (props: classProps) => {

    let className = `class - ${props.key} classes`;

    const time = new Date();
    const hour = time.getHours();

    if(hour >= parseInt(props.timeStart) && hour <= parseInt(props.timeEnd)) {
        className += " active";
    }
    return (
        <div className={className}>
            <h2>{props.name}</h2>
            <p>{props.timeStart} - {props.timeEnd}</p>
        </div>
    );
}

export default Class;