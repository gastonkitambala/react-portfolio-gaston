import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SOCIALS } from "../constants";

const ICONS = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  "X (Twitter)": FaXTwitter,
  Instagram: FaInstagram,
};

const SocialLinks = ({ className = "" }) => {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {SOCIALS.map(({ label, url }) => {
        const Icon = ICONS[label];
        return (
          <li key={label}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="icon-link"
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
