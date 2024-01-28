"use client";
import {useState, useEffect} from "react";
import { useRouter } from 'next/router';
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import Navigate from "@/app/navigate/navigate";
import './globals.css';

interface classList {
    classes: [];
    day: string;
}

export default function Home() {

    const router = useRouter();
    const [data, setData] = useState() as any;

    let currDate: Date = new Date();
    const [date, setDate] = useState(currDate);
    const [weekDay, setWeekDay] = useState(currDate.getDay())

    const [classes, setClasses] = useState({
        "day" : " ",
        "classes" : []
      });

    useEffect(() => {

        if(!router.isReady) return;

        const data_ = require(`../db/${router.query.section}.json`);
        setData(data_)
        setClasses(data_[weekDay])

    }, [router.query.section, router.isReady, weekDay])

    const getClasses = (day: number) => {
        const classList = data[day];
        setClasses(classList);
    }

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
        <h1 className={"title"}>TimeTrack</h1>
        <h2 className={"info"}><a href="https://github.com/Xyncross1111/timetrack">Repo</a></h2>
        <Datetime date={date}/>
        <Navigate handlePrev={handlePrev} handleNext={handleNext} />
        <Schedule classes={classes.classes} day={classes.day} date={date} />
    </>
  )
}
