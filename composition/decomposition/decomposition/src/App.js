import "./App.css";
import logo from "./logo.svg";
import News from "./News";
import Rates from "./Rates";
import Search from "./Search";
import Banner from "./Banner";
import Widgets from "./Widgets";

const newsTitles = ["Сейчас", "Интересное", "Рекомендуем"];
const newsItems = [
  {
    id: 1,
    link: "/",
    icon: logo,
    descr: "блаблабла...",
    text: "блаблабла...",
    titlesList: "Сейчас",
  },
  {
    id: 2,
    link: "/",
    icon: logo,
    descr: "блаблабла...",
    text: "блаблабла...",
    titlesList: "Сейчас",
  },
];
const ratesItems = [
  {
    id: 1,
    cur: "USD",
    diff: "60",
  },
  {
    id: 2,
    cur: "EUR",
    diff: "60",
  },
];
const searchTitles = [
  { title: "Видео", link: "/" },
  { title: "Картинки", link: "/" },
  { title: "Новости", link: "/" },
  { title: "Карты", link: "/" },
];
const date = new Date();
const dayLink = {
  title: "фаза луны сегодня",
  link: "/",
};
const banner = {
  link: "/",
  url: logo,
  title: "реклама",
};
const widgetsItems = [
  {
    id: "1",
    title: "Погода",
    content: "+20",
  },
  {
    id: "2",
    title: "Посещаемое",
    content: "...........",
  },
  {
    id: "3",
    title: "Телепрограмма",
    content: "...........",
  },
  {
    id: "4",
    title: "Карта",
    content: "...........",
  },
  {
    id: "5",
    title: "Эфир",
    content: "...........",
  },
];

function App() {
  const onSelectMore = (block) => {
    alert(block);
  };

  return (
    <div className="App">
      <News titles={newsTitles} items={newsItems} date={date} />
      <Rates items={ratesItems} onSelectMore={onSelectMore} />
      <Search
        titles={searchTitles}
        dayLink={dayLink}
        onSelectMore={onSelectMore}
      />
      <Banner item={banner} />
      <Widgets items={widgetsItems} />
    </div>
  );
}

export default App;
