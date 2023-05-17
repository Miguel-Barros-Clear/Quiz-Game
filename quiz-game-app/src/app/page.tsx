'use client'

import { useEffect } from "react";
import { useRouter, usePathname } from 'next/navigation'
import Login from "./login/page";

export default function Home() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === '/') {
      router.push('/login')
    }
  })
  return <Login />
}
