import React, { useEffect, useState } from "react";
import HTTPClient from "../api/http_client";
import { InternshipEntry, LinkEntry } from "../interfaces/database_types";

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
        {internshipEntries?.map(
          (entry: InternshipEntry, internshipIndex: number) => {
            return (
              <li key={`internship-entry-${internshipIndex}`}>
                <p>{entry.title}</p>
                <p>{entry.shortDescription}</p>
                <ul>
                  {entry.links.map(
                    (linkEntry: LinkEntry, linkIndex: number) => {
                      return (
                        <li key={`link-entry-${internshipIndex}-${linkIndex}`}>
                          {linkEntry.description} -{" "}
                          <a
                            href={linkEntry.link}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Apply Here
                          </a>
                        </li>
                      );
                    }
                  )}
                </ul>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default App;
