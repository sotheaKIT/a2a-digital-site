<style src="./navigator.css" scope></style>
<template src="./navigator.html"></template>

<script>


    export default {
        name: 'Navigator',
        data() {
            return {
                isSideBarOpen: false,
                styleCheck_service: 'none',
                styleCheck_product: 'none',
                background_service: 'unset',
                background_product: 'unset',
                color_service: '',
                color_product: '',
                color_click_serivce: '',
                color_click_product: '',
                rotate_click_service: '',
                rotate_click_product: '',
                navigationActivate : "inactive",
                activeColor : null,
                activeShadow : null
            };
        },
        props: {
            isOpen: {
                type: Boolean,
                required: false
            },
            right: {
                type: Boolean,
                required: false
            },
            width: {
                type: [String],
                required: false,
                default: '100'
            },
            disableEsc: {
                type: Boolean,
                required: false
            },
            noOverlay: {
                type: Boolean,
                required: false
            },
            onStateChange: {
                type: Function,
                required: false
            },
            burgerIcon: {
                type: Boolean,
                required: false,
                default: true
            },
            crossIcon: {
                type: Boolean,
                required: false,
                default: true
            },
            disableOutsideClick: {
                type: Boolean,
                required: false,
                default: false
            },


        },
        methods: {
            handleScroll: function () {
                 if (this.$router.currentRoute.name === "home" || this.$router.currentRoute.name === "about"  ) {
                    if (window.scrollY > 980) {
                        this.navigationActivate = "inactive"
                        this.activeColor = "white"
                        this.activeShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)"
                    } else {
                        this.navigationActivate = "active"
                        this.activeColor = "none"
                        this.activeShadow = "none"
                    }
                } 

                else {
                    if (window.scrollY > 50) { 
                        this.activeColor = "white"
                        this.activeShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)"
                    } else {
                         this.activeShadow = "none"
                    }
                    
                     
                }
            },
            openMenu() {
                this.$emit('openMenu');
                this.isSideBarOpen = true;
                if (!this.noOverlay) {
                    document.body.classList.add('bm-overlay');
                }
                if (this.right) {
                    this.$refs.sideNav.style.left = 'auto';
                    this.$refs.sideNav.style.right = '0px';
                }
                this.$nextTick(function () {
                    this.$refs.sideNav.style.width = this.width
                        ? this.width + '%'
                        : '300px';
                });
            },
            closeMenu() {
                this.$emit('closeMenu');
                this.isSideBarOpen = false;
                document.body.classList.remove('bm-overlay');
                this.$refs.sideNav.style.width = '0px';
            },
            closeMenuOnEsc(e) {
                e = e || window.event;
                if (e.key === 'Escape' || e.keyCode === 27) {
                    this.closeMenu();
                }
            },
            documentClick(e) {

                if (e.target.id === 'slide_service' && this.styleCheck_service == 'none') {
                    this.styleCheck_service = 'block'
                    this.background_service = '#138690'
                    this.styleCheck_product = 'none'
                    this.background_product = 'unset'
                    this.color_service = '#FFFFFF'
                    this.color_product = '#138690'
                    this.color_click_product = '#138690'
                    this.rotate_click_product = 'rotate(0)'
                    this.rotate_click_service = 'rotate(90deg)'
                    this.color_click_serivce = '#FFFFFF'

                } else if (e.target.id === 'slide_service' && this.styleCheck_service == 'block') {

                    this.styleCheck_service = 'none'
                    this.background_service = 'unset'
                    this.color_service = '#138690'
                    this.color_click_serivce = '#138690'
                    this.rotate_click_service = 'rotate(0)'

                }
                if (e.target.id === 'slide_product' && this.styleCheck_product == 'none') {
                    this.styleCheck_product = 'block'
                    this.background_product = '#138690'
                    this.styleCheck_service = 'none'
                    this.background_service = 'unset'
                    this.color_product = '#FFFFFF'
                    this.rotate_click_product = 'rotate(90deg)'
                    this.color_service = '#138690'
                    this.color_click_product = '#FFFFFF'
                    this.color_click_serivce = '#138690'
                    this.rotate_click_service = 'rotate(0)'


                } else if (e.target.id === 'slide_product' && this.styleCheck_product == 'block') {
                    this.styleCheck_product = 'none'
                    this.background_product = 'unset'
                    this.color_product = '#138690'
                    this.rotate_click_product = 'rotate(0)'
                    this.color_click_product = '#138690'
                }

            },

        },
        mounted() {
            if (!this.disableEsc) {
                document.addEventListener('keyup', this.closeMenuOnEsc);
            } else { 
                this.activeColor = "white"
            }
        },
        created: function () {
            document.addEventListener('click', this.documentClick);
            if (this.$router.currentRoute.name === "home" || this.$router.currentRoute.name === "about") {
                this.navigationActivate = "active"
            } else {
                this.activeColor = "white"
            }
        },
        destroyed: function () {
            document.removeEventListener('keyup', this.closeMenuOnEsc);
            document.removeEventListener('click', this.documentClick);
        },
        watch: {
            isOpen: {
                deep: true,
                immediate: true,
                handler(newValue, oldValue) {
                    this.$nextTick(() => {
                        if (!oldValue && newValue) {
                            this.openMenu();
                        }
                        if (oldValue && !newValue) {
                            this.closeMenu();
                        }
                    });
                }
            },
            right: {
                deep: true,
                immediate: true,
                handler(oldValue, newValue) {
                    if (oldValue) {
                        this.$nextTick(() => {
                            this.$refs.bmBurgerButton.style.left = 'auto';
                            this.$refs.bmBurgerButton.style.right = '36px';
                            this.$refs.sideNav.style.left = 'auto';
                            this.$refs.sideNav.style.right = '0px';
                            document.querySelector('.bm-burger-button').style.left = 'auto';
                            document.querySelector('.bm-burger-button').style.right = '0px';
                            document.querySelector('.bm-menu').style.left = 'auto';
                            document.querySelector('.bm-menu').style.right = '0px';
                            document.querySelector('.cross-style').style.right = '250px';
                        });
                    }
                    if (newValue) {
                        if (
                            this.$refs.bmBurgerButton.hasAttribute('style')
                        ) {
                            this.$refs.bmBurgerButton.removeAttribute('style');
                            this.$refs.sideNav.style.right = 'auto';
                            document
                                .querySelector('.bm-burger-button')
                                .removeAttribute('style');
                            document.getElementById('sideNav').style.right = 'auto';
                            document.querySelector('.cross-style').style.right = '0px';
                        }
                    }
                }
            }
        }
    }
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navigation").style.position = "fixed";

        } else {
            document.getElementById("navigation").style.position = "fixed";
        }
        prevScrollpos = currentScrollPos;
    }
</script>