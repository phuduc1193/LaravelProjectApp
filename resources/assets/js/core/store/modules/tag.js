import TagService from "@/core/service/tag";

const tag = {
  actions: {
    SearchTagsByKeyword({ commit }, keyword) {
      return new Promise((resolve, reject) => {
        TagService.search(keyword)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    GetPopularTags({ commit }) {
      return new Promise((resolve, reject) => {
        TagService.get(10)
          .then(response => {
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default tag;
