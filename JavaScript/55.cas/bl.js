const getComments = () =>{
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res)  => console.log(res.data))
    .catch((error) => console.log(error.message))
}
getComments()