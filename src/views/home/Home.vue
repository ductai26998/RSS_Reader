<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <!-- <div v-for="(item, index) in items" :key="index">
      <h1>{{ item.title }}</h1>
      <p>{{ item.link }}</p>
      <p>{{ item.description }}</p>
    </div> -->

    <div class="articles">
      <div class="articles_left">
        <div
          class="articles_left_item"
          v-for="(article, index) in articles"
          :key="index"
        >
          <!-- <img class="item-img" src={article.image} /> -->
          <ArticleItem :article="article"> </ArticleItem>
        </div>
      </div>
      <!-- <div class="articles_right">
          <BrowserRouter>
            <div class="category">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <NavLink to="/"
                    activeclass="selected"
                  ><span class="nav-item-text">LAST NEWS</span></NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/"
                  ><span class="nav-item-text">POPULAR</span></NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/"
                  >TOPIC</NavLink>
                </li>
              </ul>
            </div>
          </BrowserRouter>
          <div class="article-list">
            {lastNewarticles.map(article => (
              <div class="category-article-item" key={article.id}>
                <img class="article-item-img" src={article.image} />
                <articleItem
                  title={article.title}
                  release={article.release.slice(0, 10)}
                  author={article.author}
                ></articleItem>
              </div>
            ))}
          </div>
        </div> -->
    </div>
    <IntroAuthor />
    <!-- <div class="loading show"><Loading /></div> -->
  </div>
</template>

<script>
import axios from "axios";
import ArticleItem from "../../components/articleItem/ArticleItem.vue";
import IntroAuthor from "../../components/introAuthor/IntroAuthor.vue";

import { mapMutations } from "vuex";
import { mapState } from "vuex";

import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import "firebase/firestore";

export default {
  components: { ArticleItem, IntroAuthor },
  computed: mapState(["currentChanel"]),
  methods: {
    ...mapMutations(["changeChannel"]),
    getText(item) {
      const exceptions = ["<![CDATA[", "]]>"];
      exceptions.forEach((exception) => {
        item = item.split(exception).join("");
      });
      var e = document.createElement("textarea");
      e.innerHTML = item;
      return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    },
    async getUrls() {
      try {
        const db = getFirestore();
        const querySnapshot = await getDocs(collection(db, "urls"));
        querySnapshot.forEach((doc) => {
          this.urls.push(doc.data());
        });
      } catch (err) {
        alert(err);
      }
    },
  },
  data() {
    return {
      articles: [],
      urls: [],
    };
  },
  async created() {
    await this.getUrls();
    if (this.$attrs.id !== this.currentChanel.id && this.$attrs.id) {
      const channel = this.urls.find((url) => url.id === this.$attrs.id);
      this.changeChannel(channel);
    }

    const RSS_URL = this.currentChanel.url;

    await axios
      .get(RSS_URL)
      .then((response) => response.data)
      .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
      .then((data) => {
        const htmlItems = data.querySelectorAll("item");
        htmlItems.forEach((item) => {
          const title = this.getText(item.querySelector("title").innerHTML);
          const link = this.getText(item.querySelector("link").innerHTML);
          const description = this.getText(
            item.querySelector("description").innerHTML
          );
          const pubdate = item.querySelector("pubdate")
            ? item.querySelector("pubdate").innerHTML
            : item.querySelector("pubDate")
            ? item.querySelector("pubDate").innerHTML
            : null;

          this.articles.push({
            title,
            link,
            description,
            pubdate,
          });
          console.log(this.articles);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  beforeMount() {},
  mounted() {},
};
</script>

<style lang="scss">
@import "../../assets/scss/style";
.home {
  display: flex;
  flex-direction: row;
}
</style>
