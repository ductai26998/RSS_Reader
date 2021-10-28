<template>
  <div class="article-item">
    <h4 class="article-title">{{ article.title }}</h4>
    <!-- <div class="article-info">
      <span class="article-info_time">Upload at {release} by </span>
      <span class="article-info_author">{author}</span>
    </div> -->
    <p>{{ article.description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: ["article"],
};
</script>

<style>
</style>