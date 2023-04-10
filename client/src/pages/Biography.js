import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="bio">
      <Row>
        <Col>
          <h3>À propos de moi</h3>
          <p>
            Bonjour et bienvenue sur mon site portfolio ! Je suis un développeur
            passionné, ayant validé ma deuxième année de licence en informatique
            à l'UFR d'informatique de Strasbourg. Mon parcours a été enrichi par
            mon expérience dans le domaine de la restauration, où j'ai acquis
            maturité professionnelle, autonomie, gestion du stress et flexibilité
            dans différents environnements de travail.
          </p>
          <p>
            Au cours de mes études, j'ai réalisé plusieurs projets, dont le développement d'un site web dynamique qui a renforcé ma volonté de poursuivre dans la voie du Web. J'ai également travaillé sur un projet en Programmation Orientée Objets (Java) et je continue à me former sur le framework React. Vous pouvez consulter mes projets sur mon site et sur mon compte GitHub.
          </p>
          <p>
            Mes compétences couvrent un large éventail de domaines, tels que le RGPD, Git, UML, POO, SQL, Web et Réseau. Mon objectif est de rejoindre une formation diplômante qui me permettra d'appliquer directement la théorie apprise, contrairement à la philosophie de l'université de Strasbourg, qui reste très axée sur le théorique.
          </p>
        </Col>
      </Row>
      
      <Row>
        <Col>
          <h3>Intérêt pour l'intelligence artificielle et le machine learning</h3>
          <p>
            Je suis également passionné par l'intelligence artificielle et le
            machine learning, avec un intérêt particulier pour l'apprentissage
            d'IA dans les jeux vidéo. Actuellement, je travaille sur un projet en
            C# pour créer un jeu inspiré de Geometry Dash, où l'IA apprendra à
            jouer au jeu de manière autonome grâce à un système de sélection et
            d'autres mécanismes d'apprentissage.
          </p>
          <p>
            Ce projet est une excellente occasion pour moi de combiner ma passion pour le développement et mon intérêt pour l'IA, tout en mettant en pratique mes compétences en programmation et en machine learning.
          </p>
          <p>
            En conclusion, je suis un développeur passionné et déterminé, avec une expérience variée et des compétences solides dans divers domaines. Je suis convaincu que mon parcours et mes intérêts pour l'intelligence artificielle et le machine learning sauront attirer l'attention des recruteurs. N'hésitez pas à explorer mon site et à me contacter pour discuter de futures opportunités professionnelles.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
