import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "/workspace/QuizAppFinal/src/contexts/AuthContext.js"
import { Link, useHistory } from "react-router-dom"
import img from "../../img/newlogo.png"
import "../../styles/home.css"


export function Home() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login }  = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/userhome")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <div className="bg bg bg2 bg bg3 text-center"></div>
      <Card style={{backgroundColor: "#ff000000"}}>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <div className="superForm">
            <img className="img1" src={img}/>
            <Form.Group id="email">
              <Form.Label></Form.Label>
              <input className="form-input" type="email" id="txt-input"  ref={emailRef} required placeholder="Enter Email" />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label></Form.Label>
              <input className="form-input" type="password" id="txt-input" ref={passwordRef} required placeholder="Enter Password"/>
            </Form.Group>
              <Button disabled={loading} className="log-in mt-5" type="submit">
              Log In <link to="userhome"></link>
            </Button>
            <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="w-100 text-center mt-2">
        Need an account? <Link to="/createaccount">Sign Up</Link>
      </div>
      </div>
          </Form>
          
      </Card>


      
      
    </>
  )
}

