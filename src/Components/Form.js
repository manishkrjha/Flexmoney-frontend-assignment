import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };
  return (
    <div className="Form">
      <div className="title">Yoga Class</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text"
            name="name"
            ref={register}
            placeholder="Enter your name"
          />
          <p> {errors.name?.message} </p>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            ref={register}
          />
          <p> {errors.mobileNumber?.message} </p>
          
          <input type="text" name="age" placeholder="Enter your age" ref={register} />
          <p> {errors.age?.message} </p>

          <div>
            <p>Pick Your slot:</p>
            <span>9-10</span> <span>10-11</span> <span>11-12</span> <span>5-6</span>
          </div>

          <input
            type="text"
            name="slot"
            placeholder="Enter your slot"
            ref={register}
          />
          <p> {errors.slot?.message} </p>
          
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
