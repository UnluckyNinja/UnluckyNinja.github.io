<template>
  <div class="h-list">
    <div class="h-list-item" v-for="item in links" :key="item.name">
      <a class="sns-link" :href="item.link" target="_blank">
        <img v-if="item.image" class="sns-img" :src="item.image" :title="item.name" />
        <i v-else class="fab fa-steam sns-img" :title="item.name"></i>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
  private links = [
    {
      name: 'Weibo @UnNinja',
      image: require('@/assets/weibo_logo.png'),
      link: 'https://weibo.com/6852898902'
    },
    {
      name: 'Bilibili @倒霉の忍者',
      image: require('@/assets/bilibili_logo.png'),
      link: 'https://space.bilibili.com/205576'
    },
    {
      name: 'Twitter @UnluckyNinja_',
      image: require('@/assets/twitter_logo.svg'),
      link: 'https://twitter.com/UnluckyNinja_'
    },
    {
      name: 'Steam @UnluckyNinja',
      icon: 'steam',
      link: 'https://steamcommunity.com/id/unluckyninja/'
    }
  ];
}
</script>

<style lang="scss" scoped>
.h-list {
  display: flex;
  justify-content: center;
  flex-direction: row;
  .h-list-item {
    flex: 0 0;
  }
}

.sns-img {
  width: 28px;
  height: 28px;
  font-size: 28px;
  color: black;
}
.sns-link {
  margin: 0 28px 0 28px;
  display: inline-block;
}
</style>