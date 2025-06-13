export default function Contact() {
  return (
    <main className="bg-[#F8F9FF]">
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1C243C] mb-4 text-center">Contact Us</h1>
          <p className="text-[#8F96AA] mb-10 text-center">
            Have questions or need support? Fill out the form and our team will get back to you.
          </p>
          <form className="bg-white rounded-xl border border-[#DDE1EC] p-8 space-y-6 shadow-sm">
            <div>
              <label className="block text-[#1C243C] font-medium mb-2">Name</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-[#DDE1EC] focus:border-[#6B7AFF] outline-none" />
            </div>
            <div>
              <label className="block text-[#1C243C] font-medium mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-[#DDE1EC] focus:border-[#6B7AFF] outline-none" />
            </div>
            <div>
              <label className="block text-[#1C243C] font-medium mb-2">Message</label>
              <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-[#DDE1EC] focus:border-[#6B7AFF] outline-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-[#6B7AFF] to-[#506EFF] text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
