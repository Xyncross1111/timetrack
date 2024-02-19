import "./datetime.css"
import {FC} from "react";

interface datetimeProps {
    date: Date;
}
const Datetime:FC<datetimeProps> = (props: datetimeProps) => {
    const date = props.date;

    const month = date.toLocaleDateString('en-us', { month: "short" });
    const day = date.toLocaleDateString('en-us', { weekday: "long" });
    const dayNum = date.toLocaleDateString('en-us', { day: "numeric" });

    return (
        <div className="datetime">
            <h2>{month} {dayNum}</h2>
            <h3>{day}</h3>
        </div>
    );
}
export default Datetime;