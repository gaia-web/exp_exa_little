import { html } from "lit-html";
import { TemplateProps } from "little";

const SomethingElse = ({ router, routerMatch }: TemplateProps) =>
  html`
    <div>
      You are on <b>${routerMatch?.data?.path}</b>
      <br />
      <button
        style="background: brown;"
        @click=${() =>
          (document as any).startViewTransition(() => router?.navigate(""))}
      >
        Go back
      </button>
    </div>
  `;

export default SomethingElse;
