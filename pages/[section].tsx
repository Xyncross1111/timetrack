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

    
    const [date, setDate] = useState(new Date());
    const [fakeDate, setFakeDate] = useState(date);

    const [weekDay, setWeekDay] = useState(date.getDay())
    const [fakeWeekDay, setFakeWeekDay] = useState(weekDay);
    
    
    
    const [data, setData] = useState(a2);
    const [classes, setClasses] = useState(data[weekDay]);
    const [section, setSection] = useState("a");

    const sectionsWithNoBatch = ['o3', 'n3'];

    useEffect( () => {
        setClasses(data[fakeWeekDay]);
    }, [data, fakeWeekDay])
    
    useEffect(() => {
        if(!router.isReady) return;
        setSection(router.query.section as string);
    }, [router.isReady, router.query.section, weekDay])

    const handleNext = () => {
        fakeDate.setDate(date.getDate() + 1);
        setFakeWeekDay((fakeWeekDay+1)%7);
    }
    
    const handlePrev = () => {
        fakeDate.setDate(date.getDate() - 1);
        setFakeWeekDay((fakeWeekDay+6)%7);
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev()
    });

    return (
        <div {...swipeHandlers} style={{height: "100vh"}}>
            <Header />
            <h1 className={"title"}>TimeTrack</h1>
            <h2 className={"info"}><a href="https://github.com/Xyncross1111/timetrack">Repo</a></h2>
            <div className="datetime-batch-container">
                <Datetime date={date} />
                {!sectionsWithNoBatch.includes(section)&&<Batch setData={setData} section={section}/> }
            </div>
            <Navigate handlePrev={handlePrev} handleNext={handleNext} />
            <Schedule classes={classes.classes} day={classes.day} date={fakeDate} />
        </div>
    )
}
