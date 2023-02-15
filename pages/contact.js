import card from "../components/card";
import footer from "../components/footer";
import header from "../components/header";

const contact = () => {
  return `
       <header> ${header()}</header>
       <main class="mt-10">
    <div class="container mx-auto">
     <div class="grid md:grid-cols-[300px,1fr] grid-cols-1 gap-2">
        ${card()}
      <!-- content -->
      <div class="content ml-5 border shadow-2xl">
        <div class="title p-4">
          <h1 class="text-3xl font-bold mb-8 pt-5">CONTACT ME</h1>
    
            <div class="network text-center mt-4 pb-4">
                <a href="" class="p-3"><i class="fa-brands fa-facebook"></i></a>
                <a href="" class="p-3"> <i class="fa-brands fa-twitter"></i></a>
                <a href="" class="p-3"><i class="fa-brands fa-google-plus-g"></i></a>
                <a href="" class="p-3"> <i class="fa-brands fa-instagram"></i></a>
                <a href="" class="p-3"> <i class="fa-brands fa-github"></i></a>
            </div>  
            <form class='text-center'>
                <div class='mb-5'>
                    <lable>Your Name</lable>
                    <input type="text" class='border py-3 px-4 y-3 w-[460px]'>
                </div>
                <div class='mb-5'>
                    <lable>Your Email</lable>
                    <input type="text"class='border py-3 px-4 y-3 w-[460px]'>
                </div>
                <div class='mb-5'>
                    <lable>Subject</lable>
                    <input type="text" class='border py-3 px-4 y-3 w-[460px]'>
                </div>
                <div class='mb-5'>
                    <lable>Your Comment</lable>
                    <textarea class='border py-3 px-4 y-3 w-[460px]'></textarea>
                </div>
                <div class='mb-5'>
                    <button type='submit' class='py-3 px-7 bg-blue-500 rounded-full'>Post Your Comment</button>
                </div>

            </form>    
        </div>
      
      </div>
     </div>
    </div>
  </main>

    <footer style="margin-top:50px;" >
    ${footer()}
    </footer>
  `;
};

export default contact;
