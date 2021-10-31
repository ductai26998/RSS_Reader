<template>
  <div class="sidebar">
    <ul class="sidebar__list">
      <router-link to="/" class="sidebar__item">
        <li>Item 1</li>
      </router-link>
      <router-link to="/" class="sidebar__item">
        <li>Item 1</li>
      </router-link>
      <router-link to="/dsd" class="sidebar__item">
        <li>Item 1</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.sidebar__list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;
  margin-right: 20px;
  width: 200px;
}

.sidebar__item {
  border-bottom: solid 1px $coverColor;
}

.sidebar__item * {
  @include textStyle(
    $color: $linkColor,
    $size: 15px,
    $family: serif,
    $weight: 400
  );
}
.sidebar__item:hover {
  background-color: $coverColor;
}
</style>
