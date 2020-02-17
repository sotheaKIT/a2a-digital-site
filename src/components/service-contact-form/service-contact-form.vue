<style src="./service-contact-form.css" scoped></style>
<template src="./service-contact-form.html">
</template>
<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
export default {
  name: 'ServiceContactForm',
   data () {
    return {
      email: '',
      name: '',
      country : '',
      feedback: '',
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit() {
        this.$validator.validateAll();

        if (!this.errors.any()) {
            this.submitForm()
        }
      },
    submitForm(){
      this.formSubmitted = true
      let currentObj = this;
            this.axios.post('https://fierce-escarpment-31981.herokuapp.com/send-email', {
                name: this.name,
                email: this.email,
                feedback: this.feedback,
                country : this.country
            })
            .then(function (response) {
                currentObj.output = response.data;
            })
            .catch(function (error) {
                currentObj.output = error;
            });
           this.$router.push({ path: '/success' })
        }

  }
}
</script>