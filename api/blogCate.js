import instrance from "./confim";
const getAllcategoryBlogs = () => {
  return instrance.get(`/categoryBlog`);
};
const getOnecategoryBlog = (id) => {
  return instrance.get(`/categoryBlog/${id}`);
};
const addcategoryBlog = (categoryBlog) => {
  return instrance.post(`/categoryBlog`, categoryBlog);
};
const deletecategoryBlog = (id) => {
  return instrance.delete(`/categoryBlog/${id}`);
};
const updatecategoryBlog = (categoryBlog) => {
  return instrance.put(`/categoryBlog/${categoryBlog.id}`, categoryBlog);
};
export {
  getAllcategoryBlogs,
  getOnecategoryBlog,
  addcategoryBlog,
  updatecategoryBlog,
  deletecategoryBlog,
};
