import React from 'react';
import CardGride from './home';
import VideoPage from './vedio';
import PageCollections from './collectionMarek';
import CardGrid from './gratuisFormation';
import Photos from './lesimage';
import styled from 'styled-components';
import Statique from './statique'; // Utilisez le même nom utilisé lors de l'exportation
import DevenirInstructeur from './devenirInstructeur.js';
import DevenirParticipant from './devenirParticipant.js';
import PageCollectionsBusiness from './collectionBusiness.js';
import PageCollectionsDevelopment from './collectionDevelopment.js';
import Devenir from './devenir.js';
import Affiche from './affiche.js';

const HomeFinal = () => {
  return (
    <Container>
      <Photos style={{ marginBottom: '100px' }} /> {/* Ajoutez la marge inférieure ici */}
      <div> </div>
      <Devenir style={{ marginTop: '120px' }} />
      <Statique />
      <DevenirInstructeur />
      <PageCollections />
      <Affiche/>
      <DevenirParticipant />
      <PageCollectionsBusiness />
      <VideoPage />
      <PageCollectionsDevelopment />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: #3498db;
  font-family: Calibre, sans-serif;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 1.8em;
  margin-top: 40px;
  margin-bottom: 20px;
`;

export default HomeFinal;
