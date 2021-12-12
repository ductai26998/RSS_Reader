<template>
  <div class="add-container container">
    <form id="needs-validation" align="center" novalidate>
      <div class="form-row" align="center">
        <div class="col-md-4 mb-3" align="left">
          <label for="validationTooltip01">Tên kênh</label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip01"
            placeholder="Nhập tên kênh"
            v-model="name"
            required
          />
        </div>
        <div class="col-md-4 mb-3" align="left">
          <label for="validationTooltip02">Địa chỉ URL</label>
          <input
            type="text"
            class="form-control"
            id="validationTooltip02"
            placeholder="Nhập địa chỉ"
            v-model="url"
            required
          />
        </div>
      </div>
      <button class="btn btn-primary" @click="validate">Thêm kênh</button>
    </form>
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import "firebase/firestore";

export default {
  data() {
    return {
      name: "",
      url: "",
    };
  },
  methods: {
    async addNewRSS() {
      try {
        const db = getFirestore();
        const today = new Date().getTime();
        await addDoc(collection(db, "urls"), {
          name: this.name,
          url: this.url,
          createdAt: today,
        });
        alert("Đã thêm kênh mới thành công");
      } catch (e) {
        alert(e);
      }
    },
    async validate(event) {
      var form = document.getElementById("needs-validation");
      event.preventDefault();
      form.classList.add("was-validated");

      if (form.checkValidity() === false || this.name == "" || this.url == "") {
        event.stopPropagation();
      } else {
        await this.addNewRSS();
        this.$router.push("/");
        this.$router.go();
      }
    },
  },
  created() {},
};
</script>

<style lang="scss">
@import "../../assets/scss/style.scss";

.form-control {
  box-shadow: none !important;
}
.form-control:focus {
  border-color: $linkColor !important;
}
</style>
