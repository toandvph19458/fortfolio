import { useEffect } from "../lib";
const categoryBlog = (cate, { clickCate }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".bt");
    for (let btn of btns) {
      btn.addEventListener("click", () => {
        const idblog = btn.dataset.id;
        console.log(idblog);
        clickCate(idblog);
      });
    }
  });
  return `
            <button class='font-bold bt text-xl py-5 mx-5' data-id='${cate.id}'>${cate.categoryblogName}</button>
      `;
};

export default categoryBlog;
