import { expectType } from 'tsd';

type Props<P = object> = (
  & P
  & { children?: React.ReactNode }
  & { children: NonNullable<React.ReactNode> }
);

const Comp1: React.FCWithChildren = props => {
  expectType<Props>(props);

  return null;
};

const Comp2: React.FCWithChildren<{ a: 2 }> = props => {
  expectType<Props<{ a: 2 }>>(props);

  return null;
};

const Comp3: React.FCWithDisplayName<'Comp3'> = () => null;
Comp3.displayName = 'Comp3';
expectType<'Comp3'>(Comp3.displayName);
