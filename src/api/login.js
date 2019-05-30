import axios from "axios"
var instance = axios.create({
  baseURL: 'http://192.168.1.10:8081/data/',
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});

export function queryAllUser(){
    return instance.get("queryAllUser")
}
export function newHotel(data){
    return instance.post("newHotel",data)
}
export function queryHotel(key){
    return instance.get("queryHotel",{
        params: { key: key }
      })
}
export function updateHotel(data){
    return instance.post("updateHotel",data)
}
export function deleteHotel(data){
    return instance.post("deleteHotel",data)
}
export function login(data){
    return instance.post("login",data)
}
export function logout(data){
    return instance.post("logout",data)
}
export function deleteUser(data){
    return instance.post("deleteUser",data)
}
export function queryAllHotel(data){
    return instance.get("queryAllHotel",data)
}
export function newUser(data){
    return instance.post("newUser",data)
}


export function updateUser(data){
    return instance.post("updateUser",data)
}
