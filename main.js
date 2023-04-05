import { data } from "autoprefixer";
import { addBlog } from "./api/post";
import { render, router } from "./lib";
import addblog from "./pages/admin/addblog";
import addcate from "./pages/admin/addcate";
import addcateblog from "./pages/admin/addcateblog";
import addProject from "./pages/admin/addProject";
import adminManager from "./pages/admin/admin-manager";
import blogcate from "./pages/admin/blogcate";
import blogs from "./pages/admin/blogs";
import categoryProject from "./pages/admin/categoryProject";
import editcate from "./pages/admin/editcate";
import editcateblog from "./pages/admin/editcateblog";
import projectedit from "./pages/admin/projectedit";
import projects from "./pages/admin/projects";
import contact from "./pages/contact";
import postDetailPage from "./pages/detail-post";
import home from "./pages/home";
import login from "./pages/login";
import portpolio from "./pages/portpolio";
import portpoliodetail from "./pages/portpoliodetail";
import post from "./pages/post";

const app = document.querySelector("#app");
router.on("/", () => render(home, app));
router.on("/contact", () => render(contact, app));
router.on("/login", () => render(login, app));
router.on("/admin/projects", () => render(projects, app));
router.on("/portpolio", () => {
  render(portpolio, app);
});
router.on("/post", () => render(post, app));
router.on("/admin/categoryProject", () => {
  render(categoryProject, app);
});
router.on("/portpolio/:id", (data) => render(() => portpoliodetail(data), app));
router.on("/detailpost/:id", (data) => render(() => postDetailPage(data), app));
router.on("/admin/cateedit/:id", ({ data }) =>
  render(() => editcate(data), app)
);
router.on("/admin/editcateblog/:id", ({ data }) =>
  render(() => editcateblog(data), app)
);
router.on("/admin/editproject/:id", ({ data }) =>
  render(() => projectedit(data), app)
);
router.on("/admin/addcate", () => render(addcate, app));
router.on("/admin/addproject", () => render(addProject, app));
router.on("/admin/quanliadmin", () => render(adminManager, app));
router.on("/admin/blogcate", () => render(blogcate, app));
router.on("/admin/addblogcate", () => render(addcateblog, app));
router.on("/admin/quanliblog", () => render(blogs, app));
router.on("/admin/addblog", () => render(addblog, app));
router.resolve();
