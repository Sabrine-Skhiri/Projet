import axios from "axios";
import { CURRENT_USER, FAIL_USER, LOAD_USER, LOGOUT_USER, SUCC_USER } from "../ActionType/user";

// Fonction d'inscription
export const register = (newUser) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/register", newUser);
        console.log('Réponse de l’API pour l’inscription:', result); // Ajout de log pour débogage
        dispatch({ type: SUCC_USER, payload: result.data });
    } catch (error) {
        console.error('Erreur lors de l’appel API pour l’inscription:', error);
        dispatch({ 
            type: FAIL_USER, 
            payload: error.response && error.response.data && error.response.data.errors 
                ? error.response.data.errors 
                : 'Erreur inconnue' 
        });
    }
};

// Fonction de connexion
export const login = (user) => async (dispatch) => {  // Ajout de user en argument
    dispatch({ type: LOAD_USER });
    try {
        let result = await axios.post("/api/user/login", user);
        console.log('Réponse de l’API pour la connexion:', result); // Ajout de log pour débogage
        dispatch({ type: SUCC_USER, payload: result.data });
    } catch (error) {
        console.error('Erreur lors de l’appel API pour la connexion:', error);
        dispatch({ 
            type: FAIL_USER, 
            payload: error.response && error.response.data && error.response.data.errors 
                ? error.response.data.errors 
                : 'Erreur inconnue' 
        });
    }
};

// Fonction de récupération de l'utilisateur courant
export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        };
        let result = await axios.get("/api/user/current", config);
        console.log('Réponse de l’API pour l’utilisateur courant:', result); // Ajout de log pour débogage
        dispatch({ type: CURRENT_USER, payload: result.data });
    } catch (error) {
        console.error('Erreur lors de l’appel API pour l’utilisateur courant:', error);
        dispatch({ 
            type: FAIL_USER, 
            payload: error.response && error.response.data && error.response.data.errors 
                ? error.response.data.errors 
                : 'Erreur inconnue' 
        });
    }
};

// Fonction de déconnexion
export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT_USER });
};
