interface LogoProps {
  size?: number;
}

export const Logo = ({ size = 320 }: LogoProps) => (
    <svg width={size} height={size * 0.6875} viewBox="0 0 320 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="160" cy="200" rx="120" ry="20" fill="#B2DFDB" />
    <g>
      <ellipse cx="160" cy="120" rx="80" ry="80" fill="#4CAF50" />
      <ellipse cx="160" cy="120" rx="70" ry="70" fill="#81C784" />
      <ellipse cx="160" cy="120" rx="60" ry="60" fill="#A5D6A7" />
      {/* Mains stylisées */}
      <path d="M80 120 Q60 180 160 200 Q260 180 240 120" stroke="#FBC02D" strokeWidth="12" fill="none" />
      <ellipse cx="160" cy="120" rx="50" ry="50" fill="#fff" fillOpacity="0.1" />
    </g>
    {/* Nuages */}
    <ellipse cx="110" cy="80" rx="18" ry="8" fill="#fff" />
    <ellipse cx="210" cy="70" rx="14" ry="6" fill="#fff" />
    <ellipse cx="180" cy="160" rx="10" ry="4" fill="#fff" />
  </svg>
); 