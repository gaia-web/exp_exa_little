import { html } from "lit-html";
import "garage";
import logoUrl from "/vite.svg";

type Props = {
  isEnglish: boolean;
  setIsEnglish: (isEnglish: boolean) => void;
  langHelper: (chinese: string, english: string) => string;
};

const Nav = (langHelper: (chinese: string, english: string) => string) => html`
  <gaia-nav slot="collapsible">
    <gaia-nav-item href="#">${langHelper("首页", "Home")}</gaia-nav-item>
    <gaia-nav-item>
      ${langHelper("移民通道", "Immigration Entrances")}
      <gaia-nav-item href="#" slot="nested">
        <p>高管工签/投资人工签</p>
        <p style="color: grey">
          Intra-Company Transferee Work Permit / Owner Operator Work Permit
        </p>
      </gaia-nav-item>
      <gaia-nav-item href="#" slot="nested">
        <p>BC省提名项目</p>
        <p style="color: grey">British Columbia Provincial Nominee Program</p>
      </gaia-nav-item>
      <gaia-nav-item href="#" slot="nested">
        <p>Blah blah</p>
        <p style="color: grey">Blah blah blah</p>
      </gaia-nav-item>
    </gaia-nav-item>
    <gaia-nav-item href="#">
      ${langHelper("成功案例", "Successful Cases")}
    </gaia-nav-item>
    <gaia-nav-item href="#">
      ${langHelper("关于我们", "About Us")}
    </gaia-nav-item>
    <gaia-nav-item href="#"> ${langHelper("新闻", "News")} </gaia-nav-item>
    <gaia-nav-item href="#">
      ${langHelper("联系我们", "Contact Us")}
    </gaia-nav-item>
  </gaia-nav>
`;

const Header = ({ isEnglish, setIsEnglish, langHelper }: Props) => html`
  <gaia-header sticky>
    <img src=${logoUrl} height="50px" />
    ${Nav(langHelper)}
    <button
      slot="extra"
      @click=${() => setIsEnglish(!isEnglish)}
      style="background: #F687B3"
    >
      ${langHelper("English", "中文")}
    </button>
  </gaia-header>
`;

export default Header;
