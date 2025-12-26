import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-teal-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl">Let's connect</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <Mail className="text-teal-900 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <a href="mailto:uttama.dixit@bhu.ac.in" className="text-gray-600 hover:text-teal-900">
                uttama.dixit@bhu.ac.in
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="text-teal-900 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
              <a href="tel:+919793331447" className="text-gray-600 hover:text-teal-900">
                +91 9793331447
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="text-teal-900 mt-1" size={24} />
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
              <p className="text-gray-600">
                Faculty of Visual Arts<br />
                Banaras Hindu University<br />
                Varanasi - 221005, India
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}