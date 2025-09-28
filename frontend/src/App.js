import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [players, setPlayers] = useState([]);
  const [users, setUsers] = useState([]);

  // fetch message
  useEffect(() => {
    fetch("http://localhost:5000/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  // fetch players
  useEffect(() => {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(err => console.error(err));
  }, []);

  // fetch users 👈 add this
  useEffect(() => {
    fetch("http://localhost:5000/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Frontend</h1>
      <p>Message from backend: {message}</p>

      <h2>Players</h2>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            {player.name} — Score: {player.score}
          </li>
        ))}
      </ul>

      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
