import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | CHAR',
  description: 'Read the Refund & Cancellation Policy for orders placed with CHAR on charfoods.com.ng.',
};

const INTRO = [
  'At CHAR, every order is prepared specifically for our customers. Because our food is freshly prepared and ingredients may be purchased or allocated specifically for an order, cancellations and refunds are subject to the terms below.',
];

const SECTIONS = [
  {
    heading: 'ORDER CANCELLATION',
    body: 'Customers may request to cancel an order before the order enters the preparation or procurement stage. Cancellation requests should be made as early as possible through our official customer service channel.',
    trailer:
      'Once an order has entered preparation, ingredients have been purchased, or production has commenced, the order may no longer be cancelled or refunded.\n\nFor scheduled orders, failure to cancel within the applicable cancellation period may result in the customer being charged for the order.',
  },
  {
    heading: 'REFUNDS',
    body: 'CHAR does not offer refunds for change of mind, incorrect orders placed by the customer, failure to provide accurate delivery information, or failure to receive an order at the agreed delivery location.',
    trailer:
      'Where CHAR is responsible for an issue with an order, such as a confirmed missing item, incorrect item supplied by CHAR, or another verified service failure, the customer should contact us as soon as possible after receiving the order.\n\nAfter reviewing the complaint, CHAR may, at its discretion, provide an appropriate remedy, which may include a replacement, partial refund, full refund, credit, or another suitable resolution.',
  },
  {
    heading: 'FOOD QUALITY COMPLAINTS',
    body: 'Because CHAR prepares fresh food, customers who have concerns about the quality, condition, or completeness of an order should contact us promptly after delivery.',
    trailer:
      'Customers may be required to provide photographs, videos, order details, or other relevant information to enable CHAR to properly investigate the complaint.\n\nA complaint does not automatically qualify for a refund. Each case will be reviewed based on the circumstances of the order.',
  },
  {
    heading: 'DELIVERY-RELATED CANCELLATIONS',
    body: 'If an order cannot be delivered because the customer provided an incorrect address, an incomplete address, an unreachable phone number, refused to receive the order, or was unavailable at the agreed delivery location, CHAR may not be responsible for issuing a refund.',
    trailer:
      'Additional delivery charges may apply where a second delivery attempt is possible.',
  },
  {
    heading: 'DELAYS',
    body: 'Delivery times provided by CHAR are estimates and may be affected by traffic, weather, road conditions, rider availability, operational circumstances, or other factors beyond our reasonable control.',
    trailer:
      'A delivery delay does not automatically qualify an order for a refund.\n\nHowever, CHAR will make reasonable efforts to communicate significant delays and resolve delivery issues appropriately.',
  },
  {
    heading: 'PROMOTIONAL ORDERS AND DISCOUNTS',
    body: 'Orders placed using promotional offers, discounts, special packages, or other limited-time offers may be subject to additional terms. Where applicable, the specific promotional terms will take precedence over the general refund policy.',
  },
  {
    heading: 'HOW TO REQUEST A CANCELLATION OR REPORT AN ISSUE',
    body: 'Customers should contact CHAR through our official customer service channel and provide:',
    list: [
      'Order number',
      'Customer name',
      'Contact details',
      'A clear explanation of the cancellation request or issue',
    ],
    trailer:
      'All refund or cancellation requests will be reviewed individually and handled in accordance with this policy.\n\nCHAR reserves the right to update this Refund & Cancellation Policy when necessary. Any changes will be published on our website and will apply from the date of publication.',
  },
];

export default function RefundPolicyPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Refund &amp; Cancellation Policy</h1>

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
              {section.trailer &&
                section.trailer.split('\n\n').map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
            </section>
          ))}

          <p className="font-semibold text-white">
            By placing an order with CHAR, you acknowledge and agree to the terms of this Refund &amp; Cancellation Policy.
          </p>
        </article>
      </div>
    </main>
  );
}