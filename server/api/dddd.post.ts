// 因為此API檔案名稱中夾帶.post.，僅允許客戶端以POST請求後才回應
export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body);
    // return { body }
    return 'dddd.post.ts OK'
})
