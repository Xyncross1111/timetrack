import React from "react";
import { FC } from "react";
import "./batch.css";

const Batch: FC<any> = (props: any) => {
    let batch = props.batch;
    const setBatch = props.setBatch;
    const handleBatch = () => {
        if (batch === "A1/A2") setBatch("A3");
        else setBatch("A1/A2");
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