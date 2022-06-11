import { createContext, useContext, useState, useEffect } from 'react';

export type SoundContextState = {
  mute: boolean;
  toggleMute: Function;
};

const SoundContext = createContext<SoundContextState | null>(null);

export function useSound() {
  return useContext(SoundContext);
}

export default function SoundProvider({ children }: any) {
  const [mute, setMute] = useState<boolean>(false);

  useEffect(() => {
    const result = localStorage.getItem('mute') ?? 'false';
    setMute(typeof window !== 'undefined' ? JSON.parse(result) : false);
  }, []);

  // useEffect(() => {
  //   // retrieve in localStorage
  //   const isMutedString = localStorage.getItem('mute');

  //   const isMuted = !!isMutedString;

  //   setMute(isMuted);
  // }, []);

  // Everytime the value of mute changes override the local storage value
  useEffect(() => {
    localStorage.setItem('mute', JSON.stringify(mute));
  }, [mute]);

  function toggleMute() {
    setMute((prev) => !prev);
  }

  const values = { mute, toggleMute };
  return (
    <SoundContext.Provider value={values}>{children}</SoundContext.Provider>
  );
}
