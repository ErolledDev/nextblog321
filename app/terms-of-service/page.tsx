import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms and conditions for using our website and services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-background">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <p className="text-muted-foreground mb-6">
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Professional Blog, you accept and agree to be bound by the 
              terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Use License</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials on 
              Professional Blog's website for personal, non-commercial transitory viewing only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials on Professional Blog's website are provided on an 'as is' basis. 
              Professional Blog makes no warranties, expressed or implied, and hereby disclaims 
              and negates all other warranties including without limitation, implied warranties 
              or conditions of merchantability, fitness for a particular purpose, or non-infringement 
              of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitations</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall Professional Blog or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due to 
              business interruption) arising out of the use or inability to use the materials 
              on Professional Blog's website, even if Professional Blog or a Professional Blog 
              authorized representative has been notified orally or in writing of the possibility 
              of such damage. Because some jurisdictions do not allow limitations on implied 
              warranties, or limitations of liability for consequential or incidental damages, 
              these limitations may not apply to you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Accuracy of Materials</h2>
            <p className="text-muted-foreground leading-relaxed">
              The materials appearing on Professional Blog's website could include technical, 
              typographical, or photographic errors. Professional Blog does not warrant that 
              any of the materials on its website are accurate, complete, or current. 
              Professional Blog may make changes to the materials contained on its website 
              at any time without notice. However, Professional Blog does not make any 
              commitment to update the materials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Professional Blog has not reviewed all of the sites linked to our website and 
              is not responsible for the contents of any such linked site. The inclusion of 
              any link does not imply endorsement by Professional Blog of the site. Use of 
              any such linked website is at the user's own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">User Content</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By submitting content to our website, you grant us a non-exclusive, royalty-free, 
              perpetual, and worldwide license to use, modify, and display such content. You represent that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>You own or have the necessary rights to the content</li>
              <li>The content does not violate any third-party rights</li>
              <li>The content is not defamatory, obscene, or otherwise objectionable</li>
              <li>The content does not contain viruses or malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Prohibited Uses</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You may not use our website:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              Professional Blog may revise these terms of service for its website at any time 
              without notice. By using this website, you are agreeing to be bound by the then 
              current version of these terms of service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the 
              laws and you irrevocably submit to the exclusive jurisdiction of the courts in 
              that state or location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 p-4 bg-muted/50 rounded-lg">
              <p className="text-muted-foreground">
                Email: <a href="mailto:legal@professionalblog.com" className="text-primary hover:text-primary/80">legal@professionalblog.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}