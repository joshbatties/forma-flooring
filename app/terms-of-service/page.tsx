import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-gray-600 text-lg">
            Last updated: {new Date().toLocaleDateString('en-AU', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to FORMA FLOORING. These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. By accessing or using our website, requesting quotes, purchasing products, or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you disagree with any part of these Terms, you may not access our website or use our services.
            </p>
          </section>

          {/* Company Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-3">FORMA FLOORING</h3>
              <div className="space-y-1 text-gray-700">
                <p><strong>ABN:</strong> 12 345 678 901</p>
                <p><strong>Address:</strong> 123 Woodcraft Lane, Melbourne, VIC 3000</p>
                <p><strong>Phone:</strong> (03) 9123 4567</p>
                <p><strong>Email:</strong> info@formaFlooring.com.au</p>
              </div>
            </div>
          </section>

          {/* Acceptance of Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using our services, you confirm that:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>You are at least 18 years old or have parental/guardian consent</li>
              <li>You have the legal capacity to enter into binding agreements</li>
              <li>You will use our services in compliance with all applicable laws</li>
              <li>All information you provide is accurate and complete</li>
            </ul>
          </section>

          {/* Use of Website */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Website Usage</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may use our website for lawful purposes only, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Browsing product information and specifications</li>
              <li>Requesting quotes and product samples</li>
              <li>Making legitimate inquiries about our services</li>
              <li>Placing orders for timber flooring products</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Prohibited Use</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Use our website for any unlawful purpose or activity</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt our website&apos;s functionality</li>
              <li>Upload or transmit viruses, malware, or harmful code</li>
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Use automated tools to extract data from our website</li>
              <li>Impersonate others or provide false information</li>
            </ul>
          </section>

          {/* Products and Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Products and Services</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Product Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to provide accurate product descriptions, specifications, and pricing. However:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Product colors and textures may vary from website images</li>
              <li>Specifications are subject to manufacturing tolerances</li>
              <li>Prices are subject to change without notice</li>
              <li>Product availability may vary and is not guaranteed</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Quotes and Estimates</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Quote requests and estimates are provided for informational purposes and:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Are valid for 30 days unless otherwise specified</li>
              <li>May require site inspection for accuracy</li>
              <li>Do not constitute a binding contract until formally accepted</li>
              <li>May be subject to additional terms and conditions</li>
            </ul>
          </section>

          {/* Orders and Payment */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Orders and Payment</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Order Process</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When placing an order:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>You are making an offer to purchase at the stated price</li>
              <li>We reserve the right to accept or decline any order</li>
              <li>Order confirmation constitutes acceptance of your offer</li>
              <li>All sales are subject to product availability</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Payment Terms</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Payment terms include:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Deposit may be required upon order confirmation</li>
              <li>Balance due before delivery unless credit terms arranged</li>
              <li>Payment methods: Bank transfer, credit card, or approved credit account</li>
              <li>Late payment may incur interest charges at 2% per month</li>
              <li>All prices include GST unless otherwise stated</li>
            </ul>
          </section>

          {/* Delivery and Installation */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery and Installation</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Delivery</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Delivery terms:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Delivery dates are estimates and not guaranteed</li>
              <li>You must provide suitable access and unloading facilities</li>
              <li>Risk passes to you upon delivery</li>
              <li>Delivery charges apply unless otherwise agreed</li>
              <li>You must inspect goods upon delivery and report damage within 24 hours</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Installation Services</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When installation services are provided:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Site must be ready for installation on agreed date</li>
              <li>You are responsible for site preparation as specified</li>
              <li>Additional charges apply for variations or delays</li>
              <li>Installation warranty terms apply separately</li>
            </ul>
          </section>

          {/* Warranties and Returns */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Warranties and Returns</h2>
            <h3 className="text-xl font-medium text-gray-800 mb-3">Product Warranties</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our warranty coverage includes:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Manufacturer warranties as specified for each product</li>
              <li>Warranties against defects in materials and workmanship</li>
              <li>Installation warranty (where we provide installation)</li>
              <li>Warranties are void if products are improperly stored or installed</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 mb-3">Returns Policy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Returns are accepted under the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Defective products may be returned within 30 days</li>
              <li>Custom orders cannot be returned unless defective</li>
              <li>Products must be in original packaging and condition</li>
              <li>Return shipping costs may apply</li>
              <li>Restocking fees may apply to non-defective returns</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All website content, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Text, images, graphics, and videos</li>
              <li>Product specifications and descriptions</li>
              <li>Logos, trademarks, and brand names</li>
              <li>Website design and functionality</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Are owned by FORMA FLOORING or our licensors and are protected by intellectual property laws. You may not use, copy, or distribute this content without our written permission.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Our liability is limited to the value of products or services provided</li>
              <li>We are not liable for indirect, consequential, or special damages</li>
              <li>We are not responsible for delays due to circumstances beyond our control</li>
              <li>Nothing in these terms excludes warranties or guarantees under Australian Consumer Law</li>
            </ul>
          </section>

          {/* Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our{" "}
              <Link href="/privacy-policy" className="text-amber-600 hover:text-amber-700 underline">
                Privacy Policy
              </Link>{" "}
              to understand how we collect, use, and protect your personal information.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a dispute:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>We encourage direct communication to resolve issues amicably</li>
              <li>Formal complaints should be submitted in writing</li>
              <li>We will respond to complaints within 14 business days</li>
              <li>Unresolved disputes may be referred to mediation</li>
              <li>These Terms are governed by Victorian and Australian law</li>
            </ul>
          </section>

          {/* Termination */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              We may terminate or suspend your access to our website and services immediately, without prior notice, if you breach these Terms. Upon termination, your right to use our services ceases immediately, but any outstanding obligations remain in effect.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of our services after changes are posted constitutes acceptance of the new Terms. We recommend reviewing these Terms periodically.
            </p>
          </section>

          {/* Australian Consumer Law */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Australian Consumer Law</h2>
            <p className="text-gray-700 leading-relaxed">
              Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, warranty, or other right or remedy under the Australian Consumer Law or other applicable law that cannot be excluded, restricted, or modified by agreement.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800 mb-3">FORMA FLOORING</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@formaFlooring.com.au</p>
                <p><strong>Phone:</strong> (03) 9123 4567</p>
                <p><strong>Address:</strong> 123 Woodcraft Lane, Melbourne, VIC 3000</p>
                <p><strong>Business Hours:</strong> Monday to Friday, 8:00 AM - 5:00 PM AEST</p>
              </div>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 