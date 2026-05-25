import React, { useState } from "react";
import "./App.css";
import { BookPics } from "./Images/Images";

function Book() {
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);

  const DefaultSplash = () => {
    return (
      <>
        <div className="image-container">
          <img
            onClick={() => setShow(true)}
            src={BookPics[page].image}
            alt={BookPics[page].alt}
            className="image"
          ></img>
        </div>
        <div className="text-arrow-container">
          <div className="arrow">
            {page !== 1 ? (
              <span onClick={() => setPage(page - 1)}>&lt;</span>
            ) : (
              <span></span>
            )}
          </div>
          <div className="text">{BookPics[page].text}</div>
          <div className="arrow">
            {page !== 4 ? (
              <span onClick={() => setPage(page + 1)}>&gt;</span>
            ) : (
              <span></span>
            )}
          </div>
        </div>
      </>
    );
  };

  const BookCover = () => {
    return (
      <>
        <div className="bookBlurbs">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="arrow">
                {page !== 1 ? (
                  <span onClick={() => setPage(page - 1)}>&lt;</span>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="text" style={{ textAlign: "center" }}>
                <div>A memoir</div>
                <div>April 25, 2023</div>
                <div>from Dunede Press</div>
              </div>
            </div>
          </div>
          <div className="blurb1">
            <div>
              “The author’s early home life is nothing like what we find in most
              coming-out/coming-of-age stories. If you expect ‘normal’, you’ll
              be disappointed.”
            </div>
            <div style={{ marginTop: "20px", textAlign: "justify" }}>
              —Eleanor Cooney, author of Court of the Lion and Death in Slow
              Motion
            </div>
          </div>
        </div>
        <div className="image-container book-image">
          <img
            onClick={() => setShow(true)}
            src={BookPics[page].image}
            alt={BookPics[page].alt}
            className="image"
          ></img>
          <a
            href="https://bookshop.org/p/books/beaujolais-in-my-blood-growing-up-gay-and-well-fed-in-a-family-run-french-restaurant-eric-neil-pitsenbarger/19812002?ean=9780991525478"
            className="pre-order"
          >
            Purchase here!
          </a>
        </div>
        <div className="blurb2">
          <div style={{ textAlign: "justify" }}>
            “A revealing account behind Mendocino’s most well-known restaurant.
            Eric presents a rich kaleidoscope reflecting a complex family story
            intermingled with the improbable creation of a restaurant dream.
            From early years through adulthood, his perspective reflects
            sensitivity, insight, and wisdom that are at time poignant, caring,
            hilarious, and ultimately satisfying.”
          </div>
          <div style={{ marginTop: "20px", textAlign: "justify" }}>
            —Margaret Fox, author of Cafe Beaujolais and Morning Food
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container-book">
      <div style={{ display: "none" }}>
        <img src={BookPics[1].image} alt={BookPics[1].alt}></img>
        <img src={BookPics[2].image} alt={BookPics[2].alt}></img>
        <img src={BookPics[3].image} alt={BookPics[3].alt}></img>
        <img src={BookPics[4].image} alt={BookPics[4].alt}></img>
      </div>
      <div
        className="lightbox-container"
        style={{ display: `${show === true ? "block" : "none"}` }}
        onClick={() => setShow(false)}
      >
        <div className="lightbox-x" onClick={() => setShow(false)}>
          x
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ height: "90%" }}
            src={BookPics[page].image}
            alt={BookPics[page].alt}
          ></img>
        </div>
      </div>
      <div className="book-content">
        {page !== 4 && <DefaultSplash />}
        {page === 4 && <BookCover />}
      </div>
    </div>
  );
}

export default Book;
