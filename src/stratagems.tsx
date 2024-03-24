import stratagems from '@/assets/stratagems.json';

export enum Button {
  UP = 'UP',
  DOWN = 'DOWN',
  RIGHT = 'RIGHT',
  LEFT = 'LEFT',
}

const ARROW_KEYS = {
  ArrowLeft: Button.LEFT,
  ArrowUp: Button.UP,
  ArrowDown: Button.DOWN,
  ArrowRight: Button.RIGHT,
} as const;

const WSAD_KEYS = {
  W: Button.UP,
  S: Button.DOWN,
  A: Button.LEFT,
  D: Button.RIGHT,
} as const;

export const INPUT_KEYS = {
  ...ARROW_KEYS,
  ...WSAD_KEYS,
};

export type InputKey = keyof typeof INPUT_KEYS;

export type Stratagem = {
  name: string;
  inputs: Button[];
  image: string;
};

type StratagemMap = Record<Stratagem['image'], Stratagem>;

export const STRATAGEMS: StratagemMap = (
  stratagems as Stratagem[]
).reduce<StratagemMap>((acc, gem) => {
  acc[gem.image] = gem;
  return acc;
}, {});
