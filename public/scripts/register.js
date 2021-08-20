register();

async function register(){
    const data = await axios.post('/user/register')
    console.log("register",data)

}