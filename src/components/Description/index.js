import React from "react";
import "./styles.scss";

const Description = () => (
  <section class="description">
    <p>
      Record Roulette allows sample based producers to create randomized
      playlists generated from their favourite YouTube vinyl rip upload channels
      (or any other channels).
    </p>
    <p>
      This adds an element of randomness to the sampling process and allows
      producers to find great samples faster.
    </p>
    <p>How to use:</p>
    <ol>
      <li>
        Add up to five YouTube channels using the Channel's URL. Custom URLs
        (https://www.youtube.com/c/username) are not currently supported.
      </li>
      <li>Click the "Get Videos" button.</li>
      <li>Skip to the next video by clicking the "Next Video" button.</li>
    </ol>
    <p>
      For any questions, comments, or feature requests, email{" "}
      <a href="mailto:djuta.software@gmail.com">djuta.software@gmail.com</a>.
    </p>
    <p>
      <a
        href="https://www.vecteezy.com/free-vector/icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        Icon Vectors by Vecteezy
      </a>
    </p>
  </section>
);

export default Description;
