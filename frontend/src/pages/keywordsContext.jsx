import { createContext, useState } from 'react';

const KeywordsContext = createContext();

const KeywordsProvider = ({ children }) => {
  const [keywords, setKeywords] = useState([]);

  return (
    <KeywordsContext.Provider value={{ keywords, setKeywords }}>
      {children}
    </KeywordsContext.Provider>
  );
};

export { KeywordsProvider, KeywordsContext };
