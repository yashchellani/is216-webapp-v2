'use client';

import WeeklyRevenue from 'components/admin/default/WeeklyRevenue';
import TotalSpent from 'components/admin/default/TotalSpent';
import PieChartCard from 'components/admin/default/PieChartCard';
import { IoMdHome } from 'react-icons/io';
import { IoDocuments } from 'react-icons/io5';
import { MdBarChart, MdDashboard } from 'react-icons/md';

import Widget from 'components/widget/Widget';
import CheckTable from 'components/admin/default/CheckTable';
import ComplexTable from 'components/admin/default/ComplexTable';
import DailyTraffic from 'components/admin/default/DailyTraffic';
import TaskCard from 'components/admin/default/TaskCard';
import tableDataCheck from 'variables/data-tables/tableDataCheck';
import tableDataComplex from 'variables/data-tables/tableDataComplex';
import {
  FirstCard,
  FourthCard,
  SecondCard,
  SixthCard,
  ThirdCard,
} from 'components/carddemo/CardDemo';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {
  AiFillFilePdf,
  AiFillInstagram,
  AiOutlineLineChart,
  AiOutlineRedo,
  AiOutlineRest,
  AiOutlineSend,
  AiOutlineVerticalAlignBottom,
  AiTwotoneBank,
} from 'react-icons/ai';
import { useEffect, useRef, useState } from 'react';

import { useDropzone } from 'react-dropzone';
import { pdfjs } from 'react-pdf';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useRouter } from 'next/navigation';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
};

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px',
};

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Dashboard = () => {
  const questions = [
    'What are some of the scientific advancements that have contributed to the development of Knowledge Graphs?',
    'How have ancient philosophers and scientists influenced the concept of representing knowledge in a diagrammatic form?',
    'Why is it important for students and junior researchers to understand the historical context of their research area?',
  ];

  const [result, setResult] = useState('');
  const [isText, setIsText] = useState(false);
  const [messages, setMessages] = useState<string[]>([
    'Hello! How can I assist you today?',
  ]);
  const [input, setInput] = useState<string>('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const [showIt, setShowIt] = useState<boolean>(false);
  const [viewPdf, setViewPdf] = useState<boolean>(false);
  const [selectedPDF, setSelectedPDF] = useState<File | null>(null);

  const extractTextFromPDF = async (pdfFile) => {
    const arrayBuffer = await pdfFile.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const pdf = await pdfjs.getDocument(data).promise;

    let text = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      text += content.items
        .map((item) => {
          if ('str' in item) {
            console.log(item.str);
            return item.str;
          }
          return 'No Text Found';
        })
        .join(' ');
    }

    setResult(text);
    setIsText(true);
    return text;
  };

  const handleSendMessage = () => {
    setShowIt(!showIt);
    if (input.trim() !== '') {
      setMessages((prev) => [...prev, input]);
      setInput('');
    }
  };

  const fileType = 'application/pdf';
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handlePdfUpload = (e) => {
    let file = e.target.files[0];
    if (file) {
      if (file.type === fileType) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
          setSelectedPDF(e.target.result);
        };
      } else {
        // handle invalid file type
        setSelectedPDF(null);
      }
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onDrop = (acceptedFiles) => {
    console.log('file dropped');
    if (acceptedFiles && acceptedFiles.length > 0) {
      console.log('Processing file' + acceptedFiles[0]);
      setSelectedPDF(acceptedFiles[0]);
      setShowIt(true);
      extractTextFromPDF(acceptedFiles[0])
        .then((text) => {
          setResult(text);
          setIsText(true);
        })
        .catch((error) => {
          console.error('Error extracting text from PDF:', error);
        });
    }
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const pdfplugin = defaultLayoutPlugin();

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isText) {
      setIsText(false);
    }
  }, [result]);

  return (
    <div>
      {showIt && (
        <div className="align-items-stretch flex w-full flex-col py-5 md:flex-row">
          <div className="flex-1 p-1 text-white">
            {/* <PDFGenerator selectedPDF={selectedPDF} /> */}
          </div>
          <div className="flex-1 p-1 text-white">
            {/* ... rest of your existing code ... */}
          </div>
        </div>
      )}

      <div className="w-full  pt-5 text-base text-gray-100">
        <div className="flex w-full justify-center">
          <section className="w-full space-y-10 text-center">
            <div className="flex w-full items-center justify-center space-x-2">
              <AiFillInstagram className="text-gray-800 dark:text-gray-100" />
              <p className="text-gray-800 dark:text-gray-100">
                Your document will be enriched, shared on Course Hero, and used
                to extract content to assist in studying.
              </p>
            </div>

            <div className="relative rounded pt-5 shadow-lg">
              <div className="">
                <div
                  role="presentation"
                  className="relative flex flex-col rounded rounded-xl border-2 border-dashed bg-lightPrimary px-8 py-2 focus-visible:outline-blue-100 dark:bg-navy-800"
                >
                  <div className="text-md-loose m-10 text-center font-medium text-gray-800 dark:text-gray-100 md:text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="mr-4 hidden h-12 w-12 align-middle md:relative md:top-[-2px] md:inline"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      ></path>
                    </svg>
                    For the best results, upload docs{' '}
                    <span className="whitespace-nowrap">
                      with many questions
                    </span>
                  </div>

                  <div
                    {...getRootProps({ className: 'dropzone' })}
                    className="h-[16rem] transition-all duration-300 md:h-[20rem]"
                  >
                    {/* add code here to use react dropzone */}
                    <div className="flex flex-col items-center justify-center space-y-5 p-8">
                      <AiFillFilePdf className="h-24 w-24 text-blue-500  shadow-lg" />
                      <h3
                        data-testid="granite-heading"
                        className="md:rg-text-2xl m-0 text-xl font-normal text-gray-900 dark:text-gray-200 md:!text-3xl lg:h-40"
                      >
                        Drag and drop or upload
                        <br />
                        your study document
                      </h3>
                      <input {...getInputProps()} onChange={handlePdfUpload} />
                      {/* <PDFGenerator uploadedPDF={selectedPDF} /> */}
                      <aside>
                        <h4>Files</h4>
                        <ul>{files}</ul>
                      </aside>
                    </div>
                  </div>
                  <div {...getRootProps()} className="w-full">
                    <input {...getInputProps()} />
                  </div>
                  {/* <textarea
                      className="
                        font-inherit
                        rounded-[16px]
                        md:rounded-[24px]
                        w-full
                        transition-all
                        duration-300
                        overflow-hidden
                        resize-none
                        text-gray-700
                        focus:outline-none
                        text-base
                        md:mt-18
                        p-2
                        md:p-3
                        border-2
                        dark:border-gray-100
                        border-gray-900"
                      placeholder="or type your question here"
                    ></textarea> */}
                  <footer className="mt-4 items-center p-5 md:mt-5 md:flex md:flex-row-reverse md:justify-between">
                    <div className="flex space-x-6">
                      <button
                        className="mt-2 block rounded bg-gradient-to-b 
                              from-gray-800/50 to-gray-800/10 px-6 py-[0.5rem] text-center text-base 
                              text-sm text-gray-800 hover:bg-gradient-to-b hover:from-gray-800/40 hover:to-gray-800/5 
                              dark:from-white/50 dark:to-white/10 dark:text-gray-100 
                              dark:hover:bg-gradient-to-b dark:hover:from-white/40 dark:hover:to-white/5 "
                        onClick={() => {
                          const router = useRouter();
                          router.push(`/admin/chatbot?query=${result}`);
                        }}
                      >
                        Chat with AI
                      </button>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-1">
        <div
          className=" text-gray-900 dark:text-gray-200"
          style={{ width: '100%', overflow: 'auto', maxHeight: '300px'}}>
            <h2>Extracted Text from PDF</h2>
            <br></br>
          <p style={{ overflow: 'auto' }}>{result}</p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div>
          <CheckTable tableData={tableDataCheck} />
        </div>

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <DailyTraffic />
          <PieChartCard />
        </div>

        <ComplexTable tableData={tableDataComplex} />

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-1">
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
