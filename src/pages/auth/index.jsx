import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../styles/button";
import Card from "../../styles/card";
import Container from "../../styles/container";
import Form from "../../styles/form";
import checkValidation from "../../utils/formValidation";

const AuthPage = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target;
    const formData = { email: email.value, password: password.value };
    const res = checkValidation(formData);
    !res && alert("Password should have uppercase, lowercase letter and length min 6.");
    console.log(res);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center text-center"
      style={{ height: "100vh" }}
    >
      <Card bg="#fff" shadow className="py-5">
        <h2>Login</h2>
        <p>
          Don't have account ? <Link to="/register">Create</Link>
        </p>
        <Form vertical onSubmit={handleSubmit}>
          <Input type="email" placeholder="Email" name="email" />
          <Input type="password" placeholder="Password" name="password" />
          <Button type="submit">Login</Button>
        </Form>
        <p>Or</p>
        <div className="d-flex flex-column px-5 g-2 ">
          <Button bg="blue" className="py-2">
            <FaFacebook /> <span>Continue With Facebook</span>
          </Button>

          <Button className="py-2 mt-2">
            <FaGoogle />
            <span>Continue With Google</span>
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default AuthPage;
