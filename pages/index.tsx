"use client";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
import Batch from "@/app/batch/batch";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import Navigate from "@/app/navigate/navigate";
import a1a2 from "../db/a1a2.json";
import a3 from "../db/a3.json";
import './globals.css';
import { ClassList } from "@/app/types/types" ;

export default function Home() {


    // class switching works. both a1a2 are not loaded on first page load. need to toggle to load them to data var

    const [data, setData] = useState(a1a2);

    const [currDateTime, setCurrDateTime] = useState(new Date());

    const [date, setDate] = useState(currDateTime);

    const [weekDay, setWeekDay] = useState(currDateTime.getDay());

    const [classes, setClasses] = useState(data[weekDay]);


    useEffect(() => {
        const intervalId = setInterval(updateTime, 60000);
        return () => clearInterval(intervalId);
    }, []);

    const handleNext = () => {

        date.setDate(date.getDate() + 1);

        let currDay = weekDay;

        weekDay === 6 ? currDay = 0 : currDay++;

        setClasses(data[currDay]);

        setWeekDay(currDay);
    }

    const handlePrev = () => {

        // @ts-ignore
        date.setDate(date.getDate() - 1);

        let currDay = weekDay;

        if (weekDay === 0) currDay = 6;
        else currDay--;
        setClasses(data[currDay]);

        setWeekDay(currDay);
    }


    return (
        <>
            <h1 className={"title"}>TimeTrack</h1>
            <h2 className={"info"}><a href="https://github.com/Xyncross1111/timetrack">Repo</a></h2>
            <div className="datetime-batch-container">
                <Datetime date={date} />
                <Batch setData={setData} weekDay={weekDay} />
            </div>
            <Navigate handlePrev={handlePrev} handleNext={handleNext} />
            <Schedule classes={classes.classes} day={classes.day} date={date} />
        </>
    )
}

const setLocalStorage = (batch: string, setBatch: Dispatch<SetStateAction<string>>, setClasses: any, weekDay: number) => {

    if (window == undefined) return;

    const storedBatch = localStorage.getItem("batch");

    if (storedBatch){

        setBatch(storedBatch);

        if (storedBatch === "A1/A2") setClasses(a1a2[weekDay]);
        else setClasses(a3[weekDay]);
    }

}

const updateTime = (setCurrDateTime: Dispatch<SetStateAction<Date>>) => {
    const newDateTime = new Date();
    setCurrDateTime(newDateTime);
};