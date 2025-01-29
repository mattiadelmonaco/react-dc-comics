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
              {footerTopLinksData.map((ftCategory) => {
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
              {/* <div>
                <ul>
                  <h4>DC COMICS</h4>
                  <li>
                    <a href="#">Characters</a>
                  </li>
                  <li>
                    <a href="#">Comics</a>
                  </li>
                  <li>
                    <a href="#">Movies</a>
                  </li>
                  <li>
                    <a href="#">TV</a>
                  </li>
                  <li>
                    <a href="#">Games</a>
                  </li>
                  <li>
                    <a href="#">Videos</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>

                <ul>
                  <h4>SHOP</h4>
                  <li>
                    <a href="#">Shop DC</a>
                  </li>
                  <li>
                    <a href="#">Shop DC Collectibles</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <h4>DC</h4>

                  <li>
                    <a href="#">Terms Of Use</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy (New)</a>
                  </li>
                  <li>
                    <a href="#">Ad Choises</a>
                  </li>
                  <li>
                    <a href="#">Advertising</a>
                  </li>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Subscriptions</a>
                  </li>
                  <li>
                    <a href="#">Talent Workshops</a>
                  </li>
                  <li>
                    <a href="#">CPSC Certificates</a>
                  </li>
                  <li>
                    <a href="#">Ratings</a>
                  </li>
                  <li>
                    <a href="#">Shop Help</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <h4>SITES</h4>

                  <li>
                    <a href="#">DC</a>
                  </li>
                  <li>
                    <a href="#">MAD Magazine</a>
                  </li>
                  <li>
                    <a href="#">DC Kids</a>
                  </li>
                  <li>
                    <a href="#">DC Universe</a>
                  </li>
                  <li>
                    <a href="#">DC Power Visa</a>
                  </li>
                </ul>
              </div> */}
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
