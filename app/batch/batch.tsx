import React, { FC } from "react";
import "./batch.css";
import a1a2 from "../../db/a12.json";
import a3 from "../../db/a3.json";

interface BatchProps {
    batch: string;
    weekDay: number;
    setClasses: any;
    setBatch: any;
}

const Batch: FC<BatchProps> = ({ batch, weekDay, setClasses, setBatch }: BatchProps) => {
    const handleBatch = () => {
        if (batch === "A1/A2") {
            setBatch("A3");
            setClasses(a3[weekDay]);
        } else {
            setBatch("A1/A2");
            setClasses(a1a2[weekDay]);
        }
    };

    return (
        <div className="container">
            <p className="text">{batch.toUpperCase()}</p>
            <label className="switch">
                <input type="checkbox" onChange={handleBatch} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default Batch;