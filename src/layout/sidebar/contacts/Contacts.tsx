import VK from '@images/icon/vk.svg';
import Telegram from '@images/icon/telegram.svg';
import Whatsapp from '@images/icon/viber.svg';


export const Contacts = () => (
  <div className="flex flex-col gap-6">

    <a className="font-book text-sm uppercase" href="tel:89220070075">
      +7 (922) 007-00-75
    </a>

    <div className="flex gap-2.5">
      <a href="https://vk.com/melnikova_foto72">
        <VK />
      </a>
      <a href="https://t.me/Aleksandra_Melnikova">
        <Telegram />
      </a>
      <a href="https://wa.me/89920070075">
        <Whatsapp />
      </a>
    </div>
  </div>
);
