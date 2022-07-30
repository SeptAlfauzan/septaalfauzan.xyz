import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { FiXCircle } from "react-icons/fi";

export interface Mail {
  email: string;
  name: string;
  message: string;
}

const Form: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [showAlert, setShowAlert] = React.useState<boolean>(false);
  const [alert, setAlert] = React.useState<string>("");
  const [status, setStatus] = React.useState<number>();
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors, isValid, isDirty },
  } = useForm<Mail>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const sendMail = async (data: Mail) => await axios.post("/api/mail", data);

  const resetForm = () => {
    resetField("email");
    resetField("name");
    resetField("message");
  };

  const onSubmit = async (data: Mail) => {
    setShowAlert(false);
    setLoading(true);
    const response = await sendMail(data);
    setAlert(
      response.status == 200
        ? "Your mail successfully sent"
        : "Your mail failed to send"
    );
    if (response.status == 200) resetForm();
    setStatus(response.status);
    setShowAlert(true);
    setLoading(false);
  };

  const closeAlert = () => setShowAlert(false);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 w-full items-center text-zinc-400"
    >
      <h3 className="text-5xl px-12 py-20 font-bold">
        Have something to discuss with me?
      </h3>
      <h4 className="text-xl px-12 md:text-center text-left w-full">
        You can fill form bellow
      </h4>
      <div className="mt-10 md:w-2/6 w-3/4">
        {/* alert */}
        {showAlert && (
          <div
            className={`w-full ${
              status == 200
                ? " border-teal-500 bg-teal-400"
                : " border-pink-600 bg-pink-500"
            } rounded-lg py-2 px-8 bg-opacity-50 text-white relative`}
          >
            {alert}
            <button
              onClick={closeAlert}
              className="w-5 h-5 rounded-full absolute right-2"
            >
              <FiXCircle />
            </button>
          </div>
        )}

        <Input
          type="text"
          register={register}
          name="name"
          option={{ required: "This input need to be filled!" }}
          errors={errors}
        />
        <Input
          type="email"
          register={register}
          name="email"
          option={{ required: "This input need to be filled!" }}
          errors={errors}
        />
        <Input
          type="textarea"
          register={register}
          name="message"
          option={{ required: "This input need to be filled!" }}
          errors={errors}
        />

        <button
          type="submit"
          disabled={loading}
          className={`text-white w-full py-2 rounded-lg mt-10 transition-all duration-300 disabled:bg-opacity-25 ${
            true
              ? "bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500"
              : "bg-zinc-800 bg-opacity-70"
          }
          ${loading ? "animate-pulse " : null}
          `}
        >
          <p className="font-bold">{loading ? "Sending" : "Send"}</p>
        </button>
      </div>
    </form>
  );
};

export default Form;
