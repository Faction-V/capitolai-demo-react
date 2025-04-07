// general imports
import { useState } from 'react';

// api utils
import { fetchData } from './utils/api';

// assets
import capitol from '/capitol.svg';

// styles
import './App.css';

function NoProxy() {
  const [query, setQuery] = useState('');
  const [storyUrl, setStoryUrl] = useState();

  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '1rem'
      }}
    >
      <label htmlFor='query'>Topic</label>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <input
          id='query'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Enter a topic here'
        />
        <button onClick={async() => {
          const url = await fetchData(query);

          if (!!url) {
            setStoryUrl(url);
          }
        }}>generate story</button>
      </div>
      <p>
        <a href='https://capitol.ai'>
          <img src={capitol} alt='Powered by Capitol.AI' />
        </a>
      </p>
      {storyUrl && (
        <a href={storyUrl} target='_blank'>
          Link to generated story
        </a>
      )}
    </div>
  );
}

export default NoProxy;
