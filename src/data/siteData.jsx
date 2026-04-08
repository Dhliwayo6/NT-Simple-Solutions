import {FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaHardHat,
  FaPencilRuler,
  FaCogs,
  FaBullseye,
  FaRocket,
  FaClipboardList,
  FaDollarSign,} from "react-icons/fa";

import project from "../images/1.jpg";
import project1 from "../images/2.jpeg";
import project2 from "../images/3.jpeg";
import project3 from "../images/4.jpeg";
import project4 from "../images/5.jpeg";
import project5 from "../images/6.jpeg";
import project6 from "../images/7.jpeg";
import project7 from "../images/8.jpeg";
import project8 from "../images/9.jpeg";
import project9 from "../images/10.jpeg";
import project10 from "../images/11.jpeg";
import project11 from "../images/12.jpeg";
import project12 from "../images/13.jpeg";
import project13 from "../images/14.jpeg";
import project14 from "../images/15.jpeg";
import project15 from "../images/16.jpeg";
import project16 from "../images/17.jpeg";
import project17 from "../images/18.jpeg";
import project18 from "../images/19.jpeg";

export const NAV_LINKS = [
  { id: "home",  label: "Home", icon: "home", path: "/" },
  { id: "about", label: "About", icon: "about", path: "/about" },
  { id: "services", label: "Services", icon: "services", path: "/services" },
  { id: "projects", label: "Gallery",  icon: "gallery", path: "/projects" },
  { id: "contact", label: "Contact", icon: "contact", path: "/contact" },
];

export const HERO_STATS = [
  { value: "5+",   label: "Years Experience" },
  { value: "50+",  label: "Projects Delivered" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "5-in-1", label: "Integrated Services" },
];

export const SERVICES = [
  {
    icon: <FaHardHat />,
    title: "Construction & Execution",
    sub: "New Builds · Renovation · General Contracting",
    desc: "From foundation to finish, we deliver with precision, speed, and unwavering quality control on every site.",
  },
  {
    icon: <FaPencilRuler />,
    title: "Architecture & Design",
    sub: "Conceptual Planning · Working Drawings",
    desc: "High to low-density residential plans. Beautiful, functional spaces brought from concept to certified blueprint.",
  },
  {
    icon: <FaCogs />,
    title: "Structural Engineering",
    sub: "Design & Analysis · Certification",
    desc: "Rigorous structural analysis and detailed engineering drawings ensuring your build is fully safe and certified.",
  },
  {
    icon: <FaClipboardList />,
    title: "Strategic Project Management",
    sub: "Scheduling · Risk Management · Quality Control",
    desc: "Proactive coordination across all project phases, keeping you informed, on schedule, and within budget.",
  },
  {
    icon: <FaDollarSign />,
    title: "Costing & Financial Control",
    sub: "Budget Forecasting · Procurement",
    desc: "Transparent costing analysis and procurement management so you face no financial surprises at handover.",
  },
];

export const TARGET_MARKET = [
  "Commercial & Corporate Developers",
  "Institutional Clients (Education, Healthcare)",
  "Industrial & Manufacturing Companies",
  "Private Property Investors & Groups",
  "Diaspora Clients",
];

export const PROJECT_IMAGES = [
  { src: project, alt: "", title: "Backfilling Foundation Walls", category: "Residential" },
  { src: project5, alt: "", title: "Foundation Trenches & Concrete Pilars", category: "Residential"},
  // { src: project6, alt: "", title: "Freshly Poured Concrete Extension Slab", category: "Residential"},
  { src: project12, alt: "", title: "Poured Concrete Slab Over Brick Structure", category: "Residential"},
  { src: project13, alt: "",title: "Poured Concrete Slab", category: "Residential", category: "Residential"},
  { src: project14, alt: "", title: "Sand backfill in Foundation Footprint", category: "Residential"},
  { src: project15, alt: "", title: "Single-story brick framework", category: "Residential"},
  { src: project16, alt: "", title: "Steel Rebar Grid for Concrete Slab", category: "Residential"},
  { src: project17, alt: "", title: "Double-story brick home", category: "Residential" },
  { src: project18, alt: "", title: "Double-story front house facade", category: "Residential" },
  { src: project10, alt: "", title: "Painted Exterior Wall", category: "Residential" },
  { src: project4, alt: "", title:"Commercial Canopy Framework", category: "Commercial" },
  { src: project7, alt: "", title: "Interior Brick Wall Construction", category: "Residential" },
  { src: project11, alt: "", title: "Plastered single-story home", category: "Residential" },
  // { src: project8, alt: "", title: "Multi-story Brick Building Exterior", category: "Residential" },
  { src: project9, alt: "", title: "Multi-story Brick Facade", category: "Residential" },
  { src: project2, alt: "", title:"Brick Foundation Footprint", title: "Brick Foundation Footprint", category: "Residential" },
  { src: project1 , alt: "", title:"Backfilling foundation", category: "Residential" },
  { src: project3, alt: "", title: "Brick House Construction",  category: "Residential"},
];

export const CLIENTS = [
  "Milmod Nduna",
  "Beauty Zananie",
  "Keith MJ Karuma",
  "Emmah Hadebe",
  "Nqobile Nsingo",
  "Tryphine Mupane",
];


export const PARTNERS = [
  { name: "Phuthi Properties",  type: "Real Estate Company" },
  { name: "White Oxy Properties", type: "Real Estate Company" },
  { name: "Mo Quach Drafting",  type: "Architecture & Drafting" },
];

export const CONTACT_INFO = [
  { icon: <FaMapMarkerAlt />, label: "ADDRESS", value: "Suite 701, 7th Floor, NRZ Building, Bulawayo, Zimbabwe" },
  { icon: <FaPhoneAlt />, label: "Phone", value: "+263 777 666 550  /  +263 784 250 192" },
  { icon: <FaEnvelope />, label: "Email", value: "ntsimplesolutionsconstruction@gmail.com" },
  { icon: <FaInstagram />, label: "Instagram", value: "@ntsimplesolutionsconstruction" },
  { icon: <FaTiktok />, label: "TikTok", value: "@ntsimplesolutions" },
  { icon: <FaWhatsapp />, label: "WhatsApp", value: "0777 666 550", link: "https://wa.me/263777666550" },
];
