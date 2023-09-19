import { html } from "lit-html";
import { TemplateProps } from "little";

const SomethingElse = ({ routerMatch }: TemplateProps) =>
  html`
    <div>
      You are on <b>${routerMatch?.data?.path}</b>
      <br />
      <a href="javascript: history.go(-1);">Go back</a>
    </div>
  `;

export default SomethingElse;
