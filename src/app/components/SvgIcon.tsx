type IconType = 'email' | 'github' | 'linkedin' | 'share'
const envelope = (color: string) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><polyline points="224 56 128 144 32 56" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><path d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><line x1="110.5" y1="128" x2="34.5" y2="197.7" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><line x1="221.5" y1="197.7" x2="145.5" y2="128" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /></svg>
const linkedin = (color: string) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><rect x="36" y="36" width="184" height="184" rx="8" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><line x1="120" y1="112" x2="120" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><line x1="88" y1="112" x2="88" y2="176" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><path d="M120,140a28,28,0,0,1,56,0v36" fill="none" stroke={color} stroke-linecap="round" stroke-linejoin="round" stroke-width="12" /><circle fill={color} cx="88" cy="80" r="10" /></svg>
const github = (color: string) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" style={{ color: 'white' }} fill="none"><rect width="44" height="44" fill="white" fill-opacity="0.01"></rect><path d="M29.3444 30.4767C31.7481 29.9771 33.9292 29.1109 35.6247 27.8393C38.5202 25.6677 40 22.3137 40 19C40 16.6754 39.1187 14.5051 37.5929 12.6669C36.7427 11.6426 39.2295 4.00001 37.02 5.02931C34.8105 6.05861 31.5708 8.33691 29.8726 7.8341C28.0545 7.29577 26.0733 7.00001 24 7.00001C22.1992 7.00001 20.4679 7.22313 18.8526 7.63452C16.5046 8.23249 14.2591 6.00001 12 5.02931C9.74086 4.05861 10.9736 11.9633 10.3026 12.7946C8.84119 14.6052 8 16.7289 8 19C8 22.3137 9.79086 25.6677 12.6863 27.8393C14.6151 29.2858 17.034 30.2077 19.7401 30.6621" stroke={color} stroke-width="1" stroke-linecap="round" fill={color}></path><path d="M19.7402 30.662C18.5817 31.9372 18.0024 33.148 18.0024 34.2946C18.0024 35.4411 18.0024 38.3465 18.0024 43.0108" stroke={color} stroke-width="1" stroke-linecap="round" fill={color}></path><path d="M29.3443 30.4767C30.4421 31.9175 30.991 33.2112 30.991 34.3577C30.991 35.5043 30.991 38.3886 30.991 43.0108" stroke={color} stroke-width="1" stroke-linecap="round" fill={color}></path><path d="M6 31.2156C6.89887 31.3255 7.56554 31.7388 8 32.4555C8.65169 33.5304 11.0742 37.5181 13.8251 37.5181C15.6591 37.5181 17.0515 37.5181 18.0024 37.5181" stroke={color} stroke-width="1" stroke-linecap="round" fill={color}></path></svg>
const share = (color: string) => <svg width="16" height="16" viewBox="0 0 16 16" enable-background="new 0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 3.85347L11 4.20702L11.7071 3.49992L11.3536 3.14636L8.35355 0.146362H7.64645L4.64645 3.14636L4.29289 3.49992L5 4.20702L5.35355 3.85347L7.5 1.70702V9.49992V9.99992H8.5V9.49992V1.70702L10.6464 3.85347ZM1 5.49994L1.5 4.99994H4V5.99994H2V14.9999H14V5.99994H12V4.99994H14.5L15 5.49994V15.4999L14.5 15.9999H1.5L1 15.4999V5.49994Z" fill={color}></path></svg>

type Props = {
  type: IconType;
  color: string;
}

const IconMap = new Map<string, any>([
  ["email", (color: string) => envelope(color)],
  ["share", (color: string) => share(color)],
  ["linkedin", (color: string) => linkedin(color)],
  ["github", (color: string) => github(color)],
]);

const SvgIcon: React.FC<Props> = ({ type, color }) => {
  const icon = IconMap.get(type)
  const res = icon ? icon(color) : <span>Icon not found!</span>

  return <>{res}</>
}

export default SvgIcon
