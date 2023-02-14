export const generateId = () => {
  const id = localStorage.getItem("id");
  if (id) {
    localStorage.setItem("id", Number(id) + 1);
    console.log(id, "checking id");
    return Number(id);
  } else {
    localStorage.setItem("id", 1);
    return 1;
  }
};
