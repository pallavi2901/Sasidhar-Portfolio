export default function Portfolio() {
  const images = [
    "img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg",
    "img5.jpeg","img6.jpeg","img7.jpeg","img8.jpeg",
    "img9.jpeg","img10.jpeg","img11.jpeg","img12.jpeg",
    "img13.jpeg","img14.jpeg","img15.jpeg","img16.jpeg",
    "img17.jpeg","img18.jpeg","img19.jpeg","img20.jpeg",
    "img21.jpeg","img22.jpeg","img23.jpeg","img24.jpeg",
    "img25.jpeg","img26.jpeg","img27.jpeg","img28.jpeg",
    "img29.jpeg","img30.jpeg","img31.jpeg","img32.jpeg",
    "img33.jpeg","img34.jpeg","img35.jpeg","img36.jpeg",
    "img37.jpeg","img38.jpeg","img39.jpeg","img40.jpeg",
    "img41.jpeg","img42.jpeg"
  ];

  return (
    <section id="portfolio" className="px-4 md:px-10 py-16 md:py-20 bg-white">

<h2 className="text-3xl md:text-5xl mb-10 md:mb-16 font-light">
photography portfolio
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
{images.map((img, i) => (
<img
key={i}
src={`/${img}`}
className="w-full object-cover hover:opacity-80 transition"
/>
))}
</div>

</section>
  );
}