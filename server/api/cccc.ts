export default defineEventHandler((event) => {
    const query = getQuery(event)
    console.log(query);
    
    // return { a: query.foo, b: query.baz }
    return 'ccc ok'
})
