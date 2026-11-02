import { j as jsxRuntimeExports, L as Link, r as reactExports, b as useRouterState, c as cn } from "./index-DtOlqKV1.js";
import { c as createLucideIcon, $ as $e } from "./index-4lEAEGrf.js";
import { P as Phone } from "./phone-C0bvtTLS.js";
import { M as Mail } from "./mail-DZ3nonx1.js";
const tours = [
  {
    id: "himachal-hills",
    name: "Himachal Hills Explorer",
    duration: "7 Nights / 8 Days",
    destinations: ["Shimla", "Kullu", "Manali", "Rohtang Pass"],
    price: 18500,
    description: "Journey through the breathtaking valleys and snow-capped peaks of Himachal Pradesh. Experience the thrill of Rohtang Pass, the scenic Kullu Valley, and the vibrant town of Manali.",
    image: "/assets/generated/tour-himachal.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Rohtang Pass Snow Experience",
      "Kullu Valley River Rafting",
      "Hadimba Temple Visit",
      "Solang Valley Adventure"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        description: "Arrive at Shimla, check in to hotel. Evening stroll on The Mall Road and Ridge. Overnight stay."
      },
      {
        day: 2,
        title: "Shimla Sightseeing",
        description: "Visit Jakhu Temple, Christ Church, Viceregal Lodge, and Indian Institute of Advanced Studies. Evening at leisure."
      },
      {
        day: 3,
        title: "Shimla to Manali",
        description: "Drive to Manali through scenic Kullu Valley. Stop at Kullu for shopping and views. Check in at Manali hotel."
      },
      {
        day: 4,
        title: "Rohtang Pass Excursion",
        description: "Full day excursion to Rohtang Pass (subject to weather). Snow activities and stunning panoramic mountain views."
      },
      {
        day: 5,
        title: "Manali Local Sightseeing",
        description: "Visit Hadimba Devi Temple, Manu Temple, Tibetan Monastery, and Van Vihar. Evening at Mall Road Manali."
      },
      {
        day: 6,
        title: "Solang Valley",
        description: "Visit Solang Valley for adventure activities — cable car, zorbing, and paragliding. Leisure evening."
      },
      {
        day: 7,
        title: "Kullu to Chandigarh",
        description: "Drive to Chandigarh. En route visit Pandoh Dam and Hanogi Mata Temple. Check in at Chandigarh."
      },
      {
        day: 8,
        title: "Departure",
        description: "After breakfast, transfer to Chandigarh airport/railway station for onward journey. Tour ends."
      }
    ],
    inclusions: [
      "Accommodation on twin sharing basis",
      "Daily breakfast and dinner",
      "All transfers by private vehicle",
      "Rohtang Pass permit charges",
      "Driver allowance and fuel charges",
      "All applicable taxes"
    ],
    exclusions: [
      "Airfare / train fare",
      "Personal expenses",
      "Adventure activity charges",
      "Meals not mentioned",
      "Travel insurance"
    ]
  },
  {
    id: "shimla-manali",
    name: "Shimla Manali Getaway",
    duration: "5 Nights / 6 Days",
    destinations: ["Shimla", "Kufri", "Manali"],
    price: 13500,
    description: "A classic Himachal journey combining the colonial charm of Shimla and the adventure hub of Manali. Perfect for couples and families seeking mountain bliss.",
    image: "/assets/generated/tour-shimla.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Kufri Snow Activities",
      "Shimla Mall Road Evening",
      "Manali Adventure Sports",
      "Apple Orchard Visits"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        description: "Arrive at Shimla, transfer to hotel. Visit The Ridge and Mall Road. Overnight at hotel."
      },
      {
        day: 2,
        title: "Shimla – Kufri Excursion",
        description: "Day excursion to Kufri and Chail. Enjoy snow activities at Kufri, visit Chail Wildlife Sanctuary."
      },
      {
        day: 3,
        title: "Shimla to Manali",
        description: "Scenic drive to Manali via Kullu Valley. Enjoy river Beas views and fruit orchards en route."
      },
      {
        day: 4,
        title: "Rohtang / Solang Valley",
        description: "Excursion to Rohtang Pass or Solang Valley depending on season. Full day snow and adventure activities."
      },
      {
        day: 5,
        title: "Manali Sightseeing",
        description: "Visit Hadimba Temple, Tibetan Monastery, local market, and Van Vihar National Park."
      },
      {
        day: 6,
        title: "Departure from Manali",
        description: "After breakfast, transfer to Chandigarh airport/railway station. Tour concludes with fond memories."
      }
    ],
    inclusions: [
      "Hotel accommodation",
      "Daily breakfast and dinner",
      "All transfers by AC vehicle",
      "Sightseeing as per itinerary",
      "Driver charges and tolls"
    ],
    exclusions: [
      "Flight / train tickets",
      "Personal expenses",
      "Camera fees at monuments",
      "Adventure activities"
    ]
  },
  {
    id: "uttarakhand-divine",
    name: "Uttarakhand Divine Journey",
    duration: "6 Nights / 7 Days",
    destinations: ["Haridwar", "Rishikesh", "Mussoorie", "Dehradun"],
    price: 15e3,
    description: "Immerse yourself in the spiritual and natural beauty of Uttarakhand. From the holy ghats of Haridwar to the yoga capital of the world Rishikesh and the Queen of Hills — Mussoorie.",
    image: "/assets/generated/tour-uttarakhand.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Ganga Aarti at Haridwar",
      "Yoga at Rishikesh Ashrams",
      "White Water Rafting",
      "Mussoorie Mall Road"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Haridwar",
        description: "Arrive at Haridwar. Transfer to hotel. Evening Ganga Aarti at Har Ki Pauri — a spiritual spectacle."
      },
      {
        day: 2,
        title: "Haridwar Sightseeing",
        description: "Visit Mansa Devi Temple, Chandi Devi Temple, Sapt Sarovar, and Daksha Mahadev Temple."
      },
      {
        day: 3,
        title: "Haridwar to Rishikesh",
        description: "Drive to Rishikesh. Visit Laxman Jhula, Ram Jhula, Beatles Ashram, and attend evening Ganga Aarti."
      },
      {
        day: 4,
        title: "Rishikesh Adventure",
        description: "Optional river rafting on Ganges. Visit Triveni Ghat, yoga session at ashram, Neelkanth Mahadev Temple."
      },
      {
        day: 5,
        title: "Rishikesh to Mussoorie",
        description: "Drive to Mussoorie, Queen of Hills. Check in and evening stroll on Mall Road and Camel's Back Road."
      },
      {
        day: 6,
        title: "Mussoorie Sightseeing",
        description: "Visit Kempty Falls, Lal Tibba, Company Garden, and Gun Hill Point via cable car."
      },
      {
        day: 7,
        title: "Departure from Dehradun",
        description: "Drive to Dehradun for train/flight. Visit Robber's Cave and Clock Tower before departure."
      }
    ],
    inclusions: [
      "Hotel and guesthouse accommodation",
      "Breakfast and dinner daily",
      "All transfers and sightseeing",
      "Ganga Aarti participation",
      "Local guide assistance"
    ],
    exclusions: [
      "Air/Train tickets",
      "Adventure activity charges",
      "Personal expenses",
      "Temple entry fees"
    ]
  },
  {
    id: "chardham-yatra",
    name: "Chardham Yatra Package",
    duration: "11 Nights / 12 Days",
    destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    price: 28e3,
    description: "Embark on the most sacred pilgrimage in Hinduism — visit all four holy dhams: Yamunotri, Gangotri, Kedarnath, and Badrinath. A soul-transforming spiritual experience in the Himalayas.",
    image: "/assets/generated/tour-chardham.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Yamunotri Temple Darshan",
      "Gangotri Sacred Dip",
      "Kedarnath Jyotirlinga",
      "Badrinath Vishnu Temple"
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar Arrival",
        description: "Arrive Haridwar, hotel check-in, evening Ganga Aarti at Har Ki Pauri."
      },
      {
        day: 2,
        title: "Haridwar to Barkot",
        description: "Drive via Mussoorie, Chamba to Barkot — base for Yamunotri."
      },
      {
        day: 3,
        title: "Yamunotri Darshan",
        description: "Trek or horse ride to Yamunotri Temple, take holy dip, return to Barkot."
      },
      {
        day: 4,
        title: "Barkot to Uttarkashi",
        description: "Drive to Uttarkashi via Dharasu. Visit Vishwanath Temple in Uttarkashi."
      },
      {
        day: 5,
        title: "Gangotri Darshan",
        description: "Drive to Gangotri, darshan at Gangotri Temple, holy bath in Bhagirathi river. Return to Uttarkashi."
      },
      {
        day: 6,
        title: "Uttarkashi to Guptkashi",
        description: "Drive to Guptkashi via Tehri. Visit Ardhnareshwar Temple."
      },
      {
        day: 7,
        title: "Kedarnath Darshan",
        description: "Drive to Sonprayag then helicopter or trek to Kedarnath. Darshan at Jyotirlinga temple."
      },
      {
        day: 8,
        title: "Kedarnath to Badrinath",
        description: "Return from Kedarnath. Drive via Chopta to Badrinath, check-in at hotel."
      },
      {
        day: 9,
        title: "Badrinath Darshan",
        description: "Morning darshan at Badrinath Temple, visit Mana Village — last Indian village, Vyas Gufa."
      },
      {
        day: 10,
        title: "Badrinath to Rudraprayag",
        description: "Drive back to Rudraprayag via Chamoli. Visit Rudranath Temple."
      },
      {
        day: 11,
        title: "Rudraprayag to Rishikesh",
        description: "Drive to Rishikesh via Devprayag. Evening Ganga Aarti at Triveni Ghat."
      },
      {
        day: 12,
        title: "Departure from Haridwar",
        description: "Morning drive to Haridwar. Transfer to railway station/airport. Tour concludes."
      }
    ],
    inclusions: [
      "Accommodation at all dhams",
      "Breakfast and dinner",
      "All transfers",
      "Priest assistance for darshan",
      "Kedarnath helicopter booking (subject to availability)"
    ],
    exclusions: [
      "Personal pooja expenses",
      "Ponies/Palanquin charges",
      "Airfare/train tickets",
      "Meals not mentioned"
    ]
  },
  {
    id: "taj-mahal-agra",
    name: "Taj Mahal & Golden Triangle",
    duration: "4 Nights / 5 Days",
    destinations: ["Delhi", "Agra", "Mathura", "Vrindavan"],
    price: 12500,
    description: "Witness the eternal symbol of love — the Taj Mahal — and explore the spiritual heritage of Mathura and Vrindavan. A perfect blend of history, culture, and devotion.",
    image: "/assets/generated/tour-tajmahal.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Taj Mahal Sunrise Visit",
      "Agra Fort Exploration",
      "Mathura Krishna Janmabhoomi",
      "Vrindavan Temples"
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival",
        description: "Arrive Delhi, check in to hotel. Evening visit India Gate and Connaught Place."
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description: "Visit Qutub Minar, Humayun's Tomb, Lotus Temple, Jama Masjid, and Red Fort."
      },
      {
        day: 3,
        title: "Delhi to Agra",
        description: "Drive to Agra via Yamuna Expressway. Afternoon visit Agra Fort. Evening view Taj Mahal from Mehtab Bagh."
      },
      {
        day: 4,
        title: "Taj Mahal & Mathura",
        description: "Early morning Taj Mahal visit at sunrise. Drive to Mathura — visit Krishna Janmabhoomi Temple and Vrindavan."
      },
      {
        day: 5,
        title: "Departure from Delhi",
        description: "Drive back to Delhi. Transfer to airport/railway station. Tour concludes."
      }
    ],
    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "All AC transfers",
      "Entry tickets for monuments",
      "Tour guide"
    ],
    exclusions: [
      "Airfare",
      "Lunches and dinners",
      "Camera fees inside monuments",
      "Personal expenses"
    ]
  },
  {
    id: "vaishno-devi",
    name: "Vaishno Devi Pilgrimage",
    duration: "3 Nights / 4 Days",
    destinations: ["Jammu", "Katra", "Vaishno Devi", "Patnitop"],
    price: 9500,
    description: "Seek the divine blessings of Mata Vaishno Devi in the holy Trikuta Mountains. A spiritually uplifting pilgrimage combined with the scenic beauty of Patnitop hill station.",
    image: "/assets/generated/tour-vaishnodevi.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Vaishno Devi Darshan",
      "Bhawan Cave Temple",
      "Patnitop Hill Station",
      "Baba Dhansar Waterfall"
    ],
    itinerary: [
      {
        day: 1,
        title: "Jammu Arrival",
        description: "Arrive Jammu, transfer to hotel. Visit Raghunath Temple and Ranbireshwar Temple. Evening Aarti."
      },
      {
        day: 2,
        title: "Katra & Vaishno Devi Trek",
        description: "Drive to Katra (45 km). Register for yatra pass. Begin trek to Vaishno Devi Bhawan — 14 km. Darshan at cave shrine."
      },
      {
        day: 3,
        title: "Patnitop Excursion",
        description: "Return trek from Bhawan. Drive to Patnitop hill station. Enjoy meadows, views, and local cuisine."
      },
      {
        day: 4,
        title: "Departure from Jammu",
        description: "Return to Jammu. Visit Bahu Fort and Peer Baba Dargah. Transfer to Jammu airport/station."
      }
    ],
    inclusions: [
      "Accommodation at Katra and Jammu",
      "Breakfast and dinner",
      "All transfers",
      "Yatra registration assistance",
      "Guide charges"
    ],
    exclusions: [
      "Helicopter charges",
      "Personal expenses",
      "Lunches",
      "Train/air tickets"
    ]
  },
  {
    id: "jammu-kashmir",
    name: "Jammu Kashmir Paradise",
    duration: "6 Nights / 7 Days",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    price: 22e3,
    description: "Experience the paradise on earth — Kashmir! Cruise on the enchanting Dal Lake in a shikara, ski in Gulmarg, and marvel at the meadows of Pahalgam and Sonamarg.",
    image: "/assets/generated/tour-jammu.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Dal Lake Shikara Ride",
      "Gulmarg Gondola Cable Car",
      "Pahalgam Betaab Valley",
      "Sonamarg Glacier"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar",
        description: "Arrive Srinagar airport, check in to houseboat on Dal Lake. Evening shikara ride on Dal Lake."
      },
      {
        day: 2,
        title: "Srinagar Sightseeing",
        description: "Visit Mughal Gardens — Nishat Bagh, Shalimar Bagh, Chashme Shahi. Visit Hazratbal Mosque and old city."
      },
      {
        day: 3,
        title: "Gulmarg Day Trip",
        description: "Drive to Gulmarg, ride Gondola (phase 1 & 2). Snow activities and skiing. Return to Srinagar."
      },
      {
        day: 4,
        title: "Pahalgam Excursion",
        description: "Day trip to Pahalgam valley. Visit Betaab Valley, Aru Valley, and Chandanwari. Horse riding."
      },
      {
        day: 5,
        title: "Sonamarg Day Trip",
        description: "Drive to Sonamarg — Meadow of Gold. Visit Thajiwas Glacier, pony rides, and stunning scenery."
      },
      {
        day: 6,
        title: "Local Srinagar",
        description: "Visit Shankaracharya Temple, Local Handicraft Centre. Shopping for Pashmina and Kashmiri crafts."
      },
      {
        day: 7,
        title: "Departure from Srinagar",
        description: "After breakfast, transfer to Srinagar airport. Tour concludes with memories of paradise."
      }
    ],
    inclusions: [
      "Houseboat / hotel accommodation",
      "Breakfast and dinner",
      "All transfers",
      "Shikara ride included",
      "Local guide"
    ],
    exclusions: [
      "Gondola cable car charges",
      "Pony/sledge charges",
      "Airfare",
      "Personal expenses"
    ]
  },
  {
    id: "goa-beaches",
    name: "Goa Beach Holiday",
    duration: "4 Nights / 5 Days",
    destinations: ["North Goa", "South Goa", "Old Goa", "Panjim"],
    price: 11e3,
    description: "Soak in the sun on Goa's golden beaches, explore Portuguese heritage churches, and enjoy the vibrant nightlife. Perfect for family holidays and group getaways.",
    image: "/assets/generated/tour-goa.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Calangute Beach Party",
      "Dudhsagar Waterfall Trip",
      "Old Goa Churches",
      "Sunset at Vagator"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Goa",
        description: "Arrive Goa, transfer to hotel. Evening at Calangute or Baga beach. Enjoy sunset and seafood dinner."
      },
      {
        day: 2,
        title: "North Goa Beaches",
        description: "Visit Anjuna Flea Market, Vagator Beach, Chapora Fort, and Morjim Beach. Evening at casino."
      },
      {
        day: 3,
        title: "Old Goa & Panjim",
        description: "Visit Basilica of Bom Jesus, Se Cathedral, Church of St. Francis, and Goa State Museum in Panjim."
      },
      {
        day: 4,
        title: "South Goa & Dudhsagar",
        description: "Drive to Dudhsagar Waterfall. Afternoon at Colva and Benaulim beaches. Spice plantation tour."
      },
      {
        day: 5,
        title: "Departure from Goa",
        description: "Morning at leisure. Transfer to Goa airport for onward journey. Tour ends."
      }
    ],
    inclusions: [
      "Beach resort accommodation",
      "Daily breakfast",
      "Airport/station transfers",
      "Dudhsagar jeep safari",
      "Tour guide"
    ],
    exclusions: [
      "Casino entry",
      "Water sports",
      "Lunches and dinners",
      "Airfare",
      "Personal expenses"
    ]
  },
  {
    id: "kerala-backwaters",
    name: "Kerala God's Own Country",
    duration: "5 Nights / 6 Days",
    destinations: ["Kochi", "Munnar", "Alleppey", "Kovalam"],
    price: 16500,
    description: "Discover Kerala's magical backwaters, misty tea gardens of Munnar, and pristine beaches of Kovalam. Experience Ayurvedic wellness and traditional Kathakali performances.",
    image: "/assets/generated/tour-kerala.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Alleppey Houseboat Stay",
      "Munnar Tea Estates",
      "Kathakali Performance",
      "Kovalam Beach"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Kochi",
        description: "Arrive Cochin, transfer to hotel. Visit Fort Kochi, Chinese Fishing Nets, Mattancherry Palace."
      },
      {
        day: 2,
        title: "Kochi to Munnar",
        description: "Drive to Munnar through scenic ghats. Visit Cheeyappara Waterfalls, Valara Waterfalls, and Spice Gardens."
      },
      {
        day: 3,
        title: "Munnar Sightseeing",
        description: "Visit Eravikulam National Park, Mattupetty Dam, Echo Point, and vast tea gardens. Tea factory visit."
      },
      {
        day: 4,
        title: "Munnar to Alleppey",
        description: "Drive to Alleppey. Board a traditional houseboat for an overnight backwater cruise. Sunset on backwaters."
      },
      {
        day: 5,
        title: "Alleppey to Kovalam",
        description: "Disembark houseboat. Drive to Kovalam beach. Evening at Lighthouse Beach, Ayurvedic spa session."
      },
      {
        day: 6,
        title: "Departure from Trivandrum",
        description: "Drive to Trivandrum airport. Visit Padmanabhaswamy Temple en route. Tour concludes."
      }
    ],
    inclusions: [
      "Hotel & houseboat accommodation",
      "All meals on houseboat",
      "Breakfast at hotels",
      "All AC transfers",
      "Kathakali show"
    ],
    exclusions: [
      "Airfare",
      "Ayurvedic treatments",
      "Personal expenses",
      "Optional activities"
    ]
  }
];
const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Delhi",
    tour: "Chardham Yatra",
    rating: 5,
    text: "An absolutely divine experience! Happy Miles took care of everything — from hotel bookings to the helicopter ride at Kedarnath. The team was always available and supportive. Highly recommend!",
    avatar: "RS"
  },
  {
    name: "Priya & Vikram Nair",
    location: "Bangalore",
    tour: "Kerala Backwaters",
    rating: 5,
    text: "Our honeymoon was made perfect by Happy Miles! The houseboat experience in Alleppey was breathtaking. Every detail was arranged beautifully. We'll definitely book with them again.",
    avatar: "PV"
  },
  {
    name: "Amit Gupta",
    location: "Mumbai",
    tour: "Himachal Hills Explorer",
    rating: 5,
    text: "Best family tour we ever had! Kids loved the snow at Rohtang Pass. Everything from transport to hotels was top class. The driver was very knowledgeable and friendly. 10/10!",
    avatar: "AG"
  },
  {
    name: "Sunita Mehta",
    location: "Pune",
    tour: "Vaishno Devi Pilgrimage",
    rating: 5,
    text: "A spiritually fulfilling journey. Happy Miles arranged everything seamlessly, including the yatra registration. The trekking was supported beautifully. I felt Mata's blessings throughout.",
    avatar: "SM"
  },
  {
    name: "Karan & Divya Singh",
    location: "Hyderabad",
    tour: "Goa Beach Holiday",
    rating: 5,
    text: "Fantastic Goa trip with Happy Miles! The beach resort was stunning, the Dudhsagar waterfall trip was incredible. Perfect balance of relaxation and adventure. Great value for money!",
    avatar: "KD"
  },
  {
    name: "Dr. Mohan Krishnan",
    location: "Chennai",
    tour: "Kashmir Paradise",
    rating: 5,
    text: "Kashmir truly lived up to its reputation as paradise! The Dal Lake houseboat was an experience of a lifetime. Happy Miles' local guides were exceptional. We felt safe and pampered throughout.",
    avatar: "MK"
  }
];
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$8);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$7);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = createLucideIcon("menu", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
];
const Twitter = createLucideIcon("twitter", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
      key: "1q2vi4"
    }
  ],
  ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }]
];
const Youtube = createLucideIcon("youtube", __iconNode);
const socialLinks = [
  {
    Icon: Facebook,
    href: "#",
    label: "Facebook",
    gradient: "linear-gradient(135deg, oklch(0.52 0.22 255), oklch(0.42 0.22 265))"
  },
  {
    Icon: Instagram,
    href: "#",
    label: "Instagram",
    gradient: "linear-gradient(135deg, oklch(0.62 0.22 15), oklch(0.58 0.20 330))"
  },
  {
    Icon: Twitter,
    href: "#",
    label: "Twitter",
    gradient: "linear-gradient(135deg, oklch(0.58 0.22 220), oklch(0.48 0.20 245))"
  },
  {
    Icon: Youtube,
    href: "#",
    label: "YouTube",
    gradient: "linear-gradient(135deg, oklch(0.55 0.25 25), oklch(0.45 0.22 18))"
  }
];
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { "data-ocid": "footer", className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "h-2 w-full",
        style: {
          background: "linear-gradient(90deg, oklch(0.62 0.20 55) 0%, oklch(0.62 0.22 15) 25%, oklch(0.55 0.22 220) 50%, oklch(0.55 0.22 175) 75%, oklch(0.55 0.20 290) 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        style: {
          background: "linear-gradient(160deg, oklch(0.14 0.06 265) 0%, oklch(0.18 0.07 255) 50%, oklch(0.12 0.05 265) 100%)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/",
                  className: "inline-block mb-5",
                  "data-ocid": "footer.logo_link",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "rounded-xl p-0.5 inline-block",
                      style: {
                        background: "linear-gradient(135deg, oklch(0.88 0.18 80), oklch(0.70 0.20 55))",
                        boxShadow: "0 0 20px oklch(0.72 0.20 55 / 0.3)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: "/assets/images/logo_hm.jpg",
                          alt: "Happy Miles",
                          className: "h-14 w-auto object-contain rounded-lg"
                        }
                      )
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/60 text-sm leading-relaxed mb-5", children: "The Happy Miles Tourism — your trusted travel partner for unforgettable journeys across India and beyond. Crafting memories since 2010." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: socialLinks.map(({ Icon, href, label, gradient }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href,
                  "aria-label": label,
                  className: "h-10 w-10 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:shadow-lg",
                  style: { background: gradient },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
                },
                label
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "font-display font-bold text-base mb-5",
                  style: { color: "oklch(0.82 0.18 65)" },
                  children: "🗺 Tour Packages"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: tours.slice(0, 6).map((tour) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/tour/$id",
                  params: { id: tour.id },
                  className: "text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group",
                  "data-ocid": `footer.tour_link.${tour.id}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover:scale-150",
                        style: { background: "oklch(0.72 0.20 55)" }
                      }
                    ),
                    tour.name
                  ]
                }
              ) }, tour.id)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "font-display font-bold text-base mb-5",
                  style: { color: "oklch(0.70 0.22 15)" },
                  children: "🔗 Quick Links"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: [
                { label: "Home", to: "/" },
                { label: "Hotels", to: "/hotels" },
                { label: "Flights", to: "/flights" },
                { label: "Trains", to: "/trains" },
                { label: "Forex", to: "/forex" },
                { label: "Gallery", to: "/gallery" },
                { label: "About Us", to: "/about" },
                { label: "Contact Us", to: "/contact" }
              ].map(({ label, to }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to,
                  className: "text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover:scale-150",
                        style: { background: "oklch(0.60 0.22 220)" }
                      }
                    ),
                    label
                  ]
                }
              ) }, label)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "h4",
                {
                  className: "font-display font-bold text-base mb-5",
                  style: { color: "oklch(0.65 0.20 175)" },
                  children: "📍 Contact Us"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5",
                      style: {
                        background: "oklch(0.62 0.20 55 / 0.2)",
                        border: "1px solid oklch(0.62 0.20 55 / 0.4)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        MapPin,
                        {
                          className: "h-4 w-4",
                          style: { color: "oklch(0.80 0.18 65)" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-white/60 leading-snug", children: [
                    "AVS House, 42/1A Gurupada Halder Road,",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Kolkata – 700026"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "tel:+918910364270",
                    className: "flex gap-3 text-sm text-white/60 hover:text-white transition-colors group",
                    "data-ocid": "footer.phone_link",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-8 w-8 rounded-lg flex items-center justify-center shrink-0",
                          style: {
                            background: "oklch(0.62 0.22 15 / 0.2)",
                            border: "1px solid oklch(0.62 0.22 15 / 0.4)"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Phone,
                            {
                              className: "h-4 w-4",
                              style: { color: "oklch(0.75 0.20 25)" }
                            }
                          )
                        }
                      ),
                      "89103-64270"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-8 w-8 rounded-lg flex items-center justify-center shrink-0",
                      style: {
                        background: "oklch(0.55 0.22 175 / 0.2)",
                        border: "1px solid oklch(0.55 0.22 175 / 0.4)"
                      },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Clock,
                        {
                          className: "h-4 w-4",
                          style: { color: "oklch(0.65 0.20 175)" }
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60", children: "Mon–Sun: 10:00 AM – 10:00 PM" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "mailto:info@happymiles.in",
                    className: "flex gap-3 text-sm text-white/60 hover:text-white transition-colors",
                    "data-ocid": "footer.email_link",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-8 w-8 rounded-lg flex items-center justify-center shrink-0",
                          style: {
                            background: "oklch(0.52 0.22 255 / 0.2)",
                            border: "1px solid oklch(0.52 0.22 255 / 0.4)"
                          },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Mail,
                            {
                              className: "h-4 w-4",
                              style: { color: "oklch(0.65 0.20 240)" }
                            }
                          )
                        }
                      ),
                      "info@happymiles.in"
                    ]
                  }
                ) })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "border-t",
              style: { borderColor: "oklch(0.35 0.05 265 / 0.5)" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/40", children: [
                "© ",
                year,
                " The Happy Miles Tourism. All rights reserved."
              ] }) })
            }
          )
        ]
      }
    )
  ] });
}
const tourDropdown = [
  { label: "🇮🇳 Indian Tours", to: "/indian-tours" },
  { label: "🌍 International Tours", to: "/international-tours" },
  { label: "💕 Honeymoon Packages", to: "/honeymoon-packages" },
  { label: "💼 Corporate Tours", to: "/corporate-tours" }
];
const navLinks = [
  { label: "Home", to: "/" },
  { label: "Hotels", to: "/hotels" },
  { label: "Flights", to: "/flights" },
  { label: "Trains", to: "/trains" },
  { label: "Forex", to: "/forex" },
  { label: "Tour Packages", to: "/packages", hasDropdown: true },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" }
];
const temporarilyHiddenNavLinks = /* @__PURE__ */ new Set(["Flights", "Trains", "Forex"]);
function Header() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const [dropdownOpen, setDropdownOpen] = reactExports.useState(false);
  const [mobilePackagesOpen, setMobilePackagesOpen] = reactExports.useState(false);
  const dropdownRef = reactExports.useRef(null);
  const router = useRouterState();
  const currentPath = router.location.pathname;
  const isPackagesActive = currentPath.startsWith("/packages") || currentPath.startsWith("/indian") || currentPath.startsWith("/international") || currentPath.startsWith("/honeymoon") || currentPath.startsWith("/corporate");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 shadow-lg", "data-ocid": "header", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "linear-gradient(90deg, oklch(0.55 0.22 50) 0%, oklch(0.58 0.22 30) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 flex items-center justify-between text-xs py-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden sm:flex items-center gap-2 text-white font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
            "Mon–Sun: 10:00 AM – 10:00 PM"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+918910364270",
              className: "flex items-center gap-1.5 text-white hover:text-yellow-200 transition-colors font-semibold tracking-wide",
              "data-ocid": "header.phone_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                "89103-64270"
              ]
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          background: "linear-gradient(105deg, oklch(0.62 0.20 55) 0%, oklch(0.52 0.22 255) 55%, oklch(0.40 0.22 265) 100%)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between h-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "flex items-center gap-3 shrink-0 group",
              "data-ocid": "header.logo_link",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "rounded-xl p-0.5",
                  style: {
                    background: "linear-gradient(135deg, oklch(0.88 0.18 80), oklch(0.70 0.20 55))",
                    boxShadow: "0 0 16px oklch(0.75 0.20 60 / 0.5)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: "/assets/images/logo_hm.jpg",
                      alt: "Happy Miles",
                      className: "h-11 w-auto object-contain rounded-lg"
                    }
                  )
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "nav",
            {
              className: "hidden lg:flex items-center gap-0",
              "aria-label": "Main navigation",
              children: navLinks.map(
                (link) => link.hasDropdown ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", ref: dropdownRef, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "button",
                    {
                      type: "button",
                      onClick: () => setDropdownOpen((v) => !v),
                      onBlur: (e) => {
                        var _a;
                        if (!((_a = dropdownRef.current) == null ? void 0 : _a.contains(
                          e.relatedTarget
                        ))) {
                          setDropdownOpen(false);
                        }
                      },
                      className: cn(
                        "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-200 relative group",
                        isPackagesActive ? "bg-white/25 text-white" : "text-white/90 hover:bg-white/15 hover:text-white"
                      ),
                      "data-ocid": "header.nav.tour_packages",
                      children: [
                        "Tour Packages",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          ChevronDown,
                          {
                            className: cn(
                              "h-3.5 w-3.5 transition-transform",
                              dropdownOpen && "rotate-180"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "absolute bottom-0 left-2 right-2 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left",
                            style: {
                              background: "linear-gradient(90deg, oklch(0.88 0.18 80), oklch(0.72 0.22 30))"
                            }
                          }
                        )
                      ]
                    }
                  ),
                  dropdownOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-full left-0 mt-2 w-56 rounded-2xl py-2 z-50 overflow-hidden",
                      style: {
                        background: "linear-gradient(160deg, oklch(0.18 0.05 265 / 0.97), oklch(0.22 0.06 255 / 0.97))",
                        backdropFilter: "blur(20px)",
                        border: "1px solid oklch(0.55 0.20 55 / 0.4)",
                        boxShadow: "0 20px 40px oklch(0.10 0.05 265 / 0.5), 0 0 0 1px oklch(0.60 0.20 55 / 0.2)"
                      },
                      "data-ocid": "header.packages_dropdown",
                      children: tourDropdown.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: item.to,
                          onClick: () => setDropdownOpen(false),
                          className: "block px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-white transition-all",
                          style: {
                            borderLeft: `3px solid ${i === 0 ? "oklch(0.72 0.20 55)" : i === 1 ? "oklch(0.60 0.22 220)" : i === 2 ? "oklch(0.62 0.22 15)" : "oklch(0.55 0.20 290)"}`,
                            marginBottom: "1px"
                          },
                          "data-ocid": `header.dropdown.${item.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
                          children: item.label
                        },
                        item.to
                      ))
                    }
                  )
                ] }, link.to) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: link.to,
                    className: cn(
                      "relative px-3 py-1.5 rounded-full text-sm font-bold transition-all duration-200 group",
                      temporarilyHiddenNavLinks.has(link.label) && "hidden",
                      currentPath === link.to ? "bg-white/25 text-white" : "text-white/90 hover:bg-white/15 hover:text-white"
                    ),
                    "data-ocid": `header.nav.${link.label.toLowerCase().replace(/ /g, "_")}`,
                    children: [
                      link.label,
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: cn(
                            "absolute bottom-0 left-2 right-2 h-0.5 rounded-full transition-transform origin-left",
                            currentPath === link.to ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                          ),
                          style: {
                            background: "linear-gradient(90deg, oklch(0.88 0.18 80), oklch(0.72 0.22 30))"
                          }
                        }
                      )
                    ]
                  },
                  link.to
                )
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg",
                style: {
                  background: "linear-gradient(135deg, oklch(0.88 0.18 80), oklch(0.72 0.20 55))",
                  color: "oklch(0.15 0.05 55)",
                  boxShadow: "0 4px 14px oklch(0.72 0.22 55 / 0.45)"
                },
                "data-ocid": "header.enquire_button",
                children: "✈ Get a Quote"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setMobileOpen(!mobileOpen),
                className: "lg:hidden p-2 rounded-xl text-white hover:bg-white/20 transition-all",
                "aria-label": mobileOpen ? "Close menu" : "Open menu",
                "data-ocid": "header.mobile_menu_toggle",
                children: mobileOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }) })
      }
    ),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "lg:hidden max-h-[80vh] overflow-y-auto",
        style: {
          background: "linear-gradient(180deg, oklch(0.18 0.06 265 / 0.98), oklch(0.14 0.04 265 / 0.98))",
          backdropFilter: "blur(20px)",
          borderTop: "2px solid oklch(0.62 0.20 55 / 0.5)"
        },
        "data-ocid": "header.mobile_menu",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container mx-auto px-4 py-4 flex flex-col gap-1", children: [
          navLinks.map(
            (link) => link.hasDropdown ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setMobilePackagesOpen((v) => !v),
                  className: "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold text-white/90 hover:bg-white/10 transition-all",
                  "data-ocid": "header.mobile_nav.tour_packages",
                  children: [
                    "Tour Packages",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        className: cn(
                          "h-4 w-4 transition-transform text-yellow-300",
                          mobilePackagesOpen && "rotate-180"
                        )
                      }
                    )
                  ]
                }
              ),
              mobilePackagesOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "ml-4 mt-1 flex flex-col gap-1 border-l-2",
                  style: { borderColor: "oklch(0.62 0.20 55 / 0.5)" },
                  children: tourDropdown.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Link,
                    {
                      to: item.to,
                      onClick: () => {
                        setMobileOpen(false);
                        setMobilePackagesOpen(false);
                      },
                      className: "px-4 py-2.5 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-all",
                      "data-ocid": `header.mobile_nav.${item.label.toLowerCase().replace(/[^a-z0-9]/g, "_")}`,
                      children: item.label
                    },
                    item.to
                  ))
                }
              )
            ] }, link.to) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: link.to,
                onClick: () => setMobileOpen(false),
                className: cn(
                  "px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  temporarilyHiddenNavLinks.has(link.label) && "hidden",
                  currentPath === link.to ? "bg-white/20 text-white" : "text-white/80 hover:bg-white/10 hover:text-white"
                ),
                "data-ocid": `header.mobile_nav.${link.label.toLowerCase().replace(/ /g, "_")}`,
                children: link.label
              },
              link.to
            )
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setMobileOpen(false),
              className: "mt-3 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90",
              style: {
                background: "linear-gradient(135deg, oklch(0.88 0.18 80), oklch(0.72 0.20 55))",
                color: "oklch(0.15 0.05 55)"
              },
              "data-ocid": "header.mobile_enquire_button",
              children: "✈ Get a Free Quote"
            }
          )
        ] })
      }
    )
  ] });
}
var M = (e, i, s, u, m, a, l, h) => {
  let d = document.documentElement, w = ["light", "dark"];
  function p(n) {
    (Array.isArray(e) ? e : [e]).forEach((y) => {
      let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
      k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
    }), R(n);
  }
  function R(n) {
    h && w.includes(n) && (d.style.colorScheme = n);
  }
  function c() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) p(u);
  else try {
    let n = localStorage.getItem(i) || s, y = l && n === "system" ? c() : n;
    p(y);
  } catch (n) {
  }
};
var x = reactExports.createContext(void 0), U = { setTheme: (e) => {
}, themes: [] }, z = () => {
  var e;
  return (e = reactExports.useContext(x)) != null ? e : U;
};
reactExports.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
  let p = JSON.stringify([s, i, a, e, h, l, u, m]).slice(1, -1);
  return reactExports.createElement("script", { ...w, suppressHydrationWarning: true, nonce: typeof window == "undefined" ? d : "", dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` } });
});
const Toaster = ({ ...props }) => {
  const { theme = "system" } = z();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    $e,
    {
      theme,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)"
      },
      ...props
    }
  );
};
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen flex flex-col",
      style: {
        background: "radial-gradient(ellipse 120% 60% at 50% -10%, oklch(0.62 0.20 55 / 0.07) 0%, transparent 60%), radial-gradient(ellipse 80% 40% at 100% 50%, oklch(0.52 0.22 255 / 0.05) 0%, transparent 50%), oklch(0.98 0.01 80)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { richColors: true, position: "top-right" })
      ]
    }
  );
}
export {
  ChevronDown as C,
  Layout as L,
  MapPin as M,
  X,
  testimonials as a,
  Clock as b,
  tours as t
};
