const card = () => {
  return `
  <div class="card shadow-2xl w-full">
  <div class="bg-[#c0e3e7]">
      <div class="card-img items-center text-center">
        <img class="rounded-full w-[195px] h-[195px] inline-block" src="https://certy.px-lab.com/html/demo1/assets/images/uploads/avatar/avatar-195x195.png" alt="">
      </div>
      <div class="text text-center mt-5">
        <h2 class="mb-5 text-2xl font-bold leading-normal">Toàn HiLoo</h2>
        <div class="text-mute">Florist | Decorator</div>
      </div>
      <div class="network text-center mt-4 pb-4">
        <a href="" class="p-3"><i class="fa-brands fa-facebook"></i></a>
        <a href="" class="p-3"> <i class="fa-brands fa-twitter"></i></a>
        <a href="" class="p-3"><i class="fa-brands fa-google-plus-g"></i></a>
        <a href="" class="p-3"> <i class="fa-brands fa-instagram"></i></a>
        <a href="" class="p-3"> <i class="fa-brands fa-github"></i></a>
      </div>
  </div>
</div>
  `;
};

export default card;
