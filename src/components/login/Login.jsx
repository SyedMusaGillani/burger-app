import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, Button } from "react-bootstrap";

export default function Login() {
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

  // TODO remove this print statement
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    reset({
      email: "",
      password: "",
    });
  }, [isSubmitSuccessful]);

  return (
    <Form validated={false} onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
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
        <Form.Label>Password</Form.Label>
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
