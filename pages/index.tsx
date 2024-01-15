"use client";
import { useState, useEffect } from "react";
import Batch from "@/app/batch/batch";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import Navigate from "@/app/navigate/navigate";
import a1a2 from "../db/a1a2.json";
import a3 from "../db/a3.json";
import './globals.css';

export default function Home() {

    const [currDateTime, setCurrDateTime] = useState(new Date());

    const [date, setDate] = useState(currDateTime);
    const [weekDay, setWeekDay] = useState(currDateTime.getDay());
    const classList = a1a2[weekDay];
    const [classes, setClasses] = useState(classList);

    const [batch, setBatch] = useState("A1/A2");

    const updateTime = () => {
        const newDateTime = new Date();
        setCurrDateTime(newDateTime);
    };

    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

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
            <h2 className={"info"}><a href="https://github.com/Xyncross1111/timetrack">Repo</a></h2>
            <div className="datetime-batch-container">
                <Datetime date={date} />
                <Batch batch={batch} setBatch={setBatch} setClasses={setClasses} weekDay={weekDay} />
            </div>
            <Navigate handlePrev={handlePrev} handleNext={handleNext} />
            <Schedule classes={classes.classes} day={classes.day} date={date} />
        </>
    )
}
