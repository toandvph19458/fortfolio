import { getAllProjects } from "../api/project";
import card from "../components/card";
import footer from "../components/footer";
import header from "../components/header";
import { useEffect, useState } from "../lib";
const portpolio = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getAllProjects().then((data) => setdata(data));
  }, []);
  return `
  <header>${header()}</header>
    <main class="mt-10">
    <div class="container mx-auto">
     <div class="grid md:grid-cols-[300px,1fr] grid-cols-1 gap-2">
        ${card()}
      <!-- content -->
      <div class="content ml-5 border shadow-2xl">
        <div class="title p-4">
            <h1 class="text-3xl font-bold mb-8 pt-5">My Project</h1>
            <p class="leading-7">
            <b class="pb-2">HeLLo , My Name is Toàn</b>         
        </div>
        <div class='grid md:grid-cols-3 grid-cols-1 gap-2'>
            ${data
              .map((projects) => {
                return `
                    <div>
                        <img src='${projects.imgProject}'>
                    </div>
                `;
              })
              .join("")}

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

export default portpolio;
