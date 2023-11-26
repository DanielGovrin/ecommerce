import React from 'react'
import styles from './SocialMedia.module.css'


interface SocialMediaProps {
    icon: JSX.Element;
    url: string;
    className?: string;
};


function SocialMedia({ icon, url, className }: SocialMediaProps) {
    return (
        <div className={className && styles[className]}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {icon}
            </a>
        </div>
    )
}

export default SocialMedia

