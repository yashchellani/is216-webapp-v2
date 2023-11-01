'use client';

import Message from 'components/chat/Message';
import Thinking from 'components/chat/Thinking';
import { MdSend } from 'react-icons/md';
import { replaceProfanities } from 'no-profanity';
import { dalle } from 'utils/dalle';
import { davinci } from 'utils/davinci';
import Modal from 'components/modal';
import Setting from 'components/chat/Setting';
import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const options = ['ChatGPT', 'DALL·E'];
const gptModel = ['gpt-3.5-turbo', 'gpt-4'];
const template = [
  {
    title: 'Plan a trip',
    prompt: 'I want to plan a trip to New York City.',
  },
  {
    title: 'how to make a cake',
    prompt: 'How to make a cake with chocolate and strawberries?',
  },
  {
    title: 'Business ideas',
    prompt: 'Generate 5 business ideas for a new startup company.',
  },
  {
    title: 'What is recursion?',
    prompt: 'What is recursion? show me an example in python.',
  },
];

const ChatBot = () => {

  const [formValue, setFormValue] = React.useState<string>('');

  const messagesEndRef = React.useRef(null);
  const inputRef = React.useRef(null);
  const [thinking, setThinking] = React.useState(false);
  const [selected, setSelected] = React.useState(options[0]);
  const [gpt, setGpt] = React.useState(gptModel[0]);

  const [messages, setMessages] = React.useState<MessageProps[]>([]);
  const [modalOpen, setModalOpen] = React.useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const updateMessage = (newValue: string, ai = false, selected: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000000);
    const newMsg: MessageProps = {
      id,
      createdAt: Date.now(),
      text: newValue,
      ai,
      selected,
    };
    setMessages((prevMessages) => [...prevMessages, newMsg]);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const key = window.localStorage.getItem('api-key');
    if (!key) {
      setModalOpen(true);
      return;
    }

    const cleanPrompt = replaceProfanities(formValue);

    const newMsg = cleanPrompt;
    const aiModel = selected;
    const gptVersion = gpt;

    try {
      if (aiModel === options[0]) {
        const LLMresponse = await davinci(cleanPrompt, key, gptVersion);
        LLMresponse && updateMessage(LLMresponse, true, aiModel);
      } else {
        const response = await dalle(cleanPrompt, key);
        const data = response.data.data[0].url;
        data && updateMessage(data, true, aiModel);
      }
    } catch (err) {
      window.alert(`Error: ${err} please try again later`);
    }

    setThinking(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage(e as any); // Cast e to 'any' to bypass type error
    }
  };

  React.useEffect(() => {
    scrollToBottom();
  }, [messages, thinking]);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <main className="dark:bg-light-grey relative flex h-screen flex-col overflow-hidden p-1">
      <div className="tabs tabs-boxed mx-auto my-4 w-fit">
        <a
          onClick={() => setGpt(gptModel[0])}
          className={`${gpt == gptModel[0] && 'tab-active'} tab`}
        >
          GPT-3.5
        </a>
        <a
          onClick={() => setGpt(gptModel[1])}
          className={`${gpt == gptModel[1] && 'tab-active'} tab`}
        >
          GPT-4
        </a>
      </div>

      <section className="flex w-full flex-grow flex-col overflow-y-scroll px-4 sm:px-10 md:px-32">
        {messages?.length ? (
          messages.map((message, index) => (
            <Message key={index} message={{ ...message }} />
          ))
        ) : (
          <div className="my-2 flex">
            <div className="w-screen overflow-hidden">
              <ul className="mx-5 grid grid-cols-2 gap-3 rounded-lg">
                {template.map((item, index) => (
                  <li
                    onClick={() => setFormValue(item.prompt)}
                    key={index}
                    className="border-slate-300 hover:border-slate-500 rounded-lg border p-2"
                  >
                    <p className="text-base font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-900 dark:text-white">
                      {item.prompt}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {thinking && <Thinking />}

        <span ref={messagesEndRef}></span>
      </section>

      <form
        className="join mb-2 flex flex-col px-10 sm:flex-row md:px-32"
        onSubmit={sendMessage}
      >
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="select select-bordered join-item mb-2 w-full sm:mb-0 sm:w-40"
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="flex w-full items-stretch justify-between border-t border-gray-900 dark:border-gray-100">
          <textarea
            ref={inputRef}
            className="input input-bordered join-item max-h-[20rem] min-h-[3rem] w-full grow rounded border p-2 shadow-sm"
            value={formValue}
            onKeyDown={handleKeyDown}
            onChange={(e) => setFormValue(e.target.value)}
          />

          <button
            type="submit"
            className={`join-item btn p-2 transition-all ${
              thinking ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
            } ${!formValue && 'cursor-not-allowed'}`}
            disabled={!formValue || thinking}
          >
            {thinking ? <AiOutlineLoading3Quarters /> : <MdSend size={30} />}
          </button>
        </div>
      </form>
      <Modal title="Setting" modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <Setting modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </Modal>
    </main>
  );
};

export default ChatBot;
