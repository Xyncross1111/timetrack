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

    const [data, setData] = useState(a3);

    // console.log(data);

    const [date, setDate] = useState(new Date());

    const [weekDay, setWeekDay] = useState(date.getDay());

    const [classes, setClasses] = useState(data[weekDay]);

    useEffect( () => {
        setClasses(data[weekDay]);
    }, [data])


    useEffect(() => {
        const intervalId = setInterval(updateTime, 1000, setDate);
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
                <Batch setData={setData} />
            </div>
            <Navigate handlePrev={handlePrev} handleNext={handleNext} />
            <Schedule classes={classes.classes} day={classes.day} date={date} />
        </>
    )
}

const updateTime = (setDate: Dispatch<SetStateAction<Date>>) => {
    const newDateTime = new Date();
    setDate(newDateTime);
};