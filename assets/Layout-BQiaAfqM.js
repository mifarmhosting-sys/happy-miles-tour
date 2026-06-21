import { r as reactExports, j as jsxRuntimeExports, L as Link, f as useRouterState, c as cn, R as React2, d as ReactDOM } from "./index-SaEUJ-ct.js";
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
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$a = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = createLucideIcon("chevron-down", __iconNode$a);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$9 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$9);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$8 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$8);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$7 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$7);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$6 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$6);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = createLucideIcon("menu", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$3);
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
  const hostname = typeof window !== "undefined" ? encodeURIComponent(window.location.hostname) : "";
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3", children: socialLinks.map(({ Icon: Icon2, href, label, gradient }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href,
                  "aria-label": label,
                  className: "h-10 w-10 rounded-xl flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:shadow-lg",
                  style: { background: gradient },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon2, { className: "h-4 w-4" })
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
                    href: "tel:+919831398372",
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
                      "98313-98372"
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
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/40", children: [
                  "© ",
                  year,
                  " The Happy Miles Tourism. All rights reserved."
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-white/40", children: [
                  "Built with love using",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "hover:text-white/80 transition-colors",
                      style: { color: "oklch(0.72 0.20 55)" },
                      children: "caffeine.ai"
                    }
                  )
                ] })
              ] })
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
              href: "tel:+919831398372",
              className: "flex items-center gap-1.5 text-white hover:text-yellow-200 transition-colors font-semibold tracking-wide",
              "data-ocid": "header.phone_link",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3 w-3" }),
                "98313-98372"
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
                      onClick: () => setDropdownOpen((v2) => !v2),
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
                  onClick: () => setMobilePackagesOpen((v2) => !v2),
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
var M$1 = (e, i, s, u, m, a, l, h) => {
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
  return reactExports.createElement("script", { ...w, suppressHydrationWarning: true, nonce: typeof window == "undefined" ? d : "", dangerouslySetInnerHTML: { __html: `(${M$1.toString()})(${p})` } });
});
var jt = (n) => {
  switch (n) {
    case "success":
      return ee;
    case "info":
      return ae;
    case "warning":
      return oe;
    case "error":
      return se;
    default:
      return null;
  }
}, te = Array(12).fill(0), Yt = ({ visible: n, className: e }) => React2.createElement("div", { className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "), "data-visible": n }, React2.createElement("div", { className: "sonner-spinner" }, te.map((t, a) => React2.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` })))), ee = React2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, React2.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), oe = React2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, React2.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), ae = React2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, React2.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), se = React2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, React2.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Ot = React2.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, React2.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), React2.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }));
var Ft = () => {
  let [n, e] = React2.useState(document.hidden);
  return React2.useEffect(() => {
    let t = () => {
      e(document.hidden);
    };
    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t);
  }, []), n;
};
var bt = 1, yt = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    });
    this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    };
    this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    };
    this.create = (e) => {
      var S;
      let { message: t, ...a } = e, u = typeof (e == null ? void 0 : e.id) == "number" || ((S = e.id) == null ? void 0 : S.length) > 0 ? e.id : bt++, f = this.toasts.find((g) => g.id === u), w = e.dismissible === void 0 ? true : e.dismissible;
      return this.dismissedToasts.has(u) && this.dismissedToasts.delete(u), f ? this.toasts = this.toasts.map((g) => g.id === u ? (this.publish({ ...g, ...e, id: u, title: t }), { ...g, ...e, id: u, dismissible: w, title: t }) : g) : this.addToast({ title: t, ...a, dismissible: w, id: u }), u;
    };
    this.dismiss = (e) => (this.dismissedToasts.add(e), e || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: true }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: true })), e);
    this.message = (e, t) => this.create({ ...t, message: e });
    this.error = (e, t) => this.create({ ...t, message: e, type: "error" });
    this.success = (e, t) => this.create({ ...t, type: "success", message: e });
    this.info = (e, t) => this.create({ ...t, type: "info", message: e });
    this.warning = (e, t) => this.create({ ...t, type: "warning", message: e });
    this.loading = (e, t) => this.create({ ...t, type: "loading", message: e });
    this.promise = (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let u = e instanceof Promise ? e : e(), f = a !== void 0, w, S = u.then(async (i) => {
        if (w = ["resolve", i], React2.isValidElement(i)) f = false, this.create({ id: a, type: "default", message: i });
        else if (ie(i) && !i.ok) {
          f = false;
          let T = typeof t.error == "function" ? await t.error(`HTTP error! status: ${i.status}`) : t.error, F = typeof t.description == "function" ? await t.description(`HTTP error! status: ${i.status}`) : t.description;
          this.create({ id: a, type: "error", message: T, description: F });
        } else if (t.success !== void 0) {
          f = false;
          let T = typeof t.success == "function" ? await t.success(i) : t.success, F = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "success", message: T, description: F });
        }
      }).catch(async (i) => {
        if (w = ["reject", i], t.error !== void 0) {
          f = false;
          let D = typeof t.error == "function" ? await t.error(i) : t.error, T = typeof t.description == "function" ? await t.description(i) : t.description;
          this.create({ id: a, type: "error", message: D, description: T });
        }
      }).finally(() => {
        var i;
        f && (this.dismiss(a), a = void 0), (i = t.finally) == null || i.call(t);
      }), g = () => new Promise((i, D) => S.then(() => w[0] === "reject" ? D(w[1]) : i(w[1])).catch(D));
      return typeof a != "string" && typeof a != "number" ? { unwrap: g } : Object.assign(a, { unwrap: g });
    };
    this.custom = (e, t) => {
      let a = (t == null ? void 0 : t.id) || bt++;
      return this.create({ jsx: e(a), id: a, ...t }), a;
    };
    this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id));
    this.subscribers = [], this.toasts = [], this.dismissedToasts = /* @__PURE__ */ new Set();
  }
}, v = new yt(), ne = (n, e) => {
  let t = (e == null ? void 0 : e.id) || bt++;
  return v.addToast({ title: n, ...e, id: t }), t;
}, ie = (n) => n && typeof n == "object" && "ok" in n && typeof n.ok == "boolean" && "status" in n && typeof n.status == "number", le = ne, ce = () => v.toasts, de = () => v.getActiveToasts(), ue = Object.assign(le, { success: v.success, info: v.info, warning: v.warning, error: v.error, custom: v.custom, message: v.message, promise: v.promise, dismiss: v.dismiss, loading: v.loading }, { getHistory: ce, getToasts: de });
function wt(n, { insertAt: e } = {}) {
  if (typeof document == "undefined") return;
  let t = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
  a.type = "text/css", e === "top" && t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(document.createTextNode(n));
}
wt(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function tt(n) {
  return n.label !== void 0;
}
var pe = 3, me = "32px", ge = "16px", Wt = 4e3, he = 356, be = 14, ye = 20, we = 200;
function M(...n) {
  return n.filter(Boolean).join(" ");
}
function xe(n) {
  let [e, t] = n.split("-"), a = [];
  return e && a.push(e), t && a.push(t), a;
}
var ve = (n) => {
  var Dt, Pt, Nt, Bt, Ct, kt, It, Mt, Ht, At, Lt;
  let { invert: e, toast: t, unstyled: a, interacting: u, setHeights: f, visibleToasts: w, heights: S, index: g, toasts: i, expanded: D, removeToast: T, defaultRichColors: F, closeButton: et, style: ut, cancelButtonStyle: ft, actionButtonStyle: l, className: ot = "", descriptionClassName: at = "", duration: X2, position: st, gap: pt, loadingIcon: rt, expandByDefault: B, classNames: s, icons: P, closeButtonAriaLabel: nt = "Close toast", pauseWhenPageIsHidden: it } = n, [Y, C] = React2.useState(null), [lt, J] = React2.useState(null), [W, H] = React2.useState(false), [A, mt] = React2.useState(false), [L, z2] = React2.useState(false), [ct, d] = React2.useState(false), [h, y] = React2.useState(false), [R, j] = React2.useState(0), [p, _] = React2.useState(0), O = React2.useRef(t.duration || X2 || Wt), G = React2.useRef(null), k = React2.useRef(null), Vt = g === 0, Ut = g + 1 <= w, N = t.type, V = t.dismissible !== false, Kt = t.className || "", Xt = t.descriptionClassName || "", dt = React2.useMemo(() => S.findIndex((r) => r.toastId === t.id) || 0, [S, t.id]), Jt = React2.useMemo(() => {
    var r;
    return (r = t.closeButton) != null ? r : et;
  }, [t.closeButton, et]), Tt = React2.useMemo(() => t.duration || X2 || Wt, [t.duration, X2]), gt = React2.useRef(0), U2 = React2.useRef(0), St = React2.useRef(0), K = React2.useRef(null), [Gt, Qt] = st.split("-"), Rt = React2.useMemo(() => S.reduce((r, m, c) => c >= dt ? r : r + m.height, 0), [S, dt]), Et = Ft(), qt = t.invert || e, ht = N === "loading";
  U2.current = React2.useMemo(() => dt * pt + Rt, [dt, Rt]), React2.useEffect(() => {
    O.current = Tt;
  }, [Tt]), React2.useEffect(() => {
    H(true);
  }, []), React2.useEffect(() => {
    let r = k.current;
    if (r) {
      let m = r.getBoundingClientRect().height;
      return _(m), f((c) => [{ toastId: t.id, height: m, position: t.position }, ...c]), () => f((c) => c.filter((b) => b.toastId !== t.id));
    }
  }, [f, t.id]), React2.useLayoutEffect(() => {
    if (!W) return;
    let r = k.current, m = r.style.height;
    r.style.height = "auto";
    let c = r.getBoundingClientRect().height;
    r.style.height = m, _(c), f((b) => b.find((x2) => x2.toastId === t.id) ? b.map((x2) => x2.toastId === t.id ? { ...x2, height: c } : x2) : [{ toastId: t.id, height: c, position: t.position }, ...b]);
  }, [W, t.title, t.description, f, t.id]);
  let $ = React2.useCallback(() => {
    mt(true), j(U2.current), f((r) => r.filter((m) => m.toastId !== t.id)), setTimeout(() => {
      T(t);
    }, we);
  }, [t, T, f, U2]);
  React2.useEffect(() => {
    if (t.promise && N === "loading" || t.duration === 1 / 0 || t.type === "loading") return;
    let r;
    return D || u || it && Et ? (() => {
      if (St.current < gt.current) {
        let b = (/* @__PURE__ */ new Date()).getTime() - gt.current;
        O.current = O.current - b;
      }
      St.current = (/* @__PURE__ */ new Date()).getTime();
    })() : (() => {
      O.current !== 1 / 0 && (gt.current = (/* @__PURE__ */ new Date()).getTime(), r = setTimeout(() => {
        var b;
        (b = t.onAutoClose) == null || b.call(t, t), $();
      }, O.current));
    })(), () => clearTimeout(r);
  }, [D, u, t, N, it, Et, $]), React2.useEffect(() => {
    t.delete && $();
  }, [$, t.delete]);
  function Zt() {
    var r, m, c;
    return P != null && P.loading ? React2.createElement("div", { className: M(s == null ? void 0 : s.loader, (r = t == null ? void 0 : t.classNames) == null ? void 0 : r.loader, "sonner-loader"), "data-visible": N === "loading" }, P.loading) : rt ? React2.createElement("div", { className: M(s == null ? void 0 : s.loader, (m = t == null ? void 0 : t.classNames) == null ? void 0 : m.loader, "sonner-loader"), "data-visible": N === "loading" }, rt) : React2.createElement(Yt, { className: M(s == null ? void 0 : s.loader, (c = t == null ? void 0 : t.classNames) == null ? void 0 : c.loader), visible: N === "loading" });
  }
  return React2.createElement("li", { tabIndex: 0, ref: k, className: M(ot, Kt, s == null ? void 0 : s.toast, (Dt = t == null ? void 0 : t.classNames) == null ? void 0 : Dt.toast, s == null ? void 0 : s.default, s == null ? void 0 : s[N], (Pt = t == null ? void 0 : t.classNames) == null ? void 0 : Pt[N]), "data-sonner-toast": "", "data-rich-colors": (Nt = t.richColors) != null ? Nt : F, "data-styled": !(t.jsx || t.unstyled || a), "data-mounted": W, "data-promise": !!t.promise, "data-swiped": h, "data-removed": A, "data-visible": Ut, "data-y-position": Gt, "data-x-position": Qt, "data-index": g, "data-front": Vt, "data-swiping": L, "data-dismissible": V, "data-type": N, "data-invert": qt, "data-swipe-out": ct, "data-swipe-direction": lt, "data-expanded": !!(D || B && W), style: { "--index": g, "--toasts-before": g, "--z-index": i.length - g, "--offset": `${A ? R : U2.current}px`, "--initial-height": B ? "auto" : `${p}px`, ...ut, ...t.style }, onDragEnd: () => {
    z2(false), C(null), K.current = null;
  }, onPointerDown: (r) => {
    ht || !V || (G.current = /* @__PURE__ */ new Date(), j(U2.current), r.target.setPointerCapture(r.pointerId), r.target.tagName !== "BUTTON" && (z2(true), K.current = { x: r.clientX, y: r.clientY }));
  }, onPointerUp: () => {
    var x2, Q, q, Z;
    if (ct || !V) return;
    K.current = null;
    let r = Number(((x2 = k.current) == null ? void 0 : x2.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0), m = Number(((Q = k.current) == null ? void 0 : Q.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0), c = (/* @__PURE__ */ new Date()).getTime() - ((q = G.current) == null ? void 0 : q.getTime()), b = Y === "x" ? r : m, I = Math.abs(b) / c;
    if (Math.abs(b) >= ye || I > 0.11) {
      j(U2.current), (Z = t.onDismiss) == null || Z.call(t, t), J(Y === "x" ? r > 0 ? "right" : "left" : m > 0 ? "down" : "up"), $(), d(true), y(false);
      return;
    }
    z2(false), C(null);
  }, onPointerMove: (r) => {
    var Q, q, Z, zt;
    if (!K.current || !V || ((Q = window.getSelection()) == null ? void 0 : Q.toString().length) > 0) return;
    let c = r.clientY - K.current.y, b = r.clientX - K.current.x, I = (q = n.swipeDirections) != null ? q : xe(st);
    !Y && (Math.abs(b) > 1 || Math.abs(c) > 1) && C(Math.abs(b) > Math.abs(c) ? "x" : "y");
    let x2 = { x: 0, y: 0 };
    Y === "y" ? (I.includes("top") || I.includes("bottom")) && (I.includes("top") && c < 0 || I.includes("bottom") && c > 0) && (x2.y = c) : Y === "x" && (I.includes("left") || I.includes("right")) && (I.includes("left") && b < 0 || I.includes("right") && b > 0) && (x2.x = b), (Math.abs(x2.x) > 0 || Math.abs(x2.y) > 0) && y(true), (Z = k.current) == null || Z.style.setProperty("--swipe-amount-x", `${x2.x}px`), (zt = k.current) == null || zt.style.setProperty("--swipe-amount-y", `${x2.y}px`);
  } }, Jt && !t.jsx ? React2.createElement("button", { "aria-label": nt, "data-disabled": ht, "data-close-button": true, onClick: ht || !V ? () => {
  } : () => {
    var r;
    $(), (r = t.onDismiss) == null || r.call(t, t);
  }, className: M(s == null ? void 0 : s.closeButton, (Bt = t == null ? void 0 : t.classNames) == null ? void 0 : Bt.closeButton) }, (Ct = P == null ? void 0 : P.close) != null ? Ct : Ot) : null, t.jsx || reactExports.isValidElement(t.title) ? t.jsx ? t.jsx : typeof t.title == "function" ? t.title() : t.title : React2.createElement(React2.Fragment, null, N || t.icon || t.promise ? React2.createElement("div", { "data-icon": "", className: M(s == null ? void 0 : s.icon, (kt = t == null ? void 0 : t.classNames) == null ? void 0 : kt.icon) }, t.promise || t.type === "loading" && !t.icon ? t.icon || Zt() : null, t.type !== "loading" ? t.icon || (P == null ? void 0 : P[N]) || jt(N) : null) : null, React2.createElement("div", { "data-content": "", className: M(s == null ? void 0 : s.content, (It = t == null ? void 0 : t.classNames) == null ? void 0 : It.content) }, React2.createElement("div", { "data-title": "", className: M(s == null ? void 0 : s.title, (Mt = t == null ? void 0 : t.classNames) == null ? void 0 : Mt.title) }, typeof t.title == "function" ? t.title() : t.title), t.description ? React2.createElement("div", { "data-description": "", className: M(at, Xt, s == null ? void 0 : s.description, (Ht = t == null ? void 0 : t.classNames) == null ? void 0 : Ht.description) }, typeof t.description == "function" ? t.description() : t.description) : null), reactExports.isValidElement(t.cancel) ? t.cancel : t.cancel && tt(t.cancel) ? React2.createElement("button", { "data-button": true, "data-cancel": true, style: t.cancelButtonStyle || ft, onClick: (r) => {
    var m, c;
    tt(t.cancel) && V && ((c = (m = t.cancel).onClick) == null || c.call(m, r), $());
  }, className: M(s == null ? void 0 : s.cancelButton, (At = t == null ? void 0 : t.classNames) == null ? void 0 : At.cancelButton) }, t.cancel.label) : null, reactExports.isValidElement(t.action) ? t.action : t.action && tt(t.action) ? React2.createElement("button", { "data-button": true, "data-action": true, style: t.actionButtonStyle || l, onClick: (r) => {
    var m, c;
    tt(t.action) && ((c = (m = t.action).onClick) == null || c.call(m, r), !r.defaultPrevented && $());
  }, className: M(s == null ? void 0 : s.actionButton, (Lt = t == null ? void 0 : t.classNames) == null ? void 0 : Lt.actionButton) }, t.action.label) : null));
};
function _t() {
  if (typeof window == "undefined" || typeof document == "undefined") return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
function Te(n, e) {
  let t = {};
  return [n, e].forEach((a, u) => {
    let f = u === 1, w = f ? "--mobile-offset" : "--offset", S = f ? ge : me;
    function g(i) {
      ["top", "right", "bottom", "left"].forEach((D) => {
        t[`${w}-${D}`] = typeof i == "number" ? `${i}px` : i;
      });
    }
    typeof a == "number" || typeof a == "string" ? g(a) : typeof a == "object" ? ["top", "right", "bottom", "left"].forEach((i) => {
      a[i] === void 0 ? t[`${w}-${i}`] = S : t[`${w}-${i}`] = typeof a[i] == "number" ? `${a[i]}px` : a[i];
    }) : g(S);
  }), t;
}
var $e = reactExports.forwardRef(function(e, t) {
  let { invert: a, position: u = "bottom-right", hotkey: f = ["altKey", "KeyT"], expand: w, closeButton: S, className: g, offset: i, mobileOffset: D, theme: T = "light", richColors: F, duration: et, style: ut, visibleToasts: ft = pe, toastOptions: l, dir: ot = _t(), gap: at = be, loadingIcon: X2, icons: st, containerAriaLabel: pt = "Notifications", pauseWhenPageIsHidden: rt } = e, [B, s] = React2.useState([]), P = React2.useMemo(() => Array.from(new Set([u].concat(B.filter((d) => d.position).map((d) => d.position)))), [B, u]), [nt, it] = React2.useState([]), [Y, C] = React2.useState(false), [lt, J] = React2.useState(false), [W, H] = React2.useState(T !== "system" ? T : typeof window != "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), A = React2.useRef(null), mt = f.join("+").replace(/Key/g, "").replace(/Digit/g, ""), L = React2.useRef(null), z2 = React2.useRef(false), ct = React2.useCallback((d) => {
    s((h) => {
      var y;
      return (y = h.find((R) => R.id === d.id)) != null && y.delete || v.dismiss(d.id), h.filter(({ id: R }) => R !== d.id);
    });
  }, []);
  return React2.useEffect(() => v.subscribe((d) => {
    if (d.dismiss) {
      s((h) => h.map((y) => y.id === d.id ? { ...y, delete: true } : y));
      return;
    }
    setTimeout(() => {
      ReactDOM.flushSync(() => {
        s((h) => {
          let y = h.findIndex((R) => R.id === d.id);
          return y !== -1 ? [...h.slice(0, y), { ...h[y], ...d }, ...h.slice(y + 1)] : [d, ...h];
        });
      });
    });
  }), []), React2.useEffect(() => {
    if (T !== "system") {
      H(T);
      return;
    }
    if (T === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? H("dark") : H("light")), typeof window == "undefined") return;
    let d = window.matchMedia("(prefers-color-scheme: dark)");
    try {
      d.addEventListener("change", ({ matches: h }) => {
        H(h ? "dark" : "light");
      });
    } catch (h) {
      d.addListener(({ matches: y }) => {
        try {
          H(y ? "dark" : "light");
        } catch (R) {
          console.error(R);
        }
      });
    }
  }, [T]), React2.useEffect(() => {
    B.length <= 1 && C(false);
  }, [B]), React2.useEffect(() => {
    let d = (h) => {
      var R, j;
      f.every((p) => h[p] || h.code === p) && (C(true), (R = A.current) == null || R.focus()), h.code === "Escape" && (document.activeElement === A.current || (j = A.current) != null && j.contains(document.activeElement)) && C(false);
    };
    return document.addEventListener("keydown", d), () => document.removeEventListener("keydown", d);
  }, [f]), React2.useEffect(() => {
    if (A.current) return () => {
      L.current && (L.current.focus({ preventScroll: true }), L.current = null, z2.current = false);
    };
  }, [A.current]), React2.createElement("section", { ref: t, "aria-label": `${pt} ${mt}`, tabIndex: -1, "aria-live": "polite", "aria-relevant": "additions text", "aria-atomic": "false", suppressHydrationWarning: true }, P.map((d, h) => {
    var j;
    let [y, R] = d.split("-");
    return B.length ? React2.createElement("ol", { key: d, dir: ot === "auto" ? _t() : ot, tabIndex: -1, ref: A, className: g, "data-sonner-toaster": true, "data-theme": W, "data-y-position": y, "data-lifted": Y && B.length > 1 && !w, "data-x-position": R, style: { "--front-toast-height": `${((j = nt[0]) == null ? void 0 : j.height) || 0}px`, "--width": `${he}px`, "--gap": `${at}px`, ...ut, ...Te(i, D) }, onBlur: (p) => {
      z2.current && !p.currentTarget.contains(p.relatedTarget) && (z2.current = false, L.current && (L.current.focus({ preventScroll: true }), L.current = null));
    }, onFocus: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || z2.current || (z2.current = true, L.current = p.relatedTarget);
    }, onMouseEnter: () => C(true), onMouseMove: () => C(true), onMouseLeave: () => {
      lt || C(false);
    }, onDragEnd: () => C(false), onPointerDown: (p) => {
      p.target instanceof HTMLElement && p.target.dataset.dismissible === "false" || J(true);
    }, onPointerUp: () => J(false) }, B.filter((p) => !p.position && h === 0 || p.position === d).map((p, _) => {
      var O, G;
      return React2.createElement(ve, { key: p.id, icons: st, index: _, toast: p, defaultRichColors: F, duration: (O = l == null ? void 0 : l.duration) != null ? O : et, className: l == null ? void 0 : l.className, descriptionClassName: l == null ? void 0 : l.descriptionClassName, invert: a, visibleToasts: ft, closeButton: (G = l == null ? void 0 : l.closeButton) != null ? G : S, interacting: lt, position: d, style: l == null ? void 0 : l.style, unstyled: l == null ? void 0 : l.unstyled, classNames: l == null ? void 0 : l.classNames, cancelButtonStyle: l == null ? void 0 : l.cancelButtonStyle, actionButtonStyle: l == null ? void 0 : l.actionButtonStyle, removeToast: ct, toasts: B.filter((k) => k.position == p.position), heights: nt.filter((k) => k.position == p.position), setHeights: it, expandByDefault: w, gap: at, loadingIcon: X2, expanded: Y, pauseWhenPageIsHidden: rt, swipeDirections: e.swipeDirections });
    })) : null;
  }));
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
  Phone as P,
  X,
  testimonials as a,
  Clock as b,
  createLucideIcon as c,
  tours as t,
  ue as u
};
