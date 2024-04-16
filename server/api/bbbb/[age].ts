export default defineEventHandler((event) => {
    const age = event.context.params.age
    console.log(age);
    return 'ok'
})