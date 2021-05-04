import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useInput } from "../Common/Hooks/useInput";
import { registerUser } from "../../API/services";
const Register = ({history}) => {
  const {
    value: username,
    bind: bindusername,
    reset: resetusername
  } = useInput("");
  const { value: email, bind: bindemail, reset: resetemail } = useInput("");
  const {
    value: password,
    bind: bindpassword,
    reset: resetpassword
  } = useInput("");
  const [inProgress, setProgress] = useState(false);
  const handleSubmit = async evt => {
    evt.preventDefault();
    setProgress(true);
    const data = { email, password, name: username };
    const result = await registerUser(data);
    if (result === "error") {
      setProgress(false);
      return alert(result);
    }
    localStorage.setItem("user", JSON.stringify(result.data));
    resetemail();
    resetpassword();
    resetusername();
    setProgress(false);
    history.push("/main");
  };
  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign Up</h1>
            <p className="text-xs-center">
              <Link to="/login">Have an account?</Link>
            </p>

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Username"
                    {...bindusername}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    {...bindemail}
                  />
                </fieldset>

                <fieldset className="form-group">
                  <input
                    className="form-control form-control-lg"
                    type="password"
                    placeholder="Password"
                    {...bindpassword}
                  />
                </fieldset>
              <div className={"buttonContainer"}>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign up
                </button>

                <Link to="/login">Login Here</Link>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
