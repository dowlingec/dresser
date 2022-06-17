import { useState } from 'react';

function Login({ onLogin }) {
    const [email, setEmail] = useState("");

    const handleSubmit = async () => {
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