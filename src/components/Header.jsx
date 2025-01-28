import React from "react";

export default function Header() {
  return (
    <>
      <header>
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
            <li>
              <a href="#">CHARACTERS</a>
            </li>
            <li>
              <a className="selected" href="#">
                COMICS
              </a>
            </li>
            <li>
              <a href="#">MOVIES</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">GAMES</a>
            </li>
            <li>
              <a href="#">COLLECTIBLES</a>
            </li>
            <li>
              <a href="#">VIDEOS</a>
            </li>
            <li>
              <a href="#">FANS</a>
            </li>
            <li>
              <a href="#">NEWS</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
