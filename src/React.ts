// eslint-disable-next-line react/no-typos
import 'react';

declare module 'react' {
  interface FCWithChildren<P = object> {
    (props: React.PropsWithChildren<P> & { children: NonNullable<React.ReactNode> }, context?: any): React.ReactNode;
  }

  type FCWithDisplayName<Name extends string, P = object> = React.FunctionComponent<P> & { displayName: Name };
}
