const InputContainer = ({ type, placeholder }) => {
  return (
    <div className="input__container  border flex px-4">
      <input
        type={type}
        placeholder={placeholder}
        className="h-[40px] flex-1"
      />
    </div>
  );
};

export default InputContainer;
