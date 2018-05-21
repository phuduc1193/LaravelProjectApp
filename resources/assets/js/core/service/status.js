import axios from "axios";

class StatusService {
  static project() {
    return new Promise((resolve, reject) => {
      axios
        .get("/status/project")
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default StatusService;
