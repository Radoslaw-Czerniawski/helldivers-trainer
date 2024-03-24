'use client';

import ButtonsDisplay from '@/components/ButtonsDisplay';
import { InputProvider } from '@/components/InputProvider';
import { useAtomValue } from 'jotai';
import {
  chosenStratagemAtom,
  chosenStratagemImageAtom,
  stratagemPointerAtom,
} from '@/components/InputProvider/atoms';
import { StratagemIcon } from '@/components/StratagemIcon';

export default function Home() {
  const chosenStratagem = useAtomValue(chosenStratagemAtom);
  const chosenStratagemImage = useAtomValue(chosenStratagemImageAtom);
  const stratagemPointer = useAtomValue(stratagemPointerAtom);

  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <StratagemIcon key={chosenStratagemImage} id={chosenStratagemImage} />

      <ButtonsDisplay
        buttons={chosenStratagem.inputs}
        pressedInputs={stratagemPointer}
      />
      <InputProvider />
    </main>
  );
}
