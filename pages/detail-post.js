import card from "../components/card";
import footer from "../components/footer";
import header from "../components/header";
import listproject from "../components/listproject";
import { getAdmin } from "../api/admin";
import { useEffect, useState } from "../lib";
import { getAllwithcateBlog, getOneBlog } from "../api/post";
import listblog from "../components/listblog";
const postDetailPage = ({ data }) => {
  const [blogone, setblogone] = useState({});
  const [blogcate, setblogcate] = useState({});
  const [user, setuser] = useState({});
  useEffect(() => {
    getAdmin().then((user) => setuser(user));
    const fetchApi = async () => {
      const responce = await getOneBlog(data.id);
      console.log(responce);
      setblogone(responce);
      console.log(responce.categoryId);
      if (responce.id) {
        const categories = await getAllwithcateBlog(responce.categoryBlogId);
        setblogcate(categories);
      }
    };
    fetchApi();
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
      <div class=" text-center">
      ${blogone.title}
      <img src='${blogone.imgPost}'>
      <span>${blogone.author}</span>
      <p>${blogone.content}</p>
      </div>
      <h1 class='text-center text-2xl my-3'> Liên Quan</h1>
      <div class='grid grid-cols-5 gap-1'>
        ${listblog(blogcate)}
      </div>
    </div>
   </div>
  </div>
</main>


  <footer style="margin-top:50px;">
  ${footer()}
  </footer>`;
};

export default postDetailPage;
