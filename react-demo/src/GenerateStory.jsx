import capitol from '/capitol.svg';

const GenerateStory = ({ query, setQuery, callbackOnSubmit }) => {
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
        <button onClick={callbackOnSubmit}>generate story</button>
      </div>
      <p>
        <a href='https://capitol.ai'>
          <img src={capitol} alt='Powered by Capitol.AI' />
        </a>
      </p>
    </div>
  );
};

export default GenerateStory;
