"use client";
import React, { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import {useSwipeable} from "react-swipeable";
import "./batch.css";

interface BatchProps {
    setData: any;
    section: string;
}

const Batch: FC<BatchProps> = ({ setData,section }: BatchProps) => {
    let data1=require(`../../db/a1.json`);
    let data2=require(`../../db/a2.json`);
    if(section === "o3"){


         data1 = require(`../../db/o3.json`);
         data2 = require(`../../db/o3.json`);
    }
    else{

         data1 = require(`../../db/${section}1.json`);
         data2 = require(`../../db/${section}2.json`);
    }

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

    interface BatchNames {
        [key: string]: string;
    }

    const batchNames: BatchNames = {
        "a1": "A1/A2",
        "a2": "A3",
        "b1": "B1/B2",
        "b2": "B3",
        "c1": "C1/C2",
        "c2": "C3",
        "ds4a1": "A1/A3",
        "ds4a2": "A2/A4",
        "ds4b1": "B1/B3",
        "ds4b2": "B2/B4",
        "o1":"O1",
        "o2":"O2"
    }
    
    return (
        <div className="container">
            <div className="text" onClick={handleBatch}>
                <p className={`${batch === "1" ? "selected" : "not-selected"}`}>{batchNames[section+1]}</p>
                <p className={`${batch === "2" ? "selected" : "not-selected"}`}>{batchNames[section+2]}</p>
            </div>
            <label className="switch" {...handlers}>
                <input type="checkbox" onChange={handleBatch} checked={batch === "2"}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
};

const setLocalStorage = (setBatch: Dispatch<SetStateAction<string>>, setData: any, data1: any, data2: any) => {

    if (window == undefined) return;

    const storedBatch = localStorage.getItem("batch");

    if (storedBatch){

        setBatch(storedBatch);

        if (storedBatch === "1") setData(data1);
        else setData(data2);
    }
}

export default Batch;
