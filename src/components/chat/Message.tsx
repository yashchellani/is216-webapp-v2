import React, { FC } from 'react';
import { MdComputer, MdPerson } from 'react-icons/md';
import moment from 'moment';
import Image from './Image';
import Markdown from './Markdown';

interface MessageProps {
  message: {
    id: number;
    createdAt: number;
    text: string;
    ai?: boolean;
    selected?: string;
  };
}

const Message: FC<MessageProps> = ({ message }) => {
  const { id, createdAt, text, ai = false, selected } = message;

  return (
    <div
      key={id}
      className={`my-4 flex items-end gap-3 ${ai ? 'flex-row-reverse' : ''}`}
    >
      {selected === 'DALL·E' && ai ? (
        <Image url={text} className="w-full rounded-lg shadow-lg" />
      ) : (
        <div
          className={`w-full max-w-[70%] ${ai ? 'text-right' : 'text-left'}`}
        >
          <div
            className={`rounded-lg p-3 ${
              ai
                ? 'text-gray-900 dark:bg-gray-500'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            <Markdown markdownText={text} />
            <p className="mt-2 text-xs">{moment(createdAt).calendar()}</p>
          </div>
        </div>
      )}

      <div className="flex-shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-400">
          {ai ? (
            <MdComputer className="h-6 w-6 text-blue-500" />
          ) : (
            <MdPerson className="h-6 w-6 text-gray-500" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
