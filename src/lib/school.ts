export const SCHOOL = {
  name: "Building Blocks Academy",
  tagline: "Advanced Education. Strong Foundations.",
  type: "Private Elementary School",
  grades: "Preschool through 5th Grade",
  street: "3515 N Washington Blvd",
  city: "Indianapolis",
  state: "IN",
  zip: "46205",
  country: "United States",
  phoneDisplay: "+1 317-498-1731",
  phoneHref: "tel:+13174981731",
} as const;

export const ADDRESS_ONE_LINE = `${SCHOOL.street}, ${SCHOOL.city}, ${SCHOOL.state} ${SCHOOL.zip}, ${SCHOOL.country}`;

export const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  ADDRESS_ONE_LINE,
)}`;

export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS_ONE_LINE,
)}&output=embed`;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/grade-levels", label: "Grade Levels" },
  { to: "/admissions", label: "Admissions" },
  { to: "/school-life", label: "School Life" },
  { to: "/contact", label: "Contact" },
] as const;

export const GRADES = [
  {
    slug: "preschool",
    title: "Preschool",
    blurb:
      "Early learners build foundational academic, social and developmental skills through engaging learning experiences.",
  },
  {
    slug: "kindergarten",
    title: "Kindergarten",
    blurb:
      "Students strengthen early literacy and number sense while building confidence and independence in the classroom.",
  },
  {
    slug: "1st-grade",
    title: "1st Grade",
    blurb:
      "Reading, writing and mathematics develop steadily through appropriately challenging daily practice.",
  },
  {
    slug: "2nd-grade",
    title: "2nd Grade",
    blurb:
      "Students apply core skills to longer texts, multi-step problems and hands-on learning activities.",
  },
  {
    slug: "3rd-grade",
    title: "3rd Grade",
    blurb:
      "Learning becomes more analytical as students explain their thinking across reading, math and science.",
  },
  {
    slug: "4th-grade",
    title: "4th Grade",
    blurb:
      "Students take on more independent work, deeper reading and progressively advanced mathematics.",
  },
  {
    slug: "5th-grade",
    title: "5th Grade",
    blurb:
      "Students consolidate strong foundations and prepare for the next stage of their academic journey.",
  },
] as const;
