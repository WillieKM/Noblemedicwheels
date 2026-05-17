export function medicalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: "Noble Medic Wheels",
    url: "https://www.noblemedicwheels.com",
    telephone: "+1-253-374-9087",
    email: "info@noblemedicwheels.com",
    image: "https://www.noblemedicwheels.com/logo.jpg",
    description:
      "ADA-compliant non-emergency medical transportation serving King and Pierce County. Wheelchair-accessible rides for dialysis, doctor visits, hospital discharges, and more.",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "06:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Seattle" },
      { "@type": "City", name: "Renton" },
      { "@type": "City", name: "Kent" },
      { "@type": "City", name: "Federal Way" },
      { "@type": "City", name: "Burien" },
      { "@type": "City", name: "Tukwila" },
      { "@type": "City", name: "SeaTac" },
      { "@type": "City", name: "Des Moines" },
      { "@type": "City", name: "Tacoma" },
      { "@type": "City", name: "Lakewood" },
      { "@type": "City", name: "Puyallup" },
      { "@type": "City", name: "Spanaway" },
      { "@type": "City", name: "Parkland" },
      { "@type": "City", name: "Fife" },
      { "@type": "City", name: "University Place" },
      { "@type": "City", name: "Everett" },
      { "@type": "City", name: "Marysville" },
      { "@type": "City", name: "Lynnwood" },
      { "@type": "City", name: "Bothell" },
      { "@type": "City", name: "Edmonds" },
      { "@type": "City", name: "Mukilteo" },
      { "@type": "City", name: "Mill Creek" },
      { "@type": "City", name: "Snohomish" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "NEMT Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Dialysis Transportation" },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Wheelchair-Accessible Transportation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ambulatory Medical Appointments",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hospital Discharge Transportation",
          },
        },
      ],
    },
  };
}
