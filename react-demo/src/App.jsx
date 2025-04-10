// general imports
import { useState } from 'react';
import { EditorStory, CapitolAiWrapper } from '@capitol.ai/react';
import { v4 as uuidv4 } from 'uuid';

// custom components
import GenerateStory from './GenerateStory';

// styles
import './App.css';

// custom tags, needed to get some metadata from customer sources
const tags = [{ company_id: 777 }, { option_we_want_to_include: true }];

function App() {
  const [currentStoryId, setCurrentStoryId] = useState();
  const [query, setQuery] = useState('');
  const handleCallback = () => setCurrentStoryId(uuidv4());

  // update story generation settings by providing custom config
  const config = {
    format: 'auto_mode',
    cot: false,
    audience: 'General',
    responseLength: '3 pages',
    responseLanguage: 'english',
    heroImage: false,
    title: true,
    headers: true,
    paragraphs: true,
    images: false,
    aiImages: false,
    imageStyle: 'auto',
    aiGraphs: false,
    webGraphs: false,
    metrics: false,
    tables: false,
    quotes: false,
    tweets: false,
    tweetCharacterLimit: 280,
    generalWebSearch: true,
    academicWebSearch: false,
    usePerplexity: true,
    useDowJones: true,
    ragBudget: 'default',
    customInstructions: '',
    imageHeight: 768,
    imageWidth: 1344,
    responseModel: 'claude-3-5-sonnet-20240620',
    userUrls: [],
    userPdfDocuments: [],
    userPdfUrls: [],
    userImages: [],
    userQuery: query
  };

  return (
    <CapitolAiWrapper>
      {!currentStoryId ? (
        <GenerateStory
          query={query}
          setQuery={setQuery}
          callbackOnSubmit={handleCallback}
        />
      ) : (
        <EditorStory
          storyId={currentStoryId}
          enabledConfigSidebar={false}
          enableDocRemix={false}
          enableHistory={false}
          enableExportToGoogle={false}
          enableDownload={false}
          enabledShare={false}
          enableHeaderMenu={false}
          enabledFeedback={false}
          trailingBlock={false}
          formatCustomConfigs={config}
          tags={tags}
        />
      )}
    </CapitolAiWrapper>
  );
}

export default App;
