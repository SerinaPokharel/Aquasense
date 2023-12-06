// store/index.js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const AuthStore = defineStore('counter', () => {
  const isAuthenticated = ref(false)
  const token = ref("")

  function IsAuth(){
    if(!isAuthenticated.value && !token.value){
      return false;
    }
    console.log("Here")
    return checkAuth(token.value)
  }

  const checkAuth = (token: string) => {
    const decodedToken = parseJwt(token);
    // if (!(decodedToken && decodedToken.exp * 1000 > Date.now())) {
    //   return false;
    // }
    
    return true;
  };
  
  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  function setAuth(token_from_resp: string) {
    console.log(token_from_resp)
    isAuthenticated.value = true;
    token.value = token_from_resp;
  }

  return { isAuthenticated, token, IsAuth, setAuth }
})
