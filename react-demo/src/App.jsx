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
          tags={tags}
        />
      )}
    </CapitolAiWrapper>
  );
}

export default App;
