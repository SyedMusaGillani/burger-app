import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Form, Container, Card } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup.string().email().required("Please enter a valid Email!"),
      password: yup
        .string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .matches(/[a-zA-Z1-9]/, "Password must contain digits and letters."),
    })
    .required();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { password } = data;
    if (password === "123456") {
      navigate("/dashboard");
    } else {
      alert("Wrong password");
    }
  };

  useEffect(() => {
    reset({
      email: "",
      password: "",
    });
  }, [isSubmitSuccessful]);

  return (
    <Container className="d-flex justify-content-center align-items-center min-h ">
      <div className="w-100 max-w">
        <Card>
          <Card.Body>
            <h2 className="text-center my-4">Sign Up</h2>
            <Form validated={false} onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, ref, value } }) => (
                    <Form.Control
                      placeholder="Enter email"
                      onChange={onChange}
                      ref={ref}
                      isInvalid={errors.email}
                      value={value}
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, ref, value } }) => (
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={onChange}
                      ref={ref}
                      isInvalid={errors.password}
                      value={value}
                    />
                  )}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </Form.Group>
              <button
                className="w-100 btn-submit button text-center"
                type="submit"
              >
                Submit
              </button>
              <button className="w-100 btn-toggle button" type="button">
                Toggle
              </button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
