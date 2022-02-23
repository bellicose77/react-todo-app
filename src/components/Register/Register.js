import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const Register = () => {
  const [info,setInfo]=useState([]);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      setInfo(data);
    }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <br/>
      <br/>
      <input {...register("lastName")} />
      <br/>
      <br/>

      <input {...register("email")} />
      <br/>
      <br/>
      

      <input type="submit" />
 
    </form>

    <br/>
    <br/>
    <h2>{info.firstName}</h2>
    <h3>{info.lastName}</h3>
    <p>{info.email}</p>
    </>

   
  );
}
       
    

export default Register;