export interface PortionSize {
  "2.5L": string;
  "3L": string;
  "5L": string;
  "7L": string;
}

export interface PricingItem {
  name: string;
  sizes: PortionSize;
}

export interface PricingCategory {
  category: string;
  items: PricingItem[];
}

export const PORTION_PRICING: PricingCategory[] = [
  {
    category: "Frozen Meals — Soups & Stews",
    items: [
      { name: "Hake Fish Eforiro", sizes: { "2.5L": "₦120,000", "3L": "₦135,000", "5L": "₦150,000", "7L": "—" } },
      { name: "Beef Egusi Soup", sizes: { "2.5L": "₦120,000", "3L": "₦125,000", "5L": "₦155,000", "7L": "—" } },
      { name: "Ogbono Soup", sizes: { "2.5L": "₦100,000", "3L": "₦120,000", "5L": "₦150,000", "7L": "—" } },
      { name: "Afang Soup", sizes: { "2.5L": "₦100,000", "3L": "₦120,000", "5L": "₦150,000", "7L": "—" } },
      { name: "Edikaikong Soup", sizes: { "2.5L": "₦100,000", "3L": "₦120,000", "5L": "₦150,000", "7L": "—" } }
    ]
  },
  {
    category: "Rice & Specialty Dishes",
    items: [
      { name: "Smokey Party Jollof Rice", sizes: { "2.5L": "₦85,000", "3L": "₦95,000", "5L": "₦120,000", "7L": "₦150,000" } },
      { name: "Fried Rice", sizes: { "2.5L": "₦80,000", "3L": "₦90,000", "5L": "₦115,000", "7L": "₦140,000" } },
      { name: "Ofada Rice & Ayamase Sauce", sizes: { "2.5L": "₦90,000", "3L": "₦105,000", "5L": "₦130,000", "7L": "₦160,000" } },
      { name: "Coconut Rice", sizes: { "2.5L": "₦85,000", "3L": "₦95,000", "5L": "₦120,000", "7L": "₦150,000" } },
      { name: "Native Rice (Palm Oil Rice)", sizes: { "2.5L": "₦80,000", "3L": "₦90,000", "5L": "₦115,000", "7L": "₦140,000" } }
    ]
  },
  {
    category: "Ofada, Beans & Special Pottage",
    items: [
      { name: "Ofada Rice & Stew", sizes: { "2.5L": "₦90,000", "3L": "₦105,000", "5L": "₦130,000", "7L": "₦160,000" } },
      { name: "Ewa Agoyin (Mashed Beans & Sauce)", sizes: { "2.5L": "₦70,000", "3L": "₦80,000", "5L": "₦100,000", "7L": "₦125,000" } },
      { name: "Beans & Plantain Pottage", sizes: { "2.5L": "₦75,000", "3L": "₦85,000", "5L": "₦110,000", "7L": "₦135,000" } },
      { name: "Yam Pottage (Asaro)", sizes: { "2.5L": "₦75,000", "3L": "₦85,000", "5L": "₦110,000", "7L": "₦135,000" } },
      { name: "Plantain Pottage", sizes: { "2.5L": "₦70,000", "3L": "₦80,000", "5L": "₦100,000", "7L": "₦125,000" } }
    ]
  }
];