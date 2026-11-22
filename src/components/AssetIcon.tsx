import React from 'react';

export type AssetType = 'USDC' | 'USDT' | 'USAT' | 'cUSD' | 'cNGN' | 'CELO' | 'SEPOLIA';

interface AssetIconProps {
  asset: AssetType;
  size?: number;
  className?: string;
}

export const AssetIcon: React.FC<AssetIconProps> = ({ asset, size = 20, className = '' }) => {
  if (asset === 'USDC') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-full ${className}`}
      >
        <circle cx="16" cy="16" r="16" fill="#2775CA" />
        <path
          d="M16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6ZM16 7.8C20.53 7.8 24.2 11.47 24.2 16C24.2 20.53 20.53 24.2 16 24.2C11.47 24.2 7.8 20.53 7.8 16C7.8 11.47 11.47 7.8 16 7.8Z"
          fill="white"
          fillOpacity="0.4"
        />
        <text
          x="16"
          y="20.5"
          textAnchor="middle"
          fontSize="13"
          fontWeight="bold"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          $
        </text>
      </svg>
    );
  }

  if (asset === 'USDT') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-full ${className}`}
      >
        <circle cx="16" cy="16" r="16" fill="#009393" />
        <path
          d="M19.2 12.8H12.8V11.2H19.2V12.8ZM16.8 14.1V18.8H15.2V14.1C12.3 13.9 10.2 13.3 10.2 12.5C10.2 11.7 12.3 11.1 15.2 10.9V9.5H16.8V10.9C19.7 11.1 21.8 11.7 21.8 12.5C21.8 13.3 19.7 13.9 16.8 14.1ZM16 13.3C18.4 13.3 20.2 12.9 20.2 12.5C20.2 12.1 18.4 11.7 16 11.7C13.6 11.7 11.8 12.1 11.8 12.5C11.8 12.9 13.6 13.3 16 13.3Z"
          fill="white"
        />
      </svg>
    );
  }

  if (asset === 'USAT') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-full ${className}`}
      >
        {/* White circle background */}
        <circle cx="16" cy="16" r="15" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
        {/* Outer Red Shield border */}
        <path
          d="M16 6L23 9.5V15.5C23 19.8 19.9 23.8 16 25C12.1 23.8 9 19.8 9 15.5V9.5L16 6Z"
          fill="#D92D20"
        />
        {/* Inner Navy Blue Shield */}
        <path
          d="M16 7.6L21.6 10.4V15.2C21.6 18.7 19.1 21.9 16 23C12.9 21.9 10.4 18.7 10.4 15.2V10.4L16 7.6Z"
          fill="#002B49"
        />
        {/* White Star */}
        <polygon
          points="16,11.2 17.2,14.5 20.5,14.5 17.8,16.5 18.8,19.8 16,17.8 13.2,19.8 14.2,16.5 11.5,14.5 14.8,14.5"
          fill="#FFFFFF"
        />
      </svg>
    );
  }

  if (asset === 'cUSD') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-full ${className}`}
      >
        <circle cx="16" cy="16" r="15" fill="#FCFF52" stroke="#35D07F" strokeWidth="1.5" />
        <path
          d="M16 8C11.6 8 8 11.6 8 16C8 20.4 11.6 24 16 24C19.5 24 22.4 21.7 23.5 18.5H20.8C19.9 20.3 18.1 21.5 16 21.5C13 21.5 10.5 19 10.5 16C10.5 13 13 10.5 16 10.5C18.1 10.5 19.9 11.7 20.8 13.5H23.5C22.4 10.3 19.5 8 16 8Z"
          fill="#1E293B"
        />
      </svg>
    );
  }

  if (asset === 'cNGN') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`shrink-0 rounded-full ${className}`}
      >
        <circle cx="16" cy="16" r="15" fill="#059669" stroke="#34D399" strokeWidth="1" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="white"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          ₦
        </text>
      </svg>
    );
  }

  // CELO / SEPOLIA
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <rect width="32" height="32" rx="6" fill="#FCFF52" />
      <circle cx="16" cy="16" r="9" stroke="#1E293B" strokeWidth="3.5" fill="none" />
      <circle cx="19" cy="13" r="5" fill="#35D07F" />
    </svg>
  );
};
