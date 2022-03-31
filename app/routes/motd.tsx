export const Motd = () => {
  return (
    <div className=" w-full flex items-center justify-center">
      <div className=" w-full flex items-center justify-center bg-dark-mode-bg rounded">
        <div className="p-4 px-20  border-2 border-solid border-accent-pink w-full text-center rounded">
          <span className="text-white">
            We stand with Ukraine 🇺🇦
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://razomforukraine.org/"
              className="pl-2 cursor-pointer font-bold text-primary-text focus-within:text-accent-pink hover:text-accent-pink"
            >
              Donate here
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Motd;
