import axios from "axios";

class ProjectService {
  static all() {
    return new Promise((resolve, reject) => {
      axios
        .get("/projects")
        .then(response => {
          const data = response.data;
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static create(form) {
    return new Promise((resolve, reject) => {
      axios
        .post("/projects", form)
        .then(response => {
          const data = response.data;
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static show(id) {
    return new Promise((resolve, reject) => {
      axios
        .get("/projects/" + id)
        .then(response => {
          const data = response.data;
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static edit(id, form) {
    return new Promise((resolve, reject) => {
      axios
        .put("/projects/" + id, form)
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

export default ProjectService;
