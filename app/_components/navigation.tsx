"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 flex h-full w-full items-center justify-center border-b border-gray-300 bg-white">
      <div className="flex w-full max-w-[min(calc(100vw-2rem),var(--max-w))] items-center gap-2 md:px-4">
        {pathname !== "/" && (
          <Link
            aria-label="Back to homepage"
            href="/"
            className="group/back focus:outline-none"
          >
            <Button
              asChild
              size="icon"
              variant="ghost"
              tabIndex={-1}
              className="h-12 w-12 rounded-full p-2 transition-all hover:scale-105 active:scale-95 group-focus/back:scale-105 group-focus/back:border group-focus/back:border-primary-500 group-focus/back:bg-accent group-focus/back:text-accent-foreground"
            >
              <ArrowLeft className="focus:outline-none" />
            </Button>
          </Link>
        )}
        <Link href="/" tabIndex={-1}>
          <Image
            priority
            src="/logo.png"
            alt="Logo, homepage"
            width={135}
            className="transition-transform hover:scale-105 active:scale-95"
            height={46}
          />
        </Link>
      </div>
    </header>
  );
}
