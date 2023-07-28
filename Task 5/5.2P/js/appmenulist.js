const app = Vue.createApp({});
app.component("mymenu", {
  props: ["menu"],
  template: `
    <ul>
      <li v-for="m in menu" :key="m">{{ m }}</li>
    </ul>
  `
});
app.mount("#app");
