const listblog = ({ blog }) => {
  console.log(blog);
  return `
    ${blog
      ?.map((item) => {
        return `
        <a  href='/#/detailpost/${item.id}'>
        <div class="w-[50%]">
        <p>${item.title}</p>
        <img src='${item.imgPost}'>
        </div>
        </a>
        `;
      })
      .join("")}
  `;
};

export default listblog;
