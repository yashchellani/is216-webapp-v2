import React, { FC } from 'react';
import { MdComputer } from 'react-icons/md';

const Thinking: FC = () => {
  return (
    <div className="mt-4 flex items-end">
      <div className="avatar">
        <div className="w-8 rounded-full border">
          <MdComputer className="m-auto h-full w-6" />
        </div>
      </div>
      <div className="chat chat-start ">
        <div className="chat-bubble animate-pulse">thinking...</div>
      </div>
    </div>
  );
};

export default Thinking;
