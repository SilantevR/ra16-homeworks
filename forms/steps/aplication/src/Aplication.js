import { useState } from "react";
import Walk from "./Walk";

export default function Aplication() {
  const [form, setForm] = useState({
    date: "",
    km: "",
    id: 1,
    listOfWalks: [],
    isEdite: false,
    editeId: null,
  });

  const handleNameChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let walk = {};
    walk.date = form.date;
    walk.km = form.km;
    let walks;
    let newId;
    if (!form.isEdite) {
      walk.id = form.id;
      walks = form.listOfWalks;
      newId = form.id + 1;
    } else {
      walk.id = form.editeId;
      walks = form.listOfWalks.filter((item) => {
        return item.id !== Number(walk.id);
      });
      newId = form.id;
    }
    walks.push(walk);
    walks.sort((a, b) => {
      let aEuroDate = a.date.split(".");
      let aUsDate = aEuroDate.reverse().join("-");
      let bEuroDate = b.date.split(".");
      let bUsDate = bEuroDate.reverse().join("-");
      return new Date(bUsDate) - new Date(aUsDate);
    });
    setForm((prevForm) => ({
      ...prevForm,
      date: "",
      km: "",
      id: newId,
      listOfWalks: walks,
      isEdite: false,
      editeId: null,
    }));
  };

  const handleDelete = (e) => {
    const { id } = e.target;
    let walks = form.listOfWalks;
    let list = walks.filter((item) => {
      return item.id !== Number(id);
    });
    setForm((prevForm) => ({
      ...prevForm,
      listOfWalks: list,
    }));
  };

  const handleEdit = (e) => {
    const { id } = e.target;
    const { date, km } = e.target.dataset;

    setForm((prevForm) => ({
      ...prevForm,
      date: date,
      km: km,
      isEdite: true,
      editeId: id,
    }));
  };

  return (
    <div className="aplication">
      <form className="form" method="post" name="list" onSubmit={handleSubmit}>
        <lable htmlFor="date">Дата</lable>
        <input
          id="date"
          name="date"
          value={form.date}
          onChange={handleNameChange}
        />
        <lable htmlFor="km">км</lable>
        <input id="km" name="km" value={form.km} onChange={handleNameChange} />
        <button type="submit">OK</button>
      </form>
      <div className="list">
        {form.listOfWalks.map((item) => {
          return (
            <Walk
              key={item.id}
              id={item.id}
              date={item.date}
              km={item.km}
              onDel={handleDelete}
              onEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
}
