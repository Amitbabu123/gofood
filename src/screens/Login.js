import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"

const Login = () => {
  let navigate = useNavigate()
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });

      // Process the response as needed
      const json = await response.json();
      console.log(json);

      if (!json.success) {
        alert("Enter valid credentials");
      }
      if(json.success){
        localStorage.setItem("userEmail", credentials.email);
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"))
        navigate("/")
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover', color:"green" }}>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' />
          </div>
          <button type="submit" className="m-3 btn btn-success">Submit</button>
          <Link to="/createuser" className="m-3 mx-1 btn btn-danger">New User</Link>
        </form>

      </div>
    </div>
  )
};

export default Login;





//    purana code-----------------------------------



  //   <div>
  //     <div className="container">
  //       <form onSubmit={handleSubmit}>
  //         <div className="mb-3">
  //           <label htmlFor="exampleInputEmail1" className="form-label">
  //             Email address
  //           </label>
  //           <input
  //             type="email"
  //             className="form-control"
  //             name="email"
  //             value={credentials.email}
  //             id="exampleInputEmail1"
  //             aria-describedby="emailHelp"
  //             onChange={onChange}
  //           />
  //           <div id="emailHelp" className="form-text">
  //             We'll never share your email with anyone else.
  //           </div>
  //         </div>
  //         <div className="mb-3">
  //           <label htmlFor="exampleInputPassword1" className="form-label">
  //             Password
  //           </label>
  //           <input
  //             type="password"
  //             className="form-control"
  //             name="password"
  //             value={credentials.password}
  //             id="exampleInputPassword1"
  //             onChange={onChange}
  //           />
  //         </div>

  //         <button type="submit" className="m-3 btn btn-success">
  //           Submit
  //         </button>
  //         <Link to="/createuser" className="m-3 btn btn-danger">
  //           I'm new a user
  //         </Link>
  //       </form>
  //     </div>
  //   </div>
  // );



