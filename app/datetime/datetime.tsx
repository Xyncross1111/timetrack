import "./datetime.css"

const Datetime = () => {
    const date = new Date();

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