import { useState } from "react";

export default function Converter() {
  const [form, setForm] = useState({
    hex: "#",
    rgb: "",
    bg: "#ede",
  });
  const convertHexToRgb = (e) => {
    const { name, value } = e.target;
    if (value.length < 7) {
      setForm((prevForm) => ({ ...prevForm, [name]: value, rgb: "" }));
    } else {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);
      if (result) {
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
          rgb: `rgb(${parseInt(result[1], 16)},${parseInt(
            result[2],
            16
          )},${parseInt(result[3], 16)})`,
          bg: value,
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          [name]: value,
          rgb: "Ошибка!",
          bg: "#ff0000",
        }));
      }
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="hex">
        <input
          id="hex"
          name="hex"
          value={form.hex}
          onChange={convertHexToRgb}
        />
        <div id="result" style={{ backgroundColor: `${form.bg}` }}>
          {form.rgb}
        </div>
      </label>
      <div className="bg" style={{ backgroundColor: `${form.bg}` }}></div>
    </form>
  );
}
