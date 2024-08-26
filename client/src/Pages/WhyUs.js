import React from 'react';

const WhyUs = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>           Pourquoi Choisir Notre Application ?</h2>
      <p style={styles.paragraph}>
     Notre application de location de maisons pour étudiants est conçue pour simplifier votre recherche de logement et vous offrir une expérience sans stress. Avec une interface intuitive et des annonces soigneusement vérifiées, nous vous aidons à trouver rapidement le logement idéal qui correspond à vos besoins. Notre plateforme assure une navigation fluide et rapide, tandis que notre équipe de support dédiée est toujours prête à vous assister. Nous nous engageons à vous offrir le meilleur service possible pour rendre votre vie étudiante plus facile.
      </p>
    </section>
  );
};

const styles = {
  section: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    margin: '20px 0',
  },
  heading: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#333',
  },
  paragraph: {
    fontSize: '1em',
    lineHeight: '1.6',
    color: '#555',
  },
};

export default WhyUs;