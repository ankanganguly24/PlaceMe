"use client";

import { homeMenuConfig as items } from "@/src/config/menu";
import { siteConfig } from "@/src/config/site";
import { cn } from "@/src/lib/utils";
import { useUser } from "@clerk/nextjs";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icons } from "../../icons/icons";
import LoginButton from "../buttons/login-button";

function NavbarHome() {
    const router = useRouter();

    const { user } = useUser();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            shouldHideOnScroll
            classNames={{
                base: "bg-primary z-50 sticky py-4",
                item: "font-semibold uppercase",
            }}
        >
            <NavbarContent justify="start">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />

                <NavbarBrand>
                    <button
                        className="flex cursor-pointer items-center gap-2"
                        onClick={() => router.push("/")}
                    >
                        <p className="text-3xl font-bold text-white">
                            {siteConfig.name}
                        </p>
                    </button>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent
                className="hidden items-center gap-4 sm:flex"
                justify="center"
            >
                {items.mainNav.length > 0
                    ? items.mainNav.map((item, index) => (
                          <NavbarItem key={index}>
                              <Link
                                  isDisabled={index === 2}
                                  className="text-md text-white"
                                  as={NextLink}
                                  href={item.href}
                              >
                                  {item.title}
                              </Link>
                          </NavbarItem>
                      ))
                    : null}
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="text-md bg-transparent p-0 font-semibold uppercase text-white data-[hover=true]:bg-transparent"
                                endContent={
                                    <Icons.chevronDown className="h-4 w-4" />
                                }
                                radius="sm"
                                variant="light"
                            >
                                More
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>

                    <DropdownMenu
                        aria-label="More"
                        className="w-[280px]"
                        itemClasses={{
                            base: "gap-4",
                            title: "font-semibold",
                        }}
                    >
                        {items.subNav.map((item, index) => {
                            const iconColors = [
                                "text-orange-500",
                                "text-blue-500",
                                "text-warning",
                                "text-danger",
                                "text-success",
                                "text-sky-500",
                            ];

                            const Icon = Icons[item.icon];

                            return (
                                <DropdownItem
                                    key={item.title.replace(" ", "-")}
                                    description={item.description}
                                    startContent={
                                        <Icon
                                            className={cn(
                                                "h-4 w-4",
                                                iconColors[index]
                                            )}
                                        />
                                    }
                                    onPress={() => router.push(item.href)}
                                >
                                    {item.title}
                                </DropdownItem>
                            );
                        })}
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    {/* <LoginButton /> */}

                    {user ? (
                        <Button as={Link} href="/profile">
                            {user.username}
                        </Button>
                    ) : (
                        <LoginButton />
                    )}
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}

export default NavbarHome;
