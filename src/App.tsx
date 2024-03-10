import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import Line from "./Components/Line";
import { ILine } from "./Interfaces";

const App: FC = () => {

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
    console.log(lineList);
    setLine("");
    setDate(nowDate);
  };

  return (
    <div>
      <div className="header">
        <p>One Day One Line</p>
      </div>
      <div className="main">
        <div className="inputContainer">
          <div className="dateContainer">
            <p>Date</p>
            <input type="date" value={date?.toISOString().substring(0, 10)} onChange={handleDateChange}/>
          </div>
          <div className="lineContainer">
            <p>Line of Today</p>
            <textarea className="tbLine" placeholder="오늘의 문장을 입력해주세요" onChange={handleTextChange} value={line}/>
          </div>
        </div>
        <button className="btnSave" onClick={addLine}>Enter</button>
        <div className="todoContainer">
          <div>
            <p>History</p>
          </div>
          <div>
            {lineList.map((line: ILine, key: number) => {
              return <Line key={key} line={line} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
