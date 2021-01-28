import Header from "./components/Header/index";
import Layout from "./components/Layout/index";
import Footer from "./components/Footer/index";
import BGImg1 from "./assets/Layout/bg1.jpg";
import BGImg3 from "./assets/Layout/bg3.jpg";

const App = () => {
  return (
    <>
      <Header title="This is title" descr="This is Description!"/>
      <Layout id="1" title="Layout 1" descr="This is Layout 1" urlBg={ BGImg1 }/>
      <Layout id="2" title="Layout 2" descr="This is Layout 2" colorBg="#ff8100bd"/>
      <Layout id="3" title="Layout 3" descr="This is Layout 3" urlBg={ BGImg3 }/>
      <Footer />
    </>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello world, React.JS
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> */}
//       </header>
//     </div>
//   );
// }

export default App;
