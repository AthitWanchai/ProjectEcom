"use client";
import { FormikErrors, FormikTouched } from "formik";
import { Fragment, ReactNode, useState } from "react";

interface TextFieldPropsBase<T = unknown> {
  title?: string;
  inputType?: "input" | "password";
  showLabel?: boolean;
  className?: string;
  value?: string | number;
  id?: string;
  name: string;
  error?: FormikErrors<T>;
  touched?: FormikTouched<T>;
  placeholder?: string;
  titleDescription?: string;
  disabled?: boolean;
  type?: string;
  iconSearch?: boolean;
  titleElement?: ReactNode;
  rows?: number;
  step?: string;
}

interface TextFieldTextareaProps extends TextFieldPropsBase {
  textarea: true;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface TextFieldInputProps extends TextFieldPropsBase {
  textarea?: false;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type TextFieldProps = TextFieldTextareaProps | TextFieldInputProps;

const TextField = ({ disabled = false, inputType = "input", className = "", textarea = false, name = "", error = "", touched = false, placeholder = "", iconSearch = false, rows = 5, onChange, ...props }: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Fragment>
      <div className="relative">
        {/* <label htmlFor={name} className={showLabel ? "font-light" : "hidden"}>
          <div className="flex justify-between">
            <label htmlFor={name} className={showLabel ? "text-color-blue font-light" : "hidden"}>
              <h4 className="line-clamp-1">
                {title} {titleDescription !== "" && <span className="text-gray-main font-light">{titleDescription}</span>}
              </h4>
            </label>
            {titleElement && titleElement}
          </div>
        </label> */}
        {textarea ? (
          <textarea id={name} className={`h-full ${className} disabled:input_disabled ${touched ? (error ? "input_error" : "input_success") : "input_default"} ${textarea ? "" : "!h-10"}`} disabled={disabled} cols={50} rows={rows} autoComplete="off" onChange={onChange as React.ChangeEventHandler<HTMLTextAreaElement>} {...props} />
        ) : inputType === "input" ? (
          <div className="relative">
            {iconSearch && <i className="fa-solid fa-magnifying-glass absolute top-[12px] left-2"></i>}
            <input
              type={props.type}
              step={props.step}
              id={name}
              className={className ? `input_default ${className}` : `${touched ? (error ? "input_error !border-red-main" : "input_success !border-green-main") : `input_default ${iconSearch ? "pl-10" : ""}`} ${disabled ? "input_disabled" : ""} ${textarea ? "" : "!h-10"}`}
              autoComplete="off"
              placeholder={placeholder}
              {...props}
              disabled={disabled}
              onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
            />
          </div>
        ) : inputType === "password" ? (
          <div className="flex items-center">
            <input id={name} type={`${showPassword ? "text" : "password"}`} className={`${className} ${touched ? (error ? "input_error !border-red-main" : "input_success !border-green-main") : "input_default"}`} autoComplete="off" onChange={onChange as React.ChangeEventHandler<HTMLInputElement>} />
            <i className={`-ml-7 mt-1 fill-current text-gray-400 text-md z-10 cursor-pointer ${showPassword ? "far fa-eye" : "far fa-eye-slash"}`} onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)} />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};

export default TextField;


