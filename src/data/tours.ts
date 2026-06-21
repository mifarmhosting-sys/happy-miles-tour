export interface TourPackage {
  id: string;
  name: string;
  duration: string;
  destinations: string[];
  price: number;
  description: string;
  image: string;
  category: string;
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  highlights: string[];
}

export const tours: TourPackage[] = [
  {
    id: "himachal-hills",
    name: "Himachal Hills Explorer",
    duration: "7 Nights / 8 Days",
    destinations: ["Shimla", "Kullu", "Manali", "Rohtang Pass"],
    price: 18500,
    description:
      "Journey through the breathtaking valleys and snow-capped peaks of Himachal Pradesh. Experience the thrill of Rohtang Pass, the scenic Kullu Valley, and the vibrant town of Manali.",
    image: "/assets/generated/tour-himachal.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Rohtang Pass Snow Experience",
      "Kullu Valley River Rafting",
      "Hadimba Temple Visit",
      "Solang Valley Adventure",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        description:
          "Arrive at Shimla, check in to hotel. Evening stroll on The Mall Road and Ridge. Overnight stay.",
      },
      {
        day: 2,
        title: "Shimla Sightseeing",
        description:
          "Visit Jakhu Temple, Christ Church, Viceregal Lodge, and Indian Institute of Advanced Studies. Evening at leisure.",
      },
      {
        day: 3,
        title: "Shimla to Manali",
        description:
          "Drive to Manali through scenic Kullu Valley. Stop at Kullu for shopping and views. Check in at Manali hotel.",
      },
      {
        day: 4,
        title: "Rohtang Pass Excursion",
        description:
          "Full day excursion to Rohtang Pass (subject to weather). Snow activities and stunning panoramic mountain views.",
      },
      {
        day: 5,
        title: "Manali Local Sightseeing",
        description:
          "Visit Hadimba Devi Temple, Manu Temple, Tibetan Monastery, and Van Vihar. Evening at Mall Road Manali.",
      },
      {
        day: 6,
        title: "Solang Valley",
        description:
          "Visit Solang Valley for adventure activities — cable car, zorbing, and paragliding. Leisure evening.",
      },
      {
        day: 7,
        title: "Kullu to Chandigarh",
        description:
          "Drive to Chandigarh. En route visit Pandoh Dam and Hanogi Mata Temple. Check in at Chandigarh.",
      },
      {
        day: 8,
        title: "Departure",
        description:
          "After breakfast, transfer to Chandigarh airport/railway station for onward journey. Tour ends.",
      },
    ],
    inclusions: [
      "Accommodation on twin sharing basis",
      "Daily breakfast and dinner",
      "All transfers by private vehicle",
      "Rohtang Pass permit charges",
      "Driver allowance and fuel charges",
      "All applicable taxes",
    ],
    exclusions: [
      "Airfare / train fare",
      "Personal expenses",
      "Adventure activity charges",
      "Meals not mentioned",
      "Travel insurance",
    ],
  },
  {
    id: "shimla-manali",
    name: "Shimla Manali Getaway",
    duration: "5 Nights / 6 Days",
    destinations: ["Shimla", "Kufri", "Manali"],
    price: 13500,
    description:
      "A classic Himachal journey combining the colonial charm of Shimla and the adventure hub of Manali. Perfect for couples and families seeking mountain bliss.",
    image: "/assets/generated/tour-shimla.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Kufri Snow Activities",
      "Shimla Mall Road Evening",
      "Manali Adventure Sports",
      "Apple Orchard Visits",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        description:
          "Arrive at Shimla, transfer to hotel. Visit The Ridge and Mall Road. Overnight at hotel.",
      },
      {
        day: 2,
        title: "Shimla – Kufri Excursion",
        description:
          "Day excursion to Kufri and Chail. Enjoy snow activities at Kufri, visit Chail Wildlife Sanctuary.",
      },
      {
        day: 3,
        title: "Shimla to Manali",
        description:
          "Scenic drive to Manali via Kullu Valley. Enjoy river Beas views and fruit orchards en route.",
      },
      {
        day: 4,
        title: "Rohtang / Solang Valley",
        description:
          "Excursion to Rohtang Pass or Solang Valley depending on season. Full day snow and adventure activities.",
      },
      {
        day: 5,
        title: "Manali Sightseeing",
        description:
          "Visit Hadimba Temple, Tibetan Monastery, local market, and Van Vihar National Park.",
      },
      {
        day: 6,
        title: "Departure from Manali",
        description:
          "After breakfast, transfer to Chandigarh airport/railway station. Tour concludes with fond memories.",
      },
    ],
    inclusions: [
      "Hotel accommodation",
      "Daily breakfast and dinner",
      "All transfers by AC vehicle",
      "Sightseeing as per itinerary",
      "Driver charges and tolls",
    ],
    exclusions: [
      "Flight / train tickets",
      "Personal expenses",
      "Camera fees at monuments",
      "Adventure activities",
    ],
  },
  {
    id: "uttarakhand-divine",
    name: "Uttarakhand Divine Journey",
    duration: "6 Nights / 7 Days",
    destinations: ["Haridwar", "Rishikesh", "Mussoorie", "Dehradun"],
    price: 15000,
    description:
      "Immerse yourself in the spiritual and natural beauty of Uttarakhand. From the holy ghats of Haridwar to the yoga capital of the world Rishikesh and the Queen of Hills — Mussoorie.",
    image: "/assets/generated/tour-uttarakhand.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Ganga Aarti at Haridwar",
      "Yoga at Rishikesh Ashrams",
      "White Water Rafting",
      "Mussoorie Mall Road",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Haridwar",
        description:
          "Arrive at Haridwar. Transfer to hotel. Evening Ganga Aarti at Har Ki Pauri — a spiritual spectacle.",
      },
      {
        day: 2,
        title: "Haridwar Sightseeing",
        description:
          "Visit Mansa Devi Temple, Chandi Devi Temple, Sapt Sarovar, and Daksha Mahadev Temple.",
      },
      {
        day: 3,
        title: "Haridwar to Rishikesh",
        description:
          "Drive to Rishikesh. Visit Laxman Jhula, Ram Jhula, Beatles Ashram, and attend evening Ganga Aarti.",
      },
      {
        day: 4,
        title: "Rishikesh Adventure",
        description:
          "Optional river rafting on Ganges. Visit Triveni Ghat, yoga session at ashram, Neelkanth Mahadev Temple.",
      },
      {
        day: 5,
        title: "Rishikesh to Mussoorie",
        description:
          "Drive to Mussoorie, Queen of Hills. Check in and evening stroll on Mall Road and Camel's Back Road.",
      },
      {
        day: 6,
        title: "Mussoorie Sightseeing",
        description:
          "Visit Kempty Falls, Lal Tibba, Company Garden, and Gun Hill Point via cable car.",
      },
      {
        day: 7,
        title: "Departure from Dehradun",
        description:
          "Drive to Dehradun for train/flight. Visit Robber's Cave and Clock Tower before departure.",
      },
    ],
    inclusions: [
      "Hotel and guesthouse accommodation",
      "Breakfast and dinner daily",
      "All transfers and sightseeing",
      "Ganga Aarti participation",
      "Local guide assistance",
    ],
    exclusions: [
      "Air/Train tickets",
      "Adventure activity charges",
      "Personal expenses",
      "Temple entry fees",
    ],
  },
  {
    id: "chardham-yatra",
    name: "Chardham Yatra Package",
    duration: "11 Nights / 12 Days",
    destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    price: 28000,
    description:
      "Embark on the most sacred pilgrimage in Hinduism — visit all four holy dhams: Yamunotri, Gangotri, Kedarnath, and Badrinath. A soul-transforming spiritual experience in the Himalayas.",
    image: "/assets/generated/tour-chardham.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Yamunotri Temple Darshan",
      "Gangotri Sacred Dip",
      "Kedarnath Jyotirlinga",
      "Badrinath Vishnu Temple",
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar Arrival",
        description:
          "Arrive Haridwar, hotel check-in, evening Ganga Aarti at Har Ki Pauri.",
      },
      {
        day: 2,
        title: "Haridwar to Barkot",
        description:
          "Drive via Mussoorie, Chamba to Barkot — base for Yamunotri.",
      },
      {
        day: 3,
        title: "Yamunotri Darshan",
        description:
          "Trek or horse ride to Yamunotri Temple, take holy dip, return to Barkot.",
      },
      {
        day: 4,
        title: "Barkot to Uttarkashi",
        description:
          "Drive to Uttarkashi via Dharasu. Visit Vishwanath Temple in Uttarkashi.",
      },
      {
        day: 5,
        title: "Gangotri Darshan",
        description:
          "Drive to Gangotri, darshan at Gangotri Temple, holy bath in Bhagirathi river. Return to Uttarkashi.",
      },
      {
        day: 6,
        title: "Uttarkashi to Guptkashi",
        description:
          "Drive to Guptkashi via Tehri. Visit Ardhnareshwar Temple.",
      },
      {
        day: 7,
        title: "Kedarnath Darshan",
        description:
          "Drive to Sonprayag then helicopter or trek to Kedarnath. Darshan at Jyotirlinga temple.",
      },
      {
        day: 8,
        title: "Kedarnath to Badrinath",
        description:
          "Return from Kedarnath. Drive via Chopta to Badrinath, check-in at hotel.",
      },
      {
        day: 9,
        title: "Badrinath Darshan",
        description:
          "Morning darshan at Badrinath Temple, visit Mana Village — last Indian village, Vyas Gufa.",
      },
      {
        day: 10,
        title: "Badrinath to Rudraprayag",
        description:
          "Drive back to Rudraprayag via Chamoli. Visit Rudranath Temple.",
      },
      {
        day: 11,
        title: "Rudraprayag to Rishikesh",
        description:
          "Drive to Rishikesh via Devprayag. Evening Ganga Aarti at Triveni Ghat.",
      },
      {
        day: 12,
        title: "Departure from Haridwar",
        description:
          "Morning drive to Haridwar. Transfer to railway station/airport. Tour concludes.",
      },
    ],
    inclusions: [
      "Accommodation at all dhams",
      "Breakfast and dinner",
      "All transfers",
      "Priest assistance for darshan",
      "Kedarnath helicopter booking (subject to availability)",
    ],
    exclusions: [
      "Personal pooja expenses",
      "Ponies/Palanquin charges",
      "Airfare/train tickets",
      "Meals not mentioned",
    ],
  },
  {
    id: "taj-mahal-agra",
    name: "Taj Mahal & Golden Triangle",
    duration: "4 Nights / 5 Days",
    destinations: ["Delhi", "Agra", "Mathura", "Vrindavan"],
    price: 12500,
    description:
      "Witness the eternal symbol of love — the Taj Mahal — and explore the spiritual heritage of Mathura and Vrindavan. A perfect blend of history, culture, and devotion.",
    image: "/assets/generated/tour-tajmahal.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Taj Mahal Sunrise Visit",
      "Agra Fort Exploration",
      "Mathura Krishna Janmabhoomi",
      "Vrindavan Temples",
    ],
    itinerary: [
      {
        day: 1,
        title: "Delhi Arrival",
        description:
          "Arrive Delhi, check in to hotel. Evening visit India Gate and Connaught Place.",
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description:
          "Visit Qutub Minar, Humayun's Tomb, Lotus Temple, Jama Masjid, and Red Fort.",
      },
      {
        day: 3,
        title: "Delhi to Agra",
        description:
          "Drive to Agra via Yamuna Expressway. Afternoon visit Agra Fort. Evening view Taj Mahal from Mehtab Bagh.",
      },
      {
        day: 4,
        title: "Taj Mahal & Mathura",
        description:
          "Early morning Taj Mahal visit at sunrise. Drive to Mathura — visit Krishna Janmabhoomi Temple and Vrindavan.",
      },
      {
        day: 5,
        title: "Departure from Delhi",
        description:
          "Drive back to Delhi. Transfer to airport/railway station. Tour concludes.",
      },
    ],
    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "All AC transfers",
      "Entry tickets for monuments",
      "Tour guide",
    ],
    exclusions: [
      "Airfare",
      "Lunches and dinners",
      "Camera fees inside monuments",
      "Personal expenses",
    ],
  },
  {
    id: "vaishno-devi",
    name: "Vaishno Devi Pilgrimage",
    duration: "3 Nights / 4 Days",
    destinations: ["Jammu", "Katra", "Vaishno Devi", "Patnitop"],
    price: 9500,
    description:
      "Seek the divine blessings of Mata Vaishno Devi in the holy Trikuta Mountains. A spiritually uplifting pilgrimage combined with the scenic beauty of Patnitop hill station.",
    image: "/assets/generated/tour-vaishnodevi.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Vaishno Devi Darshan",
      "Bhawan Cave Temple",
      "Patnitop Hill Station",
      "Baba Dhansar Waterfall",
    ],
    itinerary: [
      {
        day: 1,
        title: "Jammu Arrival",
        description:
          "Arrive Jammu, transfer to hotel. Visit Raghunath Temple and Ranbireshwar Temple. Evening Aarti.",
      },
      {
        day: 2,
        title: "Katra & Vaishno Devi Trek",
        description:
          "Drive to Katra (45 km). Register for yatra pass. Begin trek to Vaishno Devi Bhawan — 14 km. Darshan at cave shrine.",
      },
      {
        day: 3,
        title: "Patnitop Excursion",
        description:
          "Return trek from Bhawan. Drive to Patnitop hill station. Enjoy meadows, views, and local cuisine.",
      },
      {
        day: 4,
        title: "Departure from Jammu",
        description:
          "Return to Jammu. Visit Bahu Fort and Peer Baba Dargah. Transfer to Jammu airport/station.",
      },
    ],
    inclusions: [
      "Accommodation at Katra and Jammu",
      "Breakfast and dinner",
      "All transfers",
      "Yatra registration assistance",
      "Guide charges",
    ],
    exclusions: [
      "Helicopter charges",
      "Personal expenses",
      "Lunches",
      "Train/air tickets",
    ],
  },
  {
    id: "jammu-kashmir",
    name: "Jammu Kashmir Paradise",
    duration: "6 Nights / 7 Days",
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
    price: 22000,
    description:
      "Experience the paradise on earth — Kashmir! Cruise on the enchanting Dal Lake in a shikara, ski in Gulmarg, and marvel at the meadows of Pahalgam and Sonamarg.",
    image: "/assets/generated/tour-jammu.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Dal Lake Shikara Ride",
      "Gulmarg Gondola Cable Car",
      "Pahalgam Betaab Valley",
      "Sonamarg Glacier",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Srinagar",
        description:
          "Arrive Srinagar airport, check in to houseboat on Dal Lake. Evening shikara ride on Dal Lake.",
      },
      {
        day: 2,
        title: "Srinagar Sightseeing",
        description:
          "Visit Mughal Gardens — Nishat Bagh, Shalimar Bagh, Chashme Shahi. Visit Hazratbal Mosque and old city.",
      },
      {
        day: 3,
        title: "Gulmarg Day Trip",
        description:
          "Drive to Gulmarg, ride Gondola (phase 1 & 2). Snow activities and skiing. Return to Srinagar.",
      },
      {
        day: 4,
        title: "Pahalgam Excursion",
        description:
          "Day trip to Pahalgam valley. Visit Betaab Valley, Aru Valley, and Chandanwari. Horse riding.",
      },
      {
        day: 5,
        title: "Sonamarg Day Trip",
        description:
          "Drive to Sonamarg — Meadow of Gold. Visit Thajiwas Glacier, pony rides, and stunning scenery.",
      },
      {
        day: 6,
        title: "Local Srinagar",
        description:
          "Visit Shankaracharya Temple, Local Handicraft Centre. Shopping for Pashmina and Kashmiri crafts.",
      },
      {
        day: 7,
        title: "Departure from Srinagar",
        description:
          "After breakfast, transfer to Srinagar airport. Tour concludes with memories of paradise.",
      },
    ],
    inclusions: [
      "Houseboat / hotel accommodation",
      "Breakfast and dinner",
      "All transfers",
      "Shikara ride included",
      "Local guide",
    ],
    exclusions: [
      "Gondola cable car charges",
      "Pony/sledge charges",
      "Airfare",
      "Personal expenses",
    ],
  },
  {
    id: "goa-beaches",
    name: "Goa Beach Holiday",
    duration: "4 Nights / 5 Days",
    destinations: ["North Goa", "South Goa", "Old Goa", "Panjim"],
    price: 11000,
    description:
      "Soak in the sun on Goa's golden beaches, explore Portuguese heritage churches, and enjoy the vibrant nightlife. Perfect for family holidays and group getaways.",
    image: "/assets/generated/tour-goa.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Calangute Beach Party",
      "Dudhsagar Waterfall Trip",
      "Old Goa Churches",
      "Sunset at Vagator",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Goa",
        description:
          "Arrive Goa, transfer to hotel. Evening at Calangute or Baga beach. Enjoy sunset and seafood dinner.",
      },
      {
        day: 2,
        title: "North Goa Beaches",
        description:
          "Visit Anjuna Flea Market, Vagator Beach, Chapora Fort, and Morjim Beach. Evening at casino.",
      },
      {
        day: 3,
        title: "Old Goa & Panjim",
        description:
          "Visit Basilica of Bom Jesus, Se Cathedral, Church of St. Francis, and Goa State Museum in Panjim.",
      },
      {
        day: 4,
        title: "South Goa & Dudhsagar",
        description:
          "Drive to Dudhsagar Waterfall. Afternoon at Colva and Benaulim beaches. Spice plantation tour.",
      },
      {
        day: 5,
        title: "Departure from Goa",
        description:
          "Morning at leisure. Transfer to Goa airport for onward journey. Tour ends.",
      },
    ],
    inclusions: [
      "Beach resort accommodation",
      "Daily breakfast",
      "Airport/station transfers",
      "Dudhsagar jeep safari",
      "Tour guide",
    ],
    exclusions: [
      "Casino entry",
      "Water sports",
      "Lunches and dinners",
      "Airfare",
      "Personal expenses",
    ],
  },
  {
    id: "kerala-backwaters",
    name: "Kerala God's Own Country",
    duration: "5 Nights / 6 Days",
    destinations: ["Kochi", "Munnar", "Alleppey", "Kovalam"],
    price: 16500,
    description:
      "Discover Kerala's magical backwaters, misty tea gardens of Munnar, and pristine beaches of Kovalam. Experience Ayurvedic wellness and traditional Kathakali performances.",
    image: "/assets/generated/tour-kerala.dim_600x400.jpg",
    category: "indian",
    highlights: [
      "Alleppey Houseboat Stay",
      "Munnar Tea Estates",
      "Kathakali Performance",
      "Kovalam Beach",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive Kochi",
        description:
          "Arrive Cochin, transfer to hotel. Visit Fort Kochi, Chinese Fishing Nets, Mattancherry Palace.",
      },
      {
        day: 2,
        title: "Kochi to Munnar",
        description:
          "Drive to Munnar through scenic ghats. Visit Cheeyappara Waterfalls, Valara Waterfalls, and Spice Gardens.",
      },
      {
        day: 3,
        title: "Munnar Sightseeing",
        description:
          "Visit Eravikulam National Park, Mattupetty Dam, Echo Point, and vast tea gardens. Tea factory visit.",
      },
      {
        day: 4,
        title: "Munnar to Alleppey",
        description:
          "Drive to Alleppey. Board a traditional houseboat for an overnight backwater cruise. Sunset on backwaters.",
      },
      {
        day: 5,
        title: "Alleppey to Kovalam",
        description:
          "Disembark houseboat. Drive to Kovalam beach. Evening at Lighthouse Beach, Ayurvedic spa session.",
      },
      {
        day: 6,
        title: "Departure from Trivandrum",
        description:
          "Drive to Trivandrum airport. Visit Padmanabhaswamy Temple en route. Tour concludes.",
      },
    ],
    inclusions: [
      "Hotel & houseboat accommodation",
      "All meals on houseboat",
      "Breakfast at hotels",
      "All AC transfers",
      "Kathakali show",
    ],
    exclusions: [
      "Airfare",
      "Ayurvedic treatments",
      "Personal expenses",
      "Optional activities",
    ],
  },
];

export const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Delhi",
    tour: "Chardham Yatra",
    rating: 5,
    text: "An absolutely divine experience! Happy Miles took care of everything — from hotel bookings to the helicopter ride at Kedarnath. The team was always available and supportive. Highly recommend!",
    avatar: "RS",
  },
  {
    name: "Priya & Vikram Nair",
    location: "Bangalore",
    tour: "Kerala Backwaters",
    rating: 5,
    text: "Our honeymoon was made perfect by Happy Miles! The houseboat experience in Alleppey was breathtaking. Every detail was arranged beautifully. We'll definitely book with them again.",
    avatar: "PV",
  },
  {
    name: "Amit Gupta",
    location: "Mumbai",
    tour: "Himachal Hills Explorer",
    rating: 5,
    text: "Best family tour we ever had! Kids loved the snow at Rohtang Pass. Everything from transport to hotels was top class. The driver was very knowledgeable and friendly. 10/10!",
    avatar: "AG",
  },
  {
    name: "Sunita Mehta",
    location: "Pune",
    tour: "Vaishno Devi Pilgrimage",
    rating: 5,
    text: "A spiritually fulfilling journey. Happy Miles arranged everything seamlessly, including the yatra registration. The trekking was supported beautifully. I felt Mata's blessings throughout.",
    avatar: "SM",
  },
  {
    name: "Karan & Divya Singh",
    location: "Hyderabad",
    tour: "Goa Beach Holiday",
    rating: 5,
    text: "Fantastic Goa trip with Happy Miles! The beach resort was stunning, the Dudhsagar waterfall trip was incredible. Perfect balance of relaxation and adventure. Great value for money!",
    avatar: "KD",
  },
  {
    name: "Dr. Mohan Krishnan",
    location: "Chennai",
    tour: "Kashmir Paradise",
    rating: 5,
    text: "Kashmir truly lived up to its reputation as paradise! The Dal Lake houseboat was an experience of a lifetime. Happy Miles' local guides were exceptional. We felt safe and pampered throughout.",
    avatar: "MK",
  },
];
