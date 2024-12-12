import Image from 'next/image';
import Link from 'next/link';
import { CONFIG } from '@/lib/config';

const WhatsAppButton = () => {
  const phoneNumber = CONFIG.WHATSAPP_NUMBER
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-4 right-4 bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600 transition">
        <Image
          src={`/socialMedia/whatsapp.svg`}
          alt={`whatsapp logo`}
          width={30}
          height={30}
          className='w-[30px] h-[30px]'
        />
      </div>
    </Link>
  );
};

export default WhatsAppButton;
