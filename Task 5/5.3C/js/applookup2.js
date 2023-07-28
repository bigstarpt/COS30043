var units = [
  {code:'ICT10001', desc:'Problem Solving with ICT', cp:12.5, type:'Core'},
  {code:'COS10005', desc:'Web Development', cp:12.5, type:'Core'},
  {code:'INF10003', desc:'Introduction to Business Information Systems', cp:12.5, type:'Core'},
  {code:'INF10002', desc:'Database Analysis and Design', cp:12.5, type:'Core'},
  {code:'COS10009', desc:'Introduction to Programming', cp:12.5, type:'Core'},
  {code:'INF30029', desc:'Information Technology Project Management', cp:12.5, type:'Core'},
  {code:'ICT30005', desc:'Professional Issues in Information Technology', cp:12.5, type:'Core'},
  {code:'ICT30001', desc:'Information Technology Project', cp:12.5, type:'Core'},
            ];
const Unit = {
  data() {
    return { units }; },
  template: `
    <div>
      <h2>Details of {{ $route.params.id }}</h2>
      <ul v-for="unit in filteredUnits" :key="unit.code">
        <li><strong>{{ unit.code }}</strong></li>
        <li><strong>{{ unit.desc }}</strong></li>
        <li><strong>{{ unit.cp.toFixed(2) }}</strong></li>
        <li><strong>{{ unit.type }}</strong></li>
      </ul>
    </div>
  `,
  computed: {
    filteredUnits: function () {
      return this.units.filter((unit) =>
        unit.code.toLowerCase().includes(this.$route.params.id.toLowerCase())
      );
    },
  },
};

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [{
      path: '/unit/:id',
      component: Unit,
    },
  ],
});

const app = Vue.createApp({});

app.component('app-lookup2', {
  data: function () {
    return {
      units,
    };
  },
  template: `
    <div>
        <div class="col-md-16">
          <h2>Unit Information System</h2>
        </div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>More Info</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="unit in units" :key="unit.code">
            <td>{{ unit.code }}</td>
            <td>{{ unit.desc }}</td>
            <td><router-link :to="'/unit/'+unit.code">Show Detail</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <router-view></router-view>
    </div>
  `,
});

app.use(router);
app.mount('#app');