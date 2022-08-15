import React, { useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Input from "../../components/Input";
import { loginWithApp, loginWithEmail } from "../../services/login";
import createAccount from "../../services/register";
import Button from "../../styles/button";
import Card from "../../styles/card";
import Container from "../../styles/container";
import Form from "../../styles/form";
import checkValidation from "../../utils/formValidation";

const AuthPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [worksFor, setWorksFor] = useState("login");

  const location = useLocation().pathname.split("/")[1];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const { email, password, name, confirm_password } = e.target;

    const formData = {
      name: name?.value,
      email: email.value,
      password: password.value,
      con_password: confirm_password?.value,
    };

    if (worksFor === "login") {
      delete formData.name;
      delete formData.con_password;
    }

    const res = await checkValidation(formData);

    if (!res) {
      setSubmitting(false);
      toast.error("Password should have uppercase, lowercase letter and length min 6.");
      return;
    }

    if (worksFor === "login") {
      await loginWithEmail(formData);
      setSubmitting(false);
    }

    if (worksFor === "register") {
      await createAccount(formData);
      setSubmitting(false);
    }
  };

  useEffect(() => {
    setWorksFor(location);
  }, [location]);

  return (
    <Container
      className="d-flex align-items-center justify-content-center text-center"
      style={{ height: "100vh" }}
    >
      <Card bg="#fff" shadow className="py-5">
        {worksFor === "login" && (
          <>
            <h2>Login</h2>
            <p>
              Don't have account ? <Link to="/register">Create</Link>
            </p>
          </>
        )}

        {worksFor === "register" && (
          <>
            <h2>Register</h2>
            <p>
              Already have account ? <Link to="/login">Login</Link>
            </p>
          </>
        )}

        <Form vertical onSubmit={handleSubmit}>
          {worksFor === "register" && <Input type="text" placeholder="Name" name="name" required />}

          <Input type="email" placeholder="Email" name="email" required />
          <Input type="password" placeholder="Password" name="password" required />

          {worksFor === "register" && (
            <Input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              required
            />
          )}

          <Button type="submit">
            {submitting ? (
              <>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Pls Wait...
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
        <p>Or</p>
        <div className="d-flex flex-column px-5 g-2 ">
          <Button bg="blue" className="py-2" onClick={() => loginWithApp("facebook")}>
            <FaFacebook /> <span>Continue With Facebook</span>
          </Button>

          <Button className="py-2 mt-2" onClick={() => loginWithApp("google")}>
            <FaGoogle />
            <span>Continue With Google</span>
          </Button>
        </div>
      </Card>
    </Container>
  );
};

export default AuthPage;
