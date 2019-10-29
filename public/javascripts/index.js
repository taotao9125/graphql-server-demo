fetch('/api/users')
.then((res) => {
    return res.json()
})
.then((res) => {
    console.log(res);
})