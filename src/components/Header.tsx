import { FizziLogo } from './FizziLogo';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex">
      <FizziLogo />
    </header>
  );
}
