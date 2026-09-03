'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MENU_ITEMS } from '@/lib/config';
import { useCart } from '@/hooks/useCart';
import type { MenuItem, CategoryId } from '@/types';
import { CATEGORIES } from '@/types';

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const { addItem } = useCart();

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="w-12 h-px bg-white/30" aria-hidden="true" />
            <div className="w-2 h-2 bg-[#E85D2D] rounded-full" aria-hidden="true" />
            <div className="w-12 h-px bg-white/30" aria-hidden="true" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">OUR SIGNATURE DISHES</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Authentic Nigerian flavors crafted with tradition — from smokey party jollof to fire-grilled suya</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Menu categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-controls={`${cat.id}-panel`}
              id={`${cat.id}-tab`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 text-sm font-medium tracking-wider uppercase rounded-lg transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.1)]'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div id="menu-panel" role="tabpanel" aria-label="Menu items">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} onAdd={addItem} />
            ))}
          </div>
          {filteredItems.length === 0 && (
            <div className="text-center py-12 text-white/50">
              No items in this category
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function MenuCard({ item, onAdd }: { item: MenuItem; onAdd: (item: MenuItem) => void }) {
  const handleAdd = () => onAdd(item);
  return (
    <article className="group bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-[#E85D2D]/50 hover:shadow-[0_20px_40px_rgba(232,93,45,0.15)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="px-2.5 py-1 bg-[#E85D2D] text-black text-xs font-bold tracking-wider uppercase rounded-full shadow-lg">
            ₦{item.price.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-lg font-semibold text-white flex-1 pr-2 group-hover:text-[#E85D2D] transition-colors duration-300">{item.name}</h3>
        </div>

        <p className="text-white/60 text-sm mb-4 line-clamp-2">{item.description}</p>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className="text-[#E85D2D] font-bold text-xl">₦{item.price.toLocaleString()}</span>
          <button
            onClick={handleAdd}
            className="px-5 py-2.5 bg-[#E85D2D] text-black text-sm font-bold tracking-wider uppercase rounded-lg transition-all hover:bg-[#E85D2D]/90 hover:shadow-[0_8px_20px_rgba(232,93,45,0.4)] focus:outline-none focus:ring-2 focus:ring-[#E85D2D] focus:ring-offset-2 focus:ring-offset-black active:scale-[0.98]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}