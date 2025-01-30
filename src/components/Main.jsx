import Products from "./Products.jsx";
import Comic from "./Comic.jsx";

const content = "--> Content goes here <--";

export default function Main() {
  return (
    <>
      <main>
        <div className="container">
          <div className="comics-elements">
            <button className="comics-elements--btn">CURRENT SERIES</button>

            <Comic />
          </div>
          <button className="btn-load-more">LOAD MORE</button>
        </div>
        <Products />
      </main>
    </>
  );
}
