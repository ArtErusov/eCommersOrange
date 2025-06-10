import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { AppDispath, RootState } from '@/shared/store/store';
import { getProfile } from '@/shared/store/user.slice';

import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile: FC = () => {
  const dispatch = useDispatch<AppDispath>();
  const profile = useSelector((s: RootState) => s.user.profile);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  // Не работает из за неверной ссылки
  return (
    <>
      <Header />
      <p>Пользователь</p>
      <p>{profile?.name}</p>
      <Footer />
    </>
  );
};
export default Profile;
