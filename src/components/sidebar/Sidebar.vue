<template>
  <div class="sidebar">
    <h5 class="sidebar-title">Danh sách các kênh</h5>
    <ul class="sidebar__list">
      <li
        v-for="(url, index) in urls"
        :key="index"
        :class="
          currentChanel.id != url.id ? 'sidebar__item' : 'sidebar__item actived'
        "
        @click="onClick(url)"
      >
        <p class="page-name">{{ url.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "Sidebar",
  props: ["urls"],
  methods: {
    ...mapMutations(["changeChannel"]),
    onClick(url) {
      this.changeChannel(url);
      this.$router.push("/channel/" + url.id);
      this.$router.go();
    },
  },
  computed: mapState(["currentChanel"]),
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.sidebar-title {
  @include textStyle(
    $color: $articleContentColor,
    $size: 20px,
    $family: "Roboto",
    $weight: 600
  );
}
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
  cursor: pointer;
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

.actived {
  background-color: $coverColor;
}

.page-name {
  margin: 0;
  padding: 10px 0;
}
</style>
