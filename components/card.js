const card = ({ user }) => {
  return `
  ${
    user
      ? `
  <div class="card h-[400px] shadow-2xl w-full bg-[#c0e3e7] top-2 md:sticky ">
  <div class="my-3">
      <div class="card-img items-center text-center">
        <img class="rounded-full w-[195px] h-[195px] inline-block" src="${user.avatar}" alt="">
      </div>
      <div class="text text-center mt-5">
        <h2 class="mb-5 text-2xl font-bold leading-normal">${user.name}</h2>
        <div class="text-mute">DEVELOPER | DESIGNER</div>
      </div>
      <div class="network text-center mt-4 pb-4">
        <a href="${user.facebook}" class="p-3"><i class="fa-brands fa-facebook"></i></a>
        <a href="" class="p-3"> <i class="fa-brands fa-twitter"></i></a>
        <a href="" class="p-3"><i class="fa-brands fa-google-plus-g"></i></a>
        <a href="" class="p-3"> <i class="fa-brands fa-instagram"></i></a>
        <a href="" class="p-3"> <i class="fa-brands fa-github"></i></a>
      </div>
      
  </div>
</div>
  `
      : ""
  }

  `;
};

export default card;
