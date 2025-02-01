"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import SessionProviderClientComponent from "./auth/SessionProviderClientComponent";
import { getServerSession } from "next-auth"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const session = await getServerSession();

  // const pathname = usePathname();



  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* <div className="dark:bg-boxdark-2 dark:text-bodydark">
          {loading ? <Loader /> : children}
        </div> */}

        <SessionProviderClientComponent session={session}>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            {children}
          </div>
        </SessionProviderClientComponent>
      </body>
    </html>
  );
}
