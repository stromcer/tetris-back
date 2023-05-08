import React, { useState, useEffect} from "react";
import axios from 'axios';
import "../styles/ranking.css"
import { useNavigate } from "react-router-dom";

const Ranking = () => {

    const navigate = useNavigate();
    const [score, setScore] = useState([]);

    useEffect(() => {
        axios.get( process.env.REACT_APP_BACKEND_URL + '/api/leaderboard')
          .then(response => {
            setScore(response.data.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
        console.log(score);

        
    return(
        <div className="ranking-container nes-container is-dark">
            <h2>Top 10 Scores</h2>
            <table>
            <thead>
            <tr>
                <th>User</th>
                <th>Score</th>
            </tr>
            </thead>
            <tbody>
            {score.map((score, index) => (
                <tr key={score.id}>
                <td>{score.user}</td>
                <td>{score.total_score}</td>
                </tr>
            ))}
            </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <button type="button" className="nes-btn is-error" onClick={() => navigate("/jugar/multiplayer")}>Volver</button>
            </div>
        </div>
    );
};

export default Ranking;