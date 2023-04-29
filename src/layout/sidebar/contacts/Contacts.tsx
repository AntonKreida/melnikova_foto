import VK from '@images/icon/vk.svg';
import Telegram from '@images/icon/telegram.svg';
import Whatsapp from '@images/icon/viber.svg';
import { Button } from '@/ui-kit';


export const Contacts = () => (
  <div className="mt-8 flex flex-col gap-6">

    <a className="font-book text-sm uppercase md:text-xs" href="tel:89220070075">
      +7 (922) 007-00-75
    </a>

    <div className="flex gap-2.5">
      <a href="https://vk.com/melnikova_foto72">
        <VK className="h-[20px] w-[20px] md:h-[15px] md:w-[15px]" />
      </a>
      <a href="https://t.me/Aleksandra_Melnikova">
        <Telegram className="h-[20px] w-[20px] md:h-[15px] md:w-[15px]" />
      </a>
      <a href="https://wa.me/89920070075">
        <Whatsapp className="h-[20px] w-[20px] md:h-[15px] md:w-[15px]" />
      </a>
    </div>
    <Button text="Связаться со мной" />
  </div>
);
