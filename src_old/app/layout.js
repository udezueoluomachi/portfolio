import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faArrowDown, faChevronDown, faLaptopCode, faDatabase, faMobileAlt, faChartPie, faShapes, faHeadSideVirus, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import './globals.css'


library.add(fab, faArrowRight, faArrowDown, faChevronDown, faLaptopCode, faDatabase, faMobileAlt, faChartPie, faShapes, faHeadSideVirus, faEnvelope, faBars)

export const metadata = {
 title : "Dream - Udezue Oluomachi Chimaobi",
 description : "Udezue Oluomachi Chimaobi , A Full Stack Developer & Designer driven by innovation.",
 metadataBase : "https://dream-dev.vercel.app"
}
export default function RootLayout({ children }) {
    return (
        <>
        <html lang="en" className="box-border bg-black-800">
        <body className="bg-black-800/[0.97] w-screen h-screen font-jetBrains overflow-hidden">
            <div id="root" className="h-full w-full">{children}</div>
        </body>
        </html>
        </>
    )
  }