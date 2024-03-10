"use client";
import React, { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import batchName from '../../db/batchName.json';
import "./batch.css";

interface BatchProps {
    setData: any;
    section: string;
}

interface BatchNames {
    [key: string]: string;
}

const Batch: FC<BatchProps> = ({ setData, section }: BatchProps) => {

    const data1 = require(`../../db/batches/${section}1.json`);
    const data2 = require(`../../db/batches/${section}2.json`);

    const [batch, setBatch] = useState("1");

    useEffect(() => {
        setLocalStorage(setBatch, setData, data1, data2);
    }, [section]);

    useEffect(() => {
        if (window !== undefined) localStorage.setItem("batch", batch);
    }, [batch]);

    const handleBatch = () => {
        if (batch === "1") {

            setBatch("2");
            setData(data2);

        } else {

            setBatch("1");
            setData(data1);
        }
    };

    const handlers = useSwipeable({
        onSwipedDown: () => handleBatch(),
        onSwipedUp: () => handleBatch()
    });

    const batchNames: BatchNames = batchName;
    
    return (
        <div className="container">
            <div className="text" onClick={handleBatch}>
                <p className={`${batch === "1" ? "selected" : "not-selected"}`}>{batchNames[section + '1']}</p>
                <p className={`${batch === "2" ? "selected" : "not-selected"}`}>{batchNames[section + '2']}</p>
            </div>
            <label className="switch" {...handlers}>
                <input type="checkbox" onChange={handleBatch} checked={batch === "2"} />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

const setLocalStorage = (setBatch: Dispatch<SetStateAction<string>>, setData: any, data1: any, data2: any) => {

    if (window == undefined) return;

    const storedBatch = localStorage.getItem("batch");

    if (storedBatch) {

        setBatch(storedBatch);

        if (storedBatch === "1") setData(data1);
        else setData(data2);
    }
}

export default Batch;
