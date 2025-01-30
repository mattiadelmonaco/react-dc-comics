import Products from "./Products.jsx";
import Comic from "./ComicWithoutPromps.jsx";
import ComicCard from "./ComicCard.jsx";
import comics from "../data/comicsData.js";

export default function Main() {
  return (
    <>
      <main>
        <div className="container">
          <div className="comics-elements">
            <button className="comics-elements--btn">CURRENT SERIES</button>
            <ul className="comics">
              {comics.map((card) => {
                return (
                  <ComicCard
                    id={card.id}
                    title={card.title}
                    thumb={card.thumb}
                    series={card.series}
                  />
                );
              })}
            </ul>
            {/* <Comic /> */}
          </div>
          <button className="btn-load-more">LOAD MORE</button>
        </div>
        <Products />
      </main>
    </>
  );
}
