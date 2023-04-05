import { getAdmin } from "../../api/admin";
import { getAllcategorys } from "../../api/category";
import { addProjectt, getOneProject, updateProject } from "../../api/project";
import menu from "../../components/layoutadmin/menu";
import sildebar from "../../components/layoutadmin/sildebar";
import { useState, useEffect, router } from "../../lib";
import axios from "axios";
const projectedit = ({ id }) => {
  console.log(id);
  const [cate, setcate] = useState([]);
  const [data, setdata] = useState({});
  const [user, setuser] = useState({});
  const [imgs, setimgs] = useState([]);
  useEffect(() => {
    getAllcategorys().then((cate) => setcate(cate));
    getOneProject(id).then((project) => {
      setdata(project);
      setimgs(project.imgProjects);
    });
    getAdmin().then((user) => setuser(user));
  }, []);
  useEffect(() => {
    const form = document.getElementById("add-form");
    const nameproject = document.getElementById("nameproject");
    const tech = document.getElementById("tech");
    const projectImg = document.getElementById("projectImg");
    const cate = document.getElementById("cate-id");

    form.addEventListener("submit", async (e) => {
      const imgsproject = await uploadImg(projectImg.files);
      e.preventDefault();
      const newProject = {
        id,
        nameProject: nameproject.value,
        imgProject: "",
        imgProjects: !imgsproject?.length ? imgs : imgsproject,
        technology: tech.value,
        categoryId: cate.value,
      };
      updateProject(newProject).then(() => router.navigate("/admin/projects"));
    });
  });
  const uploadImg = async (files) => {
    const CLOUD_NAME = "ddn4r33s3";
    const PRESET_NAME = "upload-img";
    const FOLDER_NAME = "portpolio";
    const urls = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);
    for (const file of files) {
      formData.append("file", file);
      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/add-form",
        },
      });
      urls.push(response.data.secure_url);
    }
    return urls;
  };
  return `
  <header class='container mx-auto bg-slate-400'>
  ${menu()}
</header>
<main class='md:flex block flex-wrap w-full h-screen container mx-auto '>
<div class='md:w-3/12 max-w-full'>${sildebar({ user })}</div>
<div class='w-8/12 shadow-xl'>
<form class='w-[500px]' id='add-form' action=''>
  
 <div class='mt-5 ml-5'>
 <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên Dự Án</label>
 <div class="flex">
   <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
     Tên
   </span>
   <input type="text" id="nameproject" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value='${
     data.nameProject
   }'>
 </div>
 </div>

 <div class='mt-5 ml-5'>
 <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Công Nghệ</label>
 <div class="flex">
   <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
     Công NGhệ
   </span>
   <input type="text" id="tech" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value='${
     data.technology
   }'>
 </div>
 </div>

 <div class='mt-5 ml-5'>
 <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Link github</label>
 <div class="flex">
   <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
     Link GITHUB
   </span>
   <input type="text" id="link-git" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value='${
     data.link
   }'>
 </div>
 </div>

 
<div class='mt-5 ml-5'>
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Thêm ảnh</label>
<input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="projectImg" type="file" multiple>
</div>


<div class='mt-5 ml-5'>
<select class="form-select form-select-sm
appearance-none
block
w-full
px-2
py-1
text-sm
font-normal
text-gray-700
bg-white bg-clip-padding bg-no-repeat
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-sm example">
${cate
  .map((item) => {
    return `
<option value='${item.id}' id='cate-id'>${item.categoryName}</option>
`;
  })
  .join("")}
</select>
</div>

<div class='mt-5 ml-5'>
<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
Xác nhận
</button>
</div>

</form>
  
</div>
</main>
  `;
};

export default projectedit;
