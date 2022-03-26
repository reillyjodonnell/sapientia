export const Motd = () => {
  return (
    <div className=" w-full my-12 flex items-center justify-center">
      <div className="bg-dark-mode-bg rounded">
        <div className="p-4 px-20 bg-accent-pink-bg border-2 border-solid border-accent-pink  rounded">
          <span className="text-white">
            We stand with Ukraine 🇺🇦
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://razomforukraine.org/"
              className="pl-2 cursor-pointer font-bold text-primary-text hover:text-accent-pink"
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
