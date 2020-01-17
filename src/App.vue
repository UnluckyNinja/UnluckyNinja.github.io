<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>UnluckyNinja's Whatnot Toolkit</h1>
      </el-header>
      <el-main class="main">
        <div class="projects-list">
          <div class="projects-item" v-for="i in projects.length" :key="i">
            <el-link :href="projects[i-1].link" target="_blank" :underline="false">
              <el-card :body-style="{ padding: '0px' }" shadow="hover">
                <el-image class="project-card-image" :src="projects[i-1].asset" fit="fit" />
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
    Footer
  }
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  position: relative;
  .el-container {
    flex: 1 0;
    .footer {
      // justify-self: flex-end;
      margin-bottom: 20px;
    }
  }
}

.projects-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.projects-item {
  flex: 1 1 250px;
  margin: 20px;
}

.project-card-image {
  width: 100%;
  max-width: 400px;
  min-width: 250px;
  height: auto;
}

.vertical-center-children {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
