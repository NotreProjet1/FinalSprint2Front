import React from 'react';
import styled from 'styled-components';
import { AiFillNotification } from 'react-icons/ai'; // Import des icônes de notification

const Affiche = () => {
  return (
    <Container>
   
      <h2 className="text-2xl font-bold text-gray-900"style={{backgroundColor:'#53B9CD' , color:'white', width:'82%',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>  Promos de ce mois</h2>
      <CardWrapper>
        {/* Première carte */}
        <CardContainer className="background-radial-gradient">
          <Content>
            <NotificationIcon /> {/* Icône de notification */}
            <Title>Formation <TitleHighlight>React JS</TitleHighlight></Title> {/* Mise en évidence de "React JS" */}
            <Description>
              Apprenez React JS avec notre formation complète et pratique.
            </Description>
            <PromotionText>Obtenez <PromotionHighlight>20%</PromotionHighlight> de réduction !</PromotionText>
            <ActionButton>S'inscrire </ActionButton>
          </Content>
        </CardContainer>

        {/* Deuxième carte */}
        <CardContainer className="background-radial-gradient">
          <Content>
            <NotificationIcon /> {/* Icône de notification */}
            <Title>Formation <TitleHighlight>Angular</TitleHighlight></Title> {/* Mise en évidence de "Angular" */}
            <Description>
              Apprenez Angular avec notre formation spécialisée.
            </Description>
            <PromotionText>Obtenez <PromotionHighlight>10%</PromotionHighlight> de réduction !</PromotionText>
            <ActionButton>S'inscrire</ActionButton>
          </Content>
        </CardContainer>

        {/* Troisième carte */}
        <CardContainer className="background-radial-gradient">
          <Content>
            <NotificationIcon /> {/* Icône de notification */}
            <Title>Formation <TitleHighlight>Digital Marketing</TitleHighlight></Title> {/* Mise en évidence de "Digital Marketing" */}
            <Description>
              Apprenez les stratégies de marketing numérique modernes.
            </Description>
            <PromotionText>Offre spéciale : <PromotionHighlight>15%</PromotionHighlight> de réduction !</PromotionText>
            <ActionButton>S'inscrire</ActionButton>
          </Content>
        </CardContainer>
      </CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PromotionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  background-color: #53B9CD;
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

const PromotionIcon = styled.span`
  font-size: 24px;
  margin-right: 10px;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  border: 2px solid #fff;
  width: 280px; /* Réduction de la taille */
  margin: 0 auto; /* Centrage horizontal */
  margin-right: 80px;
  margin-left: 80px;
  

  &:hover {
    transform: translateY(-5px);
  }
`;

const Content = styled.div`
  margin-top: 20px;
  text-align: center;
  position: relative; /* Position relative pour les éléments enfants positionnés absolument */
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff; /* Couleur du texte */
`;

const TitleHighlight = styled.span`
  color: #ff69b4; /* Couleur rose */
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #fff; /* Couleur du texte */
  margin-top: 10px;
`;

const PromotionText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff; /* Couleur du texte */
  margin-top: 15px;
`;

const PromotionHighlight = styled.span`
  background-color: #53b9cd; /* Couleur de fond aqual */
  color: #fff; /* Couleur du texte */
  font-weight: bold;
  padding: 0 5px; /* Ajout de marge intérieure pour l'espacement */
  border-radius: 5px; /* Ajout de coins arrondis */
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #ff69b4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #53b9cd;
  }
`;

const NotificationIcon = styled(AiFillNotification)`
  color: #ff69b4; /* Couleur rose */
  font-size: 24px;
  position: absolute;
  top: -35px; /* Ajustez la position verticale selon vos besoins */
  left: 50%; /* Centre horizontalement */
  transform: translateX(-50%); /* Centre horizontalement */
`;

export default Affiche;
