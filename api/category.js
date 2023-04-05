import instrance from "./confim";
const getAllcategorys = () => {
  return instrance.get(`/category`);
};
const getOnecategory = (id) => {
  return instrance.get(`/category/${id}`);
};
const addcategory = (category) => {
  return instrance.post(`/category`, category);
};
const deletecategory = (id) => {
  return instrance.delete(`/category/${id}`);
};
const updatecategory = (category) => {
  return instrance.put(`/category/${category.id}`, category);
};
export {
  getAllcategorys,
  getOnecategory,
  addcategory,
  updatecategory,
  deletecategory,
};
