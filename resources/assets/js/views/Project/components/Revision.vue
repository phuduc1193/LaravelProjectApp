<template>
  <div>
    <div v-for="date in Object.keys(listData)" :key="date">
      {{ $t('form.date') }} {{ date | moment("MM.DD.YYYY") }}
      <div v-for="(array, index) in Object.values(listData)" :key="index">
        <ul>
          <li v-for="(item, innerIndex) in array" :key="innerIndex">
            <span v-if="item.key != 'created_at'">
              {{ item.user.name + ' ' + $t('form.changed') + ' \'' + $t('databaseColumn.' + item.key) + '\'' }}.
            </span>
            <span v-else>
              {{ item.user.name + ' ' + $t('message.initProject') }}.
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";

export default {
  name: "project-revision",
  props: ["data"],
  data() {
    return {
      listData: {}
    };
  },
  created() {
    const listData = [];
    this.data.forEach(element => {
      const createdDate = new Date(element.created_at);
      const newElement = cloneDeep(element);
      newElement["created_at"] = new Date(createdDate.toDateString());
      listData.push(newElement);
    });

    const listDataByKey = [];
    const listDistinctDate = _.chain(listData)
      .map("created_at")
      .uniqBy("created_at")
      .value();
    listDistinctDate.forEach(date => {
      const listDataByDate = _.filter(listData, { created_at: date });
      const listDistinctUserByDate = _.chain(listDataByDate)
        .map("user_id")
        .uniq()
        .value();
      listDistinctUserByDate.forEach(userId => {
        const listDataByDateByUser = _.filter(listData, {
          created_at: date,
          user_id: userId
        });
        const listDistinctKeyByDateByUser = _.chain(listDataByDateByUser)
          .map("key")
          .uniq()
          .value();
        listDistinctKeyByDateByUser.forEach(key => {
          const listDataByDateByUserByKey = _.chain(listData)
            .filter({
              created_at: date,
              user_id: userId,
              key: key
            })
            .orderBy(["updated_at"])
            .value();
          const head = _.head(listDataByDateByUserByKey);
          const last = _.last(listDataByDateByUserByKey);
          const oldValue = head["old_value"];
          const newValue = last["new_value"];
          if (oldValue !== newValue) {
            const dataForResult = {
              user_id: userId,
              user: head["user"],
              created_at: date,
              old_value: oldValue,
              new_value: newValue,
              key: key
            };
            listDataByKey.push(dataForResult);
          }
        });
      });
    });

    this.listData = _.groupBy(listDataByKey, "created_at");
  }
};
</script>