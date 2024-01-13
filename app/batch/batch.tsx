import React from "react";
import { FC } from "react";
import "./batch.css";
import a1a2 from "../../db/a12.json";
import a3 from "../../db/a3.json";

const Batch: FC<any> = (props: any) => {
    let batch = props.batch;
    const setBatch = props.setBatch;
    const setClasses = props.setClasses;
    const weekDay = props.weekDay;
    const handleBatch = () => {
        if (batch === "A1/A2") {
            setBatch("A3");
            setClasses(a3[weekDay]);
        }
        else{
            setBatch("A1/A2");
            setClasses(a1a2[weekDay]);
        }
    }
    return <div className="container">
        <p className="text">A3:</p>
        <label className="switch">
            <input type="checkbox" onChange={handleBatch} />
            <span className="slider round"></span>
        </label>
    </div>;
}

export default Batch;