import { Stratagem } from '@/stratagems';
import Image from 'next/image';

type StratagemIconProps = {
  id: Stratagem['name'];
};

export function StratagemIcon({ id }: StratagemIconProps) {
  return (
    <Image
      priority
      src={`/stratagems_icons/${id}`}
      alt={id}
      width={48}
      height={48}
    />
  );
}
