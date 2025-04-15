import {
  Route,
  Routes,
  BrowserRouter,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
function Categories() {
  return (
    <>
      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <Link to="/categories/12078312083">Category 1</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <Link to="/categories/9091029102">Category 2</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
function CategoriesDetail() {
  let { id } = useParams();
  return (
    <div>
      <h2>Categories : {id}</h2>
    </div>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Login() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => navigate("/")}>Submit</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:id" element={<CategoriesDetail />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
