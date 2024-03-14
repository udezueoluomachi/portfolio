import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faArrowDown, faChevronDown, faLaptopCode, faDatabase, faMobileAlt, faChartPie, faShapes, faHeadSideVirus, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import './globals.css'


library.add(fab, faArrowRight, faArrowDown, faChevronDown, faLaptopCode, faDatabase, faMobileAlt, faChartPie, faShapes, faHeadSideVirus, faEnvelope, faBars)

export const metadata = {
 title : "Home - Udezue Oluomachi Chimaobi",
 "og:title" : "Udezue Oluomachi Chimaobi | Full Stack Developer",
 "og:url" : "https://dream-dev.vercel.app",
 "og:site_name" : "Udezue Oluomachi Chimaobi",
 "og:image" : "https://udezueoluomachi.github.io/udezueoluomachi/images/social.jpg",
 "og:description" : "Udezue Oluomachi Chimaobi , A Full Stack Developer Proficient in web development and API development",
 description : "Udezue Oluomachi Chimaobi , A Full Stack Developer Proficient in web development and API development",
 "twitter:title" : "Udezue Oluomachi Chimaobi | Full Stack Developer",
 "twitter:image" : "https://udezueoluomachi.github.io/udezueoluomachi/images/social.jpg",
 "twitter:url" : "https://udezueoluomachi.github.io/udezueoluomachi",
 "twitter:description" : "Udezue Oluomachi Chimaobi , A Full Stack Developer Proficient in web development and API development",
}
export default function RootLayout({ children }) {
    return (
        <>
        <html lang="en" className="select-none box-border">
        <body className="bg-black-800 w-screen h-screen font-jetBrains overflow-x-hidden">
            <div id="root" className="h-full w-full">{children}</div>
        </body>
        </html>
        </>
    )
  }