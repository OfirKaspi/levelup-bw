import { CONFIG } from "@/config/config";
import { Mail, MapPin, Phone } from "lucide-react";
import MapNavigation from "@/components/common/MapNavigation";

const Contact = () => {
  const contacts = [
    { icon: <Mail className="text-purple-800" />, text: CONFIG.contactEmail },
    { icon: <Phone className="text-purple-800" />, text: CONFIG.phoneNumber },
    { icon: <MapPin className="text-purple-800" />, text: CONFIG.contactAddress, isAddress: true },
  ]

  return (
    <ul className="grid lg:grid-flow-col gap-5">
      {contacts.map((contact) => (
        <li key={contact.text} className="flex gap-5 border-b-2 pb-5 md:pb-2">
          <div className="flex gap-2 items-center text-sm">
            {contact.icon}
            {contact.text}
          </div>
          {contact.isAddress && <MapNavigation />}
        </li>
      ))}
    </ul>
  );
}

export default Contact