import axios from "~/axios.js"

export function login(username,password){
  return axios.post("/admin/login",{username,password})}

 export function getinfo(){
  return axios.post("/admin/getinfo") //token已被放在请求拦截器的请求头中，无需再传
 } 

 export function logout(){
  return axios.post("/admin/logout")
 }