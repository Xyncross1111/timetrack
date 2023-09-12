import Class from "@/app/class/class";
import "./style.css";

const Schedule = (props: any) => {

    const classes = props.classes;

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