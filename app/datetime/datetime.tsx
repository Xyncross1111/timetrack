import { useState, useEffect } from "react";
import "./datetime.css"
import { FC } from "react";

interface datetimeProps {
    date: Date;
}
const Datetime: FC<datetimeProps> = (props: datetimeProps) => {
    const date = props.date;

    const month = date.toLocaleDateString('en-us', { month: "short" });
    const day = date.toLocaleDateString('en-us', { weekday: "long" });
    const dayNum = date.toLocaleDateString('en-us', { day: "numeric" });

    const [animatedDay, setAnimatedDay] = useState(day);

    useEffect(() => {
        for (let i = 0; i < Math.max(day.length, animatedDay.length); i++) 
        setTimeout(() => {
            setAnimatedDay(prevAnimatedDay => {
                return prevAnimatedDay.substring(0, i) + (i<day.length ? day[i] + prevAnimatedDay.substring(i + 1): "");
            });
        }, 50 * i);
        
    }, [day]);

    return (
        <div className="datetime">
            <h2>{month} {dayNum}</h2>
            <h3>{animatedDay}</h3>
        </div>
    );
}
export default Datetime;