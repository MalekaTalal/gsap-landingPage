import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// تسجيل الإضافات حتى يفهم GSAP وجودها ويعمل معها بمرونة
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div>
      <h1 className="flex-center h-[100vh]"> Hello, World!</h1>
    </div>
  );
};

export default App;
