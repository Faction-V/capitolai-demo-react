import capitol from '/capitol.svg';

const GenerateStory = ({ query, setQuery, callbackOnSubmit }) => {
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
