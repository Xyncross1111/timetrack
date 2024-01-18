import Class from "@/app/class/class";
import "./schedule.css";
import {FC} from "react";


interface scheduleProps {
    classes: any;
    day: string;
    date: Date;
}
const Schedule: FC<scheduleProps> = (props: scheduleProps) => {

    const classes = props.classes;

    // if(props.day === "sunday") return (
    //     <div className="schedule">
    //         <Class key={"class"} name={"Sleep 🛏️"} timeStart={"4:00"} timeEnd={"13:00"} date={props.date}/>
    //     </div>
    // )

    if(classes.length === 0) return (
        <h1 className="noclass">There are no classes on {props.day}.</h1>
    )

    const classList = classes.map((classItem: any) => {
        return (
            <Class key={"class"} {...classItem} date={props.date}/>
        )
    });

    return (
        <div className="schedule">
            {classList}
        </div>
    );
}

export default Schedule;