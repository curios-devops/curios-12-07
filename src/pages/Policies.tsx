import React from 'react';
import CollapsibleSection from '../components/policies/CollapsibleSection';

export default function Policies() {
  return (
    <div className="min-h-screen bg-black">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-medium text-white mb-4 text-center">Terms & Policies</h1>
        <h2 className="text-2xl font-medium text-gray-400 mb-12">Legal</h2>

        <div className="space-y-4">
          <CollapsibleSection
            title="Privacy Policy"
            description="Practices with respect to personal information we collect from or about you"
          >
            <div className="prose prose-invert max-w-none">
              Introduction.   (Updated: December 5, 2024 ). 

              This Privacy Policy describes how Snap-Shoot Inc. ("we," "us," or "our") collects, uses, and discloses information about individuals who use our websites (www.snap-shoot.com and related domains) to access our products, including Snap-Shoot Pro, as well as other applications, services, tools, and features, or who purchase our products or otherwise interact with us (collectively, the "Services").

              1. Changes to This Privacy Policy.

              We may modify this Privacy Policy from time to time. When we make changes, we will update the "Updated" date at the top of this policy. If we make material changes, we will notify you by email, through the Services, or by other means consistent with applicable law.

              2. Collection and Use of Your Information.

              When you use or access the Services, we collect certain categories of information about you from a variety of sources.

              2.1 Information You Provide to Us.

              Some features of the Services may require you to directly provide us with certain information about yourself:

              - Contact Information: Basic details such as name, address, phone number, and email. We use this information to perform our contract with you, provide the Services, and communicate with you.

              - Account Information: Information like username and password. We use this to maintain and secure your account.

              - Payment Information: Credit or debit card details and billing address collected via a third-party payment processor. We use this to process your payments.

              2.2 Information Collected Automatically.

              We and certain third parties automatically collect information about your interaction with the Services through cookies, pixels, tags, and other tracking technologies:

              - Device Information: Details like device type, operating system, and IP address.

              - Location Information: Approximate location based on your IP address.

              - Usage Data: Information about your interactions with the Services, including browser type, pages visited, and time spent.

              2.3 Information Collected from Other Sources.

              We may obtain information about you from outside sources:

              - Analytics Information: Data from analytics providers to understand usage and improve the Services.

              - Advertising Information: Information from marketing databases to customize advertising and marketing to you.

              - Partner Information: Information from business partners who offer you access to our Services.

              3. Your Rights and Choices.

              Depending on where you live, you may have certain rights regarding your personal information:

              - Access/Know: Request access to personal information we hold about you
              - Delete: Request deletion of your personal information
              - Correct: Request correction of inaccurate personal information
              - Portability: Receive a copy of your personal information

              4. Contact Information.

              If you have any questions about our privacy practices or this Privacy Policy, please email us at privacy@snap-shoot.com.
              
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Service Terms"
            description="Terms that govern your use of specific services"
          >
            <div className="prose prose-invert max-w-none">
              Service Terms. 

              These Service Terms govern your use of the Services. Capitalized terms not defined here will have the meanings in the Terms of Use, Business Terms, or other agreements you have with us governing your use of the Services ("Agreement").

              1. Eligibility.

              You must be at least 13 years old to use the Services. If you are under the age of majority in your jurisdiction but at least 13 years old, you may use the Services only with the consent of your parent or legal guardian.

              2. Accounts and Subscriptions.

              2.1 Account Creation and Security.

              To use certain Services, you need to create an account. You agree to provide accurate, complete, and updated information. You are responsible for maintaining the confidentiality of your account and password.

              2.2 Paid Services.

              Some Services require payment. By subscribing to these Services, you agree to pay the applicable fees and taxes. Failure to pay may result in termination of your access to the paid Services.

              2.3 Subscription Renewals and Cancellations.

              Your subscription will automatically renew at the end of each billing cycle unless you cancel. To avoid charges, you must cancel before the renewal date.

              3. Use of the Services.

              3.1 License.

              We grant you a personal, non-exclusive, non-transferable, revocable license to use the Services for your personal, non-commercial use, subject to these Terms.

              3.2 Restrictions.

              You agree not to:

              - Modify, copy, distribute, or create derivative works of the Services
              - Reverse engineer or attempt to extract the source code of the Services
              - Use the Services for any unlawful purpose
              - Interfere with or disrupt the integrity or performance of the Services
              - Attempt to gain unauthorized access to any part of the Services

              4. Content.

              4.1 Your Content.

              You retain ownership of any content you submit, post, or display on or through the Services ("Your Content"). By submitting Your Content, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, publish, transmit, and display Your Content.

              5. Contact Information.

              If you have any questions about these Terms, please contact us at support@snap-shoot.com.

              Updated: December 5, 2024.
            </div>
          </CollapsibleSection>
        </div>
      </main>
    </div>
  );
}