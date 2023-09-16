import { html } from "lit-html";
import { rerender } from "little";
import "@gaia/garage";
import Header from "./header";
import Carousel from "./carousel";

let isEnglish = false;

function langHelper(chinese: string, english: string) {
  return isEnglish ? english : chinese;
}

function setIsEnglish(_isEnglish: boolean) {
  isEnglish = _isEnglish;
  rerender();
}

const Home = () => html`
  ${Header({ isEnglish, setIsEnglish, langHelper })} ${Carousel({ langHelper })}
  <div style="position: relative; margin-top: 200px; margin-bottom: 100vh">
    The language toggle and view breakpoint works.
    <br />
    Some links to the other page:
    <hr />
    <a href="/link1">Link1</a>
    <br />
    <a href="/link2">Link2</a>
    <br />
    <a href="/link3">Link2</a>
    <br />
    And some empty spaces.
  </div>
`;

export default Home;
