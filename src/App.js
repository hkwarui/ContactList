import useFetch from "react-fetch-hook";
import { useEffect, useState } from "react";

import Navigation from "./Navigation";
import ContactCards from "./ContactCard";

const App = () => {
  const url = "https://randomuser.me/api";
  const { data } = useFetch(url + "?results=200");

  const [contactList, setContactList] = useState();
  const [filterQuery, setFilterQuery] = useState();

  useEffect(() => {
    if (!filterQuery) {
      setContactList(data?.results.slice(0, 12));
    } else {
      const queryString = filterQuery.toLowerCase();

      const filteredData = data?.results.filter((contact) => {
        const fullName = `${contact.name.first} ${contact.name.last}`;

        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase();
          return firstLetter === queryString;
        } else {
          return fullName.toLowerCase().includes(queryString);
        }
      });

      setContactList(filteredData);
    }
  }, [data, filterQuery]);

  return (
    <>
      <div className="bg-gray-100">
        <Navigation />
        <section className="flex flex-wrap justify-between">
          <form>
            <input
              type="text"
              className="h-14 w-auto md:w-96 ml-20 pr-8 pl-5 mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent rounded-md z-0 "
              placeholder="Search contact..."
              onChange={(event) => setFilterQuery(event.target.value)}
            />
          </form>

          <button
            className="bg-indigo-400 hover:bg-indigo-500 text-white font-semibold rounded xs:ml-20 mt-8 mr-8 py-2 px-4"
            onClick={() => setContactList(data?.results)}
          >
            Refesh
          </button>
        </section>

        <section className="p-2 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {contactList?.length < 1 && (
            <h1 className="ml-20">No data matches your search</h1>
          )}
          <ContactCards contactList={contactList} />
        </section>
      </div>
    </>
  );
};

export default App;
