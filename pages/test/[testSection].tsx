"use client";
import { useState, useEffect, use } from "react";
import { useSwipeable } from "react-swipeable";
import { useRouter } from 'next/router';
import Header from "@/app/Head/Head";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import a1 from "../../db/testBatches/a.json";
import Navigate from "@/app/navigate/navigate";
import '../globals.css';

export default function Home() {

    const router = useRouter();

    const [date, setDate] = useState(new Date());
    const [fakeDate, setFakeDate] = useState(date);

    const [weekDay, setWeekDay] = useState(date.getDay())
    const [fakeWeekDay, setFakeWeekDay] = useState(weekDay);

    const [data, setData] = useState(a1);
    const [classes, setClasses] = useState(data[weekDay]);
    const [section, setSection] = useState("a");

    useEffect(() => {
        setClasses(data[fakeWeekDay]);
    }, [data, fakeWeekDay])

    useEffect(() => {
        if (!router.isReady) return;

        setSection(router.query.testSection as string);
        setData(require(`../../db/testBatches/${section}.json`));

    }, [router.isReady, router.query.testSection, weekDay, section])

    const handleNext = () => {
        fakeDate.setDate(date.getDate() + 1);
        setFakeWeekDay((fakeWeekDay + 1) % 7);
    }

    const handlePrev = () => {
        fakeDate.setDate(date.getDate() - 1);
        setFakeWeekDay((fakeWeekDay + 6) % 7);
    }

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handlePrev()
    });

    return (
        <div {...swipeHandlers} style={{ height: "100vh" }}>
            <Header />
            <h1 className={"title"}>TimeTrack</h1>
            <h2 className={"info"}><a href="https://github.com/Xyncross1111/timetrack">Repo</a></h2>
            <h1 className={"info"}><a href={`https://timetrackk.netlify.app/${section}`}>Access Regular TimeTable</a></h1>
            <div className="datetime-batch-container">
                <Datetime date={date} />
            </div>
            <Navigate handlePrev={handlePrev} handleNext={handleNext} />
            {parseInt(classes.date) == fakeDate.getDate() && classes.classes.length != 0 ?
                <Schedule classes={classes.classes} day={classes.day} date={fakeDate} /> :
                <h1 className="noclass">There are no tests on {date.toDateString()}.</h1>}
        </div>
    )
}
