import { useEffect } from "../lib";

const category = (cate, { clickCate }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".bts");
    console.log(btns);
    for (let btn of btns) {
      btn.addEventListener("click", () => {
        const idc = btn.dataset.id;
        clickCate(idc);
      });
    }
  });
  return `
        <button class='font-bold bts text-xl py-5 mx-5' data-id='${cate.id}'>${cate.categoryName}</button>
  `;
};

export default category;
