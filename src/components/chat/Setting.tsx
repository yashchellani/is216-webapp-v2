import React, { FC } from 'react';
import { checkApiKey } from 'utils/checkKeys';

interface SettingProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const Setting: FC<SettingProps> = ({ modalOpen, setModalOpen }) => {
  const apiKey = window.localStorage.getItem('api-key') || '';
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMsg, setErrorMsg] = React.useState<string>('');
  const [input, setInput] = React.useState<string>('');

  const saveKey = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    const keys = input;

    await checkApiKey(keys)
      .then(() => {
        window.localStorage.setItem('api-key', keys);
        console.log('works');
        setModalOpen(false);
      })
      .catch(() => {
        console.log('doesnt work');
        setErrorMsg('error: incorrect keys');
      });

    setLoading(false);
  };

  const removeApiKey = () => {
    window.localStorage.removeItem('api-key');
    setInput('');
  };

  React.useEffect(() => {
    if (modalOpen) {
      setInput(apiKey);
    }
  }, [apiKey, modalOpen]);

  return (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className="modal-box">
        <form onSubmit={saveKey} className="space-y-4 p-5">
          <h2 className="text-2xl font-semibold">API Key Settings</h2>
          <p>
            Input your personal OpenAI API-key below. Your keys are securely
            saved in your own browser.
          </p>
          <p className="text-sm italic">
            Obtain an OpenAI API key{' '}
            <a
              className="text-blue-600"
              rel="noreferrer"
              target="_blank"
              href="https://platform.openai.com/account/api-keys"
            >
              here
            </a>
            .
          </p>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="password"
            className="w-full rounded border p-2"
            disabled={loading}
            placeholder="Enter your API key..."
          />
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 rounded bg-blue-600 p-2 text-white hover:bg-blue-500"
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Save'}
            </button>
            {apiKey && input && (
              <button
                type="button"
                onClick={loading ? undefined : removeApiKey}
                className="flex-1 rounded bg-red-600 p-2 text-white hover:bg-red-500"
                disabled={loading}
              >
                Remove
              </button>
            )}
          </div>
          {errorMsg && <p className="text-red-600">{errorMsg}</p>}
        </form>
        <div className="modal-action modal-close"></div>
      </div>
    </div>
  );
};

export default Setting;
