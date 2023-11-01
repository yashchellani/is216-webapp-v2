import React from 'react';
import { RiOpenaiFill } from 'react-icons/ri';

const FreeCard = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  return (
    <div
      className="relative mt-14 flex w-[216px] justify-center rounded-[20px] 
    bg-gradient-to-br from-[#868CFF] via-[#432CF3] to-brand-500 pb-4"
    >
      <div
        className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full 
      border-[4px] border-white bg-gradient-to-b from-[#868CFF] to-brand-500 dark:!border-navy-800"
      >
        <RiOpenaiFill className="h-24 w-24"></RiOpenaiFill>
      </div>

      <div className="mt-8 flex h-fit flex-col items-center">
        <button
          className="mt-2 block rounded-full bg-gradient-to-b from-white/50 to-white/10 px-6 py-[0.5rem] 
          text-center text-base text-sm text-white hover:bg-gradient-to-b hover:from-white/40 hover:to-white/5 "
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Set OpenAI Key
        </button>
      </div>

      {/* <Modal title='Setting' modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal> */}
    </div>
  );
};

export default FreeCard;
