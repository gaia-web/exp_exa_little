import { setupRouter } from "little";
import Home from "./templates/home";

import "./index.css";
import SomethingElse from "./templates/something-else";

setupRouter("/", [
  {
    path: "/",
    template: Home,
  },
  {
    path: "/:path",
    template: SomethingElse,
  },
]);
