import { html } from "lit-html";
import "@gaia/garage";
import logoUrl from "/vite.svg";
import { TemplateProps } from "little";
import Navigo from "navigo";

type Props = {
  isEnglish: boolean;
  setIsEnglish: (isEnglish: boolean) => void;
  langHelper: (chinese: string, english: string) => string;
} & TemplateProps;

type NavProps = {
  router?: Navigo;
  langHelper: (chinese: string, english: string) => string;
};

const Nav = ({ router, langHelper }: NavProps) => html`
  <gaia-nav slot="collapsible">
    <gaia-nav-item
      @click=${() =>
        (document as any).startViewTransition(() => router?.navigate(""))}
      >${langHelper("首页", "Home")}</gaia-nav-item
    >
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
    <gaia-nav-item
      @click=${() =>
        (document as any).startViewTransition(() =>
          router?.navigate("/successful-cases")
        )}
    >
      ${langHelper("成功案例", "Successful Cases")}
    </gaia-nav-item>
    <gaia-nav-item
      @click=${() =>
        (document as any).startViewTransition(() =>
          router?.navigate("/about-us")
        )}
    >
      ${langHelper("关于我们", "About Us")}
    </gaia-nav-item>
    <gaia-nav-item
      @click=${() =>
        (document as any).startViewTransition(() => router?.navigate("/news"))}
    >
      ${langHelper("新闻", "News")}
    </gaia-nav-item>
    <gaia-nav-item
      @click=${() =>
        (document as any).startViewTransition(() =>
          router?.navigate("/contact-us")
        )}
    >
      ${langHelper("联系我们", "Contact Us")}
    </gaia-nav-item>
  </gaia-nav>
`;

const Header = ({ router, isEnglish, setIsEnglish, langHelper }: Props) => html`
  <gaia-header sticky>
    <img src=${logoUrl} height="50px" />
    ${Nav({ router, langHelper })}
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
