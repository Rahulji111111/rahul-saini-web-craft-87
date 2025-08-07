import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-text-gradient bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Terms and conditions for using our services
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using PixelCraft Studio's services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Services Provided</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">PixelCraft Studio provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Custom website development and design</li>
                  <li>Data scraping and analytics solutions</li>
                  <li>API integration and automation services</li>
                  <li>Website maintenance and support</li>
                  <li>Digital consulting and strategy</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Client Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">As a client, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate and complete information necessary for project completion</li>
                  <li>Respond to communications and requests for feedback in a timely manner</li>
                  <li>Make payments according to the agreed schedule</li>
                  <li>Respect intellectual property rights</li>
                  <li>Use our services in compliance with applicable laws and regulations</li>
                  <li>Provide necessary access to systems, accounts, or platforms when required</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Payment Schedule</h4>
                  <p className="text-muted-foreground">
                    Payment terms will be specified in individual project agreements. Typically, we require:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mt-2">
                    <li>50% deposit before project commencement</li>
                    <li>50% balance upon project completion</li>
                    <li>Monthly payments for ongoing maintenance services</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Late Payments</h4>
                  <p className="text-muted-foreground">
                    Late payments may result in project suspension and additional fees. Accounts overdue by 30 days 
                    may be subject to collection proceedings.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Client Ownership</h4>
                  <p className="text-muted-foreground">
                    Upon full payment, clients receive ownership of the final deliverables, including custom code, 
                    designs, and content created specifically for their project.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Third-Party Components</h4>
                  <p className="text-muted-foreground">
                    Projects may include third-party libraries, frameworks, or tools that remain under their respective licenses. 
                    We retain rights to our methodologies, processes, and any reusable components.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Warranties and Disclaimers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Service Warranty</h4>
                  <p className="text-muted-foreground">
                    We warrant that our services will be performed with reasonable care and skill. We provide a 30-day 
                    warranty on bug fixes for custom development work.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Disclaimer</h4>
                  <p className="text-muted-foreground">
                    Services are provided "as is" without warranty of any kind. We do not guarantee specific results, 
                    rankings, or performance metrics unless explicitly stated in writing.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  PixelCraft Studio's liability for any claim arising from our services shall not exceed the total 
                  amount paid by the client for the specific project. We shall not be liable for any indirect, 
                  incidental, special, or consequential damages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Project Timeline and Delays</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Project timelines are estimates based on the scope of work and client responsiveness. Delays may occur due to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Changes in project scope or requirements</li>
                  <li>Delayed client feedback or approvals</li>
                  <li>Technical complexities or third-party dependencies</li>
                  <li>Force majeure events beyond our control</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">By Client</h4>
                  <p className="text-muted-foreground">
                    Clients may terminate projects with 7 days written notice. Payment is due for all work completed 
                    up to the termination date.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">By PixelCraft Studio</h4>
                  <p className="text-muted-foreground">
                    We may terminate services for non-payment, breach of terms, or if continuing the project becomes 
                    impractical or impossible.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We maintain strict confidentiality regarding client information, business processes, and proprietary data. 
                  This obligation continues beyond the completion or termination of our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Any disputes arising from these terms or our services shall be resolved through good faith negotiation. 
                  If resolution cannot be reached, disputes will be subject to binding arbitration under the rules of 
                  the applicable jurisdiction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>12. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon 
                  posting on our website. Continued use of our services constitutes acceptance of the modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>13. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <p><strong>PixelCraft Studio</strong></p>
                  <p>Email: ankit@pixelcraftstudio.pro</p>
                  <p>Website: pixelcraftstudio.pro</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;