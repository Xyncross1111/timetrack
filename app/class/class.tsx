import {FC} from "react";
import "./style.css"

interface classProps {
    key: string;
    name: string;
    timeStart: string;
    timeEnd: string;
}
const Class: FC<classProps> = (props: classProps) => {
    return (
        <div className={`class - ${props.key} classes`}>
            <h2>{props.name}</h2>
            <p>{props.timeStart} - {props.timeEnd}</p>
        </div>
    );
}

export default Class;