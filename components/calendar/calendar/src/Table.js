import { FirstWeek } from "./FirstWeek";
import { LastWeek } from "./LastWeek";
import { Week } from "./Week";

export function Table({ date, daysBeforeMonth, daysAfterMonth, daysOfMonth }) {
  const firstWeekDaysCount = 7 - daysBeforeMonth.length;
  const firstWeekDays = daysOfMonth.slice(0, firstWeekDaysCount);
  const weeks = [];
  for (let i = firstWeekDaysCount; i < daysOfMonth.length; i += 7) {
    weeks.push(daysOfMonth.slice(i, i + 7));
  }
  return (
    <table className="ui-datepicker-calendar">
      <colgroup>
        <col />
        <col />
        <col />
        <col />
        <col />
        <col className="ui-datepicker-week-end" />
        <col className="ui-datepicker-week-end" />
      </colgroup>
      <thead>
        <tr>
          <th scope="col" title="Понедельник">
            Пн
          </th>
          <th scope="col" title="Вторник">
            Вт
          </th>
          <th scope="col" title="Среда">
            Ср
          </th>
          <th scope="col" title="Четверг">
            Чт
          </th>
          <th scope="col" title="Пятница">
            Пт
          </th>
          <th scope="col" title="Суббота">
            Сб
          </th>
          <th scope="col" title="Воскресенье">
            Вс
          </th>
        </tr>
      </thead>
      <tbody>
        <FirstWeek
          date={date}
          daysBeforeMonth={daysBeforeMonth}
          firstWeekDays={firstWeekDays}
        />
        {weeks.map((week, index) => {
          if (week.length < 7) {
            return (
              <LastWeek
                key={index}
                date={date}
                week={week}
                daysAfterMonth={daysAfterMonth}
              />
            );
          }
          return <Week key={index} date={date} week={week} />;
        })}
      </tbody>
    </table>
  );
}
