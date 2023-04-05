import instrance from "./confim";
const getAdmin = () => {
  return instrance.get("/admin");
};
const updateAdmin = (admin) => {
  return instrance.put("/admin", admin);
};
export { getAdmin, updateAdmin };
