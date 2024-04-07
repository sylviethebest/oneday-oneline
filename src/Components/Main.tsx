import '../App.css';
import { IData, ILine } from "../Interfaces";
import Line from "./Line";

const Main = ({text, date, dateEvent, textEvent, addLine, lineList}:IData) => {
  return (
    <div className="main">
    <div className="inputContainer">
      <div className="dateContainer">
        <p>Date</p>
        <input type="date" value={date?.toISOString().substring(0, 10)} onChange={dateEvent} />
      </div>
      <div className="lineContainer">
        <p>Line of Today</p>
        <textarea className="tbLine" placeholder="오늘의 문장을 입력해주세요"  value={text} onChange={textEvent}/>
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
  );
}
export default Main;