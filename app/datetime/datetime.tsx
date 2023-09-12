import "./style.css"

const Datetime = () => {
    const d = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (
        <div className="datetime">
            <h2>{months[d.getMonth()]} {d.getDate()}</h2>
            <h3>{days[d.getDay()]}</h3>
        </div>
    );
}
export default Datetime;