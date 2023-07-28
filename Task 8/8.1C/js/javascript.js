const readJsonURL = 'js/units.json';
const app = Vue.createApp({});
app.component('paginate', VuejsPaginateNext);

app.component('app-lookup2', {
  data: function() {
      return {
      currentPage: 1,
      pageSize: 5,
      pageRange: 5,
      marginPages: 1,
      fUnit: {
        code: '',
        desc: '',
        cp: '',
        type: ''
      },
      units: []
    };
  },
  mounted() {
    const self = this;
    $.getJSON(readJsonURL, function (data) {
      self.units = data;
    });
  },
  template: `
  <div>
    <h1 style="text-align: center;">Unit Descriptions</h1>
    <v-row>
      <v-col cols="12" md="12">
        <v-card class="mx-auto" max-width="80%">
          <v-card-text>
            <v-row>
              <v-col md="12" cols="12">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th id="code">Code</th>
                      <th id="desc">Description</th>
                      <th id="cp">Credit Points</th>
                      <th id="type">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="unit in getItems" :key="unit.code">
                      <td headers="code">{{unit.code}}</td>
                      <td headers="desc">{{unit.desc}}</td>
                      <td headers="cp">{{unit.cp}}</td>
                      <td headers="type">{{unit.type}}</td>
                    </tr>
                  </tbody>
                </table>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <paginate 
                  :page-count="getPageCount"    
                  :page-range="pageRange" 
                  :margin-pages="marginPages"
                  :click-handler="clickCallback" 
                  :prev-text="'Prev Page'" 		
                  :next-text="'Next Page'" 
                  :container-class="'pagination'" 
                  :active-class="'currentPage'"
                  :page-class="'page-item'">
                </paginate>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
`,
  computed: {
    filteredUnits() {
      return this.units.filter(unit =>
        unit.code.toLowerCase().match(this.fUnit.code.toLowerCase()) &&
        unit.desc.toLowerCase().match(this.fUnit.desc.toLowerCase()) &&
        unit.type.match(this.fUnit.type.trim())
      );
    },
    getItems() {
      let last = this.currentPage * this.pageSize;
      let start = last - this.pageSize;
      return this.filteredUnits.slice(start, last);
    },
    getPageCount() {
      return Math.ceil(this.filteredUnits.length / this.pageSize);
    }
  },
  methods: {
    clickCallback(pageNum) {
      this.currentPage = Number(pageNum);
    }
  }
});

const vuetify = Vuetify.createVuetify( )  
app.use(vuetify)
app.mount('#app')