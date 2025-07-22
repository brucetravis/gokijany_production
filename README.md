// ImpactStats.jsx
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 10);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const ImpactStats = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: '-100vw', opacity: 0 }}
      animate={controls}
      transition={{ type: 'spring', stiffness: 50 }}
      className="flex flex-col items-center p-10 bg-white shadow-xl rounded-xl max-w-3xl mx-auto my-20"
    >
      <h2 className="text-3xl font-bold mb-6">Our Impact in Numbers</h2>
      <div className="grid grid-cols-3 gap-10 text-center">
        <div>
          <p className="text-4xl font-extrabold text-orange-600">
            <Counter target={3500} duration={1000} />
          </p>
          <p className="mt-2 text-lg">People Impacted</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-orange-600">
            <Counter target={24} duration={1000} />
          </p>
          <p className="mt-2 text-lg">Projects Completed</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-orange-600">
            <Counter target={15} duration={1000} />
          </p>
          <p className="mt-2 text-lg">Communities Reached</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ImpactStats;



 Animation with Framer Motion
jsx
Copy code
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
useAnimation: lets you manually control animation.

useInView: tracks if the section is in view.

jsx
Copy code
  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);
When the section scrolls into view, slide it in from the left (x: 0).

jsx
Copy code
  <motion.div
    ref={ref}
    initial={{ x: '-100vw', opacity: 0 }}
    animate={controls}
    transition={{ type: 'spring', stiffness: 50 }}
  >
initial: starts far left with opacity 0

animate: when in view, move to x = 0 and opacity = 1

spring transition gives a natural sliding motion

🎨 Styling Notes
Used TailwindCSS for quick styling (e.g., text-4xl, text-orange-600)

Layout: center-aligned grid of 3 columns



3. ❌ onChange={handleChange} on the <button> is invalid
<button> elements do not have an onChange event — that’s for <input> and <select> elements.
