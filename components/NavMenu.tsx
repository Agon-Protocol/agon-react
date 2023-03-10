import { FiHome, FiPlus, FiStar } from "react-icons/fi";
import { NavItem, SidebarSection } from "@saas-ui/sidebar";
import { BsPeopleFill } from "react-icons/bs";

export default function NavMenu() {
  return (
    <SidebarSection aria-label="Main">
      <NavItem icon={<FiHome />} href="/">
        Home
      </NavItem>
      <NavItem icon={<FiStar />} href="/featured">
        Featured DAO&apos;s
      </NavItem>
      <NavItem icon={<FiPlus />} href="/enable">
        Enable Agon
      </NavItem>
      <NavItem icon={<BsPeopleFill />} href="/teams/create">
        Create Team
      </NavItem>
    </SidebarSection>
  );
}
