// Mock data for Meat City products
export const productCategories = [
  {
    id: 1,
    name: "Dudlangan kolbasalar",
    description: "Tutun ta'mi bilan",
    icon: "🥓",
    color: "from-meat-red to-red-700",
    products: [
      {
        id: 101,
        name: "Premium Dudlangan",
        description: "Eng yaxshi go'sht va tutun ta'mi",
        price: "45,000 so'm/kg",
        weight: "500g",
        ingredients: ["Premium go'sht", "Tabiiy ziravorlar", "Dudlangan"],
        inStock: true
      },
      {
        id: 102,
        name: "Klassik Dudlangan",
        description: "An'anaviy retsept bo'yicha",
        price: "38,000 so'm/kg",
        weight: "400g",
        ingredients: ["Sifatli go'sht", "Klassik ziravorlar", "Yengil tutun"],
        inStock: true
      },
      {
        id: 103,
        name: "Qishloq Dudlangan",
        description: "Qishloq uslubidagi maxsus ta'm",
        price: "42,000 so'm/kg",
        weight: "600g",
        ingredients: ["Organik go'sht", "Qishloq ziravorlari", "Tabiiy tutun"],
        inStock: false
      }
    ]
  },
  {
    id: 2,
    name: "Sosiska va sardelka",
    description: "Nonushta uchun eng yaxshi tanlov",
    icon: "🌭",
    color: "from-gold to-yellow-600",
    products: [
      {
        id: 201,
        name: "Bolalar sosiskasi",
        description: "Bolalar uchun maxsus tayyorlangan",
        price: "25,000 so'm/kg",
        weight: "300g",
        ingredients: ["Yumshoq go'sht", "Kam tuz", "Tabiiy qobiq"],
        inStock: true
      },
      {
        id: 202,
        name: "Premium sardelka",
        description: "Katta oila uchun mukammal",
        price: "35,000 so'm/kg",
        weight: "800g",
        ingredients: ["Premium go'sht", "Maxsus ziravorlar", "Tabiiy qobiq"],
        inStock: true
      },
      {
        id: 203,
        name: "Tovuq sosiskasi",
        description: "Yengil va mazali",
        price: "30,000 so'm/kg",
        weight: "400g",
        ingredients: ["Tovuq go'shti", "Oq ziravorlar", "Parhez uchun"],
        inStock: true
      }
    ]
  },
  {
    id: 3,
    name: "Ziravorli va achchiq",
    description: "Ta'mga keskinlik beruvchi variantlar",
    icon: "🌶",
    color: "from-red-600 to-red-800",
    products: [
      {
        id: 301,
        name: "Achchiq kolbasa",
        description: "Keskin ta'm sevuvchilar uchun",
        price: "48,000 so'm/kg",
        weight: "450g",
        ingredients: ["Premium go'sht", "Achchiq qalampir", "Maxsus ziravorlar"],
        inStock: true
      },
      {
        id: 302,
        name: "Ziravorli maxsus",
        description: "Boy ziravorli ta'm",
        price: "46,000 so'm/kg",
        weight: "500g",
        ingredients: ["Sifatli go'sht", "10 xil ziravorlar", "Tabiiy qobiq"],
        inStock: true
      },
      {
        id: 303,
        name: "Chili kolbasa",
        description: "Mexika uslubidagi achchiq",
        price: "50,000 so'm/kg",
        weight: "400g",
        ingredients: ["Premium go'sht", "Chili", "Lime", "Mexika ziravorlari"],
        inStock: false
      }
    ]
  },
  {
    id: 4,
    name: "Maxsus buyurtma",
    description: "Faqat siz uchun tayyorlangan retseptlar",
    icon: "🍽",
    color: "from-purple-600 to-purple-800",
    products: [
      {
        id: 401,
        name: "Individual retsept",
        description: "Sizning ta'bingiz bo'yicha",
        price: "Kelishiladi",
        weight: "Siz tanlaysiz",
        ingredients: ["Siz tanlagan go'sht", "Siz tanlagan ziravorlar", "Maxsus qobiq"],
        inStock: true
      },
      {
        id: 402,
        name: "Oilaviy to'plam",
        description: "Katta oila uchun maxsus",
        price: "Chegirma bilan",
        weight: "2-5kg",
        ingredients: ["Turli xil go'sht", "Oilaviy retsept", "Katta hajm"],
        inStock: true
      },
      {
        id: 403,
        name: "Bayram kolbasasi",
        description: "Maxsus tadbirlar uchun",
        price: "Kelishiladi",
        weight: "Buyurtma bo'yicha",
        ingredients: ["Premium ingredientlar", "Festive qadoqlash", "Maxsus dizayn"],
        inStock: true
      }
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Aziza Karimova",
    role: "Doimiy mijoz",
    rating: 5,
    text: "Meat City kolbasalari juda mazali! Oilam bilan har safar buyurtma beramiz. Sifat doim yuqori darajada.",
    location: "Toshkent"
  },
  {
    id: 2,
    name: "Bobur Yusupov",
    role: "Restoran egasi",
    rating: 5,
    text: "Bizning restoranlarida faqat Meat City mahsulotlarini ishlatamiz. Mijozlar doim mamnun qolishadi.",
    location: "Samarqand"
  },
  {
    id: 3,
    name: "Madina Ahmedova",
    role: "Oshpaz",
    rating: 5,
    text: "Professional oshpaz sifatida aytaman - bu haqiqatan ham premium sifat. Tavsiya etaman!",
    location: "Buxoro"
  }
];

export const brandStats = [
  {
    number: "500+",
    label: "Mamnun mijozlar"
  },
  {
    number: "15+",
    label: "Yillik tajriba"
  },
  {
    number: "100%",
    label: "Tabiiy mahsulotlar"
  },
  {
    number: "24/7",
    label: "Mijozlarni qo'llab-quvvatlash"
  }
];

export const contactInfo = {
  phone: "+998 99 374 69 20",
  email: "info@meatcity.uz",
  website: "www.meatcity.uz",
  address: "Toshkent sh., Chilonzor tumani, Amir Temur ko'chasi 15-uy",
  workingHours: {
    weekdays: "09:00 - 21:00",
    weekend: "10:00 - 20:00"
  },
  social: {
    telegram: "@Dostonbek_Rahmatulayev",
    instagram: "@rahmatulayev_dostonbek"
  }
};