"use client";
import { useState, useEffect } from "react";
import Batch from "@/app/batch/batch";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import Navigate from "@/app/navigate/navigate";
import a1a2 from "../db/a12.json";
import a3 from "../db/a3.json";
import './globals.css';

export default function Home() {

    let currDate: Date = new Date();

    const [date, setDate] = useState(currDate);
    const [weekDay, setWeekDay] = useState(currDate.getDay())

    const classList = a1a2[weekDay];
    const [classes, setClasses] = useState(classList);

    const [batch, setBatch] = useState("A1/A2");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedBatch = localStorage.getItem("batch");
            if (storedBatch){
                setBatch(storedBatch);
                if (storedBatch === "A1/A2") setClasses(a1a2[weekDay]);
                else setClasses(a3[weekDay]);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") localStorage.setItem("batch", batch);
    }, [batch]);

    const getClasses = (day: number) => {
        if (batch === "A1/A2") setClasses(a1a2[day]);
        else setClasses(a3[day]);
    }

    const handleNext = () => {

        date.setDate(date.getDate() + 1);

        let currDay = weekDay

        if (weekDay === 6) currDay = 0;
        else currDay++;
        getClasses(currDay);

        setWeekDay(currDay);
    }

    const handlePrev = () => {

        // @ts-ignore
        date.setDate(date.getDate() - 1);

        let currDay = weekDay;

        if (weekDay === 0) currDay = 6;
        else currDay--;
        getClasses(currDay);

        setWeekDay(currDay);
    }


    return (
        <>
            <h1 className={"title"}>TimeTrack</h1>
            <h2 className={"info"}>By <a href="https://www.linkedin.com/in/anasmkhan/" target="_blank">Anas Khan</a>, <a href="https://www.linkedin.com/in/adityagiri3600/" target="_blank">Aditya Giri</a></h2>
            <div className="datetime-batch-container">
                <Datetime date={date} />
                <Batch batch={batch} setBatch={setBatch} setClasses={setClasses} weekDay={weekDay} />
            </div>
            <Navigate handlePrev={handlePrev} handleNext={handleNext} />
            <Schedule classes={classes.classes} day={classes.day} date={date} />
        </>
    )
}
