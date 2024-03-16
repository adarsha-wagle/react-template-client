import { useEffect, useState } from 'react';

function useAuth() {
  const [user, setUser] = useState<object>({});

  useEffect(() => {
    setUser({
      name: 'Your name',
      age: 20,
    });
  }, []);

  return user;
}

export default useAuth;
