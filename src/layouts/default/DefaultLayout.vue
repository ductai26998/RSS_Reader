<template>
  <div class="default-layout">
    <Header />
    <slot />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";

export default {
  name: "DefaultLayout",
  components: { Header },
};
</script>

<style></style>
