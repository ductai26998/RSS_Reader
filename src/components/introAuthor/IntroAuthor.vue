<template>
  <div class="intro-container">
    <h5 class="intro-title">Thông tin kênh</h5>
    <h6 class="channel-name">
      <span class="subtitle">Tên kênh: </span>
      {{ currentChanel.name }}
    </h6>
    <p class="address">
      <span class="subtitle">Địa chỉ: </span>
      {{ currentChanel.url }}
    </p>
    <p class="creatd-at">
      <span class="subtitle">Ngày thêm: </span>
      {{ new Date(currentChanel.createdAt) | moment("DD/MM/YYYY") }}
    </p>
    <div class="action">
      <button class="btn btn-danger" @click="deleteRSS()">Xóa kênh</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { doc, deleteDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import "firebase/firestore";

export default {
  computed: {
    ...mapState(["currentChanel"]),
  },
  methods: {
    async deleteRSS() {
      try {
        const db = getFirestore();
        await deleteDoc(doc(db, "urls", this.currentChanel.id));
        alert("Xóa kênh thành công");
        this.$router.push("/");
        this.$router.go();
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style.scss";

.intro-container {
  margin-left: 20px;
  width: 300px;
  .intro-title {
    @include textStyle(
      $color: $articleContentColor,
      $size: 20px,
      $family: "Roboto",
      $weight: 600
    );
    width: 200px;
  }

  .subtitle {
    font-weight: bold;
  }
}
</style>
