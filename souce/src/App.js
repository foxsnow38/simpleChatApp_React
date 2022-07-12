import{ChatProvider} from './context/ChatContext';
import Container from './components/Container';
import './App.css';

function App() {
  return (
<div className='App'>
     <ChatProvider>
<Container>

</Container>
      
     </ChatProvider>
     </div>

  );
}

export default App;
