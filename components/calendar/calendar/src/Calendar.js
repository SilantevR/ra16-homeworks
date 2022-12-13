import './App.css';

function Calendar(props) {
  const days = {
    0: "воскресенье",
    1: "понедельник",
    2: "вторник",
    3: "среда",
    4: "четверг",
    5: "пятница",
    6: "суббота"
  }
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
  }
  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  const daysBeforeMonth = [];
  const daysAfterMonth = [];
  const daysOfMonth = [];
  const firstWeekDays = [];
  const secondWeekDays = [];
  const thirdWeekDays = [];
  const fourthWeekDays = [];
  const fivethWeekDays = [];

  const firstDayOfMonth = new Date(props.date.getFullYear(), props.date.getMonth(), 1).getDay()
  const lastDayOfMonth = new Date(props.date.getFullYear(), props.date.getMonth()+1, 0).getDay()
  if (firstDayOfMonth > 1){
    for(let i = firstDayOfMonth - 1; i >= 1; i--){
      daysBeforeMonth.push(new Date(props.date.getFullYear(), props.date.getMonth(), -i+1).getDate())
    }
  }if (firstDayOfMonth < 1){
    for(let i = 6; i >= 1; i--){
      daysBeforeMonth.push(new Date(props.date.getFullYear(), props.date.getMonth(), -i+1).getDate())
    }
  }

  if (lastDayOfMonth <= 6 && lastDayOfMonth !== 0){
    for(let i = 1; i <= (Object.keys(days).length - lastDayOfMonth); i++){
      daysAfterMonth.push(new Date(props.date.getFullYear(), props.date.getMonth()+1, i).getDate())
    }
  }

  for(let i = 1; i <= getLastDayOfMonth(props.date.getFullYear(), props.date.getMonth()); i++){
    daysOfMonth.push(i)
  }

  const firstWeekDaysCount = Object.keys(days).length - firstDayOfMonth;
  for(let i = 0; i <= firstWeekDaysCount; i++){
    firstWeekDays.push(daysOfMonth[i])
  }
  for(let i = firstWeekDaysCount+1; i <= daysOfMonth.length; i++){
    if(i <= firstWeekDaysCount+7){
      secondWeekDays.push(daysOfMonth[i])
    }
    if(i > firstWeekDaysCount+7 && i <= firstWeekDaysCount+14){
      thirdWeekDays.push(daysOfMonth[i])
    }
    if(i > firstWeekDaysCount+14 && i <= firstWeekDaysCount+21){
      fourthWeekDays.push(daysOfMonth[i])
    }
    if(i > firstWeekDaysCount+21 && i <= firstWeekDaysCount+28 && daysOfMonth[i]){
      fivethWeekDays.push(daysOfMonth[i])
    }

  }

  return ( 
    <div className="App">    
      <div className="ui-datepicker">
          <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{days[props.date.getDay()]}</div>
            <div className="ui-datepicker-material-date">
              <div className="ui-datepicker-material-day-num">{props.date.getDate()}</div>
              <div className="ui-datepicker-material-month">{months[props.date.getMonth()]}</div>
              <div className="ui-datepicker-material-year">{props.date.getFullYear()}</div>
            </div>
          </div>
          <div className="ui-datepicker-header">
            <div className="ui-datepicker-title">
              <span className="ui-datepicker-month">{months[props.date.getMonth()]}</span>&nbsp;<span className="ui-datepicker-year">{props.date.getFullYear()}</span>
            </div>
          </div>
          <table className="ui-datepicker-calendar">
            <colgroup>
              <col/>
              <col/>
              <col/>
              <col/>
              <col/>
              <col className="ui-datepicker-week-end"/>
              <col className="ui-datepicker-week-end"/>
            </colgroup>
            <thead>
              <tr>
                <th scope="col" title="Понедельник">Пн</th>
                <th scope="col" title="Вторник">Вт</th>
                <th scope="col" title="Среда">Ср</th>
                <th scope="col" title="Четверг">Чт</th>
                <th scope="col" title="Пятница">Пт</th>
                <th scope="col" title="Суббота">Сб</th>
                <th scope="col" title="Воскресенье">Вс</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {daysBeforeMonth.map(day => {
                  return (<DayAnotherMonth day={day}/>)
                })}
                {firstWeekDays.map(day => {
                  return (<Day day={day}/>)
                })}
              </tr>
              <tr>
              {secondWeekDays.map(day => {
                  return (<Day day={day}/>)
                })}
              </tr>
              <tr>
              {thirdWeekDays.map(day => {
                  return (<Day day={day}/>)
                })}
              </tr>
              <tr>
              {fourthWeekDays.map(day => {
                  return (<Day day={day}/>)
                })}
              </tr>
              <tr>
              {fivethWeekDays.map(day => {
                  return (<Day day={day}/>)
                })}
              {daysAfterMonth.map(day => {
                  return (<DayAnotherMonth day={day}/>)
                })}
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  );
}

/*function String (props){
  return (
    <tr>
      {props.map(day => (<Day day={day}/>)
      )}
    </tr>
  )
}*/

function Day (props) {
  let isToday = false;
  if (props.day === new Date().getDate()){
    isToday = true
  }
  return (
    <td className={isToday?"ui-datepicker-today":null}>{props.day}</td>
  );
}
function DayAnotherMonth (props) {
  return (
    <td className="ui-datepicker-other-month">{props.day}</td>
  );
}
export default Calendar;


