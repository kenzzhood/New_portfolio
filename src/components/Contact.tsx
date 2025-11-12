import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xanyrdpv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Let's Connect</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8">Let's work together</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-white" size={24} />
                <a
                  href="mailto:gtkgoutham@gmail.com"
                  className="text-lg text-gray-300 hover:text-white transition-colors duration-300"
                >
                  gtkgoutham@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-white" size={24} />
                <a
                  href="tel:+919620858652"
                  className="text-lg text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +91 9620858652
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-white" size={24} />
                <span className="text-lg text-gray-300">Bangalore</span>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-white text-[#111111] font-semibold rounded-md hover:bg-gray-200 transition-all duration-300"
              >
                Send
              </button>

              {status === 'success' && (
                <p className="text-green-400 text-center">Message sent!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
