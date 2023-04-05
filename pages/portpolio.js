import { getAllcategorys } from "../api/category";
import { getAllProjects, getAllwithcate } from "../api/project";
import { getAdmin } from "../api/admin";
import card from "../components/card";
import category from "../components/category";
import footer from "../components/footer";
import header from "../components/header";
import { useEffect, useState } from "../lib";
const portpolio = () => {
  const [data, setdata] = useState([]);
  const [cate, setcate] = useState([]);
  const [user, setuser] = useState({});
  useEffect(() => {
    getAllcategorys().then((cate) => setcate(cate));
    getAllProjects().then((data) => setdata(data));
    getAdmin().then((user) => setuser(user));
  }, []);
  const OneClick = (id) => {
    if (id != 0) {
      getAllwithcate(id).then((projectcate) => setdata(projectcate.project));
    } else {
      getAllProjects().then((data) => setdata(data));
    }
  };
  return `
  <header>${header()}</header>
    <main class="mt-10">
    <div class="container mx-auto">
     <div class="grid md:grid-cols-[300px,1fr] grid-cols-1 gap-2">
        ${card({ user })}
      <!-- content -->
      <div class="content ml-5 border shadow-2xl">
        <div class="title p-4">
            <h1 class="text-3xl font-bold mb-8 pt-5">My Project</h1>
            <p class="leading-7">
            <b class="pb-2">HeLLo , My Name is Toàn</b>         
        </div>
        <div class='flex ml-2 my-4'>
          ${cate
            .map((item) => category(item, { clickCate: OneClick }))
            .join("")}
        </div>     
    <section class="pb-10">
    <div class="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    ${data
      .map((project) => {
        return `       
        <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 ">
        <a href="/#/portpolio/${project.id}">
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src="${project.imgProjects[0]}" alt="Hotel Photo" />
            <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
              <button class="text-sm">Xem Thêm</button>
            </div>
          </div>
          <div class="mt-1 p-2">
            <h2 class="text-slate-700">${project.nameProject}</h2>
            <div class="mt-3 flex items-end justify-between">
              <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                <button class="text-sm">Xem Thêm</button>
              </div>
            </div>
          </div>
        </a>
      </article>
      `;
      })
      .join("")}
    </div>
  </section>
  
  
  
 
      </div>
     </div>
    </div>
  </main>

    <footer style="margin-top:50px;">
    ${footer()}
    </footer>
  `;
};

export default portpolio;
