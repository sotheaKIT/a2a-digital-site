<template>
    <div id="contact-page">
        <vue-headful
                :title="title + ' | A2A Digital'"
                :description="description"
                :keywords="keywords"
        />
        <ContactForm/>
    </div>
</template>

<script>
    import ContactForm from "../components/contact-form/contact-form.vue"

    export default {
        name: 'ContactPage',
        components: {
            ContactForm,
        },
        data() {
            return {
                title: 'Contact',
                description: 'Contact us for more information, email: a2adigitalcambodia@gmail.com, Our address: #253, 255 E0, Borey Bipup Thmey-Boeung Chhouk Road 2011 (Ouknhar Tri Heng Road), Street E; Khan Posenchey Phnom Penh Cambodia;',
                keywords: 'a2a digital, a2a cambodia, IT solution, a2a digital cambodia contact, IT cambodia, information technology'
            }
        }
    }
</script>



