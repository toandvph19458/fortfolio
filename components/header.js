import { useEffect } from "../lib";
useEffect(() => {
  const btn = document.getElementById("#btn");
  const menu = document.getElementById("#menu");
  btn.addEventListener("click", () => {
    menu.style.display = "block";
  });
});
const header = () => {
  return `
  <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-2">
        <div class="logo">
          <img src="https://certy.px-lab.com/html/demo1/assets/images/uploads/brand/logo.svg" alt="">
        </div>
        <div class="menu hidden md:inline-block">
          <ul class="flex ul__nav">
            <li><a class="p-3 text-3xl font-bold text-[#757575]"  href="#">Home</a></li>
            <li><a class="p-3 text-3xl font-bold text-[#757575]" href="#">Portpolio</a></li>
            <li><a class="p-3 text-3xl font-bold text-[#757575]" href="#">Post</a></li>
            <li><a class="p-3 text-3xl font-bold text-[#757575]" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class='text-end'>
            <button id="btn" class='but'>
              <i class="fa-solid fa-bars"></i>
            </button>
            <div class="menu-mini md:hidden hidden" id='menu'>
              <ul class="ul__nav">
                <li><a class="p-3 text-2xl font-bold text-[#757575]"  href="#">Home</a></li>
                <li><a class="p-3 text-2xl font-bold text-[#757575]" href="#">Portpolio</a></li>
                <li><a class="p-3 text-2xl font-bold text-[#757575]" href="#">Post</a></li>
                <li><a class="p-3 text-2xl font-bold text-[#757575]" href="/contact">Contact</a></li>
              </ul>  
            </div>
      </div>
    </div>
  `;
};

export default header;
