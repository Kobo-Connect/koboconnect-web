"use client";
import { Menu, Button, ButtonVariant, ButtonProps } from "@mantine/core";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React, { useMemo, useState } from "react";

interface INavMenu {
  link: {
    label: string;
    href?: string;
    children: any;
  };
  color: string;
  buttonOptions: ButtonProps;
}

function NavMenu({ link, color, buttonOptions }: INavMenu) {
  const [opened, setOpened] = useState(false);

  const pathName = usePathname();

  const isPath = useMemo(
    () => (href: string) => {
      if (pathName.includes(href)) {
        return true;
      }

      return false;
    },
    [pathName]
  );

  return (
    <Menu
      shadow='md'
      styles={{
        dropdown: {
          margin: "0 60px",
        },
      }}
      opened={opened}
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      trigger='hover'
      transitionProps={{ transition: "fade" }}
      openDelay={100}
      closeDelay={400}>
      <Menu.Target>
        <Button
          {...buttonOptions}
          variant={buttonOptions.variant}
          style={{
            backgroundColor: isPath(link.href!) ? "#122A2A" : "",
            color: isPath(link.href!) ? "#00BA8B" : color,
          }}
          color={color}
          rightSection={
            opened ? <IconChevronUp size={14} /> : <IconChevronDown size={14} />
          }
          onClick={() => setOpened(!opened)}>
          {link.label}
        </Button>
      </Menu.Target>

      <Menu.Dropdown
        style={{
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
          borderBottomRightRadius: "1.5rem",
          borderBottomLeftRadius: "1.5rem",
        }}>
        {link.children}
      </Menu.Dropdown>
    </Menu>
  );
}

export default NavMenu;