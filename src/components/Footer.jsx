import footerTopLinksData from "../data/footerTopLinksData";
import footerBottomSocialsIcons from "../data/footerBottomSocialsIcons";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div>
            {/* FOOTER TOP */}
            <div className="footer-top">
              <div>
                {footerTopLinksData.slice(0, 2).map((ftCategory) => {
                  return (
                    <ul key={ftCategory.id}>
                      <h4>{ftCategory.category}</h4>

                      {ftCategory.items.map((link) => {
                        return (
                          <li key={link.id}>
                            <a href={link.url}>{link.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
              </div>
              {footerTopLinksData.slice(2, 4).map((ftCategory) => {
                return (
                  <div key={ftCategory.id}>
                    <ul>
                      <h4>{ftCategory.category}</h4>

                      {ftCategory.items.map((link) => {
                        return (
                          <li key={link.id}>
                            <a href={link.url}>{link.title}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
              <img
                className="footer-top--logo"
                src="../img/dc-logo-bg.png"
                alt="Logo grande DC Comics"
              />
            </div>
          </div>
        </div>
        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom--elements">
              <button className="footer-bottom--btn">SIGN-UP NOW!</button>
              <div className="footer-bottom--social">
                <h4>FOLLOW US</h4>
                <ul>
                  {footerBottomSocialsIcons.map((icon) => {
                    return (
                      <li key={icon.id}>
                        <a href={icon.url}>
                          <img src={icon.image} alt={icon.alt} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
