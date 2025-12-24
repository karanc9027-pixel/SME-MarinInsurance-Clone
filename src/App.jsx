// import Header from './components/Header';
// import MarineInsuranceForm from './components/forms/MarineInsuranceForm';
// import MarineInsuranceForm1 from './components/forms/MarineInsuranceForm';
// import Marine_insurance from './pages/Marine_insurance';
// import WorkmensCompensationPolicy from './pages/WorkmensCompensationPolicy';

// import { BrowserRouter, Route, Routes, } from 'react-router-dom'
// function App () {
//   return (
//     // <div>
//     //   {/* <Marine_insurance /> */ }
//     //   <WorkmensCompensationPolicy />
//     // </div>
//     <BrowserRouter>
//       {/* <Header /> */ }

//       <Routes>
//         <Route path="/marine-insurance" element={ <Marine_insurance /> } />
//         <Route
//           path="/workmens-compensation-policy"
//           element={ <WorkmensCompensationPolicy /> }
//         />
//       </Routes>
//     </BrowserRouter>


//   )
// }

// export default App


import Header from './components/Header';
import Marine_insurance from './pages/Marine_insurance';
import WorkmensCompensationPolicy from './pages/WorkmensCompensationPolicy';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './ui/component style/header.css'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Group_Health_Insurance from './pages/Group_Health_Insurance';
function App () {
  return (
    <BrowserRouter>

      <Header />
      <ToastContainer />
      <Routes>
        <Route
          path="*"
          element={ <Marine_insurance /> }
        />

        <Route
          path="/workmens-compensation-policy"
          element={ <WorkmensCompensationPolicy /> }
        />

        <Route
          path="/group-health-insurance"
          element={ <Group_Health_Insurance /> }
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
