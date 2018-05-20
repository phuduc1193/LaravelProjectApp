<template>
  <div>
    <div v-for="date in Object.keys(dataByDate)" :key="date">
      {{ $t('form.date') }} {{ date | moment("MM.DD.YYYY") }}
      <div v-for="(array, index) in Object.values(dataByDate)" :key="index">
        <ul>
          <li v-for="(item, innerIndex) in array" :key="innerIndex">
            {{ item.user.name + ' ' + $t('form.changed') + ' \'' + $t('databaseColumn.' + item.key) + '\'' }}
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
  props: ["data", "users"],
  data() {
    return {
      userProfiles: this.users,
      dataByDate: {}
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
    const dataByDate = _.groupBy(listData, "created_at");
    Object.keys(dataByDate).forEach(date => {
      const elementByDate = { created_at: date };
      const dataByDateAndUser = _.groupBy(dataByDate[date], "user_id");
      Object.keys(dataByDateAndUser).forEach(userId => {
        const elementByUser = cloneDeep(elementByDate);
        elementByUser["user_id"] = userId;
        elementByUser["user"] = _.find(this.userProfiles, user => {
          return user.id == userId;
        });
        const dataByKey = _.groupBy(dataByDateAndUser[userId], "key");
        Object.keys(dataByKey).forEach(key => {
          const arrayValue = dataByKey[key];
          const firstValue = arrayValue[0];
          const lastValue = arrayValue[arrayValue.length - 1];
          const element = cloneDeep(elementByUser);
          element["key"] = key;
          element["old_value"] = firstValue["old_value"];
          element["new_value"] = lastValue["new_value"];
          if (element["old_value"] !== element["new_value"]) {
            listDataByKey.push(element);
          }
        });
      });
    });

    this.dataByDate = _.groupBy(listDataByKey, "created_at");
  }
};
</script>