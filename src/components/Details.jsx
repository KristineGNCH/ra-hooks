import { useState, useEffect } from 'react';

export const Details = ({id}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id !== null) {
      getDetails();
    }
  }, [id]);

  async function getDetails() {
    try {
      setLoading(true);
      const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setLoading(false);
      }
    } catch (error) {
        setLoading(false)
        throw new Error;
    }
  }

  return (
    <div className='details__wrap'>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <>
          <div className="details__name">{user.name}</div>
          <img src={`${user.photo}`} alt="image" className="main__photo" />
          <p className="item city__details">{user.details.city}</p>
          <p className="item company__details">{user.details.company}</p>
          <p className="item position__details">{user.details.position}</p>
        </>
      ) : ''}
    </div>
  );
}
