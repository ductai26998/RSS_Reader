<template>
  <div class="article-item">
    <div class="article-item__left">
      <img class="item-img" src="../../assets/images/cover1.jpg" />
    </div>
    <div class="article-item__right">
      <h4 class="article-title">{{ article.title }}</h4>
      <div class="article-info">
        <span class="article-info_time"> Được đăng tải </span>
        <!-- <span class="article-info_author">Trang thông tin</span> -->
        <span class="article-info_time"> vào</span>
        <span class="article-info_author"> {{ article.pubdate }} </span>
      </div>
      <p class="article-content">
        {{ article.description }}
      </p>
      <a class="detail-link" :href="article.link">>> Xem chi tiết...</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleItem",
  props: ["article"],
};
</script>

<style lang="scss">
@import "../../assets/scss/style";

@media screen and (max-width: 550px) {
  .item-img {
    margin: 0 0 10px 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
  }
}

.article-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  width: 100%;
  background-color: $coverColor;
  padding: 20px;

  .item-img {
    height: 250px;
    width: 250px;
    margin-right: 15px;
  }

  .article-title {
    @include textStyle(#000, 15px, "Roboto", 600);
    line-height: 1.6;
  }
}

.article-item__left {
}

.article-item__right {
  display: flex;
  flex-direction: column;
}

.article-info_time {
  @include textStyle($geyColor, 12px);
}
.article-info_author {
  @include textStyle($blueColor, 12px, "Roboto", 600);
}
.article-content {
  @include textStyle($articleContentColor, 1rem, serif, 400);
  text-align: justify;
}
.detail-link {
  font-size: 12px;
  color: $linkColor;
}
</style>
