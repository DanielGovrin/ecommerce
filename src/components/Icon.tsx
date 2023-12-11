import styles from '../Pages/contact.module.css';

interface IconProps {
   icon: JSX.Element;
   url?: string;
   className?: string;
   onClick?: () => void;
}

function Icon({ icon, url, className, onClick }: IconProps) {
   const handleClick = () => {
      if (url) {
         window.open(url, '_blank', 'noopener noreferrer');
      }
      if (onClick) {
         onClick();
      }
   };

   return (
      <div className={className && styles[className]} onClick={handleClick}>
         {icon}
      </div>
   );
}

export default Icon;
