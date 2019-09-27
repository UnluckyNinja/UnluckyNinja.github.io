<template>
    <div>
      <a class="sns-link" v-for="item in links" :key="item.name" :href="item.link" target="_blank">
        <img class="sns-img" :src="item.image" :title="item.name" /><h6></h6>
      </a>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  private links = [
    {
      name: 'weibo @UnNinja',
      image: require('@/assets/weibo_logo.png'),
      link: 'https://weibo.com/6852898902',
    },
    {
      name: 'bilibili @倒霉の忍者',
      image: require('@/assets/bilibili_logo.png'),
      link: 'https://space.bilibili.com/205576',
    },
    {
      name: 'twitter @UnluckyNinja_',
      image: require('@/assets/twitter_logo.svg'),
      link: 'https://twitter.com/UnluckyNinja_',
    },
  ];
}
</script>

<style lang="scss" scoped>
.sns-img {
  width: 28px;
  height: 28px;
}
.sns-link {
  margin: 0 28px 0 28px;
  display: inline-block;
}
</style>