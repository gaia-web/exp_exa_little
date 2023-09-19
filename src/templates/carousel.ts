import { html } from "lit-html";
import "@gaia/garage";

type Props = {
  langHelper: (chinese: string, english: string) => string;
};

const Carousel = ({ langHelper }: Props) => html`
  <style>
    .carousel-item {
      position: relative;
    }

    .carousel-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      background: inherit;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      filter: invert(1) grayscale(1);
    }
  </style>

  <gaia-carousel timeout="5" style="height: 500px">
    <div
      class="carousel-item"
      style="background: url(https://picsum.photos/id/1/1440/900)"
    >
      <span class="carousel-text"> ${langHelper("一", "One")} </span>
    </div>
    <div
      class="carousel-item"
      style="background: url(https://picsum.photos/id/356/1440/900)"
    >
      <span class="carousel-text"> ${langHelper("二", "Two")} </span>
    </div>
    <div
      class="carousel-item"
      style="background: url(https://picsum.photos/id/2/1440/900)"
    >
      <span class="carousel-text"> ${langHelper("三", "Three")} </span>
    </div>
  </gaia-carousel>
`;

export default Carousel;
