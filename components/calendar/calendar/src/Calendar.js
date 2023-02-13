import "./App.css";
import { Table } from "./Table";

function Calendar({ date }) {
  const days = {
    0: "воскресенье",
    1: "понедельник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "суббота",
  };
  const months = {
    0: "январь",
    1: "февраль",
    2: "март",
    3: "апрель",
    4: "май",
    5: "июнь",
    6: "июль",
    7: "август",
    8: "сентябрь",
    9: "октябрь",
    10: "ноябрь",
    11: "декабрь",
  };
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  const daysBeforeMonth = [];
  const daysAfterMonth = [];
  const daysOfMonth = [];

  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  const lastDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  if (firstDayOfMonth > 1) {
    for (let i = firstDayOfMonth - 1; i >= 1; i--) {
      daysBeforeMonth.push(
        new Date(date.getFullYear(), date.getMonth(), -i + 1).getDate()
      );
    }
  }
  if (firstDayOfMonth < 1) {
    for (let i = 6; i >= 1; i--) {
      daysBeforeMonth.push(
        new Date(date.getFullYear(), date.getMonth(), -i + 1).getDate()
      );
    }
  }

  if (lastDayOfMonth <= 6 && lastDayOfMonth !== 0) {
    for (let i = 1; i <= Object.keys(days).length - lastDayOfMonth; i++) {
      daysAfterMonth.push(
        new Date(date.getFullYear(), date.getMonth() + 1, i).getDate()
      );
    }
  }

  for (
    let i = 1;
    i <= getLastDayOfMonth(date.getFullYear(), date.getMonth());
    i++
  ) {
    daysOfMonth.push(i);
  }

  return (
    <div className="App">
      <div className="ui-datepicker">
        <div className="ui-datepicker-material-header">
          <div className="ui-datepicker-material-day">
            {days[date.getDay()]}
          </div>
          <div className="ui-datepicker-material-date">
            <div className="ui-datepicker-material-day-num">
              {date.getDate()}
            </div>
            <div className="ui-datepicker-material-month">
              {months[date.getMonth()]}
            </div>
            <div className="ui-datepicker-material-year">
              {date.getFullYear()}
            </div>
          </div>
        </div>
        <div className="ui-datepicker-header">
          <div className="ui-datepicker-title">
            <span className="ui-datepicker-month">
              {months[date.getMonth()]}
            </span>
            &nbsp;
            <span className="ui-datepicker-year">{date.getFullYear()}</span>
          </div>
        </div>
        <Table
          date={date}
          daysBeforeMonth={daysBeforeMonth}
          daysAfterMonth={daysAfterMonth}
          daysOfMonth={daysOfMonth}
        />
      </div>
    </div>
  );
}

export default Calendar;
