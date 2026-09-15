'use client';

import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { PORTION_PRICING, type PricingCategory, type PricingItem } from '@/data/pricingData';

export default function PricingTable() {
  const { addItem } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSizes, setSelectedSizes] = useState<Record<string, SizeKey>>({});

  const filteredCategories = PORTION_PRICING.map((cat) => ({
    ...cat,
    items: cat.items.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.items.length > 0);

  const SIZE_KEYS = ['2.5L', '3L', '5L', '7L'] as const;
  type SizeKey = typeof SIZE_KEYS[number];

  const getAvailableSizes = (item: PricingItem) => {
    return SIZE_KEYS.filter((size) => item.sizes[size] !== '—');
  };

  const getDefaultSize = (item: PricingItem) => {
    const available = getAvailableSizes(item);
    return available.length > 0 ? available[0] : '2.5L';
  };

  const handleAddToCart = (item: PricingItem, size: SizeKey) => {
    const price = item.sizes[size];
    if (price === '—') return;
    const numericPrice = parseInt(price.replace(/[₦,]/g, ''), 10);
    const menuItem = {
      id: `${item.name}-${size}`.replace(/\s+/g, '-').toLowerCase(),
      name: `${item.name} (${size})`,
      description: `${size} portion of ${item.name}`,
      price: numericPrice,
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
      category: 'MAINS' as const,
    };
    addItem(menuItem);
  };

  const handleSizeChange = (itemName: string, size: SizeKey) => {
    setSelectedSizes((prev) => ({ ...prev, [itemName]: size }));
  };

  const sizeColumns = SIZE_KEYS;

  return (
    <section id="pricing" className="py-24 px-6 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-px bg-white/30" aria-hidden="true" />
            <div className="w-2 h-2 bg-[#E85D2D] rounded-full" aria-hidden="true" />
            <div className="w-12 h-px bg-white/30" aria-hidden="true" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">BULK & PORTION PRICING</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Wholesale pricing for events, catering, and family bulk orders</p>
        </div>

        <div className="mb-10 max-w-3xl mx-auto">
          <label htmlFor="pricing-search" className="sr-only">Search menu items</label>
          <div className="relative">
            <input
              id="pricing-search"
              type="search"
              placeholder="Search the menu (e.g. Egusi, Jollof, Ofada, Asun)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 bg-[#1A1A1A] border border-white/10 rounded-xl text-white placeholder-white/40 text-base focus:outline-none focus:ring-2 focus:ring-[#E85D2D] focus:border-transparent transition-all"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="w-1.5 h-6 bg-[#E85D2D] rounded-full inline-block" aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{category.category}</h3>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]" role="table">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-6 py-4 text-sm font-semibold tracking-wider uppercase text-white/60">Meal Item</th>
                      {sizeColumns.map((size) => (
                        <th key={size} className="text-right px-6 py-4 text-sm font-semibold tracking-wider uppercase text-white/60 w-32">{size}</th>
                      ))}
                      <th className="text-right px-6 py-4 text-sm font-semibold tracking-wider uppercase text-white/60 w-48">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((item) => {
                      const availableSizes = getAvailableSizes(item);
                      const defaultSize = getDefaultSize(item);
                      const currentSize = (selectedSizes[item.name] || defaultSize) as SizeKey;
                      const currentPrice = item.sizes[currentSize];
                      const numericPrice = currentPrice !== '—' ? parseInt(currentPrice.replace(/[₦,]/g, ''), 10) : 0;

                      return (
                        <tr key={item.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="px-6 py-5 text-white font-medium">
                            {item.name}
                          </td>
                          {sizeColumns.map((size) => (
                            <td key={size} className="px-6 py-5 text-right text-white/70 font-mono text-sm">
                              {item.sizes[size]}
                            </td>
                          ))}
                          <td className="px-6 py-5 text-right">
                            <div className="flex items-center justify-end gap-3">
                              <select
                                value={currentSize}
                                onChange={(e) => handleSizeChange(item.name, e.target.value as SizeKey)}
                                className="bg-[#1A1A1A] border border-white/10 text-white text-sm font-medium px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E85D2D] focus:border-transparent appearance-none cursor-pointer"
                              >
                                {availableSizes.map((size) => (
                                  <option key={size} value={size}>
                                    {size} — {item.sizes[size]}
                                  </option>
                                ))}
                              </select>
                              <button
                                onClick={() => handleAddToCart(item, currentSize)}
                                disabled={currentPrice === '—'}
                                className="px-4 py-2 bg-[#E85D2D] hover:bg-[#d44c1c] text-white font-medium rounded-lg transition-colors disabled:bg-white/10 disabled:text-white/30 disabled:cursor-not-allowed"
                              >
                                Add to Cart
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-white/50">
              No items match your search
            </div>
          )}
        </div>
      </div>
    </section>
  );
}