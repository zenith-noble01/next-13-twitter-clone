import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";

const InputContainer = ({ type, placeholder, email, password, username }) => {
  return (
    <div className="input__container border flex px-4 rounded items-center">
      <input
        type={type}
        placeholder={placeholder}
        className="h-[40px] flex-1"
      />
      {email && <HiAtSymbol size={20} />}
      {password && (
        <HiFingerPrint
          size={20}
          className="cursor-pointer hover:text-sky-500"
        />
      )}
      {username && <HiOutlineUser size={20} />}
    </div>
  );
};

export default InputContainer;
