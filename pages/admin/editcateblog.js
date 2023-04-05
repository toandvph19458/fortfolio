import menu from "../../components/layoutadmin/menu";
import sildebar from "../../components/layoutadmin/sildebar";
import { router, useEffect, useState } from "../../lib";
import { getAdmin } from "../../api/admin";
import { getOnecategoryBlog, updatecategoryBlog } from "../../api/blogCate";
const editcateblog = ({ id }) => {
  const [cate, setcate] = useState({});
  const [user, setuser] = useState({});
  useEffect(() => {
    getOnecategoryBlog(id).then((data) => setcate(data));
    getAdmin().then((user) => setuser(user));
  }, []);
  useEffect(() => {
    const form = document.getElementById("formadd");
    const cateName = document.getElementById("cate-name");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newCate = {
        id,
        categoryblogName: cateName.value,
      };
      updatecategoryBlog(newCate).then((data) =>
        router.navigate("/admin/blogcate")
      );
    });
  });
  return `
  <header class='container mx-auto bg-slate-400'>
        ${menu()}
    </header>
    <main class='md:flex block flex-wrap w-full h-screen container mx-auto  '>
        <div class='md:w-3/12 max-w-full'>${sildebar({ user })}</div>
        <div class='w-8/12 shadow-xl ml-2'>
            <form action='' id='formadd' class='ml-2 mt-2'>
            <h1 class="font-bold uppercase text-3xl pl-2 pt-2">Thêm Danh Mục</h1>

                <div class='pl-2 pt-2'>
                    <lable>Nhập Tên :</lable>
                    <input class="w-[200px] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" id="cate-name" value="${
                      cate.categoryblogName
                    }">
                </div>
                <button class='border p-2 bg-green-400 rounded-md ml-5 mt-5'>Xác Nhận</button>
                
            </form>
        </div>
    </main>
  `;
};

export default editcateblog;
