import React, {useState, FC, useEffect,Dispatch,SetStateAction, use} from "react";
import batchName from '../../db/batchName.json';
import Btn from "./btn/btn";
import './batch-btn.css';

interface BatchBtnProps {
    setData: any;
    section: string;
}

interface BatchNames {
    [key: string]: string;
}

const BatchBtn: FC<BatchBtnProps> = ({section,setData} :BatchBtnProps) => {

    const data1 = require(`../../db/batches/${section}1.json`);
    const data2 = require(`../../db/batches/${section}2.json`);
    const data3 = require(`../../db/batches/${section}3.json`);

    const [selectedBatch, setSelectedBatch] = useState(section+'1');
    const batchNames: BatchNames = batchName;

    useEffect(() => {
        setLocalStorage(setSelectedBatch);
    },[section]);

    useEffect(() => {
        if (window !== undefined) localStorage.setItem("batch", selectedBatch);
        if(selectedBatch === batchNames[section+'1']) setData(data1);
        if(selectedBatch === batchNames[section+'2']) setData(data2);
        if(selectedBatch === batchNames[section+'3']) setData(data3);
    },[selectedBatch]);

    return (
        <div className="container">
            <Btn batchName={batchNames[section+'1']} position="left" selectedBatch={selectedBatch} setSelectedBatch={setSelectedBatch} />
            <Btn batchName={batchNames[section+'2']} position="middle" selectedBatch={selectedBatch} setSelectedBatch={setSelectedBatch} />
            <Btn batchName={batchNames[section+'3']} position="right" selectedBatch={selectedBatch} setSelectedBatch={setSelectedBatch} />
        </div>
    );
}

const setLocalStorage = (setBatch: Dispatch<SetStateAction<string>>) => {
    if (window !== undefined) {
        const storedBatch = localStorage.getItem("batch");
        if(storedBatch){
            setBatch(storedBatch);
        }
    }
}

export default BatchBtn;