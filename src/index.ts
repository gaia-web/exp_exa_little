import { setupRouter } from "little";
import Home from "./templates/home";
import SomethingElse from "./templates/something-else";

import "./index.css";

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
