import { html } from "lit-html";
import "@gaia/garage";

type Props = {
  langHelper: (chinese: string, english: string) => string;
};

const Carousel = ({ langHelper }: Props) => html`
  <style>
    .carousel-item {
      position: relative;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      
    }

    .carousel-text {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      background-image: inherit;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      filter: invert(1) grayscale(1);
    }
  </style>

  <gaia-carousel timeout="5" style="height: 500px">
    <div
      class="carousel-item"
      style="background-image: url(https://picsum.photos/id/1/1440/900)"
    >
      <span class="carousel-text">
        ${langHelper("这是第一页", "This is the first slide")}
      </span>
    </div>
    <div
      class="carousel-item"
      style="background-image: url(https://picsum.photos/id/356/1440/900)"
    >
      <span class="carousel-text">
        ${langHelper("这是第二页", "This is the second slide")}
      </span>
    </div>
    <div
      class="carousel-item"
      style="background-image: url(https://picsum.photos/id/2/1440/900)"
    >
      <span class="carousel-text">
        ${langHelper("这是第三页", "This is the third slide")}
      </span>
    </div>
  </gaia-carousel>
`;

export default Carousel;
