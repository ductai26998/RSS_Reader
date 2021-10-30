<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-item" to="/">Trang chủ</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-item" to="/">Thêm RSS</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.navbar {
  width: 100%;
}

.navbar-nav {
  padding-right: 20px;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  .nav-item {
    margin-right: 20px;
    .nav-link {
      color: #fff;
    }
  }
}
</style>
