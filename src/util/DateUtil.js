const getDateElements = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();

  return {
    dd: dd,
    mm: mm,
    yyyy: yyyy,
  };
};

const getDateMMDDYYYY = () => {
  return (
    getDateElements().mm +
    "/" +
    getDateElements().dd +
    "/" +
    getDateElements().yyyy
  );
};

export { getDateMMDDYYYY };
