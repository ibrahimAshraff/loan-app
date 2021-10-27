import { signup, useAuth, login } from "../firebase"
import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom"




function Home() {

    const history = useHistory()

    const [hasAccount, setHasAccount] = useState(true)
    const [isloading, setIsloading] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()

    const signEmailRef = useRef()
    const signPasswordRef = useRef()

    const currentUser = useAuth()?.email

    localStorage.setItem("user", currentUser)



    async function handleSignup() {


        try {
            setIsloading(true)
            await signup(signEmailRef.current.value, signPasswordRef.current.value)
            history.push("/welcome")

            setIsloading(false)
        }

        catch {
            setIsloading(false)

            alert("Invalid email format or Password")
        }
    }

    async function handleLogin() {


        try {
            setIsloading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            localStorage.setItem("isAuth", true)
            history.push("/welcome")
            setIsloading(false)

        }

        catch {
            setIsloading(false)

            alert("Invalid Login Details")
        }
    }

    return (
        <div className="App">

            <section className="login">
                <div className="loginContainer">

                    <div className="btnContainer">
                        {hasAccount ? (
                            <>
                                <h3>Login to account</h3>
                                <br></br>
                                <label><h4>Email</h4></label>
                                <input
                                    type="email"
                                    autoFocus
                                    required
                                    ref={emailRef}
                                    placeholder="abc@abc.com"

                                />

                                <label><h4>Password</h4></label>
                                <input
                                    type="password"
                                    required
                                    ref={passwordRef}
                                    placeholder="At least 6 characters"
                                    style={{ marginBottom: "20px" }}

                                />

                                <button
                                    onClick={handleLogin}
                                    style={{ fontWeight: "bolder" }}
                                    disabled={isloading}
                                >
                                    {isloading ? "loading" : "Login to Account"}
                                </button>
                                <p>
                                    Don't have an account?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span>
                                </p>
                            </>
                        ) : (
                            <>
                                <h3>Create new account</h3>
                                <br></br>



                                <label><h4>Email</h4></label>
                                <input
                                    type="email"
                                    autoFocus
                                    placeholder="abc@abc.com"
                                    required
                                    ref={signEmailRef}

                                />

                                <label><h4>Password</h4></label>
                                <input
                                    type="password"
                                    placeholder="At least 6 characters"
                                    required
                                    ref={signPasswordRef}
                                    style={{ marginBottom: "20px" }}
                                />
                                <button
                                    onClick={handleSignup}
                                    style={{ fontWeight: "bolder" }}
                                >
                                    {isloading ? "loading" : "Create Account"}

                                </button>
                                <p>
                                    Already have an Account?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                            </>

                        )}

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
