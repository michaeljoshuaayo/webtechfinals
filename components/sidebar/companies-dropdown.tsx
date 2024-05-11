"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import React, { useState } from "react";
import { AcmeIcon } from "../icons/acme-icon";
import { AcmeLogo } from "../icons/acmelogo";
import { BottomIcon } from "../icons/sidebar/bottom-icon";

interface Company {
  name: string;
  location: string;
  logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
  const [company, setCompany] = useState<Company>({
    name: "SPH Blood Bank",
    location: "Sorsogon City, Sorsogon",
    logo: <AcmeIcon />,
  });
  return (
    <Dropdown
      classNames={{
        base: "w-full min-w-[260px]",
      }}
    >
      <DropdownTrigger className="cursor-pointer">
        <div className="flex items-center gap-2">
          {company.logo}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
              {company.name}
            </h3>
            <span className="text-xs font-medium text-default-500">
              {company.location}
            </span>
          </div>
          <BottomIcon />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        onAction={(e) => {
          if (e === "1") {
            setCompany({
              name: "Bicol Regional Blood Center",
              location: "Daraga, Albay",
              logo: <AcmeIcon />,
            });
          }
        }}
        aria-label="Avatar Actions"
        
      >
        <DropdownSection title="Blood Banks">
          <DropdownItem
            key="1"
            startContent={<AcmeIcon />}
            description="Sorsogon City, Sorsogon"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            SPH Blood Bank
          </DropdownItem>
          <DropdownItem
            key="2"
            startContent={<AcmeIcon />}
            description="Legazpi City, Albay"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            Bicol Regional Blood Center
          </DropdownItem>
          <DropdownItem
            key="3"
            startContent={<AcmeIcon />}
            description="Naga City, Camarines Sur"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            Bicol Medical Center
          </DropdownItem>
          <DropdownItem
            key="4"
            startContent={<AcmeIcon />}
            description="Daet, Camarines Norte"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            CNPH Blood Bank
          </DropdownItem>
          <DropdownItem
            key="5"
            startContent={<AcmeIcon />}
            description="Legazpi City, Albay"
            classNames={{
              base: "py-4",
              title: "text-base font-semibold",
            }}
          >
            BRTTH Blood Bank
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
