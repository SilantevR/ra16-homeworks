export default function Walk(props) {
  return (
    <div className="walk">
      <div className="walk_date">{props.date}</div>
      <div className="walk_km">{props.km}</div>
      <button
        id={props.id}
        data-date={props.date}
        data-km={props.km}
        type="button"
        className="edite_walk"
        onClick={props.onEdit}
      >
        &#9998;
      </button>
      <button
        id={props.id}
        type="button"
        className="delete_walk"
        onClick={props.onDel}
      >
        &#10008;
      </button>
    </div>
  );
}
