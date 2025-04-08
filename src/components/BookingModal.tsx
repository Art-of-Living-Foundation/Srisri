import React, { useState } from 'react';
import { X, Calendar, Users, CreditCard, Check, ArrowRight } from 'lucide-react';
import { format, addDays, setHours, setMinutes } from 'date-fns';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('your_publishable_key');

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: string;
}

type Step = 'datetime' | 'details' | 'payment' | 'confirmation';

interface TimeSlot {
  time: string;
  available: boolean;
}

export default function BookingModal({ isOpen, onClose, service }: BookingModalProps) {
  const [step, setStep] = useState<Step>('datetime');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [guests, setGuests] = useState<string[]>(['']);
  const [isProcessing, setIsProcessing] = useState(false);

  // Generate available dates (next 14 days)
  const availableDates = Array.from({ length: 14 }, (_, i) => addDays(new Date(), i));

  // Generate time slots (9 AM to 6 PM)
  const timeSlots: TimeSlot[] = Array.from({ length: 18 }, (_, i) => ({
    time: format(setMinutes(setHours(new Date(), Math.floor(i / 2) + 9), (i % 2) * 30), 'h:mm a'),
    available: Math.random() > 0.3 // Simulate availability
  }));

  const handleAddGuest = () => {
    setGuests([...guests, '']);
  };

  const handleRemoveGuest = (index: number) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  const handleGuestChange = (index: number, value: string) => {
    const newGuests = [...guests];
    newGuests[index] = value;
    setGuests(newGuests);
  };

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Here you would typically make an API call to your backend to:
      // 1. Create a Stripe payment intent
      // 2. Save the booking details
      // 3. Get the client secret
      
      // For demo purposes, we'll just simulate success
      setTimeout(() => {
        setStep('confirmation');
        setIsProcessing(false);
      }, 2000);

    } catch (error) {
      console.error('Payment failed:', error);
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-['Cormorant_Garamond'] text-sage-900">
              {step === 'datetime' && 'Choose Your Session Time'}
              {step === 'details' && 'Your Details'}
              {step === 'payment' && 'Complete Booking'}
              {step === 'confirmation' && 'Booking Confirmed!'}
            </h2>
            <button
              onClick={onClose}
              className="text-sage-500 hover:text-sage-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {step === 'datetime' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl text-sage-800 mb-4">Select Date</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {availableDates.map((date) => (
                    <button
                      key={date.toISOString()}
                      onClick={() => setSelectedDate(date)}
                      className={`p-3 rounded-xl text-center transition-all ${
                        selectedDate.toDateString() === date.toDateString()
                          ? 'bg-emerald-700 text-white'
                          : 'bg-sage-50 text-sage-700 hover:bg-sage-100'
                      }`}
                    >
                      <div className="text-sm">{format(date, 'EEE')}</div>
                      <div className="text-lg font-semibold">{format(date, 'd')}</div>
                      <div className="text-sm">{format(date, 'MMM')}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl text-sage-800 mb-4">Select Time</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => setSelectedTime(slot.time)}
                      disabled={!slot.available}
                      className={`p-3 rounded-xl text-center transition-all ${
                        selectedTime === slot.time
                          ? 'bg-emerald-700 text-white'
                          : slot.available
                          ? 'bg-sage-50 text-sage-700 hover:bg-sage-100'
                          : 'bg-sage-100 text-sage-400 cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep('details')}
                disabled={!selectedDate || !selectedTime}
                className="w-full py-4 rounded-full text-white font-medium transition-all flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 disabled:bg-sage-300 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 'details' && (
            <div className="space-y-6">
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
                <label className="block text-sage-700 mb-2">Additional Guests (Optional)</label>
                {guests.map((guest, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="email"
                      value={guest}
                      onChange={(e) => handleGuestChange(index, e.target.value)}
                      className="flex-1 px-4 py-3 rounded-xl border border-sage-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all"
                      placeholder="Guest email"
                    />
                    {index === guests.length - 1 ? (
                      <button
                        onClick={handleAddGuest}
                        className="px-4 py-2 rounded-xl bg-sage-100 text-sage-700 hover:bg-sage-200 transition-all"
                      >
                        +
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRemoveGuest(index)}
                        className="px-4 py-2 rounded-xl bg-sage-100 text-sage-700 hover:bg-sage-200 transition-all"
                      >
                        -
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={() => setStep('payment')}
                disabled={!name || !email}
                className="w-full py-4 rounded-full text-white font-medium transition-all flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 disabled:bg-sage-300 disabled:cursor-not-allowed"
              >
                Continue to Payment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div className="bg-sage-50 p-6 rounded-xl">
                <h3 className="text-xl text-sage-800 mb-4">Booking Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sage-600">Service</span>
                    <span className="text-sage-900 font-medium">{service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sage-600">Date</span>
                    <span className="text-sage-900 font-medium">
                      {format(selectedDate, 'MMMM d, yyyy')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sage-600">Time</span>
                    <span className="text-sage-900 font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sage-600">Guests</span>
                    <span className="text-sage-900 font-medium">{guests.filter(Boolean).length + 1}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full py-4 rounded-full text-white font-medium transition-all flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 disabled:bg-sage-300 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  'Processing...'
                ) : (
                  <>
                    Pay Now <CreditCard className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          )}

          {step === 'confirmation' && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-2xl text-sage-900 mb-2">Booking Confirmed!</h3>
                <p className="text-sage-600">
                  Your session is scheduled for {format(selectedDate, 'MMMM d, yyyy')} at {selectedTime}
                </p>
              </div>
              <div className="bg-sage-50 p-6 rounded-xl text-left">
                <h4 className="text-lg text-sage-800 mb-3">What's Next?</h4>
                <ul className="space-y-2 text-sage-600">
                  <li>• Check your email for booking confirmation</li>
                  <li>• Calendar invite has been sent</li>
                  <li>• Join link will be sent 24 hours before</li>
                </ul>
              </div>
              <button
                onClick={onClose}
                className="w-full py-4 rounded-full text-white font-medium transition-all bg-emerald-700 hover:bg-emerald-800"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}