import comics from "../data/comicsData";

export default function comic() {
  return (
    <section>
      <ul className="comics">
        {comics.map((comic) => {
          return (
            <li key={comic.id} className="card">
              <a href="#">
                <div className="comic">
                  <img src={comic.thumb} alt={comic.title} />
                </div>
                <h4>{comic.series.toUpperCase()}</h4>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
