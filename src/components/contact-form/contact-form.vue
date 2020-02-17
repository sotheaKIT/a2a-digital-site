<style src="./contact-form.css" scope ></style>
<template src="./contact-form.html"></template>

<script>

export default {
    name: 'ContactForm',
 
    data() {
            return {
              name: '',
              email: '',
              country:'',
              formSubmitted: false,
              Feedback: ''
            };
    },
        
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll();

            if (!this.errors.any()) {
                this.submitForm()
            }
      },
        submitForm() {
            this.formSubmitted = true
            let currentObj = this;
            this.axios.post('http://172.16.0.64:4000/send-email', {
                name: this.name,
                email: this.email,
                Feedback: this.Feedback,
                country: this.country
            })
            .then(function (response) {
                currentObj.output = response.data;
            })
            .catch(function (error) {
                currentObj.output = error;
                alert(currentObj.output)              
            });
            this.$router.push('success')
        }
    }
   
  }

  
  
</script>