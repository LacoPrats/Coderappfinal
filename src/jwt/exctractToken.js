export const extractToken = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");

  const binaryString = atob(base64);

  let jsonString = "";
  for (let i = 0; i < binaryString.length; i++) {
    jsonString += String.fromCharCode(binaryString.charCodeAt(i));
  }

  return JSON.parse(jsonString);
};
