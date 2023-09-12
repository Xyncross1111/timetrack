"use client";
import Schedule from "@/app/schedule/schedule";
import Datetime from "@/app/datetime/datetime";
import {useState} from "react";
import data from "../db/classlist.json";

export default function Home() {

    const classList = data[0].classes;

    const [classes, setClasses] = useState(classList);

    return (
      <>
          <h1>TimeTrack</h1>
          <Datetime/>
          <Schedule classes={classes} />
      </>
  )
}
