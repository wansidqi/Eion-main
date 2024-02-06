export function PrivacyPolicy() {
  // const today = new Date();
  // const formattedDate = today.toLocaleDateString();

  // const details = [
  // {
  //   title: "Licence",
  //   description:
  //   (
  //     <>
  //     <p></p>
  //     </>
  //   )
  // },
  // {
  //   title: "Licence",
  //   description:
  //   (
  //     <>
  //     <p></p>
  //     </>
  //   )
  // }
  // ]

  return (
    <>
      <div className="bg-white p-10  text-center text-black ">
        <div className=" flex flex-col items-start lg:mx-20">
          <p className="roboto-bold py-2 text-[20px] font-extrabold lg:px-10 uppercase">EION Privacy Policy</p>
          <p className="py-2 text-xs font-bold lg:px-10">Last Updated: July 13, 2023 </p>
        </div>

        <div className="flex flex-col items-center lg:mx-20 lg:px-10">
          <div className="text-justify">
            <p className="py-2 text-xs">
              At Aghs Labs Studios Pte Ltd (defined here as <span className="font-bold">‘We’</span> or{' '}
              <span className="font-bold">‘Our’</span>), We value your comments, suggestions and feedback. Our Privacy
              Policy sets out how we collect, use and disclose “personal information” and other “non-personal
              information” we have gathered about you in relation to our games “Locker”, “Invoke” and future esports
              products in Eion (“Game” which term includes the associated website).
            </p>
            <p className="py-2 text-xs">
              {' '}
              {'By using our Website, you acknowledge and consent to the terms of this privacy policy.'}
            </p>
            <p className="py-2 text-xs"> {'This policy will let you know:'}</p>
            <p className="py-2 text-xs"> {'What information (often referred to as ‘data’) is collected from you;'}</p>
            <p className="py-2 text-xs"> {'How your information is used;'}</p>
            <p className="py-2 text-xs"> {'With whom your information may be shared;'}</p>
            <p className="py-2 text-xs"> {'How you can access, update, or delete your information.'}</p>
            <p className="py-2 text-xs">
              {' '}
              {
                'We will comply with all relevant and applicable legislative requirements, and, in the event of any inconsistency, the legislative requirements will override the provisions of this document.'
              }
            </p>
            <p className="pt-2  text-xs font-bold"> {'User Age Limits'}</p>
            <p className=" text-xs">
              {' '}
              {
                'Our games and our website are not aimed at children under 13 years of age. Nevertheless, we acknowledge that our Game may unintentionally appeal to children.'
              }
            </p>
            <p className="py-2 text-xs">
              {' '}
              {
                'A terms of use and privacy policy gate is in place at the launch of the Game, users will be prompted to accept our terms before starting the game.'
              }
            </p>
            <p className="py-2 text-xs">
              {' '}
              {
                'We do not collect any personally identifiable information within the age gated part of our Game for children, nor do we intentionally direct interest-based advertising to anyone under the age of 13 years.'
              }
            </p>
            <p className="py-2 text-xs">
              {' '}
              {
                'Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.'
              }
            </p>
            <p className="py-2 text-xs">
              {' '}
              {
                'Aghs Labs Studios Pte Ltd does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our Game, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.'
              }
            </p>
            <p className="py-2 text-xs">
              {' '}
              {
                'If you believe that We have inadvertently collected information from a person under the age of 13, please contact us at the email address below and the information will be permanently deleted. We do not permit behaviorally targeted advertising to children under the age of 13 years.'
              }
            </p>
            <p className="py-2 text-xs font-bold"> {'What Data Do We Collect?'}</p>
            <p className=" text-xs"> {'We collect data in three ways.'}</p>

            {/* <ol className="list-">
              <li className="mx-5 py-1 text-xs font-bold">{'  Data collected automatically'}</li>
              <li className="mx-5 py-1 text-xs font-bold">{'   Data you provide us and'}</li>
              <li className="mx-5 py-1 text-xs font-bold">{'  Data collected by our partners.'}</li>
            </ol> */}
            <p className="py-1 text-xs font-bold"><span className="mr-4">{'A.'}</span>{'Data collected automatically'}</p>
            <p className="py-1 text-xs font-bold"><span className="mr-4">{'B.'}</span>{'Data you provide us; and'}</p>
            <p className="py-1 text-xs font-bold"><span className="mr-4">{'C.'}</span>{'Data collected by our partners.'}</p>

            <p className="py-2 text-xs">
              {' '}
              {
                'The basis for collecting data is “legitimate interest” under GDPR (Global Data Protection Regulation) and “to support internal operations of the game” under COPPA (Children"s Online Privacy Protection Act). Any data collected is done solely for internal uses that are reasonably and directly related to your relationship with US, in accordance with the California Consumer Privacy Act (CCPA).'
              }
            </p>
            <ol className="list-disc">
              {/* <p className="mx-5 py-1 text-xs font-bold">{'A.  Data collected automatically'}</p> */}
              <p className="py-1 text-xs font-bold roboto-bold"><span className="mr-4 ">{'A.'}</span>{'Data collected automatically'}</p>
              <p className="py-2 text-xs"> {'Certain data is collected automatically. This includes'}</p>
              <p className="py-2 text-xs"> {'Data about your game progress;'}</p>
              <p className="py-2 text-xs">
                {' '}
                {'Data about your device, such as device name and operating system, browser type and language;'}
              </p>
              <p className="py-2 text-xs">
                {' '}
                {
                  'Data about your use of the Service, such as gameplay data and your interactions with other players inside the Service; and'
                }
              </p>
              <p className="py-2 text-xs">
                {' '}
                {
                  'Your IP addresses, and mobile device identifiers (such as your device ID, advertising ID, MAC address, IMEI). Please note, there are ways to prevent this, which are outlined at ‘Third Party Service Providers’ below.'
                }
              </p>

              <p className="py-1 text-xs font-bold roboto-bold"><span className="mr-4">{'B.'}</span>{'Data you provide us'}</p>
              <p className="py-2 text-xs">
                {' '}
                {
                  'We collect and store your email when you sign up for our newsletter, or where you nominate to specifically allow our games to collect your player name and your email. We will also keep your contact details if you contact us for a particular purpose.'
                }
              </p>
              <p className="py-2 text-xs"> {'Newsletters Mail-Outs and Promotional Materials'}</p>
              <p className="py-2 text-xs">
                {' '}
                {
                  'When you opt in to join our mailing list for the purpose of receiving our newsletter, we will use that to provide you with direct marketing communications about upcoming games, features of our websites and other events and promotions related to our products.'
                }
              </p>
              <p className="py-2 text-xs">
                {' '}
                {
                  'You may unsubscribe from our newsletter at any time. All you need to do is unsubscribe from the link in the letter, or let us know in writing that you want to be removed.'
                }
              </p>
              <p className="py-2 text-xs">
                {' '}
                {
                  'If you wish to receive promotional information, you will be asked to provide your email address to us. This information is gathered by a third-party partner that collects and compiles that information for us so that we may undertake mail outs to large numbers of people. '
                }
              </p>

              <p className="py-1 text-xs font-bold roboto-bold"><span className="mr-4">{'C.'}</span>{'Data we collect from our third-party partners'}</p>
              <p className="py-2 text-xs">
                {' '}
                {
                  'To operate and manage our services we need to use third party service providers from time to time. A list of those parties can be found in this privacy policy. The type of information we might collect from them includes:'
                }
              </p>
              <p className="py-2 text-xs">
                {' '}
                {
                  'Data we receive if you link a third-party tool with the Service (such as logging in via Facebook, or Google);'
                }
              </p>
              <p className="py-2 text-xs">
                {' '}
                {'Demographic data (to determine the coarse location of your IP address)'}
              </p>
              <p className="py-2 text-xs"> {'Data from platforms that the games run on; and'}</p>
              <p className="py-2 text-xs"> {'Data for advertising and analytics purposes.'}</p>
              <p className="py-2 text-xs"> {'How do we use the data we collect?'}</p>
              <p className="py-2 text-xs">
                {' '}
                {
                  'Data collected can be personal to you or non-personal, and sometimes data that doesn’t appear to be personal can become personal if certain other facts are learned. No matter how we come to collect your data, we will always treat it in accordance with this document, and any applicable legislation.'
                }
              </p>
            </ol>
            <p className="py-2 text-xs font-bold"> {'What is Personal Information?'}</p>
            <p className="py-2 text-xs">
              {
                '‘Personal Information’ is information that identifies you as an individual. This is only collected by us if you submit it to us directly.'
              }{' '}
            </p>

            <p className="py-2 text-xs font-bold"> {'Player Feedback '}</p>
            <p className="py-2 text-xs ">
              {' '}
              {
                'If you contact us with a comment or query, We keep a copy of any personal information you provide. This is so that we can respond to your comments and questions as a part of our commitment to providing you with player support. If you contact us directly for any reason, we also keep a copy of that correspondence.'
              }
            </p>
            <p className="py-2 text-xs font-bold"> {'What about Sensitive Information?'}</p>
            <p className="py-2 text-xs ">
              {
                'Sensitive information includes information about such things as an individual’s racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a professional body, criminal records or health information.'
              }
            </p>
            <p className="py-2 text-xs ">{'We will not attempt to obtain nor record any sensitive information.'}</p>
            <p className="py-2 text-xs font-bold"> {'Third Party Service Providers'}</p>
            <p className=" text-xs ">{'Advertising'}</p>
            <p className="py-2 text-xs ">
              {' '}
              {
                'Advertisements from third party ad networks may be displayed in our Games from time to time. All reasonable endeavours are used to ensure that these ad networks comply with all applicable legislation in the provision of their services towards us.'
              }
            </p>
            <p className="py-2 text-xs ">
              {
                'If you click on any advertisements through Our game, the advertisers may use cookies and other web-tracking technologies to collect data, to provide targeted advertisements to you. Some of this may be personal information, and some of it non-personal information. We recommend that you review the terms of use and privacy policy for any advertiser with whom you are interacting before doing so.'
              }
            </p>
            <p className="py-2 text-xs"> {'The list of our ad networks privacy policies may be found here:'}</p>
            <p className="py-2 text-xs">Ad Colony: https://www.adcolony.com/privacy-policy/</p>
            <p className="py-2 text-xs">
              ironSource/Supersonic: http://www.ironsrc.com/wp-content/uploads/2019/03/ironSource-Privacy-Policy.pdf
            </p>
            <p className="py-2 text-xs">Tapjoy: https://www.tapjoy.com/legal/players/privacy-policy/</p>
            <p className="py-2 text-xs">AdMob: https://policies.google.com/technologies/partner-sites</p>
            <p className="py-2 text-xs">Unity: https://unity3d.com/legal/privacy-policy</p>
            <p className="py-2 text-xs">Facebook Audience Network: https://www.facebook.com/about/privacy</p>
            <p className="py-2 text-xs">Fyber: https://www.fyber.com/privacy-policy/</p>
            <p className="py-2 text-xs font-bold">{'Opting out of Targeted Advertising'}</p>
            <p className="py-2 text-xs">
              {' '}
              {
                'You can opt-out of interest-based advertising on mobile applications by checking the privacy settings of your Android or iOS device and selecting "limit ad tracking" (Apple iOS) or "opt-out of interest-based ads" (Android). This will also prevent mobile device identifiers from being collected.  '
              }
            </p>
            <p className="py-2 text-xs font-bold"> {'Collection of other ‘Non-Personal’ Information'}</p>
            <p className="py-2 text-xs">
              {' '}
              {
                'Some non-personal information may be gathered while you use Our games. Non-personal information is general, non-identifiable and anonymous information that is gathered for statistical, analytical and research purposes such as the improvement of our games (for example, bug fixes).'
              }
            </p>
            <p className="py-2 text-xs">
              {' '}
              {
                'Though We do not use cookies in order to track your movement around the web, Our websites (https://eion.gg/) use Google Analytics to help analyze how users use these sites. The tool uses cookies to collect internet log information and general visitor behavior information in an anonymous form. The information generated by the cookie about your use of the website, including your IP address, is transmitted to Google. This information is then used to evaluate use of our website and to compile statistical reports on website activity.'
              }
            </p>
            <p className="py-2 text-xs"> {'The Google Analytics privacy policy can be found here:'}</p>
            <p className="py-2 text-xs">{'Google Analytics: https://policies.google.com/privacy'}</p>
            <p className="py-2 text-xs">
              {
                'Our websites and apps may also contain APIs from other third parties. As with Google, We do not control how they interact with you and you should ensure that you consent to the terms of use and privacy policies offered by the third party services before providing them with your information.'
              }
            </p>
            <p className="py-2 text-xs">{'Our third-party partners, and their privacy policies are as follows:'}</p>
            <p className="py-2 text-xs">{'Facebook Analytics:https://www.facebook.com/about/privacy/update '}</p>
            <p className=" text-xs">{'https://www.facebook.com/full_data_use_policy'}</p>
            <p className="py-2 text-xs">{'Unity Analytics:https://unity3d.com/legal/privacy-policy'}</p>
            <p className="py-2 text-xs ">{'Apple:https://www.apple.com/legal/privacy/en-ww/'}</p>
            <p className="py-2 text-xs ">{'Google Play:https://policies.google.com/technologies/partner-sites'}</p>
            <p className="py-2 text-xs ">{'https://policies.google.com/privacy'}</p>
            <p className="py-2 text-xs font-bold">{' Access to Your Data, and Permanent Deletion of Your Data'}</p>
            <p className="py-2 text-xs">
              {
                'We will retain your data only as necessary for our legitimate business interests, such as to comply with our legal obligations, resolve disputes, and enforce our agreements.'
              }
            </p>
            <p className="py-2 text-xs">
              {
                'No matter how we come in contact with your data, you have the right to access the data We hold about you and to update and/or correct it, subject to certain exceptions.'
              }
            </p>
            <p className="py-2 text-xs font-bold">{'Data Subject Requests'}</p>
            <p className="py-2 text-xs">
              {
                'In the event that you send a data subject request to Us, or one of our third-party partners informs us that you have contacted them directly about your personal data they collected while you were using our service, We will respond to that request in accordance with any applicable legislatio'
              }
            </p>
            <p className="py-2 text-xs">
              {
                'If you wish to know what data we hold about you, if any, please make out your request to us in writing at the address listed below. Please be aware that in order to protect the information in Our database, We will require identification from you before releasing any information. '
              }
            </p>
            <p className="py-2 text-xs">{'Disclosure and Security of Your Information'}</p>
            <p className="py-2 text-xs">
              {
                'We will not sell, trade, rent or disclose any of the personal information you provide to us for any reason, without your prior consent. Otherwise, your Personal Information will only be disclosed where required or allowable by law.'
              }
            </p>
            <p className="py-2 text-xs">
              {
                'Your Personal Information is stored offsite in a manner that reasonably protects it from misuse, loss, unauthorised access, modification or disclosure'
              }
            </p>
            <p className="py-2 text-xs font-bold">{'Policy Updates'}</p>
            <p className=" text-xs">
              {
                'This Policy may change from time to time. The most current version of our Privacy Policy can be found at https://eion.gg/privacy-policy We will always keep this up to date so that you know what information we will collect from you, how we may use it, and when we may disclose it.'
              }
            </p>
            <p className="py-2 text-xs font-bold">{'Complaints'}</p>
            <p className="py-2 text-xs">
              {'You can lodge a complaint with us about any breach of our Privacy Policy at the address below.'}
            </p>
            <p className="py-2 text-xs">{'Privacy Policy Contact Information'}</p>
            <p className="py-2 text-xs">
              {'If you have any questions about our Privacy Policy, please contact us at: support@eion.gg'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
