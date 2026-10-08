import { Service, ServiceCategory } from '../types/service';

export const SERVICES: Service[] = [
  // --- HAIR SERVICES ---
  {
    id: 'hair-general',
    name: 'General Haircut',
    slug: 'general-haircut',
    category: 'hair',
    categoryName: 'Hair Services',
    price: 119,
    currency: 'INR',
    description: 'Classic professional haircut tailored to your head shape, hair texture, and daily style.',
    featured: true,
    seoTitle: 'General Haircut | Adheera Saloon & Tatoos',
    seoDescription: 'Get a clean, professional General Haircut for ₹119 at Adheera Saloon & Tatoos. Book instantly on WhatsApp.'
  },
  {
    id: 'hair-model',
    name: 'Model Haircut',
    slug: 'model-haircut',
    category: 'hair',
    categoryName: 'Hair Services',
    price: 149,
    currency: 'INR',
    description: 'Modern trend cut with precision fade, taper, texture styling, and sharp razor definition.',
    featured: true,
    seoTitle: 'Model Haircut | Adheera Saloon & Tatoos',
    seoDescription: 'Elevate your look with a contemporary Model Haircut for ₹149 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'hair-child-baby',
    name: 'Child/Baby Haircut',
    slug: 'child-baby-haircut',
    category: 'hair',
    categoryName: 'Hair Services',
    price: 149,
    currency: 'INR',
    description: 'Gentle, patient, and comfortable haircut crafted with utmost care for young children and toddlers.',
    seoTitle: 'Child / Baby Haircut | Adheera Saloon & Tatoos',
    seoDescription: 'Gentle haircut service for children and babies at ₹149 with expert care at Adheera.'
  },
  {
    id: 'hair-boy-baby',
    name: 'Boy Baby Haircut',
    slug: 'boy-baby-haircut',
    category: 'hair',
    categoryName: 'Hair Services',
    price: 99,
    currency: 'INR',
    description: 'Specialized quick, calm styling cut for baby boys in a welcoming environment.',
    seoTitle: 'Boy Baby Haircut | Adheera Saloon & Tatoos',
    seoDescription: 'Neat and comfortable haircut for baby boys at ₹99 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'hair-school-boys',
    name: 'School Boys Haircut',
    slug: 'school-boys-haircut',
    category: 'hair',
    categoryName: 'Hair Services',
    price: 99,
    currency: 'INR',
    description: 'Neat, disciplined, and smart haircut complying with school dress codes while keeping a fresh look.',
    seoTitle: 'School Boys Haircut | Adheera Saloon & Tatoos',
    seoDescription: 'Smart and disciplined haircut for school boys for ₹99 at Adheera Saloon & Tatoos.'
  },

  // --- BEARD & SHAVING ---
  {
    id: 'beard-shave-facewash',
    name: 'Beard Shave + Face Wash',
    slug: 'beard-shave-face-wash',
    category: 'beard-shaving',
    categoryName: 'Beard & Shaving',
    price: 99,
    currency: 'INR',
    description: 'Full clean shave with warm soothing lather followed by an energizing, pore-cleansing face wash.',
    featured: true,
    seoTitle: 'Beard Shave + Face Wash | Adheera Saloon & Tatoos',
    seoDescription: 'Smooth beard shave paired with an invigorating face wash for ₹99 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'beard-trim-facewash',
    name: 'Beard Trim + Face Wash',
    slug: 'beard-trim-face-wash',
    category: 'beard-shaving',
    categoryName: 'Beard & Shaving',
    price: 99,
    currency: 'INR',
    description: 'Even length trimming, line refinement, and complete face wash for a polished beard finish.',
    featured: true,
    seoTitle: 'Beard Trim + Face Wash | Adheera Saloon & Tatoos',
    seoDescription: 'Sharpen your beard profile with a trim and cleansing face wash for ₹99 at Adheera.'
  },
  {
    id: 'beard-trim-shape',
    name: 'Beard Trim & Shape',
    slug: 'beard-trim-and-shape',
    category: 'beard-shaving',
    categoryName: 'Beard & Shaving',
    price: 79,
    currency: 'INR',
    description: 'Detailed cheek and jawline shaping, symmetry balancing, and length graduation.',
    seoTitle: 'Beard Trim & Shape | Adheera Saloon & Tatoos',
    seoDescription: 'Precision beard sculpting and sharp shaping for ₹79 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'beard-clean-shaving',
    name: 'Clean Shaving',
    slug: 'clean-shaving',
    category: 'beard-shaving',
    categoryName: 'Beard & Shaving',
    price: 79,
    currency: 'INR',
    description: 'Traditional close razor shaving with soothing pre-shave cream and skin-softening balm.',
    seoTitle: 'Clean Shaving | Adheera Saloon & Tatoos',
    seoDescription: 'Classic close shaving with skin conditioning for ₹79 at Adheera Saloon & Tatoos.'
  },

  // --- FACE CARE ---
  {
    id: 'face-haircut-shave-facewash',
    name: 'Haircut & Shave + Face Wash',
    slug: 'haircut-shave-face-wash',
    category: 'face-care',
    categoryName: 'Face Care',
    price: 199,
    currency: 'INR',
    description: 'The foundational men’s grooming trio: custom haircut, smooth shave or trim, and refreshing face wash.',
    featured: true,
    seoTitle: 'Haircut & Shave + Face Wash | Adheera Saloon & Tatoos',
    seoDescription: 'Complete essential grooming package including haircut, shave, and face wash for ₹199.'
  },
  {
    id: 'face-general-wash',
    name: 'General Face Wash',
    slug: 'general-face-wash',
    category: 'face-care',
    categoryName: 'Face Care',
    price: 59,
    currency: 'INR',
    description: 'Quick refreshing facial cleanse to remove dust, excess oil, and impurities.',
    seoTitle: 'General Face Wash | Adheera Saloon & Tatoos',
    seoDescription: 'Instant skin refreshment and oil control face wash for ₹59 at Adheera.'
  },
  {
    id: 'face-detan-wash',
    name: 'De-Tan & Face Wash',
    slug: 'de-tan-face-wash',
    category: 'face-care',
    categoryName: 'Face Care',
    price: 249,
    currency: 'INR',
    description: 'Targeted skin treatment formulated to gently lift sun tan, brighten dull skin, and restore tone.',
    featured: true,
    seoTitle: 'De-Tan & Face Wash | Adheera Saloon & Tatoos',
    seoDescription: 'Effective de-tanning pack with revitalizing face wash for ₹249 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'face-bleach',
    name: 'Face Bleach',
    slug: 'face-bleach',
    category: 'face-care',
    categoryName: 'Face Care',
    price: 199,
    currency: 'INR',
    description: 'Skin tone brightening treatment that lightens fine facial hair and clears surface dullness.',
    seoTitle: 'Face Bleach | Adheera Saloon & Tatoos',
    seoDescription: 'Luminizing facial bleach treatment for ₹199 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'face-general-facial',
    name: 'General Facial',
    slug: 'general-facial',
    category: 'face-care',
    categoryName: 'Face Care',
    price: 399,
    currency: 'INR',
    description: 'Multi-step skin care session including gentle exfoliation, steam, blackhead clearing, and moisturizing massage.',
    seoTitle: 'General Facial | Adheera Saloon & Tatoos',
    seoDescription: 'Deep cleansing and soothing General Facial for men for ₹399 at Adheera.'
  },
  {
    id: 'face-silver-facial',
    name: 'Silver Facial',
    slug: 'silver-facial',
    category: 'face-care',
    categoryName: 'Face Care',
    price: 699,
    currency: 'INR',
    description: 'Cooling, purifying facial infused with silver mineral extracts for deep pore detoxification and hydration.',
    seoTitle: 'Silver Facial | Adheera Saloon & Tatoos',
    seoDescription: 'Intense cooling detox Silver Facial for men for ₹699 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'face-gold-facial',
    name: 'Gold Facial',
    slug: 'gold-facial',
    category: 'face-care',
    categoryName: 'Face Care',
    price: 999,
    currency: 'INR',
    description: 'Our signature luxury facial treatment. Enriched with radiant gold micro-particles, revitalizing face mask, and premium lymphatic massage for elite rejuvenation.',
    featured: true,
    premiumBadge: 'LUXURY SIGNATURE',
    seoTitle: 'Gold Facial (₹999) | Adheera Saloon & Tatoos',
    seoDescription: 'Experience our signature Gold Facial for ₹999 at Adheera Saloon & Tatoos. Book on WhatsApp +91 7010717408.'
  },

  // --- COMBO PACKAGES ---
  {
    id: 'combo-hair-beard-general-facial',
    name: 'Haircut + Beard Shave (Trim) + General Facial',
    slug: 'combo-haircut-beard-general-facial',
    category: 'combo-packages',
    categoryName: 'Combo Packages',
    price: 599,
    currency: 'INR',
    description: 'Full style transformation combining custom haircut, beard trim or clean shave, and rejuvenating General Facial.',
    featured: true,
    seoTitle: 'Grooming Combo with General Facial (₹599) | Adheera',
    seoDescription: 'Complete grooming combo: Haircut, Beard Shave/Trim & General Facial for ₹599 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'combo-hair-beard-silver-facial',
    name: 'Haircut + Beard Shave (Trim) + Silver Facial',
    slug: 'combo-haircut-beard-silver-facial',
    category: 'combo-packages',
    categoryName: 'Combo Packages',
    price: 899,
    currency: 'INR',
    description: 'Comprehensive grooming package featuring a sharp haircut, beard sculpting, and detoxifying Silver Facial.',
    seoTitle: 'Silver Facial Grooming Combo (₹899) | Adheera',
    seoDescription: 'Haircut, Beard Shave/Trim and Silver Facial combo package for ₹899 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'combo-hair-beard-gold-facial',
    name: 'Haircut + Beard Shave (Trim) + Gold Facial',
    slug: 'combo-haircut-beard-gold-facial',
    category: 'combo-packages',
    categoryName: 'Combo Packages',
    price: 1199,
    currency: 'INR',
    description: 'The pinnacle of luxury salon grooming. Complete haircut styling, precision beard work, and our premier Gold Facial treatment for unmatched confidence.',
    featured: true,
    premiumBadge: 'PREMIUM COMBO',
    seoTitle: 'Premium Combo: Haircut + Beard + Gold Facial (₹1,199) | Adheera',
    seoDescription: 'Our top-tier Premium Combo: Haircut + Beard Shave (Trim) + Gold Facial for ₹1,199 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'combo-hair-shave-herbal-wash',
    name: 'Haircut + Shave (Trim) + Black Hair Color (Herbal Extract) + Face Wash',
    slug: 'combo-haircut-shave-herbal-color-face-wash',
    category: 'combo-packages',
    categoryName: 'Combo Packages',
    price: 399,
    currency: 'INR',
    description: 'All-inclusive grooming: Haircut, beard care, natural herbal extract black hair coloring, and refreshing face wash.',
    seoTitle: 'Haircut + Color (Herbal) Combo (₹399) | Adheera',
    seoDescription: 'Haircut + Shave (Trim) + Black Hair Color (Herbal Extract) + Face Wash for ₹399 at Adheera.'
  },
  {
    id: 'combo-hair-shave-blackrose-wash',
    name: 'Haircut + Shave (Trim) + Black Hair Color (Black Rose) + Face Wash',
    slug: 'combo-haircut-shave-black-rose-face-wash',
    category: 'combo-packages',
    categoryName: 'Combo Packages',
    price: 349,
    currency: 'INR',
    description: 'Valued grooming combo: Haircut, beard trim/shave, Black Rose hair coloring, and purifying face wash.',
    seoTitle: 'Haircut + Black Rose Color Combo (₹349) | Adheera',
    seoDescription: 'Haircut + Shave (Trim) + Black Hair Color (Black Rose) + Face Wash for ₹349 at Adheera.'
  },

  // --- HAIR COLOR ---
  {
    id: 'color-black-rose',
    name: 'Black Rose Hair Color',
    slug: 'black-rose-hair-color',
    category: 'hair-color',
    categoryName: 'Hair Color',
    price: 149,
    currency: 'INR',
    description: 'Reliable, even-toned black hair color formulation for natural coverage and long-lasting rich shine.',
    seoTitle: 'Black Rose Hair Color (₹149) | Adheera Saloon & Tatoos',
    seoDescription: 'Even, deep black hair coverage with Black Rose Hair Color for ₹149 at Adheera.'
  },
  {
    id: 'color-nisha-brand',
    name: 'Hair Color (Red, Brown, Gold - Nisha Brand)',
    slug: 'hair-color-nisha-brand',
    category: 'hair-color',
    categoryName: 'Hair Color',
    price: 149,
    currency: 'INR',
    description: 'Expressive fashion shade selection in rich Red, warm Brown, or radiant Gold tones using premium Nisha formulations.',
    featured: true,
    seoTitle: 'Nisha Hair Color Red / Brown / Gold (₹149) | Adheera',
    seoDescription: 'Fashion hair color shades in Red, Brown, and Gold (Nisha Brand) for ₹149 at Adheera Saloon & Tatoos.'
  },
  {
    id: 'color-herbal-extract',
    name: 'Hair Color (Black - Herbal Extract)',
    slug: 'hair-color-black-herbal-extract',
    category: 'hair-color',
    categoryName: 'Hair Color',
    price: 199,
    currency: 'INR',
    description: 'Gentle, ammonia-free herbal extract black color treatment protecting hair vitality while delivering natural dark tint.',
    seoTitle: 'Herbal Extract Black Hair Color (₹199) | Adheera',
    seoDescription: 'Gentle herbal extract black hair coloring for ₹199 at Adheera Saloon & Tatoos.'
  }
];

export const CATEGORIES: { id: ServiceCategory; name: string; slug: string; description: string }[] = [
  {
    id: 'hair',
    name: 'Hair Services',
    slug: 'hair',
    description: 'Precision haircuts tailored for men, teens, and children by experienced stylists.'
  },
  {
    id: 'beard-shaving',
    name: 'Beard & Shaving',
    slug: 'beard-shaving',
    description: 'Sharp beard sculpting, line definition, and traditional warm-lather shaving.'
  },
  {
    id: 'face-care',
    name: 'Face Care',
    slug: 'face-care',
    description: 'Revitalizing skin treatments, de-tan therapies, and our signature Gold Facial.'
  },
  {
    id: 'combo-packages',
    name: 'Combo Packages',
    slug: 'combo-packages',
    description: 'Handcrafted grooming bundles combining hair, beard, facial, and color for premium value.'
  },
  {
    id: 'hair-color',
    name: 'Hair Color',
    slug: 'hair-color',
    description: 'Professional color applications ranging from herbal extracts to fashion shades.'
  }
];
