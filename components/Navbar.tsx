"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Lorem ipsum",
    href: "/",
    description: "lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum",
    href: "/",
    description: "lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum",
    href: "/",
    description: "lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum",
    href: "/",
    description: "lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum",
    href: "/",
    description: "lorem ipsum dolor sit amet",
  },
  {
    title: "Lorem ipsum",
    href: "/",
    description: "lorem ipsum dolor sit amet",
  },
];

export function NavigationMenuComponent() {
  return (
    <header className="w-full border-b px-6 py-4 bg-background">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-semibold">
          <div className="flex items-center justify-between gap-1">
            <Image
              src="https://play-lh.googleusercontent.com/4Bo52In0VLj_Ji7RWDdy48c9MkrknMy1-EwI9gQETP-2pN87qVTBXia2AD5ePMRScmk=w240-h480-rw"
              alt="Spotter logo"
              width={25}
              height={25}
            />
            spotter.ai
          </div>
        </Link>

        <NavigationMenu className="hidden md:flex absolute left-1/2 -translate-x-1/2">
          <NavigationMenuList className="flex space-x-0 text-neutral-700">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="text-xs">Product</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] p-4">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Spotter</div>
                        <p className="text-sm leading-tight text-muted-foreground">Lorem ipsum dolor sit amet.</p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/docs" title="Lorem">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, eveniet?
                  </ListItem>
                  <ListItem href="/docs/installation" title="Lorem">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse?
                  </ListItem>
                  <ListItem href="/docs/primitives/typography" title="Lorem">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="text-xs">Use cases</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
                  {components.map((component, i) => (
                    <ListItem key={i} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="text-xs">Developers</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
                  {components.map((component, i) => (
                    <ListItem key={i} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <span className="text-xs">Resources</span>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px] p-4">
                  {components.map((component, i) => (
                    <ListItem key={i} title={component.title} href={component.href}>
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/docs">
                  <span className="text-xs">Demo</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/docs">
                  <span className="text-xs">Pricing</span>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Button variant="link" className="text-teal-600" size="sm">
            Login
          </Button>
          <Button variant="outline" className="border-1 border-teal-600 text-teal-600" size="sm">
            Sign in
          </Button>
          <Button variant="outline" className="bg-teal-600 text-background" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
