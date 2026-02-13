import SpotlightCard from './components/SpotlightCard';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

export default function Contacts() {
  return (
    <SpotlightCard
      spotlightColor="rgba(0, 255, 128, 0.3)"
      className="max-w-md mx-auto mt-8"
    >
      <h3 className="text-white text-2xl mb-4">Contact Me</h3>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 text-white">
          <FiMail /> <a href="mailto:kdbaquirin@gmail.com" className="underline">kdbaquirin@gmail.com</a>
        </li>
        <li className="flex items-center gap-3 text-white">
          <FiPhone /> <a href="tel:09651379920" className="underline">09651379920</a>
        </li>
        <li className="flex items-center gap-3 text-white">
          <FiLinkedin /> <a href="https://www.linkedin.com/in/kenbaquirin" target="_blank" className="underline">LinkedIn</a>
        </li>
      </ul>
    </SpotlightCard>
  );
}
