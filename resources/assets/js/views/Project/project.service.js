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

  static show(projectID) {
    return Cookies.get(env.TokenKey);
  }
}

export default ProjectService;
