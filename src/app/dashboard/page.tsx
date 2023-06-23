import { WelcomeBanner } from "./WelcomeBanner"
import {DashboardCard01} from './DashboardCard01'
import {DashboardCard04} from './DashboardCard04'
import {DashboardCard05} from './DashboardCard05'
import {DashboardCard06} from './DashboardCard06'
import {DashboardCard08} from './DashboardCard08'
import {DashboardCard09} from './DashboardCard09'
import {DashboardCard11} from './DashboardCard11'

export default function Page(){
  return (
    <>

      <WelcomeBanner />
        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
            {/* Line chart (Acme Plus) */}
            <DashboardCard01 />
            {/* Bar chart (Direct vs Indirect) */}
            <DashboardCard04 />
            {/* Line chart (Real Time Value) */}
            <DashboardCard05 />
            {/* Doughnut chart (Top Countries) */}
            <DashboardCard06 />
            {/* Line chart (Sales Over Time) */}
            <DashboardCard08 />
            {/* Stacked bar chart (Sales VS Refunds) */}
            <DashboardCard09 />
            {/* Card (Customers) */}
            <DashboardCard11 />
            {/* Card (Recent Activity) */}
        </div>
    </>
  )
}
