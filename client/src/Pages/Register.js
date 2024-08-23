import React, { useState } from 'react';
    import { Form, Button } from 'react-bootstrap';
    import { useDispatch } from 'react-redux';
    import { register } from '../JS/Actions/user'; // Importer l'action pour enregistrer un utilisateur
    
    const Register = () => {
        const [newUser, setNewUser] = useState({}); // Déclarer un état local pour stocker les informations du nouvel utilisateur
        const dispatch = useDispatch(); // Utiliser useDispatch pour accéder à la méthode dispatch de Redux
    
        // Fonction pour gérer les changements dans les champs du formulaire
        const handleChange = (e) => {
            setNewUser({
                ...newUser, // Copier les valeurs actuelles de newUser
                [e.target.name]: e.target.value // Mettre à jour le champ en fonction du nom de l'élément ciblé (name) et de sa valeur (value)
            });
        };
    
        // Fonction pour gérer la soumission du formulaire
        const handleUser = (e) => {
            e.preventDefault(); // Empêcher le rechargement de la page lors de la soumission du formulaire
            dispatch(register(newUser)); // Envoyer une action pour enregistrer le nouvel utilisateur via Redux
        };
    return(
    <div>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Nom" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Adresse email" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" />
        <Form.Label>Email address</Form.Label>
        <Form.Control type="number" placeholder="Numéro de téléphone" />
        <Button variant="primary" type="submit">
        S'inscrire 
      </Button>
    </div>)
    };
export default Register;