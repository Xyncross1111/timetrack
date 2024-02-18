"use client";
import React, { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import "./batch.css";
import { data } from "autoprefixer";

interface BatchProps {
    setData: any;
    section: string;
}

const Batch: FC<BatchProps> = ({ setData,section }: BatchProps) => {

    const data12 = require(`../../db/${section}1${section}2.json`);
    const data3 = require(`../../db/${section}3.json`);

    const [batch, setBatch] = useState("12");

    useEffect(() => {
        setLocalStorage(setBatch, setData, data12, data3);
    }, []);

    useEffect(() => {
        if (window !== undefined) localStorage.setItem("batch", batch);
    }, [batch]);

    const handleBatch = () => {
        if (batch === "12") {

            setBatch("3");
            setData(data3);

        } else {

            setBatch("12");
            setData(data12);
        }
    };

    return (
        <div className="container">
            <div className="text">
                <p className={`${batch === "12" ? "selected" : "not-selected"}`}>{section.toUpperCase()}1/{section.toUpperCase()}2</p>
                <p className={`${batch === "3" ? "selected" : "not-selected"}`}>{section.toUpperCase()}3</p>
            </div>
            <label className="switch">
                <input type="checkbox" onChange={handleBatch} checked={batch === "3"}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
};

const setLocalStorage = (setBatch: Dispatch<SetStateAction<string>>, setData: any, data12: any, data3: any) => {

    if (window == undefined) return;

    const storedBatch = localStorage.getItem("batch");

    if (storedBatch){

        setBatch(storedBatch);

        if (storedBatch === "12") setData(data12);
        else setData(data3);
    }
}

export default Batch;