import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProfileDropdown({
  isOpen,
  onToggle,
  companyName,
  email,
  onLogout,
}) {
  const navigate = useNavigate();
  return (
    <div>
      <div>ProfileDropdown</div>
    </div>
  );
}
