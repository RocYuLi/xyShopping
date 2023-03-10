import { ref, reactive } from "vue";
import { logout, updatepassword } from "~/api/manager.js";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { showModal, toast } from "~/composables/util.js";



export function useRepassword() {
    const store = useStore();
    const router = useRouter();
    //修改密码的抽屉
    const formDrawerRef = ref(null)
    const form = reactive({
      oldpassword: "",
      password: "",
      repassword:""
    });
    
    const rules = {
        oldpassword: [
        {
          required: true,
          message: "旧密码不能为空",
          trigger: "blur",
        }
      ],
      password: [
        {
          required: true,
          message: "密码不能为空",
          trigger: "blur",
        },
      ],
     repassword: [
        {
          required: true,
          message: "确认密码不能为空",
          trigger: "blur",
        },
      ],
    };
    
    const formRef = ref(null);
    
    
    const onSubmit = () => {
      formRef.value.validate((valid) => {
        if (!valid) {
          return false;
        }
        formDrawerRef.value.showLoading()
        updatepassword(form).then(res=>{
            toast("修改成功，请重新登录")
            // 清空数据
            store.dispatch("logout")
            //跳转登录页
            router.push("/login")
        }).finally(()=>{
            formDrawerRef.value.hideLoading()
        })
      });
    };
    
    const openRePasswordForm = ()=> formDrawerRef.value.open()
     return {
        formDrawerRef,
        form,
        rules,
        formRef,
        onSubmit,
        openRePasswordForm
     }
    }

export function useLogout(){
    const store = useStore();
    const router = useRouter();
    function handleLogout() {
        showModal("是否要退出登录").then((res) => {
          logout().finally(() => {
            store.dispatch("logout");
            //跳转登录页
            router.push("/login");
            //提示退出登录
            toast("退出成功");
          });
        });
     
    }
     return {handleLogout} 
}    