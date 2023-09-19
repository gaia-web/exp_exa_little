import { html } from "lit-html";

type Props = {
  langHelper: (chinese: string, english: string) => string;
};

const Section1 = ({ langHelper }: Props) =>
  html`
    <style>
      #section-1 {
        & > * {
          flex: 1;

          @media screen and (max-width: 768px) {
            flex: 0 0 100%;
          }
        }
      }
    </style>
    <section
      id="section-1"
      style="display: flex; text-align: center; flex-wrap: wrap;"
    >
      <div
        style="display: flex; padding: 10px; text-align: center; flex-wrap: wrap;"
      >
        <h2 style="flex: 0 0 100%;">${langHelper("巴拉巴拉", "Blah Blah")}</h2>
        <p style="flex: 0 0 100%;">
          ${langHelper(
            "巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉",
            "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah"
          )}
        </p>
        <ul style="flex: 0 0 100%; text-align: start; list-style: none;">
          ${[1, 2, 3].map(
            () => html`
              <li>
                ${langHelper(
                  "巴拉巴拉巴拉巴拉巴拉",
                  "Blah Blah Blah Blah Blah"
                )}
              </li>
            `
          )}
        </ul>
      </div>
      <div style="padding: 10px;">
        <img
          alt=""
          src="https://picsum.photos/id/99/500/500"
          style="object-fit: cover; width: 100%; border-radius: 10px;"
        />
      </div>
    </section>
  `;

export default Section1;
