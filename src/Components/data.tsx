import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as IoIcons5 from 'react-icons/io5'
import * as PiIcons from 'react-icons/pi'
import { SidebarItem, CardItem } from './datatypes'

export const PantsData: CardItem[] = [
   {
      id: 'levi-jeans',
      MainTitle: "Levi's Classic Straight Jeans",
      SecondaryTitle: 'Timeless Denim for Versatile Styling',
      Image: '/public/PantsImages/classic_jeans.jpg',
      Price: '$39.99',
   },
   {
      id: 'slim-fit-chinos',
      MainTitle: 'Slim Fit Chino Trousers',
      SecondaryTitle: 'Tailored Comfort for a Sleek Look',
      Image: '/public/PantsImages/slim_fit_chinos.jpg',
      Price: '$29.99',
   },
   {
      id: 'cargo-jogger-pants',
      MainTitle: 'Cargo Jogger Pants',
      SecondaryTitle: 'Functional Style with Ample Pockets',
      Image: '/public/PantsImages/cargo_joggers.jpg',
      Price: '$34.99',
   },
   {
      id: 'cozy-lounge-sweatpants',
      MainTitle: 'Cozy Lounge Sweatpants',
      SecondaryTitle: 'Relaxation Mode: Activated',
      Image: '/public/PantsImages/lounge_sweatpants.jpg',
      Price: '$24.99',
   },
   {
      id: 'athletic-leggings',
      MainTitle: 'Athletic Performance Leggings',
      SecondaryTitle: 'Move Freely with Breathable Comfort',
      Image: '/public/PantsImages/athletic_leggings.jpg',
      Price: '$27.99',
   },
   {
      id: 'casual-corduroy-pants',
      MainTitle: 'Casual Corduroy Pants',
      SecondaryTitle: 'Soft Texture for Everyday Casual Wear',
      Image: '/public/PantsImages/corduroy_pants.jpg',
      Price: '$31.99',
   },
   {
      id: 'cargo-shorts',
      MainTitle: 'Cargo Shorts',
      SecondaryTitle: 'Stylish Utility for Warmer Days',
      Image: '/public/PantsImages/cargo_shorts.jpg',
      Price: '$22.99',
   },
   {
      id: 'formal-dress-trousers',
      MainTitle: 'Formal Dress Trousers',
      SecondaryTitle: 'Polished Elegance for Special Occasions',
      Image: '/public/PantsImages/formal_dress_trousers.jpg',
      Price: '$49.99',
   },
   {
      id: 'rugged-outdoor-hiking-pants',
      MainTitle: 'Rugged Outdoor Hiking Pants',
      SecondaryTitle: 'Durable Performance for Adventure Seekers',
      Image: '/public/PantsImages/hiking_pants.jpg',
      Price: '$37.99',
   },
   {
      id: 'stretchy-yoga-leggings',
      MainTitle: 'Stretchy Yoga Leggings',
      SecondaryTitle: 'Flexible Comfort for Your Active Lifestyle',
      Image: '/public/PantsImages/yoga_leggings.jpg',
      Price: '$19.99',
   },
   {
      id: 'high-waisted-culottes',
      MainTitle: 'High-Waisted Culottes',
      SecondaryTitle: 'Trendy Style with a Comfortable Fit',
      Image: '/public/PantsImages/high_waisted_culottes.jpg',
      Price: '$36.99',
   },
];

export const ShirtsData: CardItem[] = [
   {
      id: 'black-tee',
      MainTitle: 'Classic Black Cotton Tee',
      SecondaryTitle: 'Essential Comfort for Everyday Casual',
      Image: '/public/ShirtImages/classic_black_cotton_tee.jpg',
      Price: '$19.99',
   },
   {
      id: 'vneck-tee',
      MainTitle: 'Classic V-neck Cotton Tee',
      SecondaryTitle: 'Sophistication Redefined for Formal Occasions',
      Image: '/public/ShirtImages/classic_vneck_cotton_tee.jpg',
      Price: '$34.99',
   },
   {
      id: 'graphic-print-tee',
      MainTitle: 'Trendy Graphic Print Tee',
      SecondaryTitle: 'Express Your Unique Style with Modern Designs',
      Image: '/public/ShirtImages/graphic_print_tee.jpg',
      Price: '$22.99',
   },
   {
      id: 'modern-long-sleeve-henley',
      MainTitle: 'Modern Long Sleeve Henley',
      SecondaryTitle: 'Casual Coolness with a Contemporary Twist',
      Image: '/public/ShirtImages/modern_henley.jpg',
      Price: '$27.99',
   },
   {
      id: 'athletic-polo-shirt',
      MainTitle: 'Athletic Polo Shirt',
      SecondaryTitle: 'Sporty Sophistication for an Active Lifestyle',
      Image: '/public/ShirtImages/athletic_polo.jpg',
      Price: '$29.99',
   },
   {
      id: 'timeless-striped-oxford-shirt',
      MainTitle: 'Timeless Striped Oxford Shirt',
      SecondaryTitle: 'Classic Stripes for a Smart Casual Look',
      Image: '/public/ShirtImages/timeless_oxford.jpg',
      Price: '$39.99',
   },
   {
      id: 'cozy-vneck-sweater',
      MainTitle: 'Cozy V-Neck Sweater',
      SecondaryTitle: 'Stay Warm in Style on Chilly Days',
      Image: '/public/ShirtImages/cozy_vneck_sweater.jpg',
      Price: '$44.99',
   },
   {
      id: 'laid-back-flannel-plaid-shirt',
      MainTitle: 'Laid-Back Flannel Plaid Shirt',
      SecondaryTitle: 'Casual Comfort with a Lumberjack Vibe',
      Image: '/public/ShirtImages/laid_back_flannel.jpg',
      Price: '$31.99',
   },
   {
      id: 'denim-style-button-up-shirt',
      MainTitle: 'Denim Style Button-Up Shirt',
      SecondaryTitle: 'Effortless Edge with a Denim Staple',
      Image: '/public/ShirtImages/denim_style_button_up.jpg',
      Price: '$37.99',
   },
   {
      id: 'sleek-business-shirt',
      MainTitle: 'Sleek Business Shirt',
      SecondaryTitle: 'Polished Professionalism for the Modern Workplace',
      Image: '/public/ShirtImages/sleek_business_shirt.jpg',
      Price: '$49.99',
   },
   {
      id: 'navy-blue-linen',
      MainTitle: 'Navy Blue Linen',
      SecondaryTitle: 'Laid-Back Comfort',
      Image: '/public/ShirtImages/navy_blue_linen.jpg',
      Price: '$21.99',
   },
];

export const HatsData: CardItem[] = [
   {
      id: 'classic-ny-hat',
      MainTitle: 'Classic NY Hat',
      SecondaryTitle: 'Timeless Style for Every Occasion',
      Image: '/public/HatImages/baseball_cap_image.png',
      Price: '$29.99',
   },
   {
      id: 'adidas-sporty-cap',
      MainTitle: 'Adidas Sporty Cap',
      SecondaryTitle: 'Adidas Casual',
      Image: '/public/HatImages/adidas_cap_image.jpg',
      Price: '$19.99',
   },
   {
      id: 'new-era-running-cap',
      MainTitle: 'New Era Running Cap',
      SecondaryTitle: 'New Era Sporty',
      Image: '/public/HatImages/new_era_cap_image.jpg',
      Price: '$19.99',
   },
   {
      id: 'geekbazar-baseball-cap',
      MainTitle: 'GeekBazar Baseball Cap',
      SecondaryTitle: 'GeekBazar Special',
      Image: '/public/HatImages/geekbazar_special_image.jpg',
      Price: '$19.99',
   },
   {
      id: 'elegant-wide-brimmed-sun-hat',
      MainTitle: 'Elegant Wide-Brimmed Sun Hat',
      SecondaryTitle: 'Stay Stylish and Protected from the Sun',
      Image: '/public/HatImages/sun_hat_image.jpg',
      Price: '$34.99',
   },
   {
      id: 'cozy-knit-beanie',
      MainTitle: 'Cozy Knit Beanie',
      SecondaryTitle: 'Warmth and Style in Every Stitch',
      Image: '/public/HatImages/beanie_image.jpg',
      Price: '$24.99',
   },
   {
      id: 'trendy-bucket-hat',
      MainTitle: 'Trendy Bucket Hat',
      SecondaryTitle: 'Streetwear Chic for Urban Vibes',
      Image: '/public/HatImages/bucket_hat_image.jpg',
      Price: '$21.99',
   },
   {
      id: 'adventurers-explorer-hat',
      MainTitle: "Adventurer's Explorer Hat",
      SecondaryTitle: 'Ready for Any Outdoor Expedition',
      Image: '/public/HatImages/explorer_hat_image.jpg',
      Price: '$39.99',
   },
   {
      id: 'funky-snapback-hat',
      MainTitle: 'Funky Snapback Hat',
      SecondaryTitle: 'Express Your Personality with Flair',
      Image: '/public/HatImages/snapback_image.jpg',
      Price: '$18.99',
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
]
