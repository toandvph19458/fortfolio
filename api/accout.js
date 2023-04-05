import instrance from "./confim";
const getAccount = () => {
  return instrance.get(`/admin`);
};
export default getAccount;
