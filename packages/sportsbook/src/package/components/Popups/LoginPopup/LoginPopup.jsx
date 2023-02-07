import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../../../redux/reducers/auth/auth.thunk';
import { closePopup } from '../../../../redux/reducers/popups/popups.slice';
import {
  TicketBetInput__styled,
  TicketBetLabel__styled,
} from '../../Ticket/Ticket.styled';
import Button from '../../UI/Button/Button';
import Popup from '../../UI/Popup/Popup';
import { LoginButton__styled, LoginPopup__styled } from './LoginPopup.styled';

const LoginPopup = ({ cb, popupId }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onClose = () => {
    dispatch(closePopup(popupId));
  };

  const onLogin = () => {
    dispatch(loginThunk({ username, password }))
      .unwrap()
      .then(() => {
        cb();
        onClose();
      });
  };

  return (
    <Popup onClose={onClose}>
      <LoginPopup__styled>
        <TicketBetLabel__styled>
          <TicketBetInput__styled
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </TicketBetLabel__styled>
        <TicketBetLabel__styled>
          <TicketBetInput__styled
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </TicketBetLabel__styled>
        <LoginButton__styled>
          <Button
            text="Login"
            disabled={!username || !password}
            onClick={onLogin}
          />
        </LoginButton__styled>
      </LoginPopup__styled>
    </Popup>
  );
};

export default LoginPopup;
