import React, { createContext, useState } from 'react';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  return (
    <JournalContext.Provider value={{ entries, setEntries }}>
      {children}
    </JournalContext.Provider>
  );
};