import {FC} from "react";

interface classProps {
    key: string;
    name: string;
    timeStart: string;
    timeEnd: string;
}
const Class: FC<classProps> = (props: classProps) => {

    return (
        <div className={`class - ${props.key}`}>
            <h1>{props.name}</h1>
            <p>{props.timeStart} - {props.timeEnd}</p>
        </div>
    );
}

export default Class;