import {DropdownProfile} from "@/components/shared"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
      <DropdownProfile />
      {children}
    </section>
}
