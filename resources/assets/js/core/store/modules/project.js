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
    GetProjects({ commit }) {
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
    },
    EditProjectById({ commit }, form) {
      const id = form.id;
      return new Promise((resolve, reject) => {
        ProjectService.edit(id, form)
          .then(project => {
            commit("SET_PROJECT", project);
            resolve(project);
          })
          .catch(() => {});
      });
    },
    CreateProject({ commit }, form) {
      return new Promise((resolve, reject) => {
        ProjectService.create(form)
          .then(project => {
            commit("SET_PROJECT", project);
            resolve(project);
          })
          .catch(() => {});
      });
    }
  }
};

export default project;
