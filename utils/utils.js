export const getObjectKeys = (obj) => {
  const keys = Object.keys(obj);
  return keys;
};

export const dateCurrent= ()=>{
  const data= new Date()
  return data.getFullYear()
}