import headerNavbarData from "../data/headerNavbarData";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header--d-flex">
            <div>
              <a href="#">
                <img
                  className="header--logo"
                  src="../img/dc-logo.png"
                  alt="Logo DC Comics"
                />
              </a>
            </div>
            <nav>
              <ul>
                {headerNavbarData.map((navElm) => {
                  return (
                    <li key={navElm.id}>
                      <a
                        className={navElm.active ? "selected" : ""}
                        href={navElm.url}
                      >
                        {navElm.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
