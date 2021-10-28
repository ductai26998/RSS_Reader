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
    <!-- <div class="loading show"><Loading /></div> -->
  </div>
</template>

<script>
import axios from "axios";
import ArticleItem from "../components/ArticleItem.vue"

export default {
  components: {ArticleItem},
  data() {
    return {
      articles: [],
    };
  },
  async created() {
    const RSS_URL = `https://vass.gov.vn/noidung/rss/Lists/RssChannel/View_Detail.aspx?ItemID=27`;

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
          this.articles.push({
            title: title,
            link: link,
            description: description,
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  beforeMount() {},
  methods: {
    getText(item) {
      return item.slice(9, item.length - 3);
    },
  },
  computed: {},
};
</script>