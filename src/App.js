import React, { useState } from 'react';
import useFetch from './hooks/fetch.js';
import usePrevious from './hooks/usePrevious';

const App = () => {
  //Fetch Data
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  //Previous Data
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>1. useFetch</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {data &&
        data.slice(0, 10).map((item) => (
          <div key={item.id}>
            <u>userId: {item.userId}</u>
            <br />
            <i>ID: {item.id}</i>
            <br />
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </div>
        ))}

      <h1>2. usePrevious</h1>
      <p>Giá trị hiện tại: {count}</p>
      <p>
        Giá trị trước đó:{prevCount}
      </p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>

      
    </div>
  );
};

export default App;
