'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Plus, Minus, Truck, User, MapPin, MessageSquare, CheckCircle } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { RESTAURANT_WHATSAPP_NUMBER } from '@/lib/config';
import type { CartItem } from '@/types';

export default function CartDrawer() {
  const { items, customerInfo, isOpen, toggleCart, removeItem, updateQuantity, updateCustomerInfo, getSubtotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const subtotal = getSubtotal();
  const tax = subtotal * 0.08;
  const delivery = subtotal > 50 ? 0 : 5;
  const total = subtotal + tax + delivery;

  const handleWhatsAppOrder = () => {
    if (!customerInfo.fullName.trim() || !customerInfo.deliveryAddress.trim()) {
      alert('Please fill in your name and delivery address');
      return;
    }

    setIsSubmitting(true);

    const orderLines = items.map(
      (item) => `- ${item.quantity}x ${item.name} ($${(item.price * item.quantity).toFixed(2)})`
    ).join('\n');

    const message = `Hello! I'd like to place an order:

*Order Details:*
${orderLines}

*Subtotal:* $${subtotal.toFixed(2)}
${delivery > 0 ? `*Delivery:* $${delivery.toFixed(2)}` : '*Delivery:* FREE'}
*Tax:* $${tax.toFixed(2)}
*Total:* $${total.toFixed(2)}

*Customer Info:*
- Name: ${customerInfo.fullName}
- Address: ${customerInfo.deliveryAddress}
- Notes: ${customerInfo.specialInstructions || 'None'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setTimeout(() => {
        clearCart();
        toggleCart();
        setSubmitSuccess(false);
      }, 2000);
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={toggleCart}
        aria-hidden="true"
      />
      <aside className="fixed right-0 top-0 h-full w-full max-w-md bg-[#0D0D0D] z-50 border-l border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)] flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold tracking-tight text-white">YOUR CART</h2>
          <button
            onClick={toggleCart}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-12 text-white/50">
              <svg className="w-16 h-16 mx-auto mb-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a2 2 0 00-2-2H6a2 2 0 00-2 2v4m5-4h10a2 2 0 012 2v5a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h5" />
              </svg>
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm mt-1">Add some delicious items to get started</p>
            </div>
          ) : (
            <>
              <div className="space-y-4" role="list" aria-label="Cart items">
                {items.map((item) => (
                  <CartItemRow key={item.id} item={item} onUpdateQuantity={updateQuantity} onRemove={removeItem} />
                ))}
              </div>

              <div className="border-t border-white/10 pt-6 space-y-4">
                <div className="flex justify-between text-white/70">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Delivery</span>
                  <span className="font-medium">{delivery > 0 ? `$${delivery.toFixed(2)}` : 'FREE'}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Tax (8%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-bold text-white">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </>
          )}

          {items.length > 0 && (
            <div className="border-t border-white/10 pt-6 space-y-6">
              <h3 className="text-lg font-semibold text-white">DELIVERY INFORMATION</h3>
              <div className="space-y-4">
                <InputField
                  label="Full Name"
                  icon={User}
                  value={customerInfo.fullName}
                  onChange={(e) => updateCustomerInfo({ fullName: e.target.value })}
                  placeholder="John Doe"
                  required
                />
                <InputField
                  label="Delivery Address"
                  icon={MapPin}
                  value={customerInfo.deliveryAddress}
                  onChange={(e) => updateCustomerInfo({ deliveryAddress: e.target.value })}
                  placeholder="123 Main St, City, State"
                  required
                  multiline
                />
                <InputField
                  label="Special Instructions (Optional)"
                  icon={MessageSquare}
                  value={customerInfo.specialInstructions}
                  onChange={(e) => updateCustomerInfo({ specialInstructions: e.target.value })}
                  placeholder="e.g., Ring doorbell, leave at door, extra napkins"
                  multiline
                />
              </div>

              <button
                onClick={handleWhatsAppOrder}
                disabled={isSubmitting || !customerInfo.fullName.trim() || !customerInfo.deliveryAddress.trim()}
                className="w-full py-4 bg-[#E85D2D] text-black font-bold tracking-wider uppercase text-sm rounded-lg transition-all hover:bg-[#E85D2D]/90 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#E85D2D] focus:ring-offset-2 focus:ring-offset-black flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : submitSuccess ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Order Sent!
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-5 h-5" />
                    PLACE ORDER VIA WHATSAPP
                  </>
                )}
              </button>

              <p className="text-xs text-white/40 text-center">
                By placing an order, you agree to our{' '}
                <Link href="/terms" className="underline hover:text-white/70 transition-colors">
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

function CartItemRow({ item, onUpdateQuantity, onRemove }: { item: CartItem; onUpdateQuantity: (id: string, qty: number) => void; onRemove: (id: string) => void }) {
  return (
    <div className="flex gap-4 p-3 bg-white/5 rounded-lg border border-white/10" role="listitem">
      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
        <img src={item.image} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-white truncate">{item.name}</h4>
        <p className="text-[#E85D2D] font-bold text-sm">${item.price.toFixed(2)}</p>
        <div className="flex items-center gap-3 mt-2">
          <QuantitySelector value={item.quantity} onChange={(qty) => onUpdateQuantity(item.id, qty)} />
          <button
            onClick={() => onRemove(item.id)}
            className="text-white/40 hover:text-white/70 transition-colors text-sm"
            aria-label={`Remove ${item.name}`}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-bold text-white">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}

function QuantitySelector({ value, onChange }: { value: number; onChange: (qty: number) => void }) {
  return (
    <div className="flex items-center border border-white/20 rounded-lg overflow-hidden">
      <button
        onClick={() => onChange(value - 1)}
        disabled={value <= 1}
        className="px-3 py-1.5 text-white/60 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      <span className="px-4 py-1.5 text-white font-medium text-sm w-10 text-center border-x border-white/20">{value}</span>
      <button
        onClick={() => onChange(value + 1)}
        className="px-3 py-1.5 text-white/60 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}

function InputField({ label, icon: Icon, value, onChange, placeholder, required, multiline }: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  multiline?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2 flex items-center gap-2">
        <Icon className="w-4 h-4 text-white/40" aria-hidden="true" />
        {label} {required && <span className="text-[#E85D2D]">*</span>}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={3}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#E85D2D] focus:border-transparent transition-all"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-[#E85D2D] focus:border-transparent transition-all"
        />
      )}
    </div>
  );
}