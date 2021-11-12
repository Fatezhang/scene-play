import { FunctionComponent, useState } from 'react';

type Props = {
  text: string;
};

const Index: FunctionComponent<Props> = ({ text = 'Click me' }: Props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>{text}</button>
    </div>
  );
};

export default Index;
