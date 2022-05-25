import { FormEventHandler, useEffect, useState } from 'react';
interface IProps {
  htmlFor: string;
  label: string;
  id: string;
  autoComplete: string;
  name: string;
  type: string;
  placeholder: string;
  toggleShowHide?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  onChange?: any;
}

export default function FormattedInput({
  htmlFor,
  label,
  id,
  autoComplete,
  name,
  type,
  placeholder,
  toggleShowHide = false,
  hasError = false,
  errorMessage = 'Invalid Email',
  onChange,
}: IProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(hasError);

  return (
    <div className="flex w-80 mb-6  flex-col">
      <label
        htmlFor={htmlFor}
        className="flex justify-start items-center w-full text-xl mb-1"
      >
        {label}
      </label>
      <div
        className={`flex w-full border-2 border-solid  ${
          error ? 'border-red-400' : 'border-gray-600'
        } focus-within:border-white  bg-black rounded-lg hover:shadow-2xl relative`}
      >
        <input
          id={id}
          autoComplete={autoComplete}
          name={name}
          onChange={onChange}
          type={
            toggleShowHide && showPassword
              ? 'text'
              : toggleShowHide && !showPassword
              ? 'password'
              : type
          }
          placeholder={placeholder}
          className="flex w-full px-2 py-4 text-xl  bg-black rounded-lg hover:shadow-2xl relative  "
        />
        {toggleShowHide && (
          <div className="absolute  inset-y-0 right-0 pr-3 flex items-center ">
            <button
              type="button"
              className={`flex items-center p-0.5 w-8 h-8 text-center justify-center  ${
                showPassword ? 'bg-white' : 'bg-transparent'
              } rounded-full `}
              aria-pressed={showPassword}
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? '🙉' : '🙈'}
            </button>
          </div>
        )}
      </div>
      {error && (
        <span className="flex my-2 text-md text-red-400">{errorMessage}</span>
      )}
    </div>
  );
}
