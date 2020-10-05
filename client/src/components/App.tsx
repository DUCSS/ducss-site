import React, { useEffect, useState } from 'react';
import HTTPClient from '../api/http_client';
import { InternshipEntry, LinkEntry } from '../interfaces/database_types';

const App: React.FC = () => {
  const [internshipEntries, setInternshipEntries] = useState<
    [InternshipEntry] | undefined
  >();
  const [httpClient] = useState<HTTPClient>(new HTTPClient());
  useEffect(() => {
    (async () => {
      const entries = await HTTPClient.getInternshipEntries();
      setInternshipEntries(entries);
    })();
  }, [httpClient]);

  return (
    <div>
      <ul>
        {internshipEntries?.map((entry: InternshipEntry) => (
          <li key={entry.id}>
            <p>{entry.title}</p>
            <p>{entry.shortDescription}</p>
            <ul>
              {entry.links.map((linkEntry: LinkEntry) => (
                <li key={linkEntry.id}>
                  {linkEntry.description} -{' '}
                  <a
                    href={linkEntry.link}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Apply Here
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
