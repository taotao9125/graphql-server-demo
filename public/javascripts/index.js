fetch(
    '/graphql',
    {
        body: JSON.stringify({
            query: `{
                list {
                    id
                    ctime
                }
                user {
                    id
                    name
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