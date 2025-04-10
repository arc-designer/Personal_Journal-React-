// context/JournalContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { firestore } from '../firebase';
import { AuthContext } from './AuthContext';

export const JournalContext = createContext();

export const JournalProvider = ({ children }) => {
  const { user } = useContext(AuthContext);    // grab the Firebase user
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // if no user, clear entries and do nothing
    if (!user) {
      setEntries([]);
      return;
    }

    // once we have a user, subscribe to their entries
    const q = query(
      collection(firestore, 'users', user.uid, 'entries'),
      orderBy('createdAt', 'desc')
    );
    const unsubscribe = onSnapshot(q, snapshot => {
      const items = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setEntries(items);
    });

    // cleanup on unmount or when user changes
    return () => unsubscribe();
  }, [user]);

  return (
    <JournalContext.Provider value={{ entries, setEntries }}>
      {children}
    </JournalContext.Provider>
  );
};