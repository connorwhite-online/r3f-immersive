import './App.css';
import { ARCanvas, RayGrab } from '@react-three/xr'

// Component imports
import Model from './Model';

function App() {
  return (
    <div id='webxr'>
      <ARCanvas camera={{ position: [2, 1, 2]}}>
        <spotLight intensity={1} position={[10, 10, 10]} />
        <spotLight intensity={1} position={[-5, -5, -5]} />
        <spotLight intensity={1} position={[0, 5, -2]} />
        <RayGrab>
          <Model />
        </RayGrab>
      </ARCanvas>
    </div>
  );
}

export default App;
