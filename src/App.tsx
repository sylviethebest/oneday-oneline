import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import { ILine, IData } from "./Interfaces";

import React, { FC, ChangeEvent, useState } from 'react';


const App = () => {

  function makeDate(date: Date) {
    return new Date(date.getTime());
  }
  const nowDate: Date = makeDate(new Date());

  const [line, setLine] = useState<string>("");
  const [date, setDate] = useState<Date>(nowDate);
  const [lineList, setLineList] = useState<ILine[]>([]);

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>):void => {
    setLine(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateString = event.target.value;
    const newDate = new Date(dateString);
    setDate(newDate);
    console.log(newDate);
  };

  const addLine = (): void => {
    const newLine = {lineText: line, lineDate: date?.toISOString().substring(0, 10)};
    setLineList([...lineList, newLine]);
    setLine("");
    setDate(nowDate);
  };

  return (
    <div>
      <Header />
      <Main
        date={date}
        text={line} 
        dateEvent={handleDateChange} 
        textEvent={handleTextChange} 
        addLine={addLine} 
        lineList={lineList}
        />
    </div>
  );
}

export default App;
