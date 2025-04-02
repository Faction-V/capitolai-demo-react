import { useState } from 'react';
import { EditorStory, CapitolAiWrapper } from '@capitol.ai/react';
import GenerateStory from './GenerateStory';

import './App.css';

function App() {
  const [currentStoryId, setCurrentStoryId] = useState();
  const [query, setQuery] = useState('');
  const handleCallback = (storyId) => setCurrentStoryId(storyId);

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
        />
      )}
    </CapitolAiWrapper>
  );
}

export default App;
