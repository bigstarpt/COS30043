const app = Vue.createApp({});
app.component('app-readjson', {
    data() {
        return {
            msg: []
        };
    },
    template: `
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Description</th>
                    <th>Cp</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="m in msg" :key="m.code">
                    <td>{{ m.code }}</td>
                    <td>{{ m.desc }}</td>
                    <td>{{ m.cp   }}</td>
                    <td>{{ m.type }}</td>
                </tr>
            </tbody>
        </table>
    `,
    mounted() {
        const self = this;
        const url = 'js/units.json';
        fetch(url)
            .then(response => response.json())
            .then(data => {
                self.msg = data;
                console.log(data);
            })
            .catch(error => {
                self.err = error;
            });
    },
});
app.mount('#app');
