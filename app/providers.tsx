'use client'
import * as React from "react";
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from "next/navigation";

export function Providers({children}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const useHref = (href: string) => process.env.BASE_PATH + href;

  return (
    <NextUIProvider navigate={router.push} useHref={useHref}>
      {children}
    </NextUIProvider>
  )
}