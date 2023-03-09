import { ElNotification,ElMessageBox} from "element-plus";
import nProgress from "nprogress";
//成功提示
export function toast(message,type="success",dangerouslyUseHTMLString=false){
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration:3000
      });
}

// 消息弹出框
 
export function showModal(content="提示内容",type= "warning",title=""){
 return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type: type,
    }
  )
}

//显示全屏loading 
export function showFullLoading(){
  nProgress.start()
}
//隐藏全屏loading
export function hideFullLoading(){
  nProgress.done()
}