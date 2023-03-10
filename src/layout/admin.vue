<template>
    <el-container>
      <el-header><FHeader/></el-header>
      <el-container>
        <el-aside :width="$store.state.asideWith"><FMenu/></el-aside>
        <el-main>
            <FTagList/>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script setup>
import FHeader from "./components/FHeader.vue"
import FMenu from "./components/FMenu.vue"
import FTagList from "./components/FTagList.vue"
</script>
<style>
.el-aside{
  transition: all 0.2s;
}
</style>