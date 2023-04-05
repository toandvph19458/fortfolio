import instrance from "./confim";
const sendmess = (mess) => {
  return instrance.put("/contact", mess);
};
export { sendmess };
