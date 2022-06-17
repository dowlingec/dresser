import { useState } from 'react';

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
  
    // function handleSubmit(e) {
    //   e.preventDefault();
    //   fetch("/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   })
    //     .then((r) => r.json())
    //     .then((user) => onLogin(user));
    // }
    console.log("Login page email value", email)
    const handleSubmit = async (e) => {
        // e.preventDefault();
        let req = await fetch('/login', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
        let res = await req.json()
        onLogin(res)
        console.log("Results of submit => ", res)
      }


    return (
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  }

  export default Login;