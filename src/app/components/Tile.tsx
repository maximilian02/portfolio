import Link from "next/link"
import SvgIcon from "./SvgIcon";

type ContactType = 'email' | 'linkedin' | 'github'
type Props = {
  type: ContactType;
  label: string;
  link: string;
}

const Tile: React.FC<Props> = ({ type, label, link }) =>
  <Link className="tile m-w-md" target="_blank" href={link}>
    <div className="icon">
      <SvgIcon type={type} color="white" />
    </div>
    <p>{label}</p>
    <div className="tile-share-button">
      <SvgIcon type="share" color="white" />
    </div>
  </Link>

export default Tile