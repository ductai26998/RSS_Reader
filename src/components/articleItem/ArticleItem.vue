<template>
  <div class="article-item">
    <h4 class="article-title">{{ article.title }}</h4>
    <div class="article-info">
      <span class="article-info_time">Upload at {release} by </span>
      <span class="article-info_author">{author}</span>
    </div>
    <p class="article-content">
      {{ article.description }}
    </p>
    <a class="detail-link" :href="article.link">>> Xem chi tiet...</a>
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
.article-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
  .article-title {
    @include textStyle(#000, 13px, "Roboto", 600);
    line-height: 1.6;
  }
}
.article-info_time {
  @include textStyle($geyColor, 12px);
}
.article-info_author {
  @include textStyle($blueColor, 12px);
}
.article-content {
  @include textStyle($articleContentColor, 1rem, serif, 400);
  text-align: justify;
}
.detail-link{
  font-size: 12px;
  color: $linkColor;
}
</style>
