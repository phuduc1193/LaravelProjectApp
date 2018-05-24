import axios from "axios";

class TagService {
  static search(keyword) {
    return new Promise((resolve, reject) => {
      axios
        .post("/tags/search", { name: keyword, size: 10 })
        .then(response => {
          const data = response.data;
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static get(inputSize) {
    return new Promise((resolve, reject) => {
      axios
        .get("/tags", { params: { size: inputSize } })
        .then(response => {
          const data = response.data;
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static add(inputName) {
    return new Promise((resolve, reject) => {
      axios
        .post("/tags", { params: { name: inputName } })
        .then(response => {
          const data = response.data;
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default TagService;
