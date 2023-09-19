import { html } from "lit-html";

type Props = {
  langHelper: (chinese: string, english: string) => string;
};

const Section2 = ({ langHelper }: Props) =>
  html`
    <section style="display: flex; text-align: center; flex-wrap: wrap;">
      <h1 style="flex: 0 0 100%; font-size: 3em;">
        ${langHelper("巴拉巴拉巴拉巴拉巴拉", "Blah Blah Blah Blah Blah")}
      </h1>
      <p style="flex: 0 0 100%;">
        ${langHelper(
          "巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉",
          "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah"
        )}
      </p>
      <div style="max-width: 500px; flex: 0 0 100%; margin: auto;">
        ${[1, 2, 3].map(
          (i) => html`
            <gaia-card style="margin: 10px;">
              <div style="display: flex; gap: 10px;">
                <img
                  alt=""
                  src=${`https://picsum.photos/id/${100 + i}/300/200`}
                  style="border-radius: 10px; flex: 2;"
                />
                <div style="flex: 1;">
                  ${langHelper(
                    "巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉",
                    "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah"
                  )}
                  <button
                    @click=${() => alert("You clicked.")}
                    style="margin-top: 10px; background: #3182CE;"
                  >
                    ${langHelper("查看更多", "See More")}
                  </button>
                </div>
              </div>
            </gaia-card>
          `
        )}
      </div>
    </section>
  `;

export default Section2;
