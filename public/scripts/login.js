login();


async function login(){
    const data = await axios.post('/user/login')
    console.log("login",data)
}

