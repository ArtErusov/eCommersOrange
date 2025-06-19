import Button from '@/components/ui/Button/Button';
import { AppDispath, RootState } from '@/shared/store/store';
import { getProfile, userActions } from '@/shared/store/user.slice';

import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Profile: FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const profile = useSelector((s: RootState) => s.user.profile);
  const navigate = useNavigate();

  const logout = () => {
    dispatch(userActions.logout());
    console.log('del');
    navigate('/');
  };

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  // Не работает из за неверной ссылки
  return (
    <>
      <p>Пользователь</p>
      <p>{profile?.name}</p>
      <Link to={'/'}>Назад</Link>

      <Button onClick={logout}>Выйти из профиля</Button>
    </>
  );
};
export default Profile;
