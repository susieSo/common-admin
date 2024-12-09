import { getMenuList } from "@/lib/menu-list";

export function useMenuLabel(pathname: string) {
  const menuList = getMenuList();

  const currentMenu = menuList.find((menu) =>
    Array.isArray(menu.submenus) && menu.submenus.length > 0
      ? menu.submenus.some((submenu) => submenu.href === pathname)
      : menu.href === pathname
  );
  const currentLabel = currentMenu?.submenus?.length
    ? currentMenu.submenus.find((submenu) => submenu.href === pathname)
        ?.label ?? ""
    : currentMenu?.label ?? "";

  const parentLabel = currentMenu?.label ?? "";

  return { currentLabel, parentLabel };
}
