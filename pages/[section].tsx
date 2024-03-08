"use client";
import {useState, useEffect, use} from "react";
import { useSwipeable } from "react-swipeable";
import { useRouter } from 'next/router';
import Header from "@/app/Head/Head";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import Batch from "@/app/batch/batch";
import a2 from "../db/batches/a2.json";
import Navigate from "@/app/navigate/navigate";
import './globals.css';

export default function Home() {

    const router = useRouter();

    const [data, setData] = useState(a2);

    const [date, setDate] = useState(new Date());

    const [weekDay, setWeekDay] = useState(date.getDay())

    const [classes, setClasses] = useState(data[weekDay]);

    const [section, setSection] = useState("a");

    const getClasses = (day: number) => {
        const classList = data[day];
        setClasses(classList);
    }

    useEffect( () => {
        setClasses(data[weekDay]);
    }, [data])
    
    useEffect(() => {
        if(!router.isReady) return;
        setSection(router.query.section as string);
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
                <Batch setData={setData} section={section}/>
            </div>
            <Navigate handlePrev={handlePrev} handleNext={handleNext} />
            <Schedule classes={classes.classes} day={classes.day} date={date} />
        </div>
    )
}
