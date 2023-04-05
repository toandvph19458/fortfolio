import card from "../components/card";
import footer from "../components/footer";
import header from "../components/header";
import { getAdmin } from "../api/admin";
import { useEffect, useState } from "../lib";
import { getAllBlogs, getAllwithcateBlog } from "../api/post";
import { getAllcategoryBlogs } from "../api/blogCate";
import categoryBlog from "../components/categoryBlog";
const post = () => {
  const [user, setuser] = useState({});
  const [blog, setblog] = useState([]);
  const [cate, setcate] = useState([]);
  useEffect(() => {
    getAdmin().then((user) => setuser(user));
    getAllBlogs().then((blog) => setblog(blog.reverse()));
    getAllcategoryBlogs().then((cate) => setcate(cate));
  }, []);
  const OneClick = (id) => {
    if (id != 0) {
      getAllwithcateBlog(id).then((blogcate) => setblog(blogcate.blog));
    } else {
      getAllBlogs().then((cate) => setblog(cate));
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
        <h1 class="text-3xl font-bold mb-8 pt-5">POST</h1>
      </div>
      <div>
      <div class='flex ml-2 my-4'>
          ${cate
            .map((item) => categoryBlog(item, { clickCate: OneClick }))
            .join("")}
        </div> 
      <section class="dark:bg-gray-800 dark:text-gray-100">
      <div class="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a rel="noopener noreferrer" href="/#/detailpost/${
            blog[0]?.id
          }" class="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
              <img src="${
                blog[0]?.imgPost
              }" alt="" class="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
              <div class="p-6 space-y-2 lg:col-span-5">
                  <h3 class="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">${
                    blog[0]?.title
                  }</h3>
                  <span class="text-xs dark:text-gray-400">February 19, 2021</span>
                  <p class"w-[50px] truncate">${blog[0]?.content}</p>
              </div>
          </a>
          <div class="grid justify-center grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
             
              ${blog
                .map((item) => {
                  return `
                <a rel="noopener noreferrer" href="/#/detailpost/${item.id}" class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 w-[150px]">
                    <img role="presentation" class=" w-full rounded h-44 dark:bg-gray-500 object-cover" src="${item.imgPost}">
                    <div class="p-6 space-y-2">
                        <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">${item.title}</h3>
                        <span class="text-xs dark:text-gray-400">January 21, 2021</span>
                        <p class="truncate">${item.content}</p>
                    </div>
                </a>
                `;
                })
                .join("")}
          </div>
      </div>
  </section>
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

export default post;
