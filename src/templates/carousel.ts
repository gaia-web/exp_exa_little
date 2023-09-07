import { html } from "lit-html";
import "garage";

type Props = {
  langHelper: (chinese: string, english: string) => string;
};

const Carousel = ({ langHelper }: Props) => html`
  <style>
    .carousel-item {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }
  </style>

  <gaia-carousel timeout="5" style="height: 500px">
    <div class="carousel-item" style="background: beige">
      ${langHelper("一", "One")}
    </div>
    <div class="carousel-item" style="background: bisque">
      ${langHelper("二", "Two")}
    </div>
    <div class="carousel-item" style="background: pink">
      ${langHelper("三", "Three")}
    </div>
  </gaia-carousel>
`;

export default Carousel;
