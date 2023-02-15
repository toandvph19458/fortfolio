import { getAllcategorys } from "../../api/category";
import menu from "../../components/layoutadmin/menu";
import sildebar from "../../components/layoutadmin/sildebar";
import tablecate from "../../components/layoutadmin/tablecate";
import { useEffect, useState } from "../../lib";

const categoryProject = () => {
  const [cate, getcate] = useState([]);
  useEffect(() => {
    getAllcategorys().then((cate) => getcate(cate));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    console.log(btns);
    for (let btn of btns) {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        deleteProject(id).then(() => {
          const newData = cate.filter((category) => category.id != id);
          getcate(newData);
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
    ${tablecate(cate)}
  </div>
  </main>
`;
};

export default categoryProject;
