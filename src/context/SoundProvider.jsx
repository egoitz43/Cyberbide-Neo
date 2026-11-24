import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ambientMusic, SOUND_STORAGE_KEY } from '@/lib/ambientMusic';

const SoundContext = createContext(null);

export const useSound = () => useContext(SoundContext) || { soundOn: false, toggleSound: () => {} };

export const SoundProvider = ({ children }) => {
  const [soundOn, setSoundOn] = useState(() => {
    try {
      return window.localStorage.getItem(SOUND_STORAGE_KEY) !== '0';
    } catch (e) {
      return true;
    }
  });

  const toggleSound = useCallback(() => {
    setSoundOn((prev) => {
      const next = !prev;
      ambientMusic.setEnabled(next);
      return next;
    });
  }, []);

  // Los navegadores bloquean el audio hasta el primer gesto del usuario.
  useEffect(() => {
    if (!soundOn) return undefined;
    const unlock = () => ambientMusic.setEnabled(true);
    const events = ['pointerdown', 'keydown', 'touchstart'];
    events.forEach((event) => window.addEventListener(event, unlock, { once: true, passive: true }));
    return () => events.forEach((event) => window.removeEventListener(event, unlock));
  }, [soundOn]);

  return <SoundContext.Provider value={{ soundOn, toggleSound }}>{children}</SoundContext.Provider>;
};