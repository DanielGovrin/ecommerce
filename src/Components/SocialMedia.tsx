import React from 'react'

interface SocialMediaProps {
    icon: string;
    url: string;
};


function SocialMedia({ icon, url }: SocialMediaProps) {
    return (
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {icon}
            </a>
        </div>
    )
}

export default SocialMedia