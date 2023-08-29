// src/components/SpaceData.tsx
import React, { useEffect, useState } from "react";

const SpaceData: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://mkon.pythonanywhere.com/space21")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>Space Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SpaceData;
