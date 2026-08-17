export function Loginpage(){
    const Login = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const bodyJson = strinify({
            username: username,
            password: password,
        })
        const res = await fetch("http://localhost")

    } 

    return(
     <h1>Loginpage</h1>   
    )
}