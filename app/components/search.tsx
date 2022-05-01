import { useRef, useCallback, useEffect } from 'react';
interface IProps {
  handleForm: Function;
  size: string;
}
export default function Search({ handleForm, size = 'large' }: IProps) {
  const searchRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  // handle what happens on key press
  const handleKeyPress = useCallback((event) => {
    if (event.metaKey === true && event.key === 'k') {
      if (searchRef.current !== null && labelRef.current !== null) {
        searchRef.current.focus();
        labelRef.current.focus();
      }
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className={`main-search flex  relative`}>
      <form
        className={`flex ${
          size === 'large' ? 'w-full' : size === 'medium' ? 'w-3/4' : 'w-1/2'
        }`}
        onSubmit={(e) => handleForm(e)}
      >
        <div
          ref={labelRef}
          className={`flex
             sm:flex items-center w-full text-left space-x-3 px-4 shadow-sm rounded-lg text-slate-800 dark:ring-0 dark:text-slate-800 dark:highlight-white/5  
              z-50 border-4 border-white bg-white focus-within:border-4 focus-within:border-solid focus-within:border-accent-green
              ${size === 'large' ? 'h-16' : size === 'medium' ? 'h-12' : 'h-8'}
              
              z-100`}
        >
          <span className="text-2xl">🔍</span>
          <input
            ref={searchRef}
            placeholder="Search a topic"
            style={{ outline: 'none' }}
            className="text-xl
                
                
                
                
                
                w-full bg-transparent border:[none] focus:[outline: 0, border: none] focus:border-transparent"
          ></input>
          <kbd
            className="font-sans font-semibold dark:text-slate-500
              
              
              text-xl
              "
          >
            <abbr
              title="Command"
              className="no-underline text-slate-300 dark:text-slate-500
                  
                  text-xl
                  
                  "
            >
              ⌘
            </abbr>
            K
          </kbd>
        </div>
      </form>
    </div>
  );
}
