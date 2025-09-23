import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, userForm } from "../../schemas/user";
import Input from "../Input";

function Form() {
  const methods = useForm<userForm>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: userForm) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>

        <button className="btn btn-primary">Enviar</button>
      </form>
    </FormProvider>
  );
}

export default Form;
