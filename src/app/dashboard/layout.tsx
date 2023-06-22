"use client"
import React, { useState } from 'react';
import { Header } from "./header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return <section>
       <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {children}
    </section>
}
