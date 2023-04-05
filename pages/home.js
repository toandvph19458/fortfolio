import { getAdmin } from "../api/admin";
import { useEffect, useState } from "../lib";
import card from "../components/card";
import footer from "../components/footer";
import header from "../components/header";

const home = () => {
  const [user, setuser] = useState({});
  useEffect(() => {
    getAdmin().then((user) => setuser(user));
  }, []);
  return /*html*/ ` 
 
    <header>${header()}</header>
    <main class="mt-10">
    <div class="container mx-auto">
     <div class="grid md:grid-cols-[300px,1fr] grid-cols-1 gap-2">
        ${card({ user })}
      <!-- content -->
      <div class="content ml-5 border shadow-2xl">
        <div class="title p-4">
          <h1 class="text-3xl font-bold mb-8 pt-5">About Me</h1>
          <h1 class="typing">${user?.typing}</h1>
         <p class="leading-7">
          <b class="pb-2">HeLLo , My Name is ${user?.name}</b>
          <br>
          ${user?.aboutme}
         </p>
        
        </div>
        <div class='mt-[50px]'><!--
        <h1 class='p-2 text-2xl '>MY SKILLS:</h1>
            <ul class='item-center flex justify-end w-[500px]'>
              <li class='relative grid place-items-center w-[80px] h-[80px]'style='--color:#FF3333'>
                <span class='base relative w-full h-full'></span>
                <span class='title'>HTML5</span>
                <span class='icon'><i class="fa-brands fa-html5"></i></span>
              </li>
              <li class='relative grid place-items-center w-[80px] h-[80px]' style='--color:#FFFF66'>
                <span class='base relative w-full h-full'></span>
                <span class='title'>JS</span>
                <span class='icon'><i class="fa-brands fa-js"></i></span>
              </li>
              <li class='relative grid place-items-center w-[80px] h-[80px]' style='--color:#6699FF'>
                <span class='base relative w-full h-full'></span>
                <span class='title'>PHP</span>
                <span class='icon'><i class="fa-brands fa-php"></i></span>
              </li>
            </ul>
            -->
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

export default home;
