import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | CHAR',
  description: 'Read the Privacy Policy explaining how CHAR collects, uses, and protects your personal information on charfoods.com.ng.',
};

const INTRO = [
  'At CHAR, we respect your privacy and are committed to protecting the personal information you provide when you use our website, place an order or communicate with us.',
  'CHAR is a food brand operated by De KITCHEN MASTER Culinary & Hospitality Services Ltd, a Nigerian culinary and hospitality company.',
  'This Privacy Policy explains what information we collect, why we collect it, how we use it, how we protect it and the choices available to you when using charfoods.com.ng.',
];

const SECTIONS = [
  {
    heading: '1. INFORMATION WE COLLECT',
    body: 'When you use the CHAR website or place an order, we may collect information such as:',
    list: [
      'Full name',
      'Telephone number',
      'WhatsApp number, where provided',
      'Email address',
      'Delivery address',
      'Order details',
      'Payment and transaction information',
      'Information provided when contacting customer support',
      'Dietary, allergy or special order information voluntarily provided by you',
    ],
    trailer:
      'We may also automatically collect certain technical information when you visit our website, such as your device type, browser type, IP address, pages visited, approximate location and information about how you interact with our website.',
  },
  {
    heading: '2. HOW WE COLLECT YOUR INFORMATION',
    body: 'We may collect personal information when you:',
    list: [
      'Create or submit an order',
      'Complete our checkout form',
      'Contact us by phone, email or WhatsApp',
      'Submit an enquiry or complaint',
      'Subscribe to communications, where available',
      'Interact with our website',
      'Participate in promotions or other activities organised by CHAR',
    ],
    trailer:
      'Some information may also be collected automatically through cookies and similar technologies. Please see our Cookies Policy for more information.',
  },
  {
    heading: '3. HOW WE USE YOUR INFORMATION',
    body: 'We may use your information to:',
    list: [
      'Process and fulfil your food orders',
      'Confirm and communicate with you about your order',
      'Arrange delivery',
      'Process and verify payments',
      'Respond to enquiries, complaints and customer-service requests',
      'Provide information about products or services you have requested',
      'Improve our website, menu and customer experience',
      'Understand how customers use our website',
      'Prevent fraud, misuse and security threats',
      'Maintain business and transaction records',
      'Comply with applicable legal and regulatory requirements',
    ],
    trailer:
      'Where we send marketing communications, you will have the opportunity to opt out where required by applicable law.',
  },
  {
    heading: '4. PAYMENT INFORMATION',
    body: 'Where CHAR offers online payment, payments may be processed through third-party payment service providers.',
    trailer:
      'CHAR does not intentionally collect or store your complete debit or credit card number, PIN or other sensitive payment credentials on our own systems when payment is processed by an authorised payment provider.\n\nPayment providers may collect and process payment information according to their own privacy policies and terms.',
  },
  {
    heading: '5. SHARING YOUR INFORMATION',
    body: 'CHAR does not sell or rent your personal information.',
    trailer:
      'We may share relevant information with trusted third parties where reasonably necessary to provide our services. These may include:',
    list: [
      'Payment processors',
      'Delivery and logistics providers',
      'Website hosting and technology providers',
      'Analytics and website-performance providers',
      'Professional advisers or service providers',
      'Government, regulatory or law-enforcement authorities where legally required',
    ],
    trailer2: 'We only intend to share information that is reasonably necessary for the relevant purpose.',
  },
  {
    heading: '6. DELIVERY INFORMATION',
    body: 'When you place an order, information such as your name, phone number and delivery address may need to be provided to a delivery provider, rider or other relevant service provider so that your order can be successfully delivered.',
  },
  {
    heading: '7. DATA SECURITY',
    body: 'We take reasonable technical and organisational measures to protect personal information against unauthorised access, alteration, loss, misuse, disclosure or destruction.',
    trailer:
      'However, no method of transmitting or storing information online can be guaranteed to be completely secure.\n\nYou should also take reasonable steps to protect your personal information, including keeping passwords, payment credentials and account information confidential where applicable.',
  },
  {
    heading: '8. HOW LONG WE KEEP YOUR INFORMATION',
    body: 'We retain personal information only for as long as reasonably necessary for the purposes for which it was collected, including fulfilling orders, maintaining business records, resolving disputes, preventing fraud and complying with legal or regulatory obligations.',
    trailer:
      'When information is no longer required, we may securely delete, anonymise or otherwise dispose of it where appropriate.',
  },
  {
    heading: '9. COOKIES AND SIMILAR TECHNOLOGIES',
    body: 'CHAR may use cookies and similar technologies to help our website function, remember preferences, understand website usage and improve the customer experience.',
    trailer:
      'Some cookies may be provided by third-party services used on our website.\n\nFor more information about how cookies are used and the choices available to you, please see our Cookies Policy.',
  },
  {
    heading: '10. YOUR PRIVACY RIGHTS',
    body: 'Subject to applicable law, you may have rights regarding your personal information, including the right to:',
    list: [
      'Request access to personal information we hold about you',
      'Request correction of inaccurate or incomplete information',
      'Request deletion of personal information in appropriate circumstances',
      'Object to or restrict certain processing',
      'Withdraw consent where processing is based on consent',
      'Request information about how your personal information is being processed',
      'Make a complaint regarding the handling of your personal information',
    ],
    trailer: 'Some rights may be subject to legal or other applicable limitations.',
  },
  {
    heading: '11. CHILDREN\u2019S PRIVACY',
    body: 'CHAR\u2019s website and ordering services are intended for general customers and are not specifically directed at children.',
    trailer:
      'We do not knowingly seek to collect personal information from children for purposes unrelated to providing our services.\n\nIf you believe a child has provided personal information to us without appropriate permission, please contact us so that we can review the matter.',
  },
  {
    heading: '12. THIRD-PARTY WEBSITES AND SERVICES',
    body: 'Our website may contain links, integrations or services provided by third parties.',
    trailer:
      'If you follow a link to a third-party website or use a third-party service, that service may have its own privacy policy and terms.\n\nCHAR is not responsible for the privacy practices of third-party websites or services that we do not control.',
  },
  {
    heading: '13. INTERNATIONAL DATA TRANSFERS',
    body: 'Some technology, payment, hosting, analytics or other service providers we use may process information outside Nigeria.',
    trailer:
      'Where personal information is transferred or processed outside Nigeria, CHAR will take reasonable steps to ensure that such processing is carried out in accordance with applicable data-protection requirements.',
  },
  {
    heading: '14. CHANGES TO THIS PRIVACY POLICY',
    body: 'We may update this Privacy Policy from time to time to reflect changes in our services, technology, business practices or applicable laws.',
    trailer:
      'When we make changes, the updated version will be published on charfoods.com.ng together with a revised effective or updated date.\n\nWe encourage you to review this page periodically.',
  },
  {
    heading: '15. CONTACT US',
    body: 'If you have questions, concerns or requests regarding this Privacy Policy or the way CHAR handles your personal information, please contact us.',
    contactLines: [
      'CHAR',
      'Operated by De KITCHEN MASTER Culinary & Hospitality Services Ltd',
      'Lagos, Nigeria',
      'Website: charfoods.com.ng',
      'Email: support@charfoods.com.ng',
      'Phone: +234 800 CHAR FOOD (+234 800 2427 3663)',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-[#E85D2D] hover:text-[#E85D2D]/80 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Menu
        </Link>

        <article className="prose dark:prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/70 prose-strong:text-white">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="not-prose text-white/50 text-sm mb-2">Effective Date: September 2026</p>
          <p className="not-prose text-white/50 text-sm mb-8">
            Last Updated: September 2026 &middot; Website:{' '}
            <a href="https://charfoods.com.ng" className="text-[#E85D2D] hover:text-[#E85D2D]/80">
              charfoods.com.ng
            </a>
          </p>

          {INTRO.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          {SECTIONS.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.list && (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {section.trailer && (
                <>
                  {section.trailer.split('\n\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </>
              )}
              {section.trailer2 && <p>{section.trailer2}</p>}
              {section.contactLines && (
                <ul>
                  {section.contactLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}