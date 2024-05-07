export const uidCreate = () => {
  let uid = "";
  const date = Date.now();
  const digits = "9876543210";
  const str = date.toString();
  for (let i = str.length - 1; i > 9; i--) {
    uid += digits[Number(str[i])];
  }
  return uid + str;
};
