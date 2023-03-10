<template>
  <div class="f-menu" :style="{width:$store.state.asideWidth}">
    <el-menu :default-active="defaultActive" unique-opened="true" class="border-0" 
    @select="handleSelect" :collapse="isCollapse" :collapse-transition="false">
      <template v-for="(item,index) in asideMenus" :key="index">
        <!-- 有子菜单的 -->
        <el-sub-menu :index="item.name" v-if="item.child && item.child.length>0">
          <template #title>
            <el-icon>
              <component :is="item.icon" ></component>
            </el-icon>
            <span >{{ item.name }}</span>
          </template>
         
           <!-- 子菜单 -->
            <el-menu-item 
            v-for="(item2,index2) in item.child" 
            :key="index2"
            :index="item2.frontpath"
            > 
            <el-icon>
            <component :is="item2.icon"></component>
            </el-icon>
            <span>{{item2.name}}</span></el-menu-item>

        </el-sub-menu>

        <!-- 没有子菜单的 -->
        <el-menu-item :index="item.frontpath" v-else>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import {computed,ref} from "vue"
import {useRouter,useRoute} from "vue-router"
import {useStore} from "vuex";
const router = useRouter()
const store = useStore()
const route = useRoute()
//默认选中
const defaultActive = ref(route.path)
//是否折叠
const isCollapse = computed(()=>!(store.state.asideWidth == "250px"))

const asideMenus = [
  {
    name: "后台面板",
    icon: "help",
    child: [
      {
        name: "主控台",
        frontpath: "/",
        icon: "home-filled",
      },
    ],
  },
  {
    name: "商城管理",
    icon: "shopping-bag",
    child: [
      {
        name: "商品管理",
        frontpath: "/goods/list",
        icon: "shopping-cart-full",
      },
    ],
  },
];
const handleSelect = (e)=>{
    router.push(e)
}
</script>
<style scoped>
.f-menu {
  transition: all 2s;
  top: 64px;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  @apply shadow-md fixed bg-light-50;
}
</style>