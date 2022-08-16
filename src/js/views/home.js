import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "/workspace/QuizAppFinal/src/contexts/AuthContext.js"
import { Link, useHistory } from "react-router-dom"


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
    <div className="bg bg bg2 bg bg3 text-center mt-5"></div>
      <Card className="login">
        <Card.Body >
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="pushdown">
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control className="eminput" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control className="pwinput" type="password" ref={passwordRef} required />
            </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
              Log In <link to="userhome"></link>
            </Button>
            <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          </Form>
          </div>
          
        </Card.Body>
      </Card>


      
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/createaccount">Sign Up</Link>
      </div>
    </>
  )
}

