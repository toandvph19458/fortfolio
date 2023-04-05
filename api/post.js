import instrance from "./confim";
const getAllBlogs = () => {
  return instrance.get(`/blog`);
};
const getOneBlog = (id) => {
  return instrance.get(`/blog/${id}`);
};
const addBlog = (blog) => {
  return instrance.post(`/blog`, blog);
};
const deleteBlog = (id) => {
  return instrance.delete(`/blog/${id}`);
};
const updateBlog = (blog) => {
  return instrance.put(`/blog/${blog.id}`, blog);
};
const getAllwithcateBlog = (id) => {
  return instrance.get(`/categoryBlog/${id}?_embed=blog`);
};
export {
  getAllBlogs,
  getOneBlog,
  addBlog,
  updateBlog,
  deleteBlog,
  getAllwithcateBlog,
};
