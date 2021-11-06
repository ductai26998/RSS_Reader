<template>
  <div class="default-layout">
    <Header />
    <div class="container-fluid">
      <Sidebar :urls="urls" />
      <slot />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "../../components/header/Header.vue";
import Sidebar from "../../components/sidebar/Sidebar.vue";
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import "firebase/firestore";

export default {
  name: "DefaultLayout",
  components: { Header, Sidebar },
  computed: mapState(["currentChanel"]),
  data() {
    return {
      urls: [],
    };
  },
  methods: {
    ...mapMutations(["changeChannel"]),
    async getUrls() {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "urls"));
        querySnapshot.forEach((doc) => {
          this.urls.push(doc.data())
        });

      } catch (err) {
        // console.log(err);
        alert(err);
      }
    },
  },
  async created() {
    await this.getUrls();
    this.changeChannel(this.urls[0]);
  },
};
</script>

<style lang="scss">
.container-fluid {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
</style>
