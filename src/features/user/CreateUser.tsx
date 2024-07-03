import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm font-semibold text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <div className="space-x-2">
        <input
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input mb-4 w-72"
        />
      </div>

      {username !== '' && (
        <div>
          <Button type="small">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
