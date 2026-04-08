export default function Booking() {
  return (
    <section id="booking" className="px-10 py-20 bg-white">

      <h2 className="text-5xl mb-6 font-light">booking</h2>
      <div className="border-t border-gray-300 mb-12"></div>

      <p className="max-w-2xl text-gray-600 mb-12">
        Available for a wide range of photography and videography services.
        Open to creative collaborations, brand partnerships, and personal shoots.
      </p>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700">

        {/* CATEGORY 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
            Photo & Video Shootings
          </h3>
          <ul className="space-y-2">
            <li>• Personal</li>
            <li>• Lifestyle</li>
            <li>• Professional</li>
          </ul>
        </div>

        {/* CATEGORY 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
            Events & Stories
          </h3>
          <ul className="space-y-2">
            <li>• Family</li>
            <li>• Couple</li>
            <li>• Love Story</li>
            <li>• Proposal</li>
            <li>• Gender Reveal</li>
            <li>• Birthday</li>
          </ul>
        </div>

        {/* CATEGORY 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase tracking-wide">
            Brands & Projects
          </h3>
          <ul className="space-y-2">
            <li>• Fashion</li>
            <li>• Beauty</li>
            <li>• HoReCa</li>
            <li>• FMCG</li>
          </ul>
        </div>

      </div>

    </section>
  );
}