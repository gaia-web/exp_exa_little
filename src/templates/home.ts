import { html } from "lit-html";
import { TemplateProps, rerender } from "little";
import "@gaia/garage";
import Header from "./header";
import Carousel from "./carousel";
import Section1 from "./section-1";
import Section2 from "./section-2";

let isEnglish = false;

function langHelper(chinese: string, english: string) {
  return isEnglish ? english : chinese;
}

function setIsEnglish(_isEnglish: boolean) {
  isEnglish = _isEnglish;
  rerender();
}

const Home = (props: TemplateProps) => html`
  ${Header({ ...props, isEnglish, setIsEnglish, langHelper })}
  ${Carousel({ langHelper })} ${Section1({ langHelper })}
  ${Section2({ langHelper })}
`;

export default Home;
