export function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Northern Analytics",
    "url": "https://northern-analytics.com",
    "logo": "https://northern-analytics.com/assets/img/logo.png",
    "description": "Expert business intelligence, process automation, and custom application development services to transform your business operations.",
    "founder": {
      "@type": "Person",
      "name": "Jamey Gulley"
    },
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-123-4567",
      "contactType": "Customer Service",
      "email": "hello@northern-analytics.com"
    },
    "sameAs": [
      "https://linkedin.com/company/northern-analytics"
    ]
  }

  const servicesData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Intelligence & Process Automation",
    "provider": {
      "@type": "Organization",
      "name": "Northern Analytics"
    },
    "description": "Comprehensive business intelligence, process automation, and custom application development services",
    "serviceType": [
      "Business Intelligence",
      "Process Automation", 
      "Custom Application Development",
      "Data Analytics",
      "Workflow Optimization"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesData)
        }}
      />
    </>
  )
}