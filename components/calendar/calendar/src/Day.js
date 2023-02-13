export function Day({ date, day }) {
  let isToday = false;
  if (day === date.getDate()) {
    isToday = true;
  }
  return <td className={isToday ? "ui-datepicker-today" : null}>{day}</td>;
}
