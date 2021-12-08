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
    <div class="action">
      <button class="btn btn-danger" @click="deleteRSS()">Xóa kênh</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import {
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
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
        const ref = collection(db, "urls");
        const q = query(ref, where("id", "==", this.currentChanel.id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (element) => {
          await deleteDoc(doc(db, "urls", element.id));
          alert("Xóa kênh thành công");
          this.$router.push("/");
          this.$router.go();
        });
      } catch (err) {
        console.log(err);
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
