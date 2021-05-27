import "./Main.scss";
import { Card } from "./Card/Card";
import json from "../../../data.json";

export function Main() {
  console.log(json);

  return (
    <div className="home__main">
      {json.map((accommodation) => (
        <Card
          title={accommodation.title}
          cover={accommodation.cover}
          key={accommodation.id}
        />
      ))}
    </div>
  );
}

// export function Main() {
//   const [data, setData] = useState({ data: [] });

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch("./data.json").then((res) => res.json());
//       console.log(data);
//       setData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="home__main">
//       <Card />
//     </div>
//   );
// }
