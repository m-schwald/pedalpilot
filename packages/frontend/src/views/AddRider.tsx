import { Rider } from "../types";
import { SubmitHandler, useForm } from "react-hook-form";

export default function AddRider () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Rider>();
  const onSubmit : SubmitHandler<Rider> = (data) => console.log(data);

  console.log(watch("name"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

    </form>
  )
}
