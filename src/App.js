import './App.css';
import { ARCanvas, RayGrab } from '@react-three/xr'

// Component imports
import Model from './Model';

function App() {
  return (
    <div id='webxr'>
      <ARCanvas>
        <perspectiveCamera position={[0, 5, 0]} />
        <spotLight intensity={1} position={[10, 10, 10]} />
        <spotLight intensity={1} position={[-5, -5, -5]} />
        <spotLight intensity={1} position={[-5, -5, -5]} />
        <RayGrab>
          <Model />
        </RayGrab>
      </ARCanvas>
    </div>
  );
}

export default App;
