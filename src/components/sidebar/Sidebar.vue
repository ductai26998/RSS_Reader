<template>
  <div class="sidebar">
    <h5 class="sidebar-title">Danh sách các kênh</h5>
    <ul class="sidebar__list">
      <li
        v-for="(url, index) in urls"
        :key="index"
        class="sidebar__item"
        @click="onClick(url)"
      >
        <p class="page-name">{{ url.name }}</p>
        <!-- <router-link :to="'/' + url.id">
          <p class="page-name">{{ url.name }}</p>
        </router-link> -->
      </li>
      <!-- <router-link
        to="/"
        class="sidebar__item"
        v-for="(url, index) in urls"
        :key="index"
      >
        <li>{{ url }}</li>
      </router-link>
      <router-link to="/" class="sidebar__item">
        <li>Item 1</li>
      </router-link>
      <router-link to="/dsd" class="sidebar__item">
        <li>Item 1</li>
      </router-link> -->
    </ul>
  </div>
</template>

<script>
// import axios from "axios";
import { mapMutations } from "vuex";

export default {
  name: "Sidebar",
  props: ["urls"],
  methods: {
    ...mapMutations(["changeChannel"]),
    onClick(url) {
      console.log("click")
      console.log(url)
      this.changeChannel(url);
      this.$router.push("/channel/" + url.id)
      this.$router.go();
    }
  },
  async created() {
    // const RSS_URL = `https://vass.gov.vn/noidung/rss/Lists/RssChannel/View_Detail.aspx?ItemID=27`;

    // await axios
    //   .get(RSS_URL)
    //   .then((response) => response.data)
    //   .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    //   .then((data) => {
    //     const htmlItems = data.querySelectorAll("item");
    //     htmlItems.forEach((item) => {
    //       const title = this.getText(item.querySelector("title").innerHTML);
    //       const link = this.getText(item.querySelector("link").innerHTML);
    //       const description = this.getText(
    //         item.querySelector("description").innerHTML
    //       );
    //       const pubdate = item.querySelector("pubdate").innerHTML;

    //       this.articles.push({
    //         title,
    //         link,
    //         description,
    //         pubdate,
    //       });
    //     });
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
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

.page-name {
  margin: 0;
  padding: 10px 0;
}
</style>
