<template>
  <div class="intro-container">
    <h5 class="intro-title">Thông tin kênh</h5>
    <h6 class="channel-name">
      {{ currentChanel.name }}
    </h6>
    <p class="address">
      {{ currentChanel.url }}
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentChanel"]),
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.intro-container {
  margin-left: 20px;
  .intro-title {
    @include textStyle(
      $color: $articleContentColor,
      $size: 20px,
      $family: "Roboto",
      $weight: 600
    );
    width: 200px;
  }
}
</style>
