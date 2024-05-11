import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <CompaniesDropdown />
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<HomeIcon />}
              isActive={pathname === "/"}
              href="/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                title="Inventory" 
                icon={<ReportsIcon />}
                isActive={pathname === "/inventory"}
                href="/inventory"
              />                   
              <SidebarItem
                isActive={pathname === "/analytics"}
                title="Analytics"
                icon={<ReportsIcon />}
              />
            </SidebarMenu>
            <SidebarMenu title="Blood Records">
              <SidebarItem
                title="Released Bloods"
                icon={<ReportsIcon />}
                isActive={pathname === "/released"}
                href="/released"
              />
              <SidebarItem
                title="Received Bloods"
                icon={<ReportsIcon />}
                isActive={pathname === "/received"}
                href="/received"
              />
              <SidebarItem
                title="Expired Bloods"
                icon={<ReportsIcon />}
                isActive={pathname === "/expired"}
                href="/expired"
              />                                          
            </SidebarMenu>
            <SidebarMenu title="Others">
              <SidebarItem
                isActive={pathname === "/scanqr"}
                title="Scan QR Code"
                icon={<ChangeLogIcon />}
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
