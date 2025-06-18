import { AppDispath, RootState } from '@/shared/store/store';
import { getProfile } from '@/shared/store/user.slice';

import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Profile: FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const profile = useSelector((s: RootState) => s.user.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  // Не работает из за неверной ссылки
  return (
    <>
      <p>Пользователь</p>
      <p>{profile?.name}</p>
      <Link to={'/'}>Назад</Link>
    </>
  );
};
export default Profile;
