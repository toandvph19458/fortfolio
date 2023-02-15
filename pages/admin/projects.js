import menu from "../../components/layoutadmin/menu";
import sildebar from "../../components/layoutadmin/sildebar";
import table from "../../components/layoutadmin/table";
import { deleteProject, getAllProjects } from "../../api/project";
import { useEffect, useState } from "../../lib";
const projects = () => {
  const [data, getdata] = useState([]);
  useEffect(() => {
    getAllProjects().then((data) => getdata(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    console.log(btns);
    for (let btn of btns) {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        deleteProject(id).then(() => {
          const newData = data.filter((project) => project.id != id);
          getdata(newData);
        });
      });
    }
  });
  return `
    <header class='container mx-auto bg-slate-400'>
        ${menu()}
    </header>
    <main class='md:flex block flex-wrap w-full h-screen container mx-auto '>
    <div class='md:w-3/12 max-w-full'>${sildebar()}</div>
    <div class='w-9/12'>
      ${table(data)}
    </div>
    </main>
  `;
};

export default projects;
