export const RESTAURANT_WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348115051309";

export const RESTAURANT_NAME = 'CHAR';

export const MENU_ITEMS: import('@/types').MenuItem[] = [
  {
    id: "1",
    name: "Smokey Party Jollof Rice",
    description: "Authentic firewood smokey jollof served with fried plantain and peppered chicken.",
    price: 4500,
    category: "MAINS",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    name: "Spicy Beef Suya Plate",
    description: "Thinly sliced tender beef grilled over open flame with authentic Yaji spice and onions.",
    price: 5000,
    category: "GRILL & SUYA",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    name: "Pounded Yam & Egusi Soup",
    description: "Rich melon seed soup cooked with stockfish, beef, and goat meat, served with soft pounded yam.",
    price: 6000,
    category: "MAINS",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "4",
    name: "Peppered Goat Meat (Asun)",
    description: "Bite-sized slow-roasted goat meat tossed in habanero pepper sauce and bell peppers.",
    price: 5500,
    category: "GRILL & SUYA",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "5",
    name: "Golden Sweet Plantain (Dodo)",
    description: "Freshly sliced ripe plantains fried to golden brown perfection.",
    price: 1500,
    category: "SIDES & SWALLOW",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "6",
    name: "Signature Iced Chapman",
    description: "Classic Nigerian cocktail with Angostura bitters, Fanta, Sprite, cucumber, and fresh orange slices.",
    price: 2500,
    category: "DRINKS",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop"
  }
];