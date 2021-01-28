import React from 'react';
import './App.css';
// import { MessageFormPage } from './components/message-form-page';

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <h1>
//           A letter to Santa
//         </h1>
//       </header>

//       <main>
//         <MessageFormPage />
//       </main>

//       <footer>
//         Made with
//         <a href="https://glitch.com">Glitch</a>!
//       </footer>
//     </div>
//   );
// }

// export default App;

//import React from 'react';
import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';

const App = () => (
  <div>
    <Header />
    <Main />
    <Footer />
  </div>
)
export default App;

