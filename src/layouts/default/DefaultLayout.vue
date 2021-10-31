<template>
  <div class="default-layout">
    <Header />
    <div class="container-fluid">
      <Sidebar />
      <slot />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";
import Sidebar from "../../components/sidebar/Sidebar.vue";

export default {
  name: "DefaultLayout",
  components: { Header, Sidebar },
};
</script>

<style lang="scss">
.container-fluid {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
</style>
