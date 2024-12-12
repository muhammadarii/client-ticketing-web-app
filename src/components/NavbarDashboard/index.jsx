import { useNavigate } from "react-router-dom";
import Logo from "../../styles/img/Logo.png";
import NavLink from "../NavLink";

export default function DNavbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-[60px] py-[20px] bg-softNavy">
      <NavLink action={() => navigate("/")}>
        <img src={Logo} alt="Logo" />
      </NavLink>
      <div className="flex gap-[40px] text-[16px] text-gray">
        <NavLink action={() => navigate("/")}>Home</NavLink>
        <NavLink action={() => navigate("/categories")}>Categories</NavLink>
        <NavLink action={() => navigate("/talents")}>Talents</NavLink>
        <NavLink action={() => navigate("/event")}>Events</NavLink>
        <NavLink action={() => navigate("/participant")}>Participant</NavLink>
        <NavLink action={() => navigate("/transaction")}>Transaction</NavLink>
      </div>
    </div>
  );
}
