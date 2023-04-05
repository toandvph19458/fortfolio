import card from "../components/card";
import footer from "../components/footer";
import header from "../components/header";
import { getAdmin } from "../api/admin";
import { useEffect, useState } from "../lib";
const contact = () => {
  const [user, setuser] = useState({});
  useEffect(() => {
    getAdmin().then((user) => setuser(user));
  }, []);
  return `
       <header> ${header()}</header>
       <main class="mt-10">
    <div class="container mx-auto">
     <div class="grid md:grid-cols-[300px,1fr] grid-cols-1 gap-2">
        ${card({ user })}
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
            <form class='text-center' id='form-contact'>         
              <div class="flex">              
              </div>
              <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="First Name*" />
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Last Name*" />
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="email" placeholder="Email*" />
                <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Phone*" />
                </div>
                <div class="my-4">
                  <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div class="my-2 w-1/2 lg:w-1/4">
                  <button class="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                              focus:outline-none focus:shadow-outline">
                    Send Message
                  </button>
            </form>
            <div class='my-4 mx-2'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814237!2d105.74459841475498!3d21.038132792834546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1676944836910!5m2!1svi!2s" width="900" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>   
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
