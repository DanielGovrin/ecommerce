import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';
import * as PiIcons from 'react-icons/pi';
import { SidebarItem, CardItem } from './datatypes';

export const PantsData: CardItem[] = [
   {
      id: 'levi-jeans',
      mainTitle: "Levi's Classic Straight Jeans",
      secondaryTitle: 'Timeless Denim for Versatile Styling',
      image: '/public/PantsImages/classic_jeans.jpg',
      price: '$39.99',
   },
   {
      id: 'slim-fit-chinos',
      mainTitle: 'Slim Fit Chino Trousers',
      secondaryTitle: 'Tailored Comfort for a Sleek Look',
      image: '/public/PantsImages/slim_fit_chinos.jpg',
      price: '$29.99',
   },
   {
      id: 'cargo-jogger-pants',
      mainTitle: 'Cargo Jogger Pants',
      secondaryTitle: 'Functional Style with Ample Pockets',
      image: '/public/PantsImages/cargo_joggers.jpg',
      price: '$34.99',
   },
   {
      id: 'cozy-lounge-sweatpants',
      mainTitle: 'Cozy Lounge Sweatpants',
      secondaryTitle: 'Relaxation Mode: Activated',
      image: '/public/PantsImages/lounge_sweatpants.jpg',
      price: '$24.99',
   },
   {
      id: 'athletic-leggings',
      mainTitle: 'Athletic Performance Leggings',
      secondaryTitle: 'Move Freely with Breathable Comfort',
      image: '/public/PantsImages/athletic_leggings.jpg',
      price: '$27.99',
   },
   {
      id: 'casual-corduroy-pants',
      mainTitle: 'Casual Corduroy Pants',
      secondaryTitle: 'Soft Texture for Everyday Casual Wear',
      image: '/public/PantsImages/corduroy_pants.jpg',
      price: '$31.99',
   },
   {
      id: 'cargo-shorts',
      mainTitle: 'Cargo Shorts',
      secondaryTitle: 'Stylish Utility for Warmer Days',
      image: '/public/PantsImages/cargo_shorts.jpg',
      price: '$22.99',
   },
   {
      id: 'formal-dress-trousers',
      mainTitle: 'Formal Dress Trousers',
      secondaryTitle: 'Polished Elegance for Special Occasions',
      image: '/public/PantsImages/formal_dress_trousers.jpg',
      price: '$49.99',
   },
   {
      id: 'rugged-outdoor-hiking-pants',
      mainTitle: 'Rugged Outdoor Hiking Pants',
      secondaryTitle: 'Durable Performance for Adventure Seekers',
      image: '/public/PantsImages/hiking_pants.jpg',
      price: '$37.99',
   },
   {
      id: 'stretchy-yoga-leggings',
      mainTitle: 'Stretchy Yoga Leggings',
      secondaryTitle: 'Flexible Comfort for Your Active Lifestyle',
      image: '/public/PantsImages/yoga_leggings.jpg',
      price: '$19.99',
   },
   {
      id: 'high-waisted-culottes',
      mainTitle: 'High-Waisted Culottes',
      secondaryTitle: 'Trendy Style with a Comfortable Fit',
      image: '/public/PantsImages/high_waisted_culottes.jpg',
      price: '$36.99',
   },
];

export const ShirtsData: CardItem[] = [
   {
      id: 'black-tee',
      mainTitle: 'Classic Black Cotton Tee',
      secondaryTitle: 'Essential Comfort for Everyday Casual',
      image: '/public/ShirtImages/classic_black_cotton_tee.jpg',
      price: '$19.99',
   },
   {
      id: 'vneck-tee',
      mainTitle: 'Classic V-neck Cotton Tee',
      secondaryTitle: 'Sophistication Redefined for Formal Occasions',
      image: '/public/ShirtImages/classic_vneck_cotton_tee.jpg',
      price: '$34.99',
   },
   {
      id: 'graphic-print-tee',
      mainTitle: 'Trendy Graphic Print Tee',
      secondaryTitle: 'Express Your Unique Style with Modern Designs',
      image: '/public/ShirtImages/graphic_print_tee.jpg',
      price: '$22.99',
   },
   {
      id: 'modern-long-sleeve-henley',
      mainTitle: 'Modern Long Sleeve Henley',
      secondaryTitle: 'Casual Coolness with a Contemporary Twist',
      image: '/public/ShirtImages/modern_henley.jpg',
      price: '$27.99',
   },
   {
      id: 'athletic-polo-shirt',
      mainTitle: 'Athletic Polo Shirt',
      secondaryTitle: 'Sporty Sophistication for an Active Lifestyle',
      image: '/public/ShirtImages/athletic_polo.jpg',
      price: '$29.99',
   },
   {
      id: 'timeless-striped-oxford-shirt',
      mainTitle: 'Timeless Striped Oxford Shirt',
      secondaryTitle: 'Classic Stripes for a Smart Casual Look',
      image: '/public/ShirtImages/timeless_oxford.jpg',
      price: '$39.99',
   },
   {
      id: 'cozy-vneck-sweater',
      mainTitle: 'Cozy V-Neck Sweater',
      secondaryTitle: 'Stay Warm in Style on Chilly Days',
      image: '/public/ShirtImages/cozy_vneck_sweater.jpg',
      price: '$44.99',
   },
   {
      id: 'laid-back-flannel-plaid-shirt',
      mainTitle: 'Laid-Back Flannel Plaid Shirt',
      secondaryTitle: 'Casual Comfort with a Lumberjack Vibe',
      image: '/public/ShirtImages/laid_back_flannel.jpg',
      price: '$31.99',
   },
   {
      id: 'denim-style-button-up-shirt',
      mainTitle: 'Denim Style Button-Up Shirt',
      secondaryTitle: 'Effortless Edge with a Denim Staple',
      image: '/public/ShirtImages/denim_style_button_up.jpg',
      price: '$37.99',
   },
   {
      id: 'sleek-business-shirt',
      mainTitle: 'Sleek Business Shirt',
      secondaryTitle: 'Polished Professionalism for the Modern Workplace',
      image: '/public/ShirtImages/sleek_business_shirt.jpg',
      price: '$49.99',
   },
   {
      id: 'navy-blue-linen',
      mainTitle: 'Navy Blue Linen',
      secondaryTitle: 'Laid-Back Comfort',
      image: '/public/ShirtImages/navy_blue_linen.jpg',
      price: '$21.99',
   },
];

export const HatsData: CardItem[] = [
   {
      id: 'classic-ny-hat',
      mainTitle: 'Classic NY Hat',
      secondaryTitle: 'Timeless Style for Every Occasion',
      image: '/public/HatImages/baseball_cap_image.png',
      price: '$29.99',
   },
   {
      id: 'adidas-sporty-cap',
      mainTitle: 'Adidas Sporty Cap',
      secondaryTitle: 'Adidas Casual',
      image: '/public/HatImages/adidas_cap_image.jpg',
      price: '$19.99',
   },
   {
      id: 'new-era-running-cap',
      mainTitle: 'New Era Running Cap',
      secondaryTitle: 'New Era Sporty',
      image: '/public/HatImages/new_era_cap_image.jpg',
      price: '$19.99',
   },
   {
      id: 'geekbazar-baseball-cap',
      mainTitle: 'GeekBazar Baseball Cap',
      secondaryTitle: 'GeekBazar Special',
      image: '/public/HatImages/geekbazar_special_image.jpg',
      price: '$19.99',
   },
   {
      id: 'elegant-wide-brimmed-sun-hat',
      mainTitle: 'Elegant Wide-Brimmed Sun Hat',
      secondaryTitle: 'Stay Stylish and Protected from the Sun',
      image: '/public/HatImages/sun_hat_image.jpg',
      price: '$34.99',
   },
   {
      id: 'cozy-knit-beanie',
      mainTitle: 'Cozy Knit Beanie',
      secondaryTitle: 'Warmth and Style in Every Stitch',
      image: '/public/HatImages/beanie_image.jpg',
      price: '$24.99',
   },
   {
      id: 'trendy-bucket-hat',
      mainTitle: 'Trendy Bucket Hat',
      secondaryTitle: 'Streetwear Chic for Urban Vibes',
      image: '/public/HatImages/bucket_hat_image.jpg',
      price: '$21.99',
   },
   {
      id: 'adventurers-explorer-hat',
      mainTitle: "Adventurer's Explorer Hat",
      secondaryTitle: 'Ready for Any Outdoor Expedition',
      image: '/public/HatImages/explorer_hat_image.jpg',
      price: '$39.99',
   },
   {
      id: 'funky-snapback-hat',
      mainTitle: 'Funky Snapback Hat',
      secondaryTitle: 'Express Your Personality with Flair',
      image: '/public/HatImages/snapback_image.jpg',
      price: '$18.99',
   },
];

export const SidebarData: SidebarItem[] = [
   {
      title: 'home',
      path: '/',
      icon: <IoIcons5.IoHome />,
   },
   {
      title: 'pants',
      path: '/Pants',
      icon: <PiIcons.PiPants />,
   },
   {
      title: 'shirts',
      path: '/Shirts',
      icon: <PiIcons.PiTShirtBold />,
   },
   {
      title: 'hats',
      path: '/Hats',
      icon: <FaIcons.FaHatCowboy />,
   },
   {
      title: 'contact',
      path: '/Contact',
      icon: <IoIcons.IoMdContact />,
   },
];
