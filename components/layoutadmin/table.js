import { useEffect } from "../../lib";
const table = (project) => {
  return /*html*/ `
  <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full">
          <thead class="bg-white border-b">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               image
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Link GITHUB
             </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Action
              </th>
            </tr>
          </thead>
            ${project
              .map((data) => {
                return `
             <tbody>
             <tr class="bg-gray-100 border-b">
               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${data.id}</td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               ${data.nameProject}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <img class='w-[50px]' src=' ${data.imgProjects[0]}'>
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               ${data.link}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button  class='btn-remove border p-2 bg-red-500 rounded-lg' data-id='${data.id}'>DELETE</button>
                <a class ='border py-2 px-4 bg-green-400 rounded-lg' href="/#/admin/editproject/${data.id}">Sửa</a>
               </td
           </tbody>
             `;
              })
              .join("")}
        </table>
      </div>
    </div>
  </div>
</div>
  `;
};

export default table;
