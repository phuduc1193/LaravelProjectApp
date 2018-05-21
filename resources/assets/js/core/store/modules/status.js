import StatusService from "@/core/service/status";

const status = {
  state: {
    projectStatus: []
  },
  mutations: {
    SET_PROJECT_STATUS: (state, projectStatus) => {
      state.projectStatus = projectStatus;
    }
  },
  actions: {
    SetProjectStatus({ commit, state }) {
      return new Promise((resolve, reject) => {
        StatusService.project()
          .then(projectStatus => {
            commit("SET_PROJECT_STATUS", projectStatus);
            resolve(projectStatus);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default status;
