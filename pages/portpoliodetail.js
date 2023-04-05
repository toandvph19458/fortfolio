import { getAllProjects, getAllwithcate, getOneProject } from "../api/project";
import card from "../components/card";
import footer from "../components/footer";
import header from "../components/header";
import listproject from "../components/listproject";
import { getAdmin } from "../api/admin";
import { useEffect, useState } from "../lib";
const portpoliodetail = ({ data }) => {
  const [projectone, setprojectone] = useState({});
  const [projectcate, setprojectcate] = useState({});
  const [user, setuser] = useState({});
  useEffect(() => {
    getAdmin().then((user) => setuser(user));
    const fetchApi = async () => {
      const responce = await getOneProject(data.id);
      console.log(responce);
      setprojectone(responce);
      console.log(responce.categoryId);
      if (responce.id) {
        const categories = await getAllwithcate(responce.categoryId);
        setprojectcate(categories);
      }
    };
    fetchApi();
    console.log(projectone);
  }, []);

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
      ${
        projectone
          ? `
      <div class="slide md:flex-1">
      ${projectone?.nameProject}
      <img src='${projectone?.imgProjects}'>
      </div>
      <div class='flex ml-2'>
      ${projectone.imgProjects?.map((items) => {
        return `
          <img class='w-[100px]' src='${items}'>
        `;
      })}
      </div>
      `
          : ""
      }
      <h1 class='text-center text-2xl my-3'>Dự Án Liên Quan</h1>
      <div class='grid grid-cols-5 gap-1 ml-5 pl-5 pb-5'>
        ${listproject(projectcate)}
      </div>
    </div>
   </div>
  </div>
</main>


  <footer style="margin-top:50px;">
  ${footer()}
  </footer>
  `;
};

export default portpoliodetail;
