<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>UnluckyNinja's Whatnot Toolkit</h1>
      </el-header>
      <el-main>
        <div class="projects-list">
          <div class="projects-item" v-for="i in projects.length" :key="i">
            <el-link
              :href="projects[i-1].link"
              target="_blank"
              :underline="false"
            >
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <img class="project-card-image" :src="projects[i-1].asset" />
                <h3>{{projects[i-1].description}}</h3>
              </el-card>
            </el-link>
          </div>
        </div>
      </el-main>
      <el-footer class="footer vertical-center-children">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PROJECTS from './defs/projects';
import { Project } from './defs/projects';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    Footer,
  },
})
export default class App extends Vue {
  private projects: Project[] = PROJECTS;
}
</script>

<style lang="scss">
body {
  margin: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-bottom: 20px;
}

.projects-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.projects-item {
  flex: 0 0;
  margin: 32px;
}

.project-card-image {
  width: 455px;
  height: 256px;
}

.vertical-center-children {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
