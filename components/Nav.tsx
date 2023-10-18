import { useState } from "react";
import Navbar from "@/ui/NavBar";

const menu = [
  {
    label: "Organizations",
    url: "#org",
    external: false,
  },
  {
    label: "Builders",
    url: "#builders",
    external: false,
  },
  {
    label: "Explore Tasks",
    url: "https://app.bepro.network",
    external: true,
  },
  {
    label: "Blog",
    url: "https://blog.bepro.network",
    external: true,
  },
];

const Nav = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <Navbar
      menu={menu}
      ctaValue="Open App"
      ctaUrl="https://app.bepro.network"
      drawerOpened={drawerOpened}
      drawerOnClick={() => {
        setDrawerOpened(!drawerOpened);
      }}
    />
  );
};

export default Nav;
