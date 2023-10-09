type TProps = React.ComponentPropsWithoutRef<"button">;

export default function Button({ ...res }: TProps) {
  return <button {...res}>Button</button>;
}
