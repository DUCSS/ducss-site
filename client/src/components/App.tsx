import React, { useEffect, useState } from "react";
import HTTPClient from "../api/http_client";
import { InternshipEntry } from "../interfaces/database_types";

const App = () => {
  const [internshipEntries, setInternshipEntries] = useState<
    [InternshipEntry] | undefined
  >();
  const [httpClient] = useState<HTTPClient>(new HTTPClient());
  useEffect(() => {
    (async () => {
      const internshipEntries = await httpClient.getInternshipEntries();
      setInternshipEntries(internshipEntries);
    })();
  }, [httpClient]);

  return (
    <div>
      <ul>
        {internshipEntries?.map((entry: InternshipEntry, index: number) => {
          return <li key={index}>{entry.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default App;
