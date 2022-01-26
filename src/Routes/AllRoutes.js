import { lazy } from "react";
import fakeDelay from "../Shared/HelperMethods/FakeDelay";

const delayTime = 2000;

const routes = [
  {
    path: "/dashboard",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../AdminPages/DashBoard/index"))
    ),
    exact: true,
    role: [1, 3, 4, 5],
  },
  {
    path: "/",
    component: lazy(() =>
      fakeDelay(delayTime)(import("../AdminPages/Auth/Login"))
    ),
    ispublic: true,
    exact: true,
  },
  // { path: '/*', component: Error404, role: [1, 3, 4, 5] }
];

export default routes;
