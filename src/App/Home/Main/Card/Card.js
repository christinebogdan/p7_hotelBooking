import "./Card.scss";

export function Card(props) {
  return (
    <div className="card" key={props.id}>
      <img src={props.cover} alt="" className="card__img"></img>
      <div className="card__layer"></div>
      <h2 className="card__title">{props.title}</h2>
    </div>
  );
}
