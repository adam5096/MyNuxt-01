export default defineEventHandler((event) => {
    // 回應語法一
    // 連接資料庫，向其查詢取得資料[{},{},...{}]
    // return {
    //     name: 'adam',
    //     gender: 'male',
    //     age: 35
    // }
    
    // 回應語法二
    event.node.res.end('ha ha ha')
})