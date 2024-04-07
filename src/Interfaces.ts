export interface ILine {
  lineText: string;
  lineDate: string;
}

// 2024.04.07, added IData Interface Class
export interface IData {
  text: string;
  date: Date;
  dateEvent: React.ChangeEventHandler<HTMLInputElement>;
  textEvent: React.ChangeEventHandler<HTMLTextAreaElement>;
  addLine: React.MouseEventHandler<HTMLElement>;
  lineList: ILine[];
}