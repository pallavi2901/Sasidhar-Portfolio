export default function Hero() {
  return (
    <section className="pt-28 px-4 md:px-10 bg-white text-black">

  <h2 className="text-xl md:text-3xl mb-6 md:mb-10">
    photography and videography | Vijayawada
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <img src="/sasidhar.jpeg" className="w-full h-[250px] md:h-[420px] object-cover"/>
    <img src="/sasi2.jpeg" className="w-full h-[250px] md:h-[420px] object-cover"/>
  </div>

</section>
  );
}