import React from "react";

const content = "--> Content goes here <--";

export default function Main() {
  return (
    <>
      <main>
        <div className="container">
          <div className="main--h3">
            <h3>{content}</h3>
          </div>
        </div>
      </main>
    </>
  );
}
