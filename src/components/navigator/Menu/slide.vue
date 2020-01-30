<template>
    <div>
        <Menu v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu">
            <slot></slot>
        </Menu>
    </div>
</template>

<script>
    import Navigator from '../navigator.vue';
    export default {
      name: 'slide',
      components: {
        Menu: Navigator
      },
      methods: {
        openMenu() {
          this.$emit('openMenu');
        },
        closeMenu() {
          this.$emit('closeMenu');
        }
      }
    };
</script>


