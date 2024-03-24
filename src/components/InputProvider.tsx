'use client';

import { INPUT_KEYS, InputKey, STRATAGEMS } from '@/stratagems';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, memo } from 'react';
import {
  chosenStratagemInputAtom,
  handleStratagemInputAtom,
  resetStratagemPointerAtom,
  setChosenStratagemAtom,
  stratagemPointerAtom,
} from './InputProvider/atoms';

const ALL_STRATAGEMS_KEYS = Object.keys(STRATAGEMS);

const normalizeKey = (key: KeyboardEvent['key']): InputKey =>
  (key.match(/^[a-z]$/) ? key.toUpperCase() : key) as InputKey;

export const InputProvider = memo(function InputProvider() {
  const handleStratagemInput = useSetAtom(handleStratagemInputAtom);
  const resetStratagemPointer = useSetAtom(resetStratagemPointerAtom);
  const setNextStratagem = useSetAtom(setChosenStratagemAtom);

  const chosenStratagemInput = useAtomValue(chosenStratagemInputAtom);
  const stratagemPointer = useAtomValue(stratagemPointerAtom);

  useEffect(
    function registerKeyDownListener() {
      const registerClick = (e: KeyboardEvent) => {
        const input = INPUT_KEYS[normalizeKey(e.key)];

        if (input) {
          handleStratagemInput(input);
        }
      };

      document.addEventListener('keydown', registerClick);

      return () => {
        document.removeEventListener('keydown', registerClick);
      };
    },
    [handleStratagemInput]
  );

  useEffect(() => {
    if (stratagemPointer >= chosenStratagemInput.length) {
      resetStratagemPointer();

      const index = Math.floor(
        Math.random() * (ALL_STRATAGEMS_KEYS.length - 1 + 1) + 0
      );

      setNextStratagem(ALL_STRATAGEMS_KEYS[index]);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chosenStratagemInput, stratagemPointer]);

  return null;
});
