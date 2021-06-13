import axios from "axios";
const apiHelper = (type, path, data) => {
  return axios({
    method: type,
    url: path,
    data,
  });
};
export default apiHelper;
