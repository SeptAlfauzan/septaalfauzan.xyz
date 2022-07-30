import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import {
  DeepRequired,
  FieldErrorsImpl,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { Mail } from "../Form";

interface Props {
  register: UseFormRegister<Mail>;
  name: "email" | "name" | "message";
  option: any | null;
  type: "text" | "email" | "textarea" | "number";
  errors: FieldErrorsImpl<DeepRequired<Mail>>;
}
export const Input: React.FC<Props> = ({
  type,
  register,
  name,
  option,
  errors,
}) => {
  return (
    <div className="relative mt-10 w-full">
      {type !== "textarea" && (
        <input
          {...register(name, option ? option : {})}
          className="bg-zinc-600 placeholder-shown:bg-opacity-20 focus:bg-opacity-100 text-white transition-all duration-150  outline-none px-8 py-2 rounded-lg  w-full placeholder:opacity-0
          
          peer
          "
          placeholder="_"
        />
      )}
      {type === "textarea" && (
        <textarea
          {...register(name, option ? option : {})}
          className="bg-zinc-600 placeholder-shown:bg-opacity-20 focus:bg-opacity-100 text-white transition-all duration-150  outline-none px-8 py-2 rounded-lg  w-full placeholder:opacity-0
          peer
          "
          placeholder="_"
        />
      )}

      <p className="text-lg text-zinc-400 capitalize absolute peer-placeholder-shown:top-1 peer-placeholder-shown:left-8 peer-focus:-top-8 peer-focus:left-0 -top-8 transition-all duration-150">
        {name}
      </p>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-red-500">{message}</p>}
      />
    </div>
  );
};
