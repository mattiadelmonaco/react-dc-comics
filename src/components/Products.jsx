import productsData from "../data/productsData";

export default function Products() {
  return (
    <>
      <section className="products">
        <div className="container">
          <nav>
            <ul>
              {productsData.map((product) => {
                return (
                  <li key={product.id}>
                    <a href={product.url}>
                      <img
                        className="products--icons"
                        src={product.image}
                        alt={product.alt}
                      />
                      <h4>{product.title}</h4>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
