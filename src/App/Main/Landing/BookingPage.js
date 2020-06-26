import React, { useEffect, useState } from "react";
import { bookUser } from "../../../API/services";
import withStore from "../../../Components/Unstated/withStore";
import MainStore from "../../../Store/mainStore";
import { CircularProgress } from "@material-ui/core";
const BookingPage = ({
  history,
  mainStore: {
    state: { user, data : facData, loading }
  }
}) => {
  const slots = [
    { value: "10-12", label: "10 am - 12 am" },
    { value: "12-14", label: "12 am - 2 pm" },
    { value: "14-16", label: "2 pm - 4 pm" },
    { value: "16-18", label: "4 pm - 6 pm" },
    { value: "18-20", label: "6 pm - 8 pm" }
  ];
  const [inProgress, setProgress] = useState(false);
  const handleSubmit = async evt => {
    evt.preventDefault();
    setProgress(true);
    const email = document.getElementById(`booking-email`).value;
    const slot = document.getElementById(`booking-slot`).value;
    const data = { email, token: user.token, slot, facId: facData._id };
    const result = await bookUser(data);
    console.log(result)
    if (!result.success) {
      setProgress(false);
      return alert(result.msg);
    }
    if(result === "error"){
      setProgress(false);
      return alert(result);
    }
    setProgress(false);
    // localStorage.setItem("user", JSON.stringify(result.data));
    document.getElementById(`booking-email`).value = "";
    document.getElementById(`booking-slot`).value = "";
    // history.push("/main");
    return alert(result.msg);
  };
  useEffect(() => {
    if (!facData) history.push("/main");
  }, []);
  // console.log("data",data)
  return loading ? (
    <CircularProgress />
  ) : (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Booking for {facData.title}</h1>
            {/*<p className="text-xs-center">*/}
            {/*  <Link to="/login">Have an account?</Link>*/}
            {/*</p>*/}

            <form onSubmit={handleSubmit}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    id={"booking-email"}
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                    defaultValue={user.email}
                  />
                </fieldset>
                <fieldset className={"form-group"}>
                  <label>Slot</label>
                  <select
                    style={{
                      paddingBottom: "5px"
                    }}
                    type="text"
                    placeholder="Please enter a Slot"
                    className="form-control form-control-lg"
                    id={`booking-slot`}
                  >
                    <option disabled>Please Choose A Slot</option>
                    {slots.map(s => (
                      <option value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                  disabled={inProgress}
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStore([MainStore])(BookingPage);
