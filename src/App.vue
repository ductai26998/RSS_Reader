<template>
  <div id="app">
    <!-- <Home /> -->
    <transition name="fade" mode="out-in">
      <DefaultLayout>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
      </DefaultLayout>
    </transition>
  </div>
</template>

<script>
import DefaultLayout from "./layouts/default/DefaultLayout.vue";
export default {
  components: { DefaultLayout },
};
</script>

<style lang="scss"></style>
