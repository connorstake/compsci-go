import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Question from './Pages/Question';
import reportWebVitals from './reportWebVitals';
import { TwoSumModule } from './Modules/twoSum';
import { ValidateSubsequenceModule } from './Modules/validateSubsequence';
import { SortedSquaredArrayModule } from './Modules/sortedSquaredArray';
import Dashboard from './Pages/Dashboard';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/two-sum",
    element: <Question module={new TwoSumModule()} nextModulePath='validate-subsequence'/>,
  },
  {
    path: "/validate-subsequence",
    element: <Question module={new ValidateSubsequenceModule()} nextModulePath='sorted-squared-array'/>,
  },
  {
    path: "/sorted-squared-array",
    element: <Question module={new SortedSquaredArrayModule()} nextModulePath=''/>,
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
