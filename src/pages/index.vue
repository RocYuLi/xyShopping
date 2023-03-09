<template>
  <div>
    后台首页
    {{ $store.state.user.username }}
    <el-button @click="handleLogout">退出登录</el-button>
  </div>
</template>
<script setup>
import { showModal, toast } from "~/composables/util.js";
import { logout } from "~/api/manager.js";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
function handleLogout() {
  showModal("是否要退出登录").then(res=>{
   logout().finally(() => {
        store.dispatch("logout");
        //跳转登录页
        router.push("/login");
        //提示退出登录
        toast("退出成功");
      });
  })
    
}
</script>