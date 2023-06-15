export const toTitleCase = (str: string): string => {
  if (!str || typeof str !== "string") {
    return "";
  }
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
