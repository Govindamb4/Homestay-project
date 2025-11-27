// src/data/sampleData.js
// Final version — every record now has an image

export const roles = [
  { 
    id: 1, 
    title: "Admin", 
    description: "Oversees platform operations, manages content, users, and site security.",
    image: "https://source.unsplash.com/400x300/?admin,office"
  },
  { 
    id: 2, 
    title: "Host", 
    description: "Hosts homestays, manages property listings, pricing, and booking details.",
    image: "https://source.unsplash.com/400x300/?host,homestay"
  },
  { 
    id: 3, 
    title: "Tourist", 
    description: "Searches and books stays, leaves reviews, and explores local attractions.",
    image: "https://source.unsplash.com/400x300/?traveller,tourist"
  },
  { 
    id: 4, 
    title: "Guide", 
    description: "Offers local experiences and guided tours to tourists.",
    image: "https://source.unsplash.com/400x300/?tourguide,travel"
  }
];

// ---------------- HOMESTAYS ----------------
export const listings = [
  // Andhra Pradesh
  {
    id: 1,
    title: "Cozy Vijayawada Retreat",
    host: "Local Guide",
    price: 50,
    description: "Near Kanaka Durga Temple. Ideal for families and solo travelers.",
    location: "Vijayawada, Andhra Pradesh",
    image:"https://media1.thrillophilia.com/filestore/b9uj5bqx513bj7wpf4ejhwtu0ymn_1464250009_8.jpg?w=400&dpr=2"
,
    rating: 4.7
  },
  {
    id: 2,
    title: "Krishna River View Stay",
    host: "Local Guide",
    price: 55,
    description: "Beautiful riverside stay with balcony view of the Krishna River.",
    location: "Vijayawada, Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
,
    rating: 4.8
  },
  {
    id: 3,
    title: "Green Valley Homestay",
    host: "Meera Choudhary",
    price: 40,
    description: "Eco-friendly stay near Kondapalli Fort surrounded by greenery.",
    location: "Vijayawada outskirts, Andhra Pradesh",
    image: "https://images.fusionstays.com/files/?url=https://res.cloudinary.com/fusionstays/image/upload/c_fill,e_sharpen:100,q_auto,f_auto,fl_progressive,w_750,h_500/v1726313008/bphep0gx3cw82liyl6ou.jpg",
    rating: 4.6
  },

  // Goa
  {
    id: 4,
    title: "Palolem Beach Cottage",
    host: "Anita Fernandes",
    price: 70,
    description: "Beachfront cottage with sea view and delicious seafood nearby.",
    location: "Palolem, Goa",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9
  },
  {
    id: 5,
    title: "Old Goa Heritage Stay",
    host: "Manuel D’Souza",
    price: 65,
    description: "Portuguese-style villa surrounded by palm trees and serenity.",
    location: "Old Goa",
    image: "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202202252001482705-f561f013-62d5-443d-b56b-c10e5d61228a.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg&downsize=480:336&crop=480:336",
    rating: 4.7
  },

  // Kerala
  {
    id: 6,
    title: "Munnar Tea Garden Stay",
    host: "Leena Mathai",
    price: 75,
    description: "Cottage amidst tea plantations with misty hill views.",
    location: "Munnar, Kerala",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/606610109.jpg?k=f1fe49d7938151f09996fbc3ebb15529679fe9450db019bdf7b10df95412a1d1&o=",
    rating: 4.9
  },
  {
    id: 7,
    title: "Alleppey Backwater Home",
    host: "Ramesh Kumar",
    price: 65,
    description: "Traditional Kerala home on the backwaters with houseboat tours.",
    location: "Alleppey, Kerala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdE2ar2AtnBKtq61rtxQySjxdLhoWfjrGhPw&s",
    rating: 4.8
  },

  // Himachal Pradesh
  {
    id: 8,
    title: "Shimla Valley Cottage",
    host: "Deepak Sharma",
    price: 50,
    description: "Warm wooden cottage with fireplace and mountain views.",
    location: "Shimla, Himachal Pradesh",
    image:"https://cdn.sanity.io/images/ocl5w36p/prod5/73bd2c173a81d073922163fc29c7c458d2b73a28-6022x4458.jpg?w=480&auto=format&dpr=2",
    rating: 4.6
  },
  {
    id: 9,
    title: "Manali Riverside Homestay",
    host: "Priya Mehta",
    price: 55,
    description: "Cozy riverside stay for adventurers and nature lovers.",
    location: "Manali, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf",
    rating: 4.7
  },

  // Rajasthan
  {
    id: 10,
    title: "Jaipur Haveli Experience",
    host: "Rajiv Singh",
    price: 80,
    description: "Stay in a restored haveli with royal Rajasthani décor.",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    rating: 4.9
  },
  {
    id: 11,
    title: "Desert Camp Stay",
    host: "Aarti Rathore",
    price: 60,
    description: "Camel rides and bonfire evenings under the desert sky.",
    location: "Jaisalmer, Rajasthan",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/18/24/6c/16/tent.jpg",
    rating: 4.8
  },

  // Sikkim
  {
    id: 12,
    title: "Gangtok Hillside Homestay",
    host: "Tenzing Bhutia",
    price: 45,
    description: "Simple home with panoramic views of the eastern Himalayas.",
    location: "Gangtok, Sikkim",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/30/fd/4e/ed/caption.jpg",
    rating: 4.6
  }
];

// ---------------- ATTRACTIONS ----------------
export const attractions = [
  // Andhra Pradesh
  {
    id: 1,
    name: "Kanaka Durga Temple",
    description: "Sacred temple atop Indrakeeladri Hill overlooking the Krishna River.",
    location: "Vijayawada",
    image: "https://yatradham.org/media/catalog/product/i/m/img_9988.jpg"
  },
  {
    id: 2,
    name: "Bhavani Island",
    description: "Peaceful island retreat in the Krishna River.",
    location: "Vijayawada",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/amaravati/mmt/activities/m_activities_amaravati_bhavani_island_l_337_507.jpg"
  },
  {
    id: 3,
    name: "Kondapalli Fort",
    description: "Ancient fort with historical sculptures and panoramic views.",
    location: "Kondapalli, Andhra Pradesh",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/kondapalli-fort-guntur-andhra-pradesh-2-attr-hero"
  },

  // Goa
  {
    id: 4,
    name: "Palolem Beach",
    description: "Palm-fringed beach known for kayaking and seafood.",
    location: "South Goa",
    image: "https://i0.wp.com/www.traveljunoon.com/wp-content/uploads/2020/07/pjimage-21.jpg?fit=700%2C415&ssl=1"
  },
  {
    id: 5,
    name: "Basilica of Bom Jesus",
    description: "UNESCO heritage site with baroque architecture.",
    location: "Old Goa",
    image: "https://sc0.blr1.cdn.digitaloceanspaces.com/article/204380-kfksyjemwr-1731573628.jpeg"
  },

  // Kerala
  {
    id: 6,
    name: "Munnar Tea Gardens",
    description: "Endless green hills with tea plantations and misty peaks.",
    location: "Munnar, Kerala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbn1ox0qF0SkL_sY2JiXye7Z2dzM6pJTH8mw&s"
  },
  {
    id: 7,
    name: "Alleppey Backwaters",
    description: "Houseboat cruises through scenic canals and lagoons.",
    location: "Alleppey, Kerala",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/5e/59/d4/alleppey-backwater-tour.jpg?w=800&h=-1&s=1"
  },

  // Himachal Pradesh
  {
    id: 8,
    name: "Rohtang Pass",
    description: "Snowy mountain pass famous for adventure sports.",
    location: "Manali, Himachal Pradesh",
    image: "https://www.tripstorz.com/_astro/snow-in-rohtang-pass.CGkQdILW_Z1Fqupd.jpg"
  },
  {
    id: 9,
    name: "The Ridge",
    description: "Open space in Shimla offering stunning sunset views.",
    location: "Shimla, Himachal Pradesh",
    image: "https://www.hlimg.com/images/things2do/738X538/ridge_1506541903t.jpg"
  },

  // Rajasthan
  {
    id: 10,
    name: "Amber Fort",
    description: "Magnificent fort with intricate architecture.",
    location: "Jaipur, Rajasthan",
    image: "https://media1.thrillophilia.com/filestore/h9oc8fq0cfh9lhja3oomu3kjwphj_1574335340_shutterstock_741766687.jpg"
  },
  {
    id: 11,
    name: "Sam Sand Dunes",
    description: "Golden desert landscape ideal for jeep safaris.",
    location: "Jaisalmer, Rajasthan",
    image: "https://www.exoticluxurycamps.com/img/gallery/main/exotic-luxury-camps-jaisalmer.webp"
  },

  // Sikkim
  {
    id: 12,
    name: "Tsomgo Lake",
    description: "Glacial lake surrounded by snow-capped peaks.",
    location: "Gangtok, Sikkim",
    image: "https://s7ap1.scene7.com/is/image/incredibleindia/tsomgo-lake-gangtok-sikkim-1-attr-hero?qlt=82&ts=1742160335690"
  },
  {
    id: 13,
    name: "Rumtek Monastery",
    description: "Peaceful Buddhist monastery showcasing Tibetan art.",
    location: "Rumtek, Sikkim",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/gangtok/mmt/activities/m_activities-gangtok-rumtek-monastery_l_400_640.jpg"
  }
];

// ---------------- USERS ----------------
export const users = [
  { 
    id: 1, 
    name: "Ravi Kumar", 
    role: "Host", 
    email: "ravi@homestay.com", 
    rating: 4.8,
    image: "https://source.unsplash.com/200x200/?man,portrait"
  },
  { 
    id: 2, 
    name: "Priya Sharma", 
    role: "Tourist", 
    email: "priya@homestay.com", 
    rating: 4.6,
    image: "https://source.unsplash.com/200x200/?woman,portrait"
  },
  { 
    id: 3, 
    name: "Aman Singh", 
    role: "Guide", 
    email: "aman@homestay.com", 
    rating: 4.9,
    image: "https://source.unsplash.com/200x200/?guide,man"
  },
  { 
    id: 4, 
    name: "Kiran Reddy", 
    role: "Admin", 
    email: "kiran@homestay.com", 
    rating: 5.0,
    image: "https://source.unsplash.com/200x200/?admin,office,person"
  }
];
