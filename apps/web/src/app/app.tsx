import { jslv1 } from '@vite-paths/jslv1';
import { Rlv1 } from '@vite-paths/rlv1';
import { Rlv2 } from '@vite-paths/rlv2';
import { Rlv3 } from '@vite-paths/rlv3';

console.log(jslv1());

export function App() {
  return (
    <>
      <p>Hello</p>
      <Rlv1 />
      <Rlv2 />
      <Rlv3 />
    </>
  );
}

export default App;
