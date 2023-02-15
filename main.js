import { render, router } from "./lib";
import categoryProject from "./pages/admin/categoryProject";
import projects from "./pages/admin/projects";
import contact from "./pages/contact";

import home from "./pages/home";
import login from "./pages/login";
import portpolio from "./pages/portpolio";
const app = document.querySelector("#app");
router.on("/", () => render(home, app));
router.on("/contact", () => render(contact, app));
router.on("/login", () => render(login, app));
router.on("/admin/projects", () => render(projects, app));
router.on("/portpolio", () => {
  render(portpolio, app);
});
router.on("/admin/categoryProject", () => {
  render(categoryProject, app);
});
router.resolve();
