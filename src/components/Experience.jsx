export default function Experience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl text-gold text-center mb-10">Experience</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10">
          <h3 className="text-gold text-xl">Graphic Designer</h3>
          <p className="text-gray-300">Honest Food Delivery (2023–2025)</p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/10">
          <h3 className="text-gold text-xl">Intern</h3>
          <p className="text-gray-300">Vision One Digitals</p>
        </div>

      </div>
    </section>
  );
}