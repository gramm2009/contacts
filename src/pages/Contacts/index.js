import { useEffect, useState } from "react";
import { ContactsTable } from './ContactsTable'
//Кастомный хук
const useContacts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getContacts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        const { results, error } = await response.json();
        if (error) {
          throw new Error(error);
        }
        console.log(results);
        setData(results);
        setIsError(false);
        
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContacts();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export const Contacts = () => {
   
   const contacts = useContacts();
   
  if (contacts.isLoading) {
    return <div>...Loading</div>;
  }

  if (contacts.isError) {
    return <div>...Error</div>;
  }

  return (<div className="div">
     <ContactsTable data={contacts.data}/>
  </div>);
};
