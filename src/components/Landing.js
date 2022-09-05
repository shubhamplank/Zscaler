import React, { useEffect, useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import useUniversity from "../hooks/useUniversity";

export default function Header() {
  const { register, handleSubmit, errors, setError } = useForm({
    mode: "onBlur",
  });
  const [loadUniversity] = useUniversity();

  const [university, setUniversity] = useState({});

  useEffect(() => {
    fetchUniversity();
  }, []);

  const fetchUniversity = () => {
    loadUniversity()
      .then((res) => setUniversity(res))
      .catch((err) => console.log(err));
  };

  const handleFormSubmit = (data) => {
    alert("form submitted");
    console.log("handleFormSubmit called" + +JSON.stringify(data));
  };

  return (
    <Fragment>
      <section className="banner">
        <div className="botm_txt">
          <div className="container">
            {" "}
            <h1>The First Step in Your Life-Changing Experience</h1>
          </div>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form_header">
              <img
                src={require("../assets/images/i-icon.png")}
                alt=""
                className="i-icon"
              />
              <h2>request information</h2>
            </div>
            <div className="form_fields">
              <div className="form-control">
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  placeholder="first name*"
                />
                <p className="error-message">
                  {errors?.firstName?.type === "required" &&
                    "First name is required."}
                </p>
              </div>
              <div className="form-control">
                <input
                  {...register("lastName", { required: true })}
                  name="lastName"
                  type="text"
                  placeholder="last name*"
                />
                <p className="error-message">
                  {errors?.lastName?.type === "required" &&
                    "Last name is required."}
                </p>
              </div>
              <div className="form-control">
                <input
                  {...register("emailAddress", { required: true })}
                  type="text"
                  placeholder="e-mail address*"
                />
                <p className="error-message">
                  {errors?.emailAddress?.type === "required" &&
                    "Email address is required."}
                </p>
              </div>
              <div className="form-control">
                <input
                  {...register("phoneNumber", { required: true })}
                  type="text"
                  placeholder="phone number*"
                />
                <p className="error-message">
                  {errors?.phoneNumber?.type === "required" &&
                    "Phone number is required."}
                </p>
              </div>
              <div className="form-control">
                <select
                  {...register("poi", { required: true })}
                  name="programs"
                  id="POI"
                >
                  <option selected value="">
                    program of interest
                  </option>
                  <option value="program2">program2</option>
                  <option value="meprogram3">program3</option>
                </select>
                <p className="error-message">
                  {" "}
                  {errors?.poi?.type === "required" &&
                    "Program of interest is required."}
                </p>
              </div>
              <div className="form-control">
                <select
                  {...register("pdt", { required: true })}
                  name="programs"
                  id="PDT"
                >
                  <option selected value="">
                    program delivery type
                  </option>
                  <option value="program2">program2</option>
                  <option value="meprogram3">program3</option>
                </select>
                <p className="error-message">
                  {errors?.pdt?.type === "required" &&
                    "Program delivery type is required."}
                </p>
              </div>
              <div className="form-control">
                <select
                  {...register("pct", { required: true })}
                  name="programs"
                  id="C-type"
                >
                  <option selected value="">
                    preffered communication type
                  </option>
                  <option value="program2">program2</option>
                  <option value="meprogram3">program3</option>
                </select>
                <p className="error-message">
                  {" "}
                  {errors?.pct?.type === "required" &&
                    "Communication type is required."}
                </p>
              </div>
              <button type="submit" className="f_btn">
                learn more today
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="txt_block">
                <h2>{university && university.title}</h2>
                <p>{university && university.body}</p>
              </div>
            </div>
            <div className="col">
              <div className="img_box">
                <img src={require("../assets/images/man-working.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
