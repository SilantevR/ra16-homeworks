import { Day } from "./Day";
import { DayAnotherMonth } from "./DayAnotherMonth";

export function FirstWeek({ date, daysBeforeMonth, firstWeekDays }) {
  return (
    <tr>
      {daysBeforeMonth.map((day) => {
        return <DayAnotherMonth key={day} day={day} />;
      })}
      {firstWeekDays.map((day) => {
        return <Day key={day} date={date} day={day} />;
      })}
    </tr>
  );
}
