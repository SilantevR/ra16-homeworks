import { Day } from "./Day";

export function Week({ date, week }) {
  return (
    <tr>
      {week.map((day) => {
        return <Day key={day} date={date} day={day} />;
      })}
    </tr>
  );
}
