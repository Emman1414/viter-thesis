export const imgPath = "http://localhost/viter-thesis/public/img";

const urlThesisLocal = "http://localhost/viter-thesis"; //from thunder client

// ONLINE DEV and LOCAL hris
export const devApiUrl = `${urlThesisLocal}/rest`;
export const devNavUrl = ""; //removed /v2
export const devBaseImgUrl = `${imgPath}`;
export const devBaseUrl = `${urlThesisLocal}`;

//dev key from thunder client
export const devKey =
  "$2a$12$47wDvbLInZif/PVS8B6P3.7WxyJvUpBzZAWCsnWJUKq3nrn4qgmeO";

// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
};
