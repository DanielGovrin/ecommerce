import React from 'react';

export interface DizSizeProps {
    className?: string;
}

export const DizSize: React.FC<DizSizeProps> = ({ className = '' }) => (
    <div className={className}>
        <input type="radio" />
        <label>S </label>
    </div>
);