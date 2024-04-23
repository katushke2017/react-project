import { useCallback, useState } from 'react';
import Wrapper from '../../components/Wrapper/Wrapper';
import Button from '../../components/Button/Button';

const About = () => {
  const [count, setCount] = useState(0);

  const handleCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <Wrapper>
        <h1>About Page</h1>
        <Button text={'Test Use State'} onClick={handleCount} />
        <span>The buttton was clicked on {count} times</span>
      </Wrapper>
    </>
  );
};

export default About;
