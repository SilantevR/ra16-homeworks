import { Day } from "./Day";
import { DayAnotherMonth } from "./DayAnotherMonth";

export function LastWeek({ date, week, daysAfterMonth }) {
  return (
    <tr>
      {week.map((day) => {
        return <Day key={day} date={date} day={day} />;
      })}
      {daysAfterMonth.map((day) => {
        return <DayAnotherMonth key={day} day={day} />;
      })}
    </tr>
  );
}
