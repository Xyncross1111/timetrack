import Class from "@/app/class/class";

const Schedule = (props: any) => {

    const classes = props.classes;

    const classList = classes.map((classItem: any) => {
        return (
            <Class key={"class"} {...classItem} />
        )
    });

    return (
        <div>
            {classList}
        </div>
    );


}

export default Schedule;