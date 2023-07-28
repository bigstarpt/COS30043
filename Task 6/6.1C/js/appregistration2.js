const app = Vue.createApp({
    methods: {
        validate() {
            this.$refs.myForm.validate(); 
        }
    },
    data() {
        return {
            valid: true,
            firstName: "",
            lastName: "",
            userName: "",
            password: "",
            confirmPassword: "",
            email: "",
            streetAddress: "",
            suburb: "",
            postcode: "",
            mobileNumber: "",
            nameRules: [
                v => !!v || "Name is required",
                v => /[a-zA-Z()]$/.test(v) || "Letters only"
            ],
            userRules: [
                v => !!v || "User Name is required",
                v => (v && v.length >= 3) || "User Name must be more than 3 characters"
            ],
            passwordRules: [
                v => !!v || "Password confirmation is required",
                v => /[$%^&*]+/.test(v) || "Must contain one special character",
                v => (v && v.length >= 8) || "Password must be more than 8 characters"
            ],
            emailRules: [
                v => !!v || "E-mail is required",
                v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || "E-mail must be valid"
            ],
            streetAdressRules: [
                v => v.length <= 40 || "Maximum 40 characters"
            ],
            suburbRules: [
                v => v.length <= 20 || "Maximum 20 characters"
            ],
            postCodeRules: [
                v => /^[0-9]{4}$/.test(v) || "Exactly 4 numeric digits required (note: some postcodes start with 0)"
            ],
            phoneNumberRules: [
                v => /^04[0-9]{8}$/.test(v) || "10 digits, must start with 04"
            ]
        };
    },
    computed: {
        repeatPasswordRules() {
            return [
                v => !!v || "Required",
                v => v === this.password || "Password does not match!"
            ];
        }
    }
});
const vuetify = Vuetify.createVuetify();
app.use(vuetify);
app.mount('#app');