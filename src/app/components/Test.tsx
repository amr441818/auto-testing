'use client'
import React, { useEffect, useState } from 'react';

const Test = () => {
  const [userData, setUserData] = useState<{ id: number; name: string }[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:3000/api/test');
        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <span className="text-[100px]">{userData[0]?.name}</span>
    </div>
  );
};

export default Test;
