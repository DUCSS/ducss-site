import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Button from 'react-bootstrap/Button';

import './InternshipsPage.scss';

import HTTPClient from '../api/http_client';
import { InternshipEntry, LinkEntry } from '../interfaces/database_types';

const getTheme = (companyName: string): string => {
  const lowerCase = companyName.toLowerCase();
  switch (lowerCase) {
    case 'microsoft':
      return 'primary';
    case 'amazon':
      return 'warning';
    case 'susquehanna international group':
      return 'info';
    default:
      return '';
  }
};

const InternshipsPage: React.FC = () => {
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
    <>
      <h1 className="text-center">Internships</h1>
      <CardColumns>
        {internshipEntries?.map((entry: InternshipEntry) => (
          <Card border={getTheme(entry.company)} key={entry.id}>
            <Card.Header as="h5">{entry.title}</Card.Header>
            <Card.Body>
              <Card.Title className="text-muted">{entry.company}</Card.Title>
              <Card.Text>{entry.shortDescription}</Card.Text>
              {entry.links.map((linkEntry: LinkEntry) => (
                <Card.Text key={linkEntry.id}>
                  <Button
                    variant={getTheme(entry.company)}
                    href={linkEntry.link}
                    target="_blank"
                  >
                    {linkEntry.description}
                  </Button>
                </Card.Text>
              ))}
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </>
  );
};

export default InternshipsPage;
