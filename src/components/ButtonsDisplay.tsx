'use client';
import Image, { StaticImageData } from 'next/image';

import { Button } from '@/stratagems';
import ArrowUpImage from '@/assets/icons/arrow_up.png';
import ArrowDownImage from '@/assets/icons/arrow_down.png';
import ArrowLeftImage from '@/assets/icons/arrow_left.png';
import ArrowRightImage from '@/assets/icons/arrow_right.png';

const BUTTONS_MAP: Record<Button, { image: StaticImageData }> = {
  [Button.UP]: {
    image: ArrowUpImage,
  },
  [Button.DOWN]: {
    image: ArrowDownImage,
  },
  [Button.LEFT]: {
    image: ArrowLeftImage,
  },
  [Button.RIGHT]: {
    image: ArrowRightImage,
  },
};

type ButtonsDisplayProps = {
  buttons: Button[];
  pressedInputs: number;
};

export default function ButtonsDisplay({
  buttons,
  pressedInputs,
}: ButtonsDisplayProps) {
  return (
    <div className='flex'>
      {buttons.map((button, index) => (
        <ButtonDisplay
          key={index}
          button={button}
          wasPressed={index < pressedInputs}
        />
      ))}
    </div>
  );
}

type ButtonDisplayProps = {
  button: Button;
  wasPressed: boolean;
};

function ButtonDisplay({ button, wasPressed }: ButtonDisplayProps) {
  return (
    <Image
      src={BUTTONS_MAP[button]?.image}
      alt='arrow image'
      className={`filter grayscale ${
        wasPressed ? 'brightness-200' : 'brightness-50'
      }`}
    />
  );
}
