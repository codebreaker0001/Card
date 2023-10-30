import { useState ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card/card'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);

 
useEffect(() => {
      
      const mockData = [
        {
          title: 'Card 1',
          content: 'This is the content for Card 1.',
          imageUrl: 'https://images.pexels.com/photos/7047326/pexels-photo-7047326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
        {
          title: 'Card 2',
          content: 'This is the content for Card 2.',
          imageUrl: 'https://images.pexels.com/photos/9072388/pexels-photo-9072388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        },
      ];
  
      setData(mockData);
    }, []);
  
    return (
      <div className="cms">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}

        {/* {data} */}
      </div>
    );

  
  
}

export default App
