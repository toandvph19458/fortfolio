const listproject = ({ project }) => {
  return `
    ${project
      ?.map((item) => {
        return `
     <div class="w-[50%]">
     <p>${item.nameProject}</p>
     <img src='${item.imgProjects[0]}'>
     </div>
        `;
      })
      .join("")}
  `;
};

export default listproject;
