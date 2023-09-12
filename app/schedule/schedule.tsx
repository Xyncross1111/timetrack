import Class from "@/app/class/class";
import "./schedule.css";

const Schedule = (props: any) => {

    const classes = props.classes;

    if(classes.length === 0) return (
        <h1>There are no classes for today.</h1>
    )

    const classList = classes.map((classItem: any) => {
        return (
            <Class key={"class"} {...classItem} />
        )
    });

    return (
        <div className="schedule">
            {classList}
        </div>
    );


}

export default Schedule;