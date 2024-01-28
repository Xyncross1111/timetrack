"use client";
import React, { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import "./batch.css";
import a1a2 from "../../db/a1a2.json";
import a3 from "../../db/a3.json";

interface BatchProps {
    setData: any;
}

const Batch: FC<BatchProps> = ({ setData, }: BatchProps) => {

    const [batch, setBatch] = useState("A1/A2");

    useEffect(() => {
        setLocalStorage(setBatch, setData);
    }, []);

    useEffect(() => {
        if (window !== undefined) localStorage.setItem("batch", batch);
    }, [batch]);

    const handleBatch = () => {
        if (batch === "A1/A2") {

            setBatch("A3");
            setData(a3);

        } else {

            setBatch("A1/A2");
            setData(a1a2);
        }
    };

    return (
        <div className="container">
            <div className="text">
                <p className={`${batch === "A1/A2" ? "selected" : "not-selected"}`}>A1/A2</p>
                <p className={`${batch === "A3" ? "selected" : "not-selected"}`}>A3</p>
            </div>
            <label className="switch">
                <input type="checkbox" onChange={handleBatch} checked={batch === "A3"}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
};

const setLocalStorage = (setBatch: Dispatch<SetStateAction<string>>, setData: any,) => {

    if (window == undefined) return;

    const storedBatch = localStorage.getItem("batch");

    if (storedBatch){

        setBatch(storedBatch);

        if (storedBatch === "A1/A2") setData(a1a2);
        else setData(a3);
    }
}

export default Batch;