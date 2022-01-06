import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Registration from './Pages/Authentication/Registration/Registration';
import Login from './Pages/Authentication/Login/Login';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRouter from './Pages/PrivateRoute/PrivateRouter';
import EasyApply from './Pages/EasyApply/EasyApply';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import AddLoanFeature from './Pages/Dashboard/AddLoanFeature';
import MakePayment from './Pages/Dashboard/MakePayment';
import MyLoans from './Pages/Dashboard/MyLoans';
import Faq from './Pages/Home/FAQ/Faq';
import AddReview from './Pages/Dashboard/AddReview';
import AddFaq from './Pages/Dashboard/AddFaq';
import AllLoans from './Pages/Dashboard/AllLoans';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="/easyApply"
            element={
              <PrivateRouter>
                <EasyApply></EasyApply>
              </PrivateRouter>
            }
          />


          <Route path="/dashboard" element={<Dashboard />}>

            <Route
              path="/dashboard/makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>


              }
            />
            <Route
              path="/dashboard/allLoans"
              element={
                <AdminRoute>
                  <AllLoans></AllLoans>
                </AdminRoute>


              }
            />
            <Route
              path="/dashboard/addLoanFeature"
              element={
                <AdminRoute>
                  <AddLoanFeature />
                </AdminRoute>


              }
            />
            <Route
              path="/dashboard/faq"
              element={
                <AdminRoute>
                  <AddFaq></AddFaq>
                </AdminRoute>
              }
            />
            <Route
              path="/dashboard/myLoans"
              element={
                <PrivateRouter>
                  <MyLoans></MyLoans>
                </PrivateRouter>


              }
            />
            <Route
              path="/dashboard/makePayment"
              element={
                <PrivateRouter>
                  <MakePayment></MakePayment>
                </PrivateRouter>




              }
            />
            <Route
              path="/dashboard/addReview"
              element={
                <PrivateRouter>
                  <AddReview></AddReview>

                </PrivateRouter>

              }
            />

          </Route>

        </Routes>
      </BrowserRouter>
    </AuthProvider >
  );
}

export default App;
