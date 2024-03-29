import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Spinner from 'react-bootstrap/Spinner';

import './InternshipsPage.scss';

import HTTPClient from '../api/http_client';
import { InternshipEntry, LinkEntry } from '../interfaces/database_types';

const getThemeName = (companyName: string): string => {
  const lowerCase = companyName.toLowerCase();
  return lowerCase.replace(/\s/g, '-');
};

const InternshipsPage: React.FC = () => {
  const [internshipEntries, setInternshipEntries] = useState<
    [InternshipEntry] | undefined
  >();
  const [loading, setLoading] = useState<boolean>(true);
  const [httpClient] = useState<HTTPClient>(new HTTPClient());
  useEffect(() => {
    (async () => {
      const entries = await HTTPClient.getInternshipEntries();
      setInternshipEntries(entries);
      setLoading(false);
    })();
  }, [httpClient]);

  return (
    <>
      <Jumbotron className="my-4 bg-ducss-dark text-white">
        <h1 className="display-4">Internships</h1>
        <hr className="my-4 bg-ducss-primary" />
        <p>
          Here you can find information about internships provided by our
          sponsors Susquehanna International Group (SIG) and Stripe.
        </p>
      </Jumbotron>
      {loading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      <CardColumns>
        {internshipEntries?.map((entry: InternshipEntry) => (
          <Card border={getThemeName(entry.company)} key={entry.id}>
            <Card.Header as="h5">{entry.title}</Card.Header>
            <Card.Body>
              <Card.Title className="text-muted">{entry.company}</Card.Title>
              <Card.Text>{entry.shortDescription}</Card.Text>
              {entry.links.map((linkEntry: LinkEntry) => (
                <Card.Text key={linkEntry.id}>
                  <Button
                    variant={getThemeName(entry.company)}
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
