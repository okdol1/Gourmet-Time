import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as API from '../../../api/api';
import AccountBookingOwner from './template/AccountBookingOwner';

const AccountBooking = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string>();
  useEffect(() => {
    API.userGet('/api/users/user').then((res) => {
      setRole(res.role);
    });
  }, []);

  const Navigate = () => {
    window.location.href = '/';
    return <></>;
  };

  return <>{role === 'owner' ? <AccountBookingOwner /> : <Navigate />}</>;
};

export default AccountBooking;
