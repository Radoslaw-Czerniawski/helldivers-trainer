import { Button, STRATAGEMS, Stratagem } from '@/stratagems';
import { atom } from 'jotai';

const FIRST_STRATAGEM_IMAGE = Object.keys(STRATAGEMS)[0];

// primitives
const primitiveStratagemPointerAtom = atom<number>(0);
const primitiveChosenStratagemImageAtom = atom<Stratagem['image']>(
  FIRST_STRATAGEM_IMAGE
);

export const chosenStratagemImageAtom = atom((get) =>
  get(primitiveChosenStratagemImageAtom)
);
export const chosenStratagemAtom = atom(
  (get) => STRATAGEMS[get(primitiveChosenStratagemImageAtom)]
);
export const chosenStratagemInputAtom = atom(
  (get) => STRATAGEMS[get(primitiveChosenStratagemImageAtom)]?.inputs
);
export const stratagemPointerAtom = atom((get) =>
  get(primitiveStratagemPointerAtom)
);

export const setChosenStratagemAtom = atom(
  null,
  (_, set, nextStratagemName: Stratagem['name']) =>
    set(primitiveChosenStratagemImageAtom, nextStratagemName)
);

export const handleStratagemInputAtom = atom(
  null,
  (get, set, buttonInput: Button) => {
    const chosenStratagemInput = get(chosenStratagemInputAtom);
    const stratagemPointer = get(stratagemPointerAtom);

    if (chosenStratagemInput[stratagemPointer] === buttonInput) {
      return set(primitiveStratagemPointerAtom, stratagemPointer + 1);
    }

    set(primitiveStratagemPointerAtom, 0);
    set(primitiveChosenStratagemImageAtom, FIRST_STRATAGEM_IMAGE);
  }
);

export const resetStratagemPointerAtom = atom(null, (_, set) =>
  set(primitiveStratagemPointerAtom, 0)
);
