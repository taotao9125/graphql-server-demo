fetch(
    '/graphql',
    {
        body: JSON.stringify({
            query: `{
                list {
                    id
                    content
                    ctime
                }
            }`
        }),
        headers: {
            'content-type': 'application/json',
        },
        'method': 'POST'
    }
)
.then(async function(res){
    var ret = await res.json();
    console.log(ret);
})