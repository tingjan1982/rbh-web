import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const navItems = [
  ['Home', '/'],
  ['Dining', '/dining'],
  ['Businesses', '/businesses'],
  ['Leasing', '/leasing'],
  ['Contact Us', '/#contact'],
]

const experiences = [
  {
    id: 'dining',
    title: 'Dining',
    image: '/assets/dining.svg',
    color: '#ffbd26',
    text: 'Waterfront restaurants and casual places to meet beside the marina.',
  },
  {
    id: 'businesses',
    title: 'Businesses',
    image: '/assets/businesses.svg',
    color: '#f58029',
    text: 'Local services and professional operators in the heart of Cleveland.',
  },
  {
    id: 'event',
    title: 'Events',
    image: '/assets/event.svg',
    color: '#175c8a',
    text: 'Community events, activations, and synergy around Raby Bay Harbour and Cleveland.',
  },
  {
    id: 'markets',
    title: 'Markets',
    image: '/assets/markets.svg',
    color: '#038f99',
    text: 'Twilight makers markets, waterside browsing, and community events.',
  },
]

const contacts = [
  {
    title: 'Centre Management',
    address: 'Suite 20, Level 1, 152-166 Shore St W. Cleveland QLD 4163',
    hours: 'Mon-Fri: from 9am - 4pm',
    email: 'payable@rabybayharbour.com',
    phone: '+61 7 3050 3068',
  },
  {
    title: 'Raby Bay Marina',
    address: '10-14 Masthead Drive, Cleveland, QLD 4163',
    hours: 'Mon-Fri: from 8.30am-4.30pm, Sat-Sun: from 8.30am-4pm',
    name: 'Marina Office',
    phone: '+61 7 3821 4144',
  },
]

const restaurants = [
  { name: 'The Bayside Asian House', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2018/10/baysideasianlogo.jpg', hours: ['Mon-Tue: Closed', 'Wed-Fri: 5pm - 9pm', 'Sat-Sun: 11am - 2pm, 5pm - 9pm'], phone: '(07) 3488 0103', href: 'https://rabybayharbour.com.au/the-bayside-asian-house/' },
  { name: "Chop 'n Chill", logo: 'https://rabybayharbour.com.au/wp-content/uploads/2023/12/chopchilllogo1.jpg', hours: ['Mon-Thu: 8am - 8:30pm', 'Fri: 8am - 9:30pm', 'Sat-Sun: 7am - 9:30pm'], phone: '(07) 3829 0267', href: 'https://rabybayharbour.com.au/chop-n-chill/' },
  { name: 'Cold Rock Ice Creamery', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2018/10/coldrocklogo.jpg', hours: ['Mon-Thu: 12pm - 9pm', 'Fri: 12pm - 10pm', 'Sat: 11am - 10pm', 'Sun: 11am - 9pm'], phone: '(07) 3821 0069', href: 'https://rabybayharbour.com.au/cold-rock-ice-creamery/' },
  { name: 'Crusoe Cafe', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2018/10/crusoelogo.jpg', hours: ['Mon-Fri: 6:30am - 1:45pm', 'Sat-Sun: 6:30am - 12pm'], phone: '(07) 3286 7757', href: 'https://rabybayharbour.com.au/crusoe-cafe/' },
  { name: 'Fiction Bar & Restaurant', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2018/10/fictionlogo.jpg', hours: ['Mon-Thu, Sun: 11:30am - 8:30pm', 'Fri-Sat: 11:30am - 11:30pm'], phone: '(07) 3488 2888', href: 'https://rabybayharbour.com.au/fiction/' },
  { name: "Hog's Breath Cafe", logo: 'https://rabybayharbour.com.au/wp-content/uploads/2022/01/hogslogo2.jpg', hours: ['Mon-Fri: 11:30am - 9pm', 'Sat-Sun: 11am - 9pm'], phone: '(07) 3286 9022', href: 'https://rabybayharbour.com.au/hogs/' },
  { name: 'K Soul BBQ', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2023/12/kbbqlogo.jpg', hours: ['Sun-Thurs: 11:30am - 3pm, 5:30pm - 9:30pm', 'Fri-Sat: 11:30am - 3pm, 5:30pm - 10pm'], phone: '(07) 3286 1949', href: 'https://rabybayharbour.com.au/k-soul-bbq/' },
  { name: 'Mamma Mia Trattoria Pizzeria', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2018/10/mammamialogo.jpg', hours: ['Mon-Tue: 5pm - 9pm', 'Wed-Thu: 11am - 2:30pm, 4:30pm - 9pm', 'Fri-Sat: 11am - 2:30pm, 4:30pm - 9:30pm', 'Sun: 11am - 3pm, 4:30pm - 9pm'], phone: '(07) 3488 0330', href: 'https://rabybayharbour.com.au/mamma-mia/' },
  { name: 'The Pursuit of Hoppiness', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2025/10/pofh3.jpg', hours: ['Mon-Tues: Closed', 'Wed-Fri: 11:30am - Late', 'Sat-Sun: 11am - Late'], phone: '07 3496 0849', href: 'https://rabybayharbour.com.au/the-pursuit-of-hoppiness/' },
  { name: 'Samson Fish Seafood', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2018/10/samsonlogo.jpg', hours: ['Sun-Thu: 11am - 8pm', 'Fri-Sat: 11am - 9pm'], phone: '07 3488 2088', href: 'https://rabybayharbour.com.au/samson-fish-seafood/' },
  { name: 'Sushi Lovers', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2018/10/sushilovers.jpg', hours: ['11am - 3pm, 5pm - 9pm, 7 Days'], phone: '07 3821 6186', href: 'https://rabybayharbour.com.au/sushi-lovers/' },
  { name: 'Teppanyaki Bar', logo: 'https://rabybayharbour.com.au/wp-content/uploads/2018/10/teppanyakilogo.jpg', hours: ['Mon: Closed', 'Tue-Thu: 5:30pm - 8:30pm', 'Fri: 5:30pm - 10pm', 'Sat: 11:30am - 2pm, 5:30pm - 10pm', 'Sun: 11:30am - 2pm, 5:30pm - 8:30pm'], phone: '07 3488 0768', href: 'https://rabybayharbour.com.au/teppanyaki-bar/' },
]

const restaurantDetails = {
  'The Bayside Asian House': {
    description: 'Authentic Asian flavours, special menu dishes, and waterfront views in the heart of Raby Bay Harbour.',
    hours: ['Mon-Tue: Closed', 'Wed-Fri: 5pm - 9pm', 'Sat-Sun: 11am - 2pm, 5pm - 9pm'],
    contacts: [
      { label: 'Book a table', value: '0413 471 188', href: 'tel:0413471188' },
      { value: '(07) 3488 0103', href: 'tel:0734880103' },
    ],
    address: 'Shop 4, 152-156 Shore Street West, Cleveland QLD 4163',
    links: [{ label: 'Facebook', href: 'https://www.facebook.com/The-Bayside-Asian-House-195681894607594/' }],
  },
  "Chop 'n Chill": {
    description: 'East-meets-West dining with South East Asian street-style food, smoked-meat flavours, breakfast, lunch, dinner, cocktails, and inclusive vegan, vegetarian, and gluten-free options.',
    hours: ['Mon-Thu: 8am - 8:30pm', 'Fri: 8am - 9:30pm', 'Sat-Sun: 7am - 9:30pm'],
    contacts: [
      { value: '(07) 3829 0267', href: 'tel:0738290267' },
      { value: 'richo.rabybay@chopnchill.com.au', href: 'mailto:richo.rabybay@chopnchill.com.au' },
    ],
    address: '25B/152 Shore St W, Cleveland QLD 4163',
    links: [
      { label: 'Website', href: 'https://rabybay.chopnchill.com.au/' },
      { label: 'Instagram', href: 'https://www.instagram.com/chopnchillrabybay/' },
    ],
  },
  'Cold Rock Ice Creamery': {
    description: 'A playful ice cream stop where guests choose premium ice cream, gelato, or sorbet and mix in sweets, shakes, cakes, and take-home treats.',
    hours: ['Mon-Thu: 12pm - 9pm', 'Fri: 12pm - 10pm', 'Sat: 11am - 10pm', 'Sun: 11am - 9pm'],
    contacts: [{ value: '(07) 3821 0069', href: 'tel:0738210069' }],
    address: 'Shop 7, 152-156 Shore Street West, Cleveland QLD 4163',
    links: [
      { label: 'Website', href: 'https://coldrock.com.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/ColdRockCleveland/' },
      { label: 'Zomato', href: 'https://www.zomato.com/brisbane/cold-rock-ice-creamery-cleveland' },
    ],
  },
  'Crusoe Cafe': {
    description: 'A relaxed cafe serving freshly made breakfasts, lunches, gourmet cakes, sweets, and muffins beside the harbour.',
    hours: ['Mon-Fri: 6:30am - 1:45pm', 'Sat-Sun: 6:30am - 12pm'],
    contacts: [{ value: '(07) 3286 7757', href: 'tel:0732867757' }],
    address: 'Shop 12, 152-156 Shore Street West, Cleveland QLD 4163',
    links: [
      { label: 'Website', href: 'https://crusoecafe.com.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/Crusoe-CAFE-627617070742433/' },
      { label: 'Zomato', href: 'https://www.zomato.com/brisbane/crusoe-cafe-cleveland/' },
    ],
  },
  'Fiction Bar & Restaurant': {
    description: 'A waterfront bar and restaurant with seasonal gastrobar dishes, drinks, weekend lunches, relaxed dinners, and function space.',
    hours: ['Mon-Thu, Sun: 11:30am - 8:30pm', 'Fri-Sat: 11:30am - 11:30pm'],
    contacts: [
      { value: '(07) 3488 2888', href: 'tel:0734882888' },
      { value: 'info@fictionbar.com.au', href: 'mailto:info@fictionbar.com.au' },
    ],
    address: 'Shop 9-10, 152-156 Shore Street West, Cleveland QLD 4163',
    links: [
      { label: 'Website', href: 'https://fictionbar.com.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/fictionbarrabybay/' },
      { label: 'Instagram', href: 'https://www.instagram.com/explore/locations/237661182/' },
      { label: 'Zomato', href: 'https://www.zomato.com/brisbane/fiction-bar-restaurant-cleveland' },
    ],
  },
  "Hog's Breath Cafe": {
    description: 'A relaxed steakhouse overlooking the marina, with outdoor dining, a family-friendly atmosphere, big desserts, and a fully licensed bar.',
    hours: ['Mon-Fri: 11:30am - 9pm', 'Sat-Sun: 11am - 9pm'],
    contacts: [
      { value: '(07) 3286 9022', href: 'tel:0732869022' },
      { value: 'cleveland@hogsbreath.com.au', href: 'mailto:cleveland@hogsbreath.com.au' },
    ],
    address: '152-156 Shore Street West, Cleveland QLD 4163',
    links: [
      { label: 'Website', href: 'https://www.hogsbreath.com.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/hogsbreathcleveland/' },
      { label: 'Zomato', href: 'https://www.zomato.com/brisbane/hogs-australias-steakhouse-cleveland' },
    ],
  },
  'K Soul BBQ': {
    description: 'Korean barbecue and fried chicken with table grills, premium marinated meats, traditional dishes, and a communal dining feel.',
    hours: ['Sun-Thurs: 11:30am - 3pm, 5:30pm - 9:30pm', 'Fri-Sat: 11:30am - 3pm, 5:30pm - 10pm'],
    contacts: [
      { value: '(07) 3286 1949', href: 'tel:0732861949' },
      { value: 'ksoulbbq@gmail.com', href: 'mailto:ksoulbbq@gmail.com' },
    ],
    address: 'Shop 5/152 Shore Street W, Cleveland QLD 4163',
    links: [{ label: 'Facebook', href: 'https://www.facebook.com/p/K-Soul-BBQ-100095567228142/' }],
  },
  'Mamma Mia Trattoria Pizzeria': {
    description: 'A family-run Italian restaurant serving authentic Northern and Southern cuisine in a warm setting for casual meals and celebrations.',
    hours: ['Mon-Tue: 5pm - 9pm', 'Wed-Thu: 11am - 2:30pm, 4:30pm - 9pm', 'Fri-Sat: 11am - 2:30pm, 4:30pm - 9:30pm', 'Sun: 11am - 3pm, 4:30pm - 9pm'],
    contacts: [
      { value: '(07) 3488 0330', href: 'tel:0734880330' },
      { value: 'info@mammamiarabybay.com.au', href: 'mailto:info@mammamiarabybay.com.au' },
    ],
    address: 'Shop 10, 152-156 Shore Street West, Cleveland QLD 4163',
    links: [
      { label: 'Website', href: 'https://www.mammamiarabybay.com.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/Mamma-mia-Trattoria-Pizzeria-125490010894193/' },
      { label: 'Zomato', href: 'https://www.zomato.com/brisbane/mama-mias-pizzeria-cleveland/' },
    ],
  },
  'The Pursuit of Hoppiness': {
    description: 'A craft beer-focused restaurant and bar with rotating taps, relaxed food, and an easygoing place to catch up with friends.',
    hours: ['Mon-Tues: Closed', 'Wed-Fri: 11:30am - Late', 'Sat-Sun: 11am - Late'],
    contacts: [
      { value: '07 3496 0849', href: 'tel:0734960849' },
      { value: 'Cleveland@thepursuitofhoppiness.com.au', href: 'mailto:Cleveland@thepursuitofhoppiness.com.au' },
    ],
    address: '152-156 Shore Street West, Cleveland QLD 4163',
    links: [
      { label: 'Website', href: 'https://thepursuitofhoppiness.com.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/people/The-Pursuit-Of-Hoppiness-Food-Liquor/61577008732438/' },
      { label: 'Instagram', href: 'https://www.instagram.com/_thepursuitofhoppiness_/' },
    ],
  },
  'Samson Fish Seafood': {
    description: 'A family seafood restaurant and takeaway with covered seating, harbour views, fresh Australian produce, and classic hot and cold seafood options.',
    hours: ['Sun-Thu: 11am - 8pm', 'Fri-Sat: 11am - 9pm'],
    contacts: [{ value: '07 3488 2088', href: 'tel:0734882088' }],
    address: '152-156 Shore Street West, Cleveland QLD 4163',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/Samson-Fish-Seafood-155237257848250/' },
      { label: 'Zomato', href: 'https://www.zomato.com/brisbane/samson-fish-seafood-cleveland' },
    ],
  },
  'Sushi Lovers': {
    description: 'A Japanese restaurant and sushi bar serving freshly prepared sushi and Japanese favourites in Cleveland.',
    hours: ['11am - 3pm, 5pm - 9pm, 7 Days'],
    contacts: [{ value: '07 3821 6186', href: 'tel:0738216186' }],
    address: 'Shop 13, 152-156 Shore Street West, Cleveland QLD 4163',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/SushiloversClevelandRabyBay/' },
      { label: 'Zomato', href: 'https://www.zomato.com/brisbane/sushi-lovers-cleveland' },
    ],
  },
  'Teppanyaki Bar': {
    description: 'A fully licensed Japanese teppanyaki restaurant where food is cooked on the iron griddle in front of guests.',
    hours: ['Mon: Closed', 'Tue-Thu: 5:30pm - 8:30pm', 'Fri: 5:30pm - 10pm', 'Sat: 11:30am - 2pm, 5:30pm - 10pm', 'Sun: 11:30am - 2pm, 5:30pm - 8:30pm'],
    contacts: [{ value: '07 3488 0768', href: 'tel:0734880768' }],
    address: 'Shop 14, 152-156 Shore Street West, Cleveland QLD 4163',
    links: [
      { label: 'Facebook', href: 'https://www.facebook.com/teppanyakibarcleveland/' },
      { label: 'Zomato', href: 'https://www.zomato.com/brisbane/teppanyaki-bar-cleveland/' },
    ],
  },
}

const restaurantImages = {
  'The Bayside Asian House': [
    '/assets/restaurants/bayside-asian-house-1.jpg',
    '/assets/restaurants/bayside-asian-house-2.jpg',
    '/assets/restaurants/bayside-asian-house-3.jpg',
  ],
  "Chop 'n Chill": ['/assets/restaurants/chop-n-chill-1.jpeg'],
  'Cold Rock Ice Creamery': [
    '/assets/restaurants/cold-rock-ice-creamery-1.jpg',
    '/assets/restaurants/cold-rock-ice-creamery-2.jpg',
    '/assets/restaurants/cold-rock-ice-creamery-3.jpg',
  ],
  'Crusoe Cafe': [
    '/assets/restaurants/crusoe-cafe-1.jpg',
    '/assets/restaurants/crusoe-cafe-2.jpg',
    '/assets/restaurants/crusoe-cafe-3.jpg',
  ],
  'Fiction Bar & Restaurant': [
    '/assets/restaurants/fiction-1.jpg',
    '/assets/restaurants/fiction-2.jpg',
    '/assets/restaurants/fiction-3.jpg',
  ],
  "Hog's Breath Cafe": [
    '/assets/restaurants/hogs-breath-cafe-1.jpg',
    '/assets/restaurants/hogs-breath-cafe-2.jpg',
    '/assets/restaurants/hogs-breath-cafe-3.jpg',
  ],
  'K Soul BBQ': ['/assets/restaurants/k-soul-bbq-1.jpg'],
  'Mamma Mia Trattoria Pizzeria': [
    '/assets/restaurants/mamma-mia-1.jpg',
    '/assets/restaurants/mamma-mia-2.jpg',
    '/assets/restaurants/mamma-mia-3.jpg',
  ],
  'The Pursuit of Hoppiness': [
    '/assets/restaurants/pursuit-of-hoppiness-1.jpg',
    '/assets/restaurants/pursuit-of-hoppiness-2.jpg',
    '/assets/restaurants/pursuit-of-hoppiness-3.jpg',
  ],
  'Samson Fish Seafood': [
    '/assets/restaurants/samson-fish-seafood-1.jpg',
    '/assets/restaurants/samson-fish-seafood-2.jpg',
    '/assets/restaurants/samson-fish-seafood-3.jpg',
  ],
  'Sushi Lovers': [
    '/assets/restaurants/sushi-lovers-1.jpg',
    '/assets/restaurants/sushi-lovers-2.jpg',
    '/assets/restaurants/sushi-lovers-3.jpg',
  ],
  'Teppanyaki Bar': [
    '/assets/restaurants/teppanyaki-bar-1.jpg',
    '/assets/restaurants/teppanyaki-bar-2.jpg',
    '/assets/restaurants/teppanyaki-bar-3.jpg',
  ],
}

const hiddenRestaurantLinks = {
  'The Bayside Asian House': ['Facebook'],
  'Fiction Bar & Restaurant': ['Facebook'],
  'The Pursuit of Hoppiness': ['Facebook'],
}

const businesses = [
  {
    name: 'AFT Projects',
    logo: '/assets/businesses/aft-projects-logo.jpg',
    images: [
      '/assets/businesses/aft-projects-1.jpg',
      '/assets/businesses/aft-projects-2.jpg',
      '/assets/businesses/aft-projects-3.jpg',
    ],
    description: 'A Redlands-born property company delivering high-end residential projects across Redland City and Southeast Queensland.',
    hours: ['Mon-Fri: 9am - 5pm', 'Sat-Sun: Closed'],
    contacts: [
      { value: '(07) 3286 5177', href: 'tel:0732865177' },
      { value: 'nyanda@javica.com.au', href: 'mailto:nyanda@javica.com.au' },
    ],
    links: [{ label: 'Website', href: 'https://aftprojects.com.au/' }],
    href: 'https://rabybayharbour.com.au/aft-projects/',
  },
  {
    name: 'Aurora Realty Bayside',
    logo: '/assets/businesses/aurora-realty-logo.jpg',
    images: [
      '/assets/businesses/aurora-realty-1.jpg',
      '/assets/businesses/aurora-realty-2.jpg',
      '/assets/businesses/aurora-realty-3.jpg',
    ],
    description: 'A property management team helping owners, developers, and investors maximise residential rental property value.',
    hours: ['8:30am - 5pm'],
    contacts: [{ value: '07 3286 3660', href: 'tel:0732863660' }],
    links: [{ label: 'Website', href: 'https://www.aurorarealty.com.au/' }],
    href: 'https://rabybayharbour.com.au/aurora-realty-bayside/',
  },
  {
    name: 'Blue Harbour Financial Partners',
    logo: '/assets/businesses/blue-harbour-logo.jpg',
    images: [
      '/assets/businesses/blue-harbour-1.jpeg',
      '/assets/businesses/blue-harbour-2.jpeg',
      '/assets/businesses/blue-harbour-3.jpeg',
    ],
    description: 'Financial planning support for life’s big moments, from super and savings through to investment and retirement.',
    hours: ['Mon-Fri: 8:30am - 5pm'],
    contacts: [
      { value: '07 3821 1161', href: 'tel:0738211161' },
      { value: 'brisbane.bayside@bridges.com.au', href: 'mailto:brisbane.bayside@bridges.com.au' },
    ],
    links: [
      { label: 'Website', href: 'https://blueharbour.com.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/BlueHarbourFinancialPartners/' },
    ],
    href: 'https://rabybayharbour.com.au/blue-harbour-financial-partners/',
  },
  {
    name: 'E23 Hair',
    logo: '/assets/businesses/e23-hair-logo.jpg',
    images: ['/assets/businesses/e23-hair-1.jpg'],
    description: 'A luxury hair studio focused on bespoke colour, precision cutting, premium extensions, and a refined salon experience.',
    hours: ['Appointment only'],
    contacts: [
      { value: '0481 481 675', href: 'tel:0481481675' },
      { value: 'E23hair@icloud.com', href: 'mailto:E23hair@icloud.com' },
    ],
    links: [
      { label: 'Book online', href: 'https://bookings.gettimely.com/E23hair/bb/book' },
      { label: 'Instagram', href: 'https://www.instagram.com/e23hair/' },
      { label: 'Facebook', href: 'https://www.facebook.com/charleyelizabethhair/' },
    ],
    href: 'https://rabybayharbour.com.au/e23-hair/',
  },
  {
    name: 'Harcourts Property Centre Cleveland',
    logo: '/assets/businesses/harcourts-logo.jpg',
    images: [
      '/assets/businesses/harcourts-1.png',
      '/assets/businesses/harcourts-2.png',
      '/assets/businesses/harcourts-3.png',
    ],
    description: 'A full-service real estate agency supporting sales across Cleveland, Raby Bay, Thornlands, Victoria Point, and the wider Bayside.',
    hours: ['Mon-Fri: 9am - 5pm', 'Sat-Sun: Closed'],
    contacts: [{ value: '07 3397 4280', href: 'tel:0733974280' }],
    links: [
      { label: 'Website', href: 'https://www.propertycentre.au/office/cleveland/' },
      { label: 'Facebook', href: 'https://www.facebook.com/harcourtspropertycentre' },
    ],
    href: 'https://rabybayharbour.com.au/harcourts-property-centre-cleveland',
  },
  {
    name: 'LJ Hooker Property Centre',
    logo: '/assets/businesses/lj-hooker-logo.jpg',
    images: [],
    description: 'A large local real estate office helping families across sales and property management, with a strong record of industry recognition.',
    hours: ['8:30am - 5pm'],
    contacts: [{ value: '07 3286 2500', href: 'tel:0732862500' }],
    links: [{ label: 'Website', href: 'https://propertycentre.ljhooker.com.au/' }],
    href: 'https://rabybayharbour.com.au/lj-hooker-property-centre/',
  },
  {
    name: 'SDA Services',
    logo: '/assets/businesses/sda-services-logo.png',
    images: [
      '/assets/businesses/sda-services-1.jpg',
      '/assets/businesses/sda-services-2.jpg',
      '/assets/businesses/sda-services-3.jpg',
    ],
    description: 'Specialist Disability Accommodation consultants helping people navigate NDIS and SDA eligibility, reporting, and approval pathways.',
    hours: ['Mon-Fri: 9am - 4pm'],
    contacts: [
      { value: '1300 001 003', href: 'tel:1300001003' },
      { value: 'info@sdaservices.com.au', href: 'mailto:info@sdaservices.com.au' },
    ],
    links: [
      { label: 'Website', href: 'https://www.sdaservices.com.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/sdaservices/' },
    ],
    href: 'https://rabybayharbour.com.au/sda-services/',
  },
  {
    name: 'Star Community Services',
    logo: '/assets/businesses/star-community-logo.jpg',
    images: [
      '/assets/businesses/star-community-1.jpg',
      '/assets/businesses/star-community-2.jpg',
      '/assets/businesses/star-community-3.jpg',
    ],
    description: 'An award-winning not-for-profit providing community transport, aged care, NDIS, and disability support services.',
    hours: ['Mon-Fri: 8:30am - 4:15pm', 'Sat-Sun: Closed'],
    contacts: [{ value: '07 3821 6699', href: 'tel:0738216699' }],
    links: [
      { label: 'Website', href: 'https://www.starcommunityservices.org.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/starcommunityservices/' },
    ],
    href: 'https://rabybayharbour.com.au/star-community-services',
  },
  {
    name: 'Straddievarious Gallery',
    logo: '/assets/businesses/straddievarious-logo.jpg',
    images: [
      '/assets/businesses/straddievarious-1.jpg',
      '/assets/businesses/straddievarious-2.jpg',
      '/assets/businesses/straddievarious-3.jpg',
    ],
    description: 'A gallery showcasing Redlands local artists and artisans, with artisan collections and beautiful handmade pieces.',
    hours: ['Mon: Closed', 'Tue-Thu: 10am - 4pm', 'Fri: 10am - 7pm', 'Sat-Sun: 10am - 4pm'],
    contacts: [
      { value: '0412 747 716', href: 'tel:0412747716' },
      { value: 'debmcc6@outlook.com', href: 'mailto:debmcc6@outlook.com' },
    ],
    links: [
      { label: 'Website', href: 'https://straddievarious.com.au/' },
      { label: 'Facebook', href: 'https://www.facebook.com/straddievarious/' },
    ],
    href: 'https://rabybayharbour.com.au/straddievarious-gallery',
  },
]

function LeasingIcon({ type }) {
  return (
    <span className="leasing-tile-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        {type === 'permanent' && (
          <>
            <path d="M4 10h16" />
            <path d="M6 10v9h12v-9" />
            <path d="M8 19v-5h4v5" />
            <path d="M5 10l2-5h10l2 5" />
            <path d="M9 5v5" />
            <path d="M15 5v5" />
          </>
        )}
        {type === 'experience' && (
          <>
            <path d="M6 20h12" />
            <path d="M7 20v-8h10v8" />
            <path d="M9 12V8a3 3 0 0 1 6 0v4" />
            <path d="M5 5l1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1z" />
            <path d="M18 7l.7-1.5L19.5 7l1.5.8-1.5.7-.8 1.5-.7-1.5-1.5-.7L18 7z" />
          </>
        )}
        {type === 'harbour' && (
          <>
            <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11z" />
            <path d="M9 10.5c1.1-.8 2-.8 3 0s1.9.8 3 0" />
            <path d="M9 13.5c1.1-.8 2-.8 3 0s1.9.8 3 0" />
          </>
        )}
      </svg>
    </span>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [locationState, setLocationState] = useState(() => ({
    hash: window.location.hash,
    path: window.location.pathname,
  }))

  useEffect(() => {
    const updateLocation = () => {
      setLocationState({
        hash: window.location.hash,
        path: window.location.pathname,
      })
      setIsMenuOpen(false)
    }

    window.addEventListener('hashchange', updateLocation)
    window.addEventListener('popstate', updateLocation)

    return () => {
      window.removeEventListener('hashchange', updateLocation)
      window.removeEventListener('popstate', updateLocation)
    }
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Raby Bay Harbour home">
        <img src="/assets/raby-bay-logo.png" alt="Raby Bay Harbour" />
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span className="menu-toggle-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>Menu</span>
      </button>
      <nav id="primary-navigation" className={isMenuOpen ? 'primary-nav is-open' : 'primary-nav'} aria-label="Primary navigation">
        {navItems.map(([label, href]) => {
          const [hrefPathValue, hrefHash] = href.split('#')
          const hrefPath = hrefPathValue || '/'
          const isActive = hrefHash
            ? locationState.path === hrefPath && locationState.hash === `#${hrefHash}`
            : locationState.path === hrefPath && (hrefPath !== '/' || locationState.hash === '')

          return (
            <a
              key={label}
              href={href}
              className={isActive ? 'is-active' : undefined}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <span>© 2026 Raby Bay Harbour. All rights reserved.</span>
    </footer>
  )
}

function ImageLightbox({ gallery, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!gallery) return
    setActiveIndex(gallery.index || 0)
  }, [gallery])

  useEffect(() => {
    if (!gallery) return undefined

    const imageCount = gallery.images.length
    const previousOverflow = document.body.style.overflow
    const goToPrevious = () => setActiveIndex((current) => (current - 1 + imageCount) % imageCount)
    const goToNext = () => setActiveIndex((current) => (current + 1) % imageCount)
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (imageCount > 1 && event.key === 'ArrowLeft') goToPrevious()
      if (imageCount > 1 && event.key === 'ArrowRight') goToNext()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [gallery, onClose])

  if (!gallery || gallery.images.length === 0) return null

  const activeImage = gallery.images[activeIndex] || gallery.images[0]
  const hasMultipleImages = gallery.images.length > 1
  const goToPrevious = () => setActiveIndex((current) => (current - 1 + gallery.images.length) % gallery.images.length)
  const goToNext = () => setActiveIndex((current) => (current + 1) % gallery.images.length)

  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${gallery.title} photos`} onClick={onClose}>
      <div className="image-lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" type="button" onClick={onClose}>
          Close
        </button>
        <div className="lightbox-stage">
          <img className="lightbox-image" src={activeImage} alt={`${gallery.title} photo ${activeIndex + 1}`} />
          {hasMultipleImages && (
            <>
              <button className="lightbox-nav lightbox-previous" type="button" onClick={goToPrevious}>
                Previous
              </button>
              <button className="lightbox-nav lightbox-next" type="button" onClick={goToNext}>
                Next
              </button>
            </>
          )}
        </div>
        <div className="lightbox-caption">
          <h3>{gallery.title}</h3>
          <span>
            {activeIndex + 1} of {gallery.images.length}
          </span>
        </div>
        {hasMultipleImages && (
          <div className="lightbox-thumbs" aria-label={`${gallery.title} photo list`}>
            {gallery.images.map((image, index) => (
              <button
                className={index === activeIndex ? 'lightbox-thumb is-active' : 'lightbox-thumb'}
                type="button"
                key={image}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show photo ${index + 1}`}
                aria-current={index === activeIndex}
              >
                <img src={image} alt="" aria-hidden="true" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function RestaurantMedia({ restaurant, onOpen }) {
  const images = restaurantImages[restaurant.name] || []
  const isStatic = images.length <= 1

  return (
    <button
      type="button"
      className={isStatic ? 'restaurant-media is-static' : 'restaurant-media'}
      style={{ '--image-count': images.length || 1 }}
      onClick={onOpen}
      aria-label={`Open ${restaurant.name} photo gallery`}
    >
      {images.map((image, index) => (
        <img
          className="restaurant-photo"
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          style={{ '--slide-index': index }}
        />
      ))}
      <span className="restaurant-logo-badge">
        <img src={restaurant.logo} alt={restaurant.name + ' logo'} />
      </span>
    </button>
  )
}

function BusinessMedia({ business, onOpen }) {
  const images = business.images.length > 0 ? business.images : [business.logo]
  const isStatic = images.length <= 1

  return (
    <button
      type="button"
      className={isStatic ? 'restaurant-media is-static' : 'restaurant-media'}
      style={{ '--image-count': images.length || 1 }}
      onClick={onOpen}
      aria-label={`Open ${business.name} photo gallery`}
    >
      {images.map((image, index) => (
        <img
          className={business.images.length > 0 ? 'restaurant-photo' : 'restaurant-photo is-logo-photo'}
          key={image}
          src={image}
          alt=""
          aria-hidden="true"
          style={{ '--slide-index': index }}
        />
      ))}
      {business.images.length > 0 && (
        <span className="restaurant-logo-badge">
          <img src={business.logo} alt={business.name + ' logo'} />
        </span>
      )}
    </button>
  )
}

function getListingSlug(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function DiningQuickDirectory() {
  return (
    <section className="quick-directory" aria-labelledby="quick-dining-title">
      <div className="quick-directory-heading">
        <p className="eyebrow">At a glance</p>
        <h2 id="quick-dining-title">Restaurants around the harbour</h2>
      </div>
      <div className="quick-directory-grid">
        {restaurants.map((restaurant) => (
          <a className="quick-directory-item" href={`#restaurant-${getListingSlug(restaurant.name)}`} key={restaurant.name}>
            <span>{restaurant.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function BusinessesQuickDirectory() {
  return (
    <section className="quick-directory" aria-labelledby="quick-businesses-title">
      <div className="quick-directory-heading">
        <p className="eyebrow">At a glance</p>
        <h2 id="quick-businesses-title">Businesses around the harbour</h2>
      </div>
      <div className="quick-directory-grid">
        {businesses.map((business) => (
          <a className="quick-directory-item" href={`#business-${getListingSlug(business.name)}`} key={business.name}>
            <span>{business.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

function DiningDirectory() {
  const [gallery, setGallery] = useState(null)

  return (
    <>
      <section className="dining-directory" id="dining-directory" aria-label="Dining directory">
        <div className="restaurant-grid">
          {restaurants.map((restaurant) => {
            const details = restaurantDetails[restaurant.name]
            const hours = details?.hours || restaurant.hours
            const contacts = details?.contacts || [{ value: restaurant.phone, href: `tel:${restaurant.phone.replace(/\D/g, '')}` }]
            const hiddenLinks = hiddenRestaurantLinks[restaurant.name] || []
            const links = details?.links?.filter((link) => link.label !== 'Zomato' && !hiddenLinks.includes(link.label)) || []
            const images = restaurantImages[restaurant.name] || []

            return (
              <article className="restaurant-card" id={`restaurant-${getListingSlug(restaurant.name)}`} key={restaurant.name}>
                <RestaurantMedia restaurant={restaurant} onOpen={() => setGallery({ title: restaurant.name, images, index: 0 })} />
                <div className="restaurant-details">
                  <h3>{restaurant.name}</h3>
                  {details?.description && <p className="restaurant-description">{details.description}</p>}
                  <div className="restaurant-info">
                    <div className="info-group hours-list" aria-label={restaurant.name + ' trading hours'}>
                      <span className="info-label">Open hours</span>
                      {hours.map((hoursLine) => (
                        <p key={hoursLine}>{hoursLine}</p>
                      ))}
                    </div>
                    <div className="info-group">
                      <span className="info-label">Contact</span>
                      {contacts.map((contact) => (
                        <a href={contact.href} key={contact.value}>
                          {contact.label ? `${contact.label}: ` : ''}
                          {contact.value}
                        </a>
                      ))}
                    </div>
                    {links.length > 0 && (
                      <div className="info-group">
                        <span className="info-label">Links</span>
                        <div className="restaurant-link-list">
                          {links.map((link) => (
                            <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <a className="restaurant-detail-link" href={restaurant.href} target="_blank" rel="noreferrer">
                    View details
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <ImageLightbox gallery={gallery} onClose={() => setGallery(null)} />
    </>
  )
}

function BusinessesDirectory() {
  const [gallery, setGallery] = useState(null)

  return (
    <>
      <section className="dining-directory" id="businesses-directory" aria-label="Businesses directory">
        <div className="restaurant-grid">
          {businesses.map((business) => {
            const images = business.images.length > 0 ? business.images : [business.logo]

            return (
              <article className="restaurant-card" id={`business-${getListingSlug(business.name)}`} key={business.name}>
                <BusinessMedia business={business} onOpen={() => setGallery({ title: business.name, images, index: 0 })} />
                <div className="restaurant-details">
                  <h3>{business.name}</h3>
                  <p className="restaurant-description">{business.description}</p>
                  <div className="restaurant-info">
                    <div className="info-group hours-list" aria-label={business.name + ' open hours'}>
                      <span className="info-label">Open hours</span>
                      {business.hours.map((hoursLine) => (
                        <p key={hoursLine}>{hoursLine}</p>
                      ))}
                    </div>
                    <div className="info-group">
                      <span className="info-label">Contact</span>
                      {business.contacts.map((contact) => (
                        <a href={contact.href} key={contact.value}>
                          {contact.value}
                        </a>
                      ))}
                    </div>
                    {business.links.length > 0 && (
                      <div className="info-group">
                        <span className="info-label">Links</span>
                        <div className="restaurant-link-list">
                          {business.links.map((link) => (
                            <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <a className="restaurant-detail-link" href={business.href} target="_blank" rel="noreferrer">
                    View details
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </section>
      <ImageLightbox gallery={gallery} onClose={() => setGallery(null)} />
    </>
  )
}

function HomePage() {
  useEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) return

      window.requestAnimationFrame(() => {
        document.querySelector(window.location.hash)?.scrollIntoView()
      })
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return (
    <>
      <Header />

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <img src="/assets/raby-bay-harbour-aerial.jpg" alt="" className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p>Welcome to</p>
            <h1 id="hero-title">Raby Bay Harbour</h1>
            <a className="hero-action" href="#explore">
              Explore the harbour
            </a>
          </div>
        </section>

        <section className="experience-grid" id="explore" aria-label="Raby Bay Harbour sections">
          {experiences.map((item) => (
            <a
              className="experience-tile"
              id={item.id}
              href={
                item.id === 'dining'
                  ? '/dining'
                  : item.id === 'businesses'
                    ? '/businesses'
                  : item.id === 'markets'
                    ? 'https://www.twilightmakersmarket.com.au/'
                    : `#${item.id}-detail`
              }
              key={item.title}
              style={{ '--tile-color': item.color }}
            >
              <span className="tile-image-wrap">
                <img src={item.image} alt="" />
              </span>
              <span>
                <strong>{item.title}</strong>
                <small>{item.text}</small>
              </span>
            </a>
          ))}
        </section>

        <section className="waterfront-band" id="event-detail">
          <div className="band-copy">
            <h2 className="event-title">Events</h2>
            <h3 className="event-feature-title">Redlands Coast AdventureFest brings outdoor energy to the harbour.</h3>
            <p>
              Redlands Coast AdventureFest runs from 15 to 24 May 2026, with the
              free AdventureFest Fun Day recently hosted at Raby Bay Harbour Park on
              Saturday 16 May 2026. Expect outdoor adventure, community activities,
              local food experiences, markets, and family-friendly entertainment.
            </p>
            <a
              className="section-link"
              href="https://www.redland.qld.gov.au/News-events-and-have-your-say/Council-events/Redlands-Coast-AdventureFest"
              target="_blank"
              rel="noreferrer"
            >
              View AdventureFest details
            </a>
          </div>
        </section>

        <section className="contact" aria-labelledby="contact-title">
          <div className="contact-copy" id="contact">
            <h2 id="contact-title">Contact Us</h2>
          </div>
          <div className="contact-layout">
            <div className="map-card" aria-label="Raby Bay Harbour map">
              <img className="contact-location-image" src="/assets/footer-harbour.jpg" alt="Raby Bay Harbour waterfront" />
              <div className="map-card-copy">
                <span>Location</span>
                <h3>Raby Bay Harbour</h3>
                <p>152-166 Shore Street West, Cleveland QLD 4163</p>
              </div>
              <a className="map-link" href="https://maps.app.goo.gl/cwHxwPJYWCazEmPN9" target="_blank" rel="noreferrer">
                View Map
              </a>
            </div>
            <div className="contact-panel">
              <div className="contact-grid">
                {contacts.map((contact) => (
                  <article key={contact.title} className="contact-card">
                    <h3>{contact.title}</h3>
                    <div className="contact-card-details">
                      <p>
                        <span>Address</span>
                        {contact.address}
                      </p>
                      <p>
                        <span>Hours</span>
                        {contact.hours}
                      </p>
                      {contact.name && (
                        <p>
                          <span>Contact</span>
                          {contact.name}
                        </p>
                      )}
                      {contact.email && (
                        <p>
                          <span>Email</span>
                          <a href={`mailto:${contact.email}`}>{contact.email}</a>
                        </p>
                      )}
                      <p>
                        <span>Phone</span>
                        <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

function DiningPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <section className="dining-showcase" aria-labelledby="page-title">
          <img src="/assets/raby-bay-harbour-aerial.jpg" alt="" className="dining-showcase-image" />
          <div className="dining-showcase-overlay" />
          <div className="dining-showcase-content">
            <p className="eyebrow">Dining Directory</p>
            <h1 id="page-title">Dining at Raby Bay Harbour</h1>
            <p>
              Browse waterfront restaurants, cafes, bars, and takeaway spots with
              hours, contacts, and useful links close at hand.
            </p>
          </div>
        </section>
        <DiningQuickDirectory />
        <DiningDirectory />
      </main>
      <Footer />
    </>
  )
}

function BusinessesPage() {
  return (
    <>
      <Header />
      <main className="page-main">
        <section className="dining-showcase" aria-labelledby="page-title">
          <img src="/assets/raby-bay-harbour-aerial.jpg" alt="" className="dining-showcase-image" />
          <div className="dining-showcase-overlay" />
          <div className="dining-showcase-content">
            <p className="eyebrow">Business Directory</p>
            <h1 id="page-title">Businesses at Raby Bay Harbour</h1>
            <p>
              Meet the harbour precinct’s property, finance, care, creative, and
              professional services with contacts and useful links close at hand.
            </p>
          </div>
        </section>
        <BusinessesQuickDirectory />
        <BusinessesDirectory />
      </main>
      <Footer />
    </>
  )
}

function LeasingPage() {
  const leasingBenefits = [
    'Build visibility in a proven harbour-side destination.',
    'Reach diners, marina visitors, local residents, and Cleveland workers.',
    'Test a new concept, product, or activation before committing long term.',
    'Position your brand near established food, service, and waterfront operators.',
  ]

  return (
    <>
      <Header />
      <main className="page-main">
        <section className="dining-showcase leasing-showcase" aria-labelledby="page-title">
          <img src="/assets/raby-bay-harbour-aerial.jpg" alt="" className="dining-showcase-image" />
          <div className="dining-showcase-overlay" />
          <div className="dining-showcase-content">
            <p className="eyebrow">Leasing</p>
            <h1 id="page-title">Grow your business at Raby Bay Harbour</h1>
            <p>
              Explore permanent and short-term leasing opportunities in a waterfront
              precinct shaped by dining, services, marina life, and local community.
            </p>
          </div>
        </section>

        <section className="leasing-intro" aria-label="Leasing overview">
          <div className="leasing-copy">
            <p className="eyebrow">Leasing</p>
            <h2>A visible Cleveland location with a strong local rhythm.</h2>
            <p>
              Raby Bay Harbour brings together restaurants, professional services,
              marina visitors, and nearby residential catchments in one walkable
              waterside destination.
            </p>
            <p>
              For permanent retailers, service providers, and hospitality operators,
              the precinct offers an established address with repeat visitation and
              clear lifestyle appeal.
            </p>
          </div>
          <aside className="leasing-contact-card">
            <span className="info-label">Leasing enquiries</span>
            <h3>Start a conversation</h3>
            <p>Contact Kent Beal to discuss current or upcoming opportunities.</p>
            <p className="leasing-contact-name">Kent Beal</p>
            <a href="mailto:payable@rabybayharbour.com?subject=Raby%20Bay%20Harbour%20leasing%20enquiry">
              payable@rabybayharbour.com
            </a>
            <a href="tel:+61408456391">0408 456 391</a>
          </aside>
        </section>

        <section className="leasing-summary" aria-labelledby="leasing-summary-title">
          <div className="leasing-summary-heading">
            <p className="eyebrow">Opportunities</p>
            <h2 id="leasing-summary-title">Choose the leasing path that fits your next move.</h2>
          </div>
          <div className="leasing-summary-layout">
            <div className="leasing-option-grid">
              <article>
                <LeasingIcon type="permanent" />
                <span className="info-label">Permanent Leasing</span>
                <h3>For established operators ready to join the precinct.</h3>
                <p>
                  Permanent leasing suits businesses seeking a recognisable harbour
                  address and the opportunity to become part of the daily pattern of
                  Raby Bay and Cleveland.
                </p>
              </article>
              <article>
                <LeasingIcon type="experience" />
                <span className="info-label">Retail Experience Leasing</span>
                <h3>For pop-ups, activations, launches, and short-term ideas.</h3>
                <p>
                  Short-term leasing can help brands test new markets, build awareness,
                  promote seasonal offers, and create energy around the harbour without
                  the same commitment as a permanent tenancy.
                </p>
              </article>
            </div>
            <aside className="leasing-benefit-panel" aria-label="Why Raby Bay Harbour">
              <LeasingIcon type="harbour" />
              <span className="info-label">Why Raby Bay Harbour</span>
              <h3>A setting made for destination-led businesses.</h3>
              <div className="leasing-benefit-grid">
                {leasingBenefits.map((benefit) => (
                  <article key={benefit}>
                    <span />
                    <p>{benefit}</p>
                  </article>
                ))}
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function App() {
  const path = window.location.pathname

  if (path === '/dining') {
    return <DiningPage />
  }

  if (path === '/businesses') {
    return <BusinessesPage />
  }

  if (path === '/leasing') {
    return <LeasingPage />
  }

  return <HomePage />
}

createRoot(document.getElementById('root')).render(<App />)
