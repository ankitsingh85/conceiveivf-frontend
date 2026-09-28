const doctors = [
  { name: "Dr. Ananya Sharma", role: "Medical Director & IVF Specialist", exp: "18+ years", img: "6749765" },
  { name: "Dr. Priya Menon", role: "Reproductive Endocrinologist", exp: "14+ years", img: "17829429" },
  { name: "Dr. Kavya Reddy", role: "Senior Embryologist", exp: "12+ years", img: "6749773" },
  { name: "Dr. Grace Okafor", role: "Fertility Counsellor & Gynaecologist", exp: "10+ years", img: "18788957" },
];

export default function Doctors() {
  return (
    <section id="doctors" className="bg-rose-soft/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-brand">Our Team</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-gray-900 sm:text-4xl">Meet our fertility experts</h2>
          <p className="mt-4 text-gray-600">Compassionate specialists committed to walking alongside you on your journey.</p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => (
            <div key={d.name} className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative overflow-hidden">
                <img
                  src={`https://images.pexels.com/photos/${d.img}/pexels-photo-${d.img}.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=520&w=400`}
                  alt={d.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-teal-brand">{d.exp}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900">{d.name}</h3>
                <p className="mt-1 text-sm text-rose-brand">{d.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
