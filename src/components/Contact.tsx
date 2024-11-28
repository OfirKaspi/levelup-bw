import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "./ui/separator";
const Contact = () => {
  const contacts = [
    { icon: <Mail className="text-purple-800" />, text: "support@levelup.com" },
    { icon: <Phone className="text-purple-800" />, text: "+972 525252525" },
    { icon: <MapPin className="text-purple-800" />, text: "Moshe Dayan 33, Tel Aviv, Israel." },
  ]

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.text}>
          <div className="grid grid-cols-[35px_1fr] h-14 items-center text-sm">
            {contact.icon}
            {contact.text}
          </div>
          <Separator />
        </li>
      ))}
    </ul>
  );
}

export default Contact