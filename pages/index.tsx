"use client";
import { useState, useEffect, SetStateAction, Dispatch } from "react";
import { useSwipeable } from "react-swipeable";
import Batch from "@/app/batch/batch";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import Navigate from "@/app/navigate/navigate";
import a2 from "../db/batches/a2.json";
import Header from "@/app/Head/Head";
import './globals.css';

export default function Home() {

    const [data, setData] = useState(a2);

    const [date, setDate] = useState(new Date());

    const [weekDay, setWeekDay] = useState(date.getDay());

    const [classes, setClasses] = useState(data[weekDay]);

    useEffect(() => {
        setClasses(data[weekDay]);
    }, [data])

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

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev()
    });

    return (
        <div {...handlers} style={{height: "100vh"}}>
            <Header />
            <h1 className={"title"}>TimeTrack</h1>
            <h2 className={"info"}><a href="https://github.com/Xyncross1111/timetrack">Repo</a></h2>
            <div className="datetime-batch-container">
                <Datetime date={date} />
                <Batch setData={setData} section={"a"} />
            </div>
            <Navigate handlePrev={handlePrev} handleNext={handleNext} />
            <Schedule classes={classes.classes} day={classes.day} date={date}/>
        </div>
    )
}