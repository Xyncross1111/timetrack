"use client";
import {useState, useEffect, use} from "react";
import { useRouter } from 'next/router';
import Header from "@/app/Head/Head";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import Batch from "@/app/batch/batch";
import a3 from "../db/a3.json";
import Navigate from "@/app/navigate/navigate";
import './globals.css';

export default function Home() {

    const router = useRouter();

    const [data, setData] = useState(a3);

    const [date, setDate] = useState(new Date());

    const [weekDay, setWeekDay] = useState(date.getDay())

    const [classes, setClasses] = useState(data[weekDay]);

    const getClasses = (day: number) => {
        const classList = data[day];
        setClasses(classList);
    }

    useEffect( () => {
        setClasses(data[weekDay]);
    }, [data])
    useEffect(() => {
        if(!router.isReady) return;
        setData(require(`../db/${router.query.section}3.json`));
    }, [router.isReady, router.query.section, weekDay])

    const handleNext = () => {

        date.setDate(date.getDate() + 1);

        let currDay = weekDay

        if(weekDay === 6) currDay = 0;
        else currDay++;
        getClasses(currDay);

        setWeekDay(currDay);
    }

    const handlePrev = () => {

        // @ts-ignore
        date.setDate(date.getDate() - 1);

        let currDay = weekDay;

        if(weekDay === 0) currDay = 6;
        else currDay--;
        getClasses(currDay);

        setWeekDay(currDay);
    }

    return (
        <>
            <Header />
            <h1 className={"title"}>TimeTrack</h1>
            <h2 className={"info"}><a href="https://github.com/Xyncross1111/timetrack">Repo</a></h2>
            <div className="datetime-batch-container">
                <Datetime date={date} />
                <Batch setData={setData} section={router.isReady ? `${router.query.section}`: "a"}/>
            </div>
            <Navigate handlePrev={handlePrev} handleNext={handleNext} />
            <Schedule classes={classes.classes} day={classes.day} date={date} />
        </>
    )
}
