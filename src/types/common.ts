export type LineItem = {
  length: string;
  breadth: string;
  height: string;
};

export type Inputs = {
  pass: string;
  no: string;
  book: string;
  date: string;
  time: string;
  mining: string;
  auction: string;
  purchaser: string;
  destination: string;
  route: string;
  minor: string;
  permit: string;
  date2: string;
  quantity: string;
  meter: string;
  cum: string;
  ton: string;
  tare: string;
  mineral: string;
  lineItems: LineItem[];
};
