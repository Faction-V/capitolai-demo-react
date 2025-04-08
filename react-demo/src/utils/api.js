import { v4 as uuidv4 } from 'uuid';

export const customConfig = {
  format: 'custom',
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
  metrics: true,
  tables: true,
  quotes: false,
  tweets: false,
  tweetCharacterLimit: 280,
  generalWebSearch: true,
  academicWebSearch: false,
  usePerplexity: false,
  ragBudget: 'default',
  customInstructions: '',
  responseModel: 'claude-3-7-sonnet-20250219'
};

export const fetchData = async (query) => {
  if (!query || query === '') return null;

  const apiUrl = import.meta.env.VITE_API_URL || 'localhost:8000';

  try {
    const response = await fetch(`${apiUrl}/v1/chat/async`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Domain': import.meta.env.VITE_API_DOMAIN,
        'X-API-Key': import.meta.env.VITE_API_KEY,
        'X-User-ID': 1
      },
      body: JSON.stringify({
        'source-ids': [],
        'user-config-params': { ...customConfig, userQuery: query },
        tags: [
          {
            company_id: 777
          },
          {
            option_we_want_to_include: true
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result.url;
  } catch (err) {
    console.error(err);
  }
};
