import menu from "../../components/layoutadmin/menu";
import sildebar from "../../components/layoutadmin/sildebar";
import table from "../../components/layoutadmin/table";
import { router, useEffect, useState } from "../../lib";
import { getAdmin, updateAdmin } from "../../api/admin";
import axios from "axios";
const adminManager = () => {
  const [user, setuser] = useState({});
  const [img, setImg] = useState("");
  useEffect(() => {
    getAdmin().then((user) => {
      setuser(user);
      setImg(user?.avatar);
    });
  }, []);
  useEffect(() => {
    const nickname = document.getElementById("name");
    const mail = document.getElementById("email");
    const face = document.getElementById("face");
    const git = document.getElementById("git");
    const oldimg = document.getElementById("old-img");
    const avatar = document.getElementById("avatar");
    const formad = document.getElementById("formad");
    const typingtext = document.getElementById("typing");
    const about = document.getElementById("about");
    formad.addEventListener("submit", async (e) => {
      e.preventDefault();

      const avt = await uploadImg(avatar.files);
      console.log(avt);
      const newAdmin = {
        avatar: !avt?.length ? img : avt[0],
        email: mail.value,
        name: nickname.value,
        typing: typingtext.value,
        aboutme: about.value,
        password: "123",
        facebook: face.value,
        gitHub: git.value,
      };
      updateAdmin(newAdmin).then(() => router.navigate("/admin/quanliadmin"));
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
          "Content-Type": "multipart/formad",
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

    <div class='w-8/12 shadow-xl mr-4'>
    <div> <a href="/#/admin/addproject">Quản lí Thông Tin Admin</a></div>
    <form action='' id='formad' class='ml-2 mt-2'>
   

        <div class='pl-2 pt-2'>
            <lable>Tên :</lable>
            <input class="w-[500px] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" id="name" value='${
              user?.name
            }
            
            '>
        </div>

        <div class='pl-2 pt-2'>
            <lable>Tiêu đề :</lable>
            <input class="w-[500px] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" id="typing" value='${
              user?.typing
            }'>
        </div>

        <div class='pl-2 pt-2'>
            <lable>Giới Thiệu:</lable>
            <input class="w-[500px] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" id="about" value='${
              user?.aboutme
            }'>
        </div>

        <div class='pl-2 pt-2'>
            <lable>Email :</lable>
            <input class="w-[500px] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" id="email" value='${
              user?.email
            }'>
        </div>

        <div class='pl-2 pt-2'>
            <lable>link FB :</lable>
            <input class="w-[500px] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" id="face" value='${
              user?.facebook
            }'>
        </div>

        
        <div class='pl-2 pt-2'>
            <lable>link GitHUB:</lable>
            <input class="w-[500px] bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" id="git" value='${
              user?.gitHub
            }'>
        </div>
        <div class='mt-5 ml-5'>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">avatar</label>
            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="avatar" type="file" multiple>
        </div>
        <div class='item-center'><img src='${user?.avatar}'></div>
        <div><input type='text' value='${
          user?.avatar
        }' hidden id='old-img'></div>

        <button class='border p-2 bg-green-400 rounded-md ml-5 mt-5'>Xác Nhận</button>
        
    </form>
    </div>
    </main>
  `;
};

export default adminManager;
