import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Delivery Policy | CHAR',
  description: 'Read the Delivery Policy explaining how food orders placed through charfoods.com.ng are processed and delivered.',
};

const INTRO = [
  'At CHAR, we want every order to arrive fresh, complete and in good condition. This Delivery Policy explains how food orders placed through charfoods.com.ng are processed and delivered.',
  'CHAR is a food brand operated by De KITCHEN MASTER Culinary & Hospitality Services Ltd.',
];

const SECTIONS = [
  {
    heading: '1. ORDERING & DELIVERY SCHEDULE',
    body: 'CHAR operates its food production and delivery according to scheduled ordering periods.',
    trailer:
      'Customers will be able to select an available delivery date during the ordering process.\n\nWhere a particular delivery date is unavailable, it will not be offered for selection on the platform.\n\nBecause our meals are prepared based on confirmed orders, customers are encouraged to place their orders within the stated ordering period to secure their preferred delivery date.',
  },
  {
    heading: '2. DELIVERY AREAS',
    body: 'CHAR delivers to locations within our available service areas.',
    trailer:
      'Delivery availability and delivery charges may vary depending on the customer\u2019s location.\n\nBefore completing your order, please ensure that the delivery address provided is accurate and complete.\n\nIf your location is outside our current delivery area, we may be unable to fulfil the delivery.',
  },
  {
    heading: '3. DELIVERY FEES',
    body: 'Delivery charges are determined based on the delivery location and applicable delivery arrangements.',
    trailer:
      'Where applicable, the delivery fee will be displayed or communicated to the customer before the order is completed.\n\nCustomers are responsible for paying any applicable delivery fee associated with their order.',
  },
  {
    heading: '4. DELIVERY TIMES',
    body: 'Customers will be provided with an estimated delivery period or delivery window where applicable. Delivery times may be affected by factors including:',
    list: ['Traffic', 'Weather conditions', 'Road conditions', 'Unexpected delays', 'Rider availability', 'Incorrect or incomplete delivery information', 'Customer unavailability', 'Other circumstances outside CHAR\u2019s reasonable control'],
    trailer:
      'While we will make reasonable efforts to deliver within the communicated period, delivery times are estimates and cannot always be guaranteed.',
  },
  {
    heading: '5. DELIVERY ADDRESS',
    body: 'Customers are responsible for providing a correct and accessible delivery address.',
    trailer:
      'Please ensure that the address includes sufficient information to allow the delivery rider to locate the destination.\n\nCustomers should also provide a valid and reachable telephone number.\n\nCHAR may contact you if additional information is required to complete your delivery.',
  },
  {
    heading: '6. RECEIVING YOUR ORDER',
    body: 'Customers should ensure that they or an authorised person is available to receive the order.',
    trailer:
      'Once the order arrives at the provided delivery location, the customer or authorised recipient should check the order where reasonably possible before accepting it.\n\nIf someone else is receiving the order on your behalf, you are responsible for ensuring that the person is authorised to receive it.',
  },
  {
    heading: '7. FAILED DELIVERY',
    body: 'A delivery may be considered unsuccessful where:',
    list: [
      'The customer is unavailable to receive the order',
      'The delivery address provided is incorrect or incomplete',
      'The customer cannot be reached using the provided contact details',
      'The customer refuses to receive the order without an applicable reason',
      'Access to the delivery location is reasonably unavailable',
    ],
    trailer:
      'Where a delivery attempt is unsuccessful because of information or circumstances attributable to the customer, CHAR may contact the customer to arrange another delivery attempt.\n\nAdditional delivery charges may apply where a new delivery attempt is required.',
  },
  {
    heading: '8. DELAYS',
    body: 'CHAR will make reasonable efforts to communicate significant delivery delays where we become aware of them.',
    trailer:
      'Where a delay occurs due to circumstances outside our reasonable control, we will work to complete the delivery as soon as reasonably possible.\n\nIf CHAR is unable to fulfil a confirmed order, we will contact the customer to discuss an appropriate resolution.',
  },
  {
    heading: '9. ORDER CHECKING',
    body: 'Customers are encouraged to check their order upon delivery.',
    trailer:
      'If you receive an incorrect, incomplete, damaged or materially different order, please contact CHAR as soon as possible after delivery.\n\nTo help us investigate the issue, we may request:',
    list: ['Order number', 'Description of the issue', 'Photographs of the food or packaging', 'Other relevant information'],
    trailer2:
      'Please do not dispose of the affected food or packaging before contacting us where it is reasonably possible to retain it for review.',
  },
  {
    heading: '10. FOOD SAFETY AFTER DELIVERY',
    body: 'Once an order has been delivered and accepted by the customer, responsibility for appropriate handling, storage and consumption of the food passes to the customer.',
    trailer:
      'Customers should follow any storage or reheating instructions provided with their order.\n\nPerishable food should be handled and stored appropriately and should not be left at room temperature for extended periods.',
  },
  {
    heading: '11. CHANGES TO DELIVERY INFORMATION',
    body: 'If you need to change your delivery address, delivery date or other delivery information after placing an order, contact CHAR as soon as possible.',
    trailer:
      'We will try to accommodate changes where possible.\n\nHowever, changes may not be possible once the order has entered preparation or dispatch.\n\nAdditional delivery charges may apply where a change results in additional delivery requirements.',
  },
  {
    heading: '12. THIRD-PARTY DELIVERY PROVIDERS',
    body: 'CHAR may use independent riders, logistics companies or other delivery providers to deliver orders.',
    trailer:
      'Where a third-party delivery provider is used, relevant customer information may be shared with the provider as reasonably necessary to complete the delivery.\n\nCHAR will work with its delivery partners to provide a reliable service, but certain delays or circumstances involving third-party delivery providers may be outside CHAR\u2019s direct control.',
  },
  {
    heading: '13. CONTACT US',
    body: 'If you have questions about delivery or need assistance with an existing order, please contact CHAR using the contact details provided on our website.',
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

export default function DeliveryPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Delivery Policy</h1>
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