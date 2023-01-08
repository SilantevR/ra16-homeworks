import Card from "./Card";
import logo from "./logo.svg";

export default function Cards(props) {
  return (
    <>
      <Card
        title={"Card title"}
        text={
          "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
        link={"/"}
        button={"Go somewhere"}
      >
        <img src={logo} className="card-img-top" alt="logo" />
      </Card>
      <Card
        title={"Card title"}
        text={
          "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
        link={"/"}
        button={"Go somewhere"}
      />
    </>
  );
}
