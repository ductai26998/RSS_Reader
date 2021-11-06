<template>
  <nav class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-item" to="/"
          ><span class="btn">Trang chủ</span></router-link
        >
      </li>
      <li class="nav-item">
        <router-link class="nav-item" to="/add"
          ><span class="btn">Thêm RSS</span></router-link
        >
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
  flex-direction: row !important;
  justify-content: left;
  .nav-item {
    margin-right: 20px;
  }
  .btn {
    background-color: transparent !important;
    color: $redColor;
    @include textStyle(
      $color: #fff,
      $size: 15px,
      $family: sans-serif,
      $weight: 600
    );
  }
  .btn:hover {
    color: $redColor;
  }
}
</style>
