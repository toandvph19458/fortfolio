import instrance from "./confim";
const getAllProjects = () => {
  return instrance.get(`/project`);
};
const getOneProject = (id) => {
  return instrance.get(`/project/${id}`);
};
const addProject = (project) => {
  return instrance.post(`/project,${project}`);
};
const deleteProject = (id) => {
  return instrance.delete(`/project/${id}`);
};
const updateProject = (project) => {
  return instrance.put(`/project/${project.id},${project}`);
};
export {
  getAllProjects,
  getOneProject,
  addProject,
  updateProject,
  deleteProject,
};
