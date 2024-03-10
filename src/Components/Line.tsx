import React from "react";
import { ILine } from "../Interfaces";

interface Props {
  line: ILine;
}

const Line = ({line}: Props) => {
  return (
  <div className="line">
    <div className="content">
      <span className="spanDate">{line.lineDate}</span>
      <span> </span>
      <span className="spanText">{line.lineText}</span>
    </div>
  </div>
  );
}
export default Line;