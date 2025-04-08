import React, { useState } from 'react';
import { X, Star } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  treatments: string[];
}

export default function ReviewModal({ isOpen, onClose, treatments }: ReviewModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [treatment, setTreatment] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          treatment: treatment,
          rating: rating,
          review: review,
          to_name: 'Sri Sri Tattva Wellness',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setSubmitStatus('success');
      setTimeout(() => {
        onClose();
        // Reset form
        setName('');
        setEmail('');
        setTreatment('');
        setRating(5);
        setReview('');
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-['Cormorant_Garamond'] text-sage-900">Share Your Experience</h2>
            <button
              onClick={onClose}
              className="text-sage-500 hover:text-sage-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sage-700 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sage-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="treatment" className="block text-sage-700 mb-2">Treatment Received</label>
              <select
                id="treatment"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
              >
                <option value="">Select a treatment</option>
                {treatments.filter(t => t !== 'all').map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sage-700 mb-2">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="text-2xl focus:outline-none"
                  >
                    <Star 
                      className={`w-8 h-8 ${
                        star <= rating 
                          ? 'fill-amber-400 text-amber-400' 
                          : 'text-sage-200'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="review" className="block text-sage-700 mb-2">Your Review</label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                placeholder="Share your experience..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-full text-white font-medium transition-all ${
                isSubmitting
                  ? 'bg-sage-400 cursor-not-allowed'
                  : 'bg-emerald-700 hover:bg-emerald-800 hover:shadow-lg'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>

            {submitStatus === 'success' && (
              <p className="text-emerald-600 text-center">
                Thank you for your review! It will be published after moderation.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}