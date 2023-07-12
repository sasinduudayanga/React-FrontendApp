import { Formik, Form } from "formik";
import { useState } from "react"; // useState => react variable
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import StanderedLayout from "../componenets/layout/StanderedLayout";
import Input from "../componenets/forms/Input";
import PasswordInput from "../componenets/forms/PasswordInput";
import FormLink from "../componenets/forms/FormLink";

const LOGIN_FORM = {
  email: "",
  password: ""
};

function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState(LOGIN_FORM);
  // loginForm => variable , setLoginForm => Handler function
  const { email, password } = loginForm;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const loginSubmit = () =>{
    //TODO: necesory backend calling for the authentication

    //passed
    navigate("/")
  }
  // yup validation schema
  const loginValidation = Yup.object({
    email: Yup.string().required("Email address is required").email("Email must be a valid one"),
    password: Yup.string().required("Password is required")
  });

  return (
    <StanderedLayout>
      <div className="flex items-center justify-center pt-3">
        <div className="h-screen px-[200px]">
          <div className='w-[400px]'>
            <p className='font-bold text-4xl pb-2 pt-3'>Sign In</p>
            <p className='pb-3'>Please enter your login credentials</p>
            <Formik enableReinitialize initialValues={{ email, password }} validationSchema={loginValidation}
                onSubmit={() => loginSubmit()}
            >
              {(formikProps) => (
                <Form className="flex flex-col gap-3">
                  <Input
                    key="email"
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleOnChange}
                  />
                  <PasswordInput
                    key="password"
                    // type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleOnChange}
                  />
                  <button type="submit" className="bg-gray-800 text-gray-200 p-3 rounded-md hover:bg-gray-700 transition-all ease-in-out">Login</button>
                </Form>
              )}
            </Formik>
            <div className="flex flex-col gap-2 text-center my-6">
              <FormLink name="Forgot password?" path="/"/>
              <p className="text-sm " >Don't have an account?<FormLink name="Create account" path="/"/></p>
            </div>
          </div>
        </div>
      </div>
    </StanderedLayout>
  );
}

export default Login;
