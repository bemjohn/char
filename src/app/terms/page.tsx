import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | CHAR',
  description: 'Read the Terms & Conditions governing the use of charfoods.com.ng and orders placed with CHAR.',
};

const SECTIONS = [
  {
    heading: '1. USE OF OUR WEBSITE',
    body: 'By accessing and using charfoods.com.ng, you confirm that you are at least 18 years of age or are accessing the website under the supervision of a parent or guardian. You agree to use this website solely for lawful purposes, to browse the menu, and to place orders for food products. You may not attempt to disrupt the operation of the website, tamper with its security, or misuse any content made available to you.',
  },
  {
    heading: '2. ORDERS',
    body: 'All orders placed through our website, by telephone, or via WhatsApp are subject to acceptance by CHAR. Placing an order constitutes an offer which we may accept, decline, or cancel at our discretion, including where the ordered items are unavailable or where an error has occurred regarding the menu, pricing, or your delivery details. We will confirm the details of accepted orders through the contact information you provide.',
  },
  {
    heading: '3. MENU, FOOD DESCRIPTIONS AND IMAGES',
    body: 'We make every effort to ensure that the descriptions of menu items and the images displayed on this website are accurate. Images are indicative only and the actual food served may differ slightly in appearance due to preparation, portioning, and seasonal availability. Menu items and availability may change from time to time without prior notice.',
  },
  {
    heading: '4. PRICES (Nigerian Naira ₦)',
    body: 'All prices displayed on this website are quoted in Nigerian Naira (₦) and are inclusive of applicable taxes unless otherwise stated. While we strive to keep our pricing current and accurate, prices may change without notice. The price payable for an order is the price displayed at the time you place your order and before your order is confirmed.',
  },
  {
    heading: '5. PAYMENT',
    body: 'Payment for orders may be made using the payment methods we make available from time to time, including bank transfer, card payments, and cash on delivery where offered. By submitting payment details, you confirm that the payment method is valid and that you are authorised to use it. We use reputable payment processors and take reasonable steps to keep your payment information secure; however, we are not responsible for the security practices of third-party payment providers.',
  },
  {
    heading: '6. FOOD PREPARATION AND ALLERGIES',
    body: 'All food is prepared in a kitchen that handles major allergens, including gluten, dairy, eggs, peanuts, tree nuts, soy, fish, and shellfish. While we take care to prepare every item fresh to order, we cannot guarantee that any dish is completely free of allergens. If you have a food allergy or intolerance, please contact us before placing your order so that we can advise you on the suitability of menu items.',
  },
  {
    heading: '7. DELIVERY',
    body: 'We deliver within Lagos, Nigeria and to such other areas as we may specify from time to time. Delivery times are estimates and may be affected by traffic, weather, and other factors beyond our control. Delivery fees, where applicable, are stated at checkout. You are responsible for ensuring that the delivery address you provide is accurate and that someone is available to receive the order. Item-specific delivery cut-offs may apply.',
  },
  {
    heading: '8. ORDER CANCELLATION AND REFUNDS',
    body: 'You may cancel your order free of charge if it has not yet entered preparation or dispatch. Once preparation has begun or the order has been dispatched, cancellation may not be possible. If you receive an incorrect, damaged, or unsatisfactory order, please contact us within 24 hours of delivery so that we can assess the issue. Where a refund is due, it will be processed to your original payment method within a reasonable time.',
  },
  {
    heading: '9. CUSTOMER COMPLAINTS',
    body: 'Your satisfaction matters to us. If you have a complaint about any aspect of your order, our food, or our service, please reach out to us through the contact details below. We aim to acknowledge every complaint within 48 hours and to resolve it fairly and promptly.',
  },
  {
    heading: '10. PROMOTIONS AND SPECIAL OFFERS',
    body: 'From time to time we may run promotions, discounts, and special offers. Unless otherwise stated, promotional offers cannot be combined and are subject to availability. We reserve the right to withdraw, amend, or extend any promotion at any time without prior notice.',
  },
  {
    heading: '11. INTELLECTUAL PROPERTY',
    body: 'All content on this website, including text, graphics, logos, images, and the overall arrangement and look of the site, is the property of CHAR or its licensors and is protected by applicable intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from any part of this website without our prior written consent.',
  },
  {
    heading: '12. THIRD-PARTY SERVICES',
    body: 'Our website and ordering process may rely on or link to third-party services, including payment processors and messaging platforms used for order confirmation. These services have their own terms and privacy policies, which we encourage you to review. We are not responsible for the content, availability, or practices of any third-party website or service.',
  },
  {
    heading: '13. WEBSITE AVAILABILITY',
    body: 'We aim to keep this website available at all times but do not guarantee uninterrupted access. The website may be taken offline for scheduled maintenance or in the event of technical difficulties, and we accept no liability for loss or inconvenience arising from downtime or temporary unavailability.',
  },
  {
    heading: '14. LIMITATION OF LIABILITY',
    body: 'To the fullest extent permitted by law, CHAR shall not be liable for any indirect, incidental, special, or consequential losses arising out of or in connection with your use of this website or the supply of any products, including loss of profits, data, or goodwill. Our total liability in respect of any single order shall not exceed the amount you paid for that order.',
  },
  {
    heading: '15. PRIVACY',
    body: 'We collect and process your personal information, including your name, delivery address, phone number, and order details, in order to fulfil your orders and to improve our service. By placing an order you consent to this processing. For full details of how we handle your data, please review our Privacy Policy.',
  },
  {
    heading: '16. CHANGES TO THESE TERMS',
    body: 'We may update these Terms & Conditions from time to time. When we do, the revised terms will be posted on this page together with an updated effective date. Continued use of our website or placement of an order after changes take effect constitutes acceptance of the revised terms.',
  },
  {
    heading: '17. GOVERNING LAW (Federal Republic of Nigeria)',
    body: 'These Terms & Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising out of or in connection with these terms, our website, or our products shall be subject to the exclusive jurisdiction of the courts of Lagos, Nigeria.',
  },
  {
    heading: '18. CONTACT US (charfoods.com.ng)',
    body: 'If you have any questions about these Terms & Conditions, our menu, orders, or any part of our service, you can reach us at:',
    contactLines: [
      'Email: support@charfoods.com.ng',
      'Phone: +234 800 CHAR FOOD (+234 800 2427 3663)',
      'Website: charfoods.com.ng',
      'Operator: De KITCHEN MASTER Culinary & Hospitality Services Ltd, Lagos, Nigeria',
    ],
  },
];

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold tracking-tight">Terms &amp; Conditions</h1>
          <p className="not-prose text-white/50 text-sm mb-2">
            Effective Date: September 2026
          </p>
          <p className="not-prose text-white/50 text-sm mb-2">
            Operator: CHAR (Operated by De KITCHEN MASTER Culinary &amp; Hospitality Services Ltd, Lagos, Nigeria)
          </p>
          <p className="not-prose text-white/50 text-sm mb-8">
            Website: <a href="https://charfoods.com.ng" className="text-[#E85D2D] hover:text-[#E85D2D]/80">charfoods.com.ng</a>
          </p>

          {SECTIONS.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
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