"use client";
import {useState} from "react";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import Navigate from "@/app/navigate/navigate";
import data from "../db/classlist.json";

export default function Home() {

    let currDate: Date = new Date();

    const [date, setDate] = useState(currDate);
    const [weekDay, setWeekDay] = useState(currDate.getDay())

    const classList = data[weekDay];
    const [classes, setClasses] = useState(classList);

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
          <h2 className={"info"}>By <a href="https://www.linkedin.com/in/anasmkhan/" target="_blank">Anas Khan</a>, <a href="https://www.linkedin.com/in/adityagiri3600/" target="_blank">Aditya Giri</a></h2>
          <Datetime date={date}/>
          <Navigate handlePrev={handlePrev} handleNext={handleNext} />
          <Schedule classes={classes.classes} day={classes.day} date={date} />
      </>
  )
}
