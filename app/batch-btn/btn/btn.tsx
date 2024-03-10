import React, {useState, FC} from "react";
import './btn.css';

interface BtnProps {
    batchName: string;
    position: string;
    selectedBatch: string;
    setSelectedBatch: React.Dispatch<React.SetStateAction<string>>;
}

const Btn: FC<BtnProps> = ({batchName,position, selectedBatch, setSelectedBatch}: BtnProps) => {
    let cssClassName = "front "+position;
    if(selectedBatch === batchName) cssClassName += " selected";
    return (
            <button className={`batch-btn ${position}`} onClick={()=>setSelectedBatch(batchName)}>
                <span className={cssClassName}>{batchName}</span>
            </button>
    );
}

export default Btn;