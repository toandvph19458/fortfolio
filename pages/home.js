import card from "../components/card";
import footer from "../components/footer";
import header from "../components/header";
const home = () => {
  return ` 
 
    <header>${header()}</header>
    <main class="mt-10">
    <div class="container mx-auto">
     <div class="grid md:grid-cols-[300px,1fr] grid-cols-1 gap-2">
        ${card()}
      <!-- content -->
      <div class="content ml-5 border shadow-2xl">
        <div class="title p-4">
          <h1 class="text-3xl font-bold mb-8 pt-5">About Me</h1>
         <p class="leading-7">
          <b class="pb-2">HeLLo , My Name is Toàn</b>
          <br>
          I am talanted florist and decorator. I have graduated from International and cultural university of design and arts. Since first year in high school I relized that nature is most powerfull and beautiful gift in the world. I was captivated by beauty and simplicity of flowers and trees. Since then I have started to create and mastering unique and nice bouquets. My 1st masterpiece was garden of ant Ula Lowe decorated by me
         </p>
          
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
