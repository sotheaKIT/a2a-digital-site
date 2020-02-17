<style src="./contact-form.css" scope ></style>
<template src="./contact-form.html"></template>

<script>
 
  export default {
    name: 'ContactForm',
    mounted() {
            console.log('Component mounted.')
    },
        data() {
            return {
              username: '',
              email: '',
              country:'',
              feedback: ''
            };
        },
        
        methods: {
            formSubmit(e) {
              
                e.preventDefault();
                let currentObj = this;
                this.axios.post('http://172.16.0.64:4000/send-email', {
                    username: this.username,
                    email: this.email,
                    feedback: this.feedback,
                    country: this.country
                })
                .then(function (response) {
                    currentObj.output = response.data;
                })
                .catch(function (error) {
                    currentObj.output = error;
                });
            }
        }
   
  }

</script>