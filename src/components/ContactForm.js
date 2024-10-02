// File: components/ContactForm.js

export default function ContactForm() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-8">Contact Scarlett</h2>
      <form className="flex flex-col items-center space-y-4 max-w-md mx-auto">
        <input type="text" placeholder="Your Name" required className="w-full px-4 py-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Your Email" required className="w-full px-4 py-2 border border-gray-300 rounded" />
        <textarea placeholder="Your Message" required className="w-full px-4 py-2 border border-gray-300 rounded h-32"></textarea>
        <button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded">Send Message</button>
      </form>
      <p className="mt-8">Follow us on:</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="text-pink-500 hover:text-pink-600">Instagram</a>
        <a href="#" className="text-pink-500 hover:text-pink-600">Facebook</a>
      </div>
    </section>
  );
}
