import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 5000, suffix: "+", label: "Happy Families" },
  { value: 72, suffix: "%", label: "Success Rate" },
  { value: 25, suffix: "+", label: "Expert Specialists" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min((t - start) / 1600, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-6 rounded-3xl bg-white p-8 shadow-2xl shadow-gray-200/70 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-bold text-rose-brand"><Counter to={s.value} suffix={s.suffix} /></p>
            <p className="mt-1 text-sm font-medium text-gray-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
