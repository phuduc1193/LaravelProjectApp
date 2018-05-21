import ProjectService from "@/core/service/project";

const project = {
  state: {
    current: {}
  },

  mutations: {
    SET_PROJECT: (state, project) => {
      state.current = project;
    }
  },

  actions: {
    GetProjects({ commit, state }) {
      return new Promise((resolve, reject) => {
        ProjectService.all().then(projects => {
          resolve(projects);
        });
      }).catch(error => {
        reject(error);
      });
    },
    GetProjectById({ commit }, id) {
      return new Promise((resolve, reject) => {
        ProjectService.show(id)
          .then(project => {
            commit("SET_PROJECT", project);
            resolve(project);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default project;
