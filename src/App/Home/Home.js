import "./Home.scss";
import { Hero } from "./Hero/Hero";
import { Main } from "./Main/Main";

export function Home() {
  return (
    <div className="home">
      <Hero />
      <Main />
    </div>
  );
}
