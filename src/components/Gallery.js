// File: src/components/Gallery.js

export default function Gallery() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-8">Nail Art Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
        {/* Sample images */}
        <img src="/gallery/1.jpg" alt="Nail Art 1" className="rounded-lg shadow-lg" />
        <img src="/gallery/2.jpg" alt="Nail Art 2" className="rounded-lg shadow-lg" />
        <img src="/gallery/3.jpg" alt="Nail Art 3" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
}
