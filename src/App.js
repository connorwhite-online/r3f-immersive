import './App.css';
import { ARCanvas, RayGrab } from '@react-three/xr'

// Component imports
import Model from './Model';

function App() {
  return (
    <div id='webxr'>
      <ARCanvas>
        <RayGrab>
          <Model />
        </RayGrab>
      </ARCanvas>
    </div>
  );
}

export default App;
