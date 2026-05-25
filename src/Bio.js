import React from "react";

function Bio() {
  return (
    <div className="content">
      <div className="bio">
        <p>
          <bold className="bold">Eric</bold> is a visual artist, writer and
          occasional performer.
        </p>
        <p>
          From 2011 to 2017, Eric was a contributing guest blogger for the
          Seattle performance venue <bold className="bold">On The Boards</bold>.
          Challenged to synthesize and communicate his written impressions of
          regional and touring performance to an audience of arts professionals,
          he acted as a first look enthusiast.{" "}
        </p>
        <p>
          Besides completing his own memoir, Eric has assisted in ghost writing
          a short biography of audio engineering legend{" "}
          <bold className="bold">Bob Carver</bold>.
        </p>
        <p>
          Eric has had a short personal essay published in Seattle art magazine:{" "}
          <bold className="bold">Bona Fide</bold>, worked as a graphic designer
          for the alternative newspaper{" "}
          <bold className="bold">The Santa Fe Weekly</bold>, been a freelance
          jacket designer for{" "}
          <bold className="bold">Lighthorse Publishing NY</bold>, and received
          commissions for his painting, illustration and design.
        </p>
        <p>
          As a performer, Eric has collaborated with several artists including:{" "}
          <bold className="bold">
            Wade Madsen, Georgia Ragsdale, Peggy Piacenza, Nancy Cranbourne,
            Cherdonna Shinatra, Dayna Hansen, Wes Hurley, Diana Cardiff, The
            Film Forum
          </bold>{" "}
          and <bold className="bold">OTB</bold>.
        </p>
      </div>
    </div>
  );
}

export default Bio;
