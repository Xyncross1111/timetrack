"use client";
import {useState} from "react";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import Navigate from "@/app/navigate/navigate";
import data from "../db/classlist.json";

export default function Home() {

    const date = new Date();
    const [day, setDay] = useState(date.getDay())

    const classList = data[day].classes;
    const [classes, setClasses] = useState(classList);

    const getClasses = (day: number) => {
        const classList = data[day].classes;
        setClasses(classList);
    }

    const handleNext = () => {

        let currDay = day

        if(day === 6) currDay = 0;
        else currDay++;
        getClasses(currDay);

        setDay(currDay);
    }

    const handlePrev = () => {

        let currDay = day;

        if(day === 0) currDay = 6;
        else currDay--;
        getClasses(currDay);

        setDay(currDay);
    }



    return (
      <>
          <h1>TimeTrack</h1>
          <h2 className={"info"}>By <a href="https://www.linkedin.com/in/anasmkhan/" target="_blank">Anas Khan</a>, <a href="https://www.linkedin.com/in/adityagiri3600/" target="_blank">Aditya Giri</a></h2>
          <Datetime/>
          <Navigate handlePrev={handlePrev} handleNext={handleNext} />
          <Schedule classes={classes} />
      </>
  )
}
