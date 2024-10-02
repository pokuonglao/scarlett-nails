// File: src/components/Hero.js

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-4"
      style={{ backgroundImage: "url('/hero.webp')" }}
    >
      {/* Shaded Box Container */}
      <div className="bg-black bg-opacity-60 p-6 rounded-md shadow-md">
        <h1 className="text-pink-500 text-5xl font-bold mb-4">Welcome to Em Oi Nails</h1>
        <p className="text-gray-200 text-lg mb-8">Experience beauty with exclusive nail art services!</p>
      </div>
    </section>
  );
}
