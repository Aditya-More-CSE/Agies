// Quizzes for Cases 1 to 10 (5 questions each = 50 questions)
export const quizzesBatch1 = [
  {
    id: 1,
    caseSlug: "facebook-cambridge-analytica",
    title: "The Facebook–Cambridge Analytica Scandal Quiz",
    description: "Test your understanding of data harvesting, API permissions, FTC regulations, and psychographic profiling.",
    questions: [
      {
        id: "q1_1",
        question: "How was Cambridge Analytica able to harvest data from up to 87 million Facebook users when only ~270,000 took the quiz?",
        options: [
          "They breached Facebook's main servers using an SQL injection exploit",
          "Facebook's v1.0 API permitted apps to harvest data from the installer's entire friend network without the friends' consent",
          "They purchased the data directly from the dark web following a ransomware attack",
          "They bribed Facebook database administrators to export internal customer tables"
        ],
        correctAnswerIndex: 1,
        explanation: "Facebook's legacy Graph API allowed external applications to access profile data and 'likes' not only of the person who installed the app, but also of all their friends without their affirmative consent.",
        relatedTopic: "Third-Party API Over-Permissioning"
      },
      {
        id: "q1_2",
        question: "What historic penalty did the US Federal Trade Commission (FTC) levy against Facebook in 2019 following the scandal?",
        options: [
          "A $500,000 regulatory citation",
          "A $100 million corporate settlement",
          "A historic $5 Billion civil penalty and corporate governance restructuring",
          "A complete revocation of Facebook's operating license in North America"
        ],
        correctAnswerIndex: 2,
        explanation: "The US FTC imposed an unprecedented $5 Billion penalty—the largest civil penalty in history for privacy violations—alongside mandatory independent oversight.",
        relatedTopic: "FTC Act Section 5 Enforcement"
      },
      {
        id: "q1_3",
        question: "What was the core violation under Section 5 of the FTC Act identified in the investigation?",
        options: [
          "Facebook sold pirated software",
          "Facebook engaged in deceptive practices by violating its 2012 consent decree requiring explicit user consent before sharing data",
          "Facebook failed to implement multi-factor authentication for user logins",
          "Facebook engaged in insider trading of stock options"
        ],
        correctAnswerIndex: 1,
        explanation: "The FTC alleged Facebook deceived users by misrepresenting the control users had over their personal data privacy settings and violating a prior 2012 FTC consent order.",
        relatedTopic: "Consumer Protection & Deceptive Practices"
      },
      {
        id: "q1_4",
        question: "Under the UK Information Commissioner's Office (ICO) pre-GDPR investigation, why was Facebook fined only £500,000?",
        options: [
          "Because the ICO found no evidence of user harm in the United Kingdom",
          "£500,000 was the maximum statutory cap permissible under the UK Data Protection Act 1998",
          "Facebook agreed to settle the matter out of court with no admission of liability",
          "The UK courts reduced the fine upon appeal"
        ],
        correctAnswerIndex: 1,
        explanation: "Under the pre-GDPR Data Protection Act 1998, £500,000 was the absolute maximum legal fine the ICO could assess for data breaches, highlighting why GDPR's higher penalty ceiling was introduced.",
        relatedTopic: "Data Protection Act 1998"
      },
      {
        id: "q1_5",
        question: "What is the most effective user precaution to prevent personal data exposure to third-party social apps?",
        options: [
          "Changing your profile password once every week",
          "Regularly reviewing and revoking connected third-party app permissions in platform privacy settings",
          "Posting a public status statement asserting copyright over your account data",
          "Using social login across every website to consolidate accounts"
        ],
        correctAnswerIndex: 1,
        explanation: "Regularly auditing authorized apps and removing access for dormant or unnecessary third-party services revokes API access tokens and prevents background data harvesting.",
        relatedTopic: "User Digital Hygiene"
      }
    ]
  },
  {
    id: 2,
    caseSlug: "indian-bank-phishing-scam",
    title: "The Indian Bank Phishing & Smishing Campaigns Quiz",
    description: "Assess your knowledge of KYC SMS phishing, OTP interception, IT Act Section 66D, and RBI customer liability rules.",
    questions: [
      {
        id: "q2_1",
        question: "What primary psychological trigger is weaponized in 'Bank KYC suspension' smishing messages?",
        options: [
          "Curiosity about a lottery winning notification",
          "Artificial urgency and fear of sudden financial account deactivation",
          "Guilt regarding unpaid taxes",
          "Desire to win an international cruise vacation"
        ],
        correctAnswerIndex: 1,
        explanation: "Attackers manufacture artificial urgency by threatening that the victim's account or debit card will be blocked within 24 hours unless an immediate KYC update link is clicked.",
        relatedTopic: "Social Engineering Tactics"
      },
      {
        id: "q2_2",
        question: "Which section of the Information Technology Act, 2000 specifically penalizes cheating by impersonation using a computer resource?",
        options: [
          "Section 65 (Tampering with computer source documents)",
          "Section 66D (Punishment for cheating by personation by using computer resource)",
          "Section 67 (Publishing obscene information)",
          "Section 79 (Intermediary liability exemption)"
        ],
        correctAnswerIndex: 1,
        explanation: "Section 66D of the IT Act, 2000 specifically punishes cheating by impersonating through a computer resource with imprisonment up to 3 years and a fine up to ₹1 Lakh.",
        relatedTopic: "IT Act Section 66D"
      },
      {
        id: "q2_3",
        question: "How do modern Adversary-in-the-Middle (AiTM) phishing sites defeat two-factor authentication OTPs?",
        options: [
          "They reverse-engineer the encryption keys on the user's SIM card",
          "They capture credentials and OTPs entered by the victim in real-time and immediately forward them into the authentic banking session",
          "They intercept the cellular tower signal using military radio jammers",
          "They crack the user's password using automated brute-force dictionaries"
        ],
        correctAnswerIndex: 1,
        explanation: "Reverse-proxy phishing kits relay the victim's inputs directly to the authentic banking website in real-time, grabbing session cookies and OTPs instantly.",
        relatedTopic: "AiTM Phishing Architecture"
      },
      {
        id: "q2_4",
        question: "Under the RBI Customer Protection Directions, what is the customer's liability if an unauthorized fraud is reported within 3 working days?",
        options: [
          "Customer must pay 50% of the fraudulent amount",
          "Customer is strictly liable for all financial damages",
          "Zero customer liability applies for third-party breaches reported within 3 days",
          "Customer liability is capped at ₹50,000 regardless of circumstances"
        ],
        correctAnswerIndex: 2,
        explanation: "RBI guidelines mandate zero customer liability where unauthorized transactions occur due to bank negligence or third-party breaches where the customer notifies the bank within 3 working days.",
        relatedTopic: "RBI Master Direction on Customer Liability"
      },
      {
        id: "q2_5",
        question: "What is the official national helpline number for reporting financial cyber fraud in India?",
        options: [
          "100",
          "1091",
          "1930",
          "1800-11-22"
        ],
        correctAnswerIndex: 2,
        explanation: "1930 is India's dedicated national cyber fraud reporting helpline (formerly 155260) connected to the Citizen Financial Cyber Fraud Reporting System to freeze defrauded funds.",
        relatedTopic: "National Reporting Channels"
      }
    ]
  },
  {
    id: 3,
    caseSlug: "wannacry-ransomware-attack",
    title: "WannaCry Ransomware Attack Quiz",
    description: "Evaluate your understanding of EternalBlue, SMBv1 vulnerabilities, UK NHS impact, and ransomware countermeasures.",
    questions: [
      {
        id: "q3_1",
        question: "What specific exploit and protocol was weaponized by the WannaCry ransomware worm to spread across networks?",
        options: [
          "Log4Shell targeting Apache web servers",
          "EternalBlue targeting unauthenticated SMBv1 buffer overflows (CVE-2017-0144)",
          "Heartbleed targeting OpenSSL memory leaks",
          "Dirty COW targeting the Linux kernel memory management"
        ],
        correctAnswerIndex: 1,
        explanation: "WannaCry weaponized EternalBlue, an exploit targeting Microsoft's legacy SMBv1 protocol (CVE-2017-0144) leaked by the Shadow Brokers hacker group.",
        relatedTopic: "EternalBlue SMBv1 Exploit"
      },
      {
        id: "q3_2",
        question: "How did security researcher Marcus Hutchins unintentionally halt the initial propagation of WannaCry?",
        options: [
          "By deploying a counter-virus that deleted the malware payload",
          "By registering an unregistered hardcoded domain name found in the malware code, activating its kill switch",
          "By hacking the attackers' Bitcoin command and control servers",
          "By releasing a global Windows registry patch through Twitter"
        ],
        correctAnswerIndex: 1,
        explanation: "The malware authors built in a check for an unregistered web domain. When Hutchins registered the domain for $10 to analyze it, the malware interpreted the live response as a sandbox check and halted execution.",
        relatedTopic: "Malware Kill-Switch Mechanism"
      },
      {
        id: "q3_3",
        question: "Under the UK Computer Misuse Act 1990, what maximum sentence can be applied for unauthorized acts causing serious damage to human welfare or critical services?",
        options: [
          "Up to 2 years imprisonment",
          "Up to 10 years imprisonment",
          "Up to life imprisonment (under Section 3ZA)",
          "A fixed civil fine of £50,000"
        ],
        correctAnswerIndex: 2,
        explanation: "Section 3ZA of the UK Computer Misuse Act provides up to life imprisonment for cyberattacks that cause serious damage to human welfare, the environment, state economy, or national security.",
        relatedTopic: "UK Computer Misuse Act 1990"
      },
      {
        id: "q3_4",
        question: "Why was the UK National Health Service (NHS) particularly vulnerable to the WannaCry outbreak?",
        options: [
          "The NHS had disabled all network firewalls",
          "Many NHS trusts were operating obsolete, unpatched Windows XP and Windows 7 systems and failed to apply the MS17-010 patch",
          "An NHS employee intentionally downloaded the malware to protest hospital conditions",
          "The NHS did not possess any computerized patient records"
        ],
        correctAnswerIndex: 1,
        explanation: "The UK National Audit Office found the NHS was heavily dependent on legacy Windows systems, had fragmented IT governance, and had failed to deploy Microsoft's MS17-010 patch released two months prior.",
        relatedTopic: "Legacy IT & Patch Management"
      },
      {
        id: "q3_5",
        question: "What is the recommended 3-2-1 backup strategy for protecting data against ransomware extortion?",
        options: [
          "3 copies of data, on 2 different media types, with 1 copy kept offline or offsite",
          "3 cloud providers, 2 passwords, 1 admin account",
          "3 backups per day, 2 per week, 1 per month",
          "3 hard drives stored in 2 desks on 1 floor"
        ],
        correctAnswerIndex: 0,
        explanation: "The industry standard 3-2-1 rule dictates maintaining 3 total copies of data, across 2 different storage media types, with at least 1 copy kept completely immutable and disconnected (offline) from the network.",
        relatedTopic: "Ransomware Defense Architecture"
      }
    ]
  },
  {
    id: 4,
    caseSlug: "instagram-data-leak",
    title: "The Instagram Data Scraping & Exposure Quiz",
    description: "Test your knowledge of automated API scraping, GDPR Data Protection by Design, and teen privacy protections.",
    questions: [
      {
        id: "q4_1",
        question: "What architectural setting in Instagram led to the exposure of contact details of millions of teenage users?",
        options: [
          "A zero-day SQL injection in the login authentication module",
          "Default settings on business accounts that publicly exposed contact phone numbers and emails in the web page source without age restrictions",
          "A malicious firmware update pushed to iPhone and Android cameras",
          "A rogue insider selling private direct messages on Telegram"
        ],
        correctAnswerIndex: 1,
        explanation: "When teenage users converted accounts to business profiles to access view metrics, Instagram defaulted their email addresses and phone numbers to publicly queryable fields without age verification.",
        relatedTopic: "Default Privacy Architectures"
      },
      {
        id: "q4_2",
        question: "What landmark GDPR penalty was imposed by the Irish Data Protection Commission (DPC) regarding Instagram's handling of children's data?",
        options: [
          "€10 Million",
          "€100 Million",
          "€405 Million",
          "€1.2 Billion"
        ],
        correctAnswerIndex: 2,
        explanation: "In September 2022, the Irish DPC issued a massive €405 Million fine against Meta following an inquiry into children's data privacy violations under GDPR Articles 5, 12, 24, and 25.",
        relatedTopic: "GDPR Enforcement Penalties"
      },
      {
        id: "q4_3",
        question: "What key principle under GDPR Article 25 was violated by defaulting teen accounts to public contact visibility?",
        options: [
          "Right to be Forgotten",
          "Data Protection by Design and by Default",
          "Cross-Border Data Transfer Equality",
          "Decoupled Algorithmic Processing"
        ],
        correctAnswerIndex: 1,
        explanation: "Article 25 mandates 'Data Protection by Design and by Default', requiring companies to build default settings that prioritize user privacy without requiring manual user hardening.",
        relatedTopic: "GDPR Article 25 (Privacy by Design)"
      },
      {
        id: "q4_4",
        question: "How does India's Digital Personal Data Protection Act, 2023 specifically protect children under Section 9?",
        options: [
          "It bans all children from using mobile phones",
          "It prohibits behavioral monitoring, tracking, and targeted advertisements directed at minors without parental consent",
          "It forces children to use only government-operated social media platforms",
          "It requires schools to confiscate digital devices during exams"
        ],
        correctAnswerIndex: 1,
        explanation: "Section 9 of the DPDP Act 2023 strictly prohibits data fiduciaries from undertaking tracking, behavioral monitoring, or targeted advertising directed at children under 18.",
        relatedTopic: "DPDP Act 2023 Minor Protections"
      },
      {
        id: "q4_5",
        question: "What is an effective defensive measure platforms can implement to prevent mass automated API scraping?",
        options: [
          "Requiring all users to submit notarized identity documents",
          "Implementing IP rate limiting, bot behavior analysis, and requiring authentication for sensitive profile endpoints",
          "Deleting all public user profile directories from search engines",
          "Limiting internet access to daytime hours"
        ],
        correctAnswerIndex: 1,
        explanation: "Rate limiting, automated bot fingerprinting, CAPTCHAs, and eliminating unauthenticated bulk API endpoints are standard techniques to mitigate automated web scraping.",
        relatedTopic: "Anti-Scraping Defenses"
      }
    ]
  },
  {
    id: 5,
    caseSlug: "celebrity-deepfake-scams",
    title: "Celebrity Deepfake Scams & AI Voice Clones Quiz",
    description: "Evaluate your understanding of synthetic media, IT Rules 2021 intermediary obligations, and AI impersonation legalities.",
    questions: [
      {
        id: "q5_1",
        question: "What machine learning technology primarily drives the generation of realistic face-swap deepfakes?",
        options: [
          "Linear regression modeling",
          "Generative Adversarial Networks (GANs) and latent diffusion models",
          "Rule-based expert systems",
          "Optical Character Recognition (OCR) pipelines"
        ],
        correctAnswerIndex: 1,
        explanation: "Generative Adversarial Networks (GANs) and modern diffusion architectures use competing generator and discriminator neural networks to synthesize hyper-realistic synthetic video and audio.",
        relatedTopic: "Generative AI Architecture"
      },
      {
        id: "q5_2",
        question: "Under Rule 3(2)(b) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, what is the mandatory takedown timeline for non-consensual sexually explicit or morphed content?",
        options: [
          "Within 24 hours of receipt of complaint",
          "Within 7 working days",
          "Within 30 calendar days",
          "Only after a formal high court judgment is delivered"
        ],
        correctAnswerIndex: 0,
        explanation: "Rule 3(2)(b) of IT Rules 2021 obligates intermediaries to take down or disable access to non-consensual morphed, impersonating, or sexually explicit content within 24 hours of notification.",
        relatedTopic: "IT Rules 2021 Compliance"
      },
      {
        id: "q5_3",
        question: "Which Indian legal doctrine protects public figures from unauthorized commercial exploitation of their voice and likeness?",
        options: [
          "Doctrine of Sovereign Immunity",
          "Common Law Personality Rights and the Tort of Passing Off",
          "Patent Exclusivity Clause",
          "Eminent Domain Doctrine"
        ],
        correctAnswerIndex: 1,
        explanation: "Indian High Courts have repeatedly affirmed Personality Rights and the tort of passing off to prevent unauthorized commercial exploitation, synthetic imitation, and false endorsement of celebrities' personas.",
        relatedTopic: "Personality Rights & Passing Off"
      },
      {
        id: "q5_4",
        question: "What forensic visual cue can frequently help identify a generative synthetic video (deepfake)?",
        options: [
          "The video is recorded in black and white",
          "Unnatural eye-blinking rates, irregular teeth alignment, warping around jaw boundaries, and desynchronized audio cadence",
          "The video automatically closes after 30 seconds",
          "The presence of a mandatory government digital stamp"
        ],
        correctAnswerIndex: 1,
        explanation: "Synthetic generation models often struggle with complex temporal consistency, creating artifacts like abnormal blinking, ear/jawline blurring, unnatural lighting reflections, and subtle lip-sync lags.",
        relatedTopic: "Synthetic Media Forensics"
      },
      {
        id: "q5_5",
        question: "What emerging technical standard enables content publishers to cryptographically certify the authentic origin and edit history of digital media?",
        options: [
          "OAuth 2.0 Client Tokens",
          "C2PA (Coalition for Content Provenance and Authenticity) Content Credentials",
          "SSL Certificate Pinning",
          "DNSSEC Host Mapping"
        ],
        correctAnswerIndex: 1,
        explanation: "The C2PA standard embeds cryptographically signed metadata ('Content Credentials') into images and videos, documenting origin, creation device, and modifications.",
        relatedTopic: "C2PA Provenance Standards"
      }
    ]
  },
  {
    id: 6,
    caseSlug: "online-harassment-and-stalking",
    title: "Online Harassment, Doxxing & Cyberstalking Quiz",
    description: "Test your comprehension of digital harassment laws, IPC Section 354D / BNS Section 78, and evidence preservation.",
    questions: [
      {
        id: "q6_1",
        question: "What constitutes the cybercrime of 'doxxing'?",
        options: [
          "Overwhelming a web server with artificial HTTP traffic",
          "Maliciously publishing a person's private personal information (home address, phone number, workplace) online to incite harassment",
          "Cracking a user's Wi-Fi network password using a dictionary attack",
          "Filing a patent on public domain software source code"
        ],
        correctAnswerIndex: 1,
        explanation: "Doxxing refers to the unauthorized publication of private identifying information online with the intent to subject the victim to harassment, real-world danger, or intimidation.",
        relatedTopic: "Digital Doxxing & Privacy Invasions"
      },
      {
        id: "q6_2",
        question: "Under Section 354D of the Indian Penal Code (now Section 78 of Bharatiya Nyaya Sanhita), what specific digital conduct is explicitly criminalized?",
        options: [
          "Using an ad-blocker on commercial websites",
          "Monitoring by a man of the internet, email, or electronic communication used by a woman without legitimate reason",
          "Forwarding encrypted emails without a digital signature",
          "Downloading open-source operating system ISO images"
        ],
        correctAnswerIndex: 1,
        explanation: "Section 354D IPC explicitly defines stalking to include monitoring a woman's internet use, electronic communications, or digital social media presence.",
        relatedTopic: "Stalking Laws in India"
      },
      {
        id: "q6_3",
        question: "Which section of the Information Technology Act, 2000 punishes the intentional capture, transmission, or publication of images of a person's private areas without consent?",
        options: [
          "Section 43A",
          "Section 66E (Punishment for violation of privacy)",
          "Section 72A",
          "Section 69B"
        ],
        correctAnswerIndex: 1,
        explanation: "Section 66E of the IT Act penalizes intentionally capturing, publishing, or transmitting images of private body parts without consent with imprisonment up to 3 years and/or fine up to ₹2 Lakh.",
        relatedTopic: "IT Act Section 66E"
      },
      {
        id: "q6_4",
        question: "When experiencing persistent cyberstalking, why is taking immediate timestamped screenshots of messages and profile URLs critical?",
        options: [
          "Because courts only accept paper photographs developed in darkrooms",
          "Because electronic evidence can be swiftly edited, deleted, or accounts deactivated by the perpetrator before police can issue subpoenas",
          "Because screenshots automatically block the perpetrator's IP address",
          "Because social media companies charge fees to retrieve deleted chats"
        ],
        correctAnswerIndex: 1,
        explanation: "Digital evidence is highly ephemeral. Capturing timestamped screenshots, unique account handles, and message headers before content is deleted preserves vital evidence for cybercrime complaints.",
        relatedTopic: "Digital Evidence Preservation"
      },
      {
        id: "q6_5",
        question: "On India's National Cyber Crime Reporting Portal (cybercrime.gov.in), what specialized provision exists for victims of cyber harassment involving women or children?",
        options: [
          "The ability to file complaints anonymously to initiate urgent takedown of sensitive or explicit content",
          "A mandatory ₹5,000 filing fee",
          "A requirement to appear in court in New Delhi within 48 hours",
          "Automatic public publishing of the suspect's tax records"
        ],
        correctAnswerIndex: 0,
        explanation: "The portal provides a specialized 'Report Crime Against Women/Child' channel that permits confidential and anonymous reporting to swiftly remove non-consensual explicit material.",
        relatedTopic: "National Portal Reporting"
      }
    ]
  },
  {
    id: 7,
    caseSlug: "state-sponsored-cyber-attacks",
    title: "State-Sponsored Cyber Espionage: SolarWinds Supply Chain Quiz",
    description: "Assess your understanding of software supply chain compromises, SUNBURST backdoor mechanics, and CISA directives.",
    questions: [
      {
        id: "q7_1",
        question: "How did the threat actors in the SolarWinds breach successfully deliver malicious backdoors to 18,000 enterprise customers?",
        options: [
          "By sending 18,000 individual phishing emails to system administrators",
          "By compromising SolarWinds' software build pipeline and injecting malicious code (SUNBURST) into officially signed software updates",
          "By exploiting a zero-day vulnerability in home Wi-Fi routers",
          "By physically planting compromised USB drives in customer parking lots"
        ],
        correctAnswerIndex: 1,
        explanation: "Attackers executed a sophisticated software supply chain attack by poisoning the build pipeline, inserting the SUNBURST backdoor into valid, digitally signed Orion software updates.",
        relatedTopic: "Software Supply Chain Attacks"
      },
      {
        id: "q7_2",
        question: "Why was the malicious SUNBURST code not immediately detected by antivirus software on customer systems?",
        options: [
          "Because all customer antivirus software was turned off",
          "Because the malicious DLL was digitally signed with SolarWinds' authentic corporate cryptographic certificate and lay dormant for two weeks",
          "Because the code was written in ancient assembly language",
          "Because the malware deleted the operating system logs upon installation"
        ],
        correctAnswerIndex: 1,
        explanation: "Because the malicious dynamic-link library (DLL) carried a valid digital signature from SolarWinds and remained completely dormant for up to two weeks before beaconing, endpoint security tools trusted it.",
        relatedTopic: "Code Signing Abuse & Defense Evasion"
      },
      {
        id: "q7_3",
        question: "What emergency legal power did CISA exercise in response to the SolarWinds breach on December 13, 2020?",
        options: [
          "Declaring nationwide martial law",
          "Issuing Emergency Directive 21-01 requiring federal civilian agencies to immediately disconnect Orion servers",
          "Shutting down the civilian transatlantic subsea internet cables",
          "Nationalizing private software development companies"
        ],
        correctAnswerIndex: 1,
        explanation: "Under statutory authority of the Cybersecurity Information Sharing Act, CISA issued Emergency Directive 21-01 compelling all federal civilian agencies to disconnect Orion servers immediately.",
        relatedTopic: "CISA Emergency Directives"
      },
      {
        id: "q7_4",
        question: "What key requirement did US Presidential Executive Order 14028 mandate for federal software procurement post-SolarWinds?",
        options: [
          "All software must be open-source and free of cost",
          "Suppliers must provide a Software Bill of Materials (SBOM) and demonstrate secure, isolated software development environments",
          "No foreign citizens can be employed as software engineers",
          "Federal agencies must discontinue the use of all computer networks"
        ],
        correctAnswerIndex: 1,
        explanation: "Executive Order 14028 mandated Software Bills of Materials (SBOM), multi-factor authentication, and strict secure software development standards for all government software vendors.",
        relatedTopic: "Executive Order 14028 & SBOM"
      },
      {
        id: "q7_5",
        question: "In enterprise cybersecurity, what architectural philosophy prevents an adversary from moving laterally across internal networks after an initial compromise?",
        options: [
          "Perimeter-only defense with trusted internal zones",
          "Zero Trust Architecture (never trust, always verify, least privilege, micro-segmentation)",
          "Storing all company passwords in a shared spreadsheet",
          "Disabling operating system firewall notifications"
        ],
        correctAnswerIndex: 1,
        explanation: "Zero Trust Architecture enforces continuous authentication, micro-segmentation, and least privilege, ensuring that even if one server is compromised, lateral traversal is halted.",
        relatedTopic: "Zero Trust Architecture"
      }
    ]
  },
  {
    id: 8,
    caseSlug: "upi-payment-scam-wave",
    title: "UPI Payment Fraud & QR Code Phishing Waves Quiz",
    description: "Evaluate your understanding of UPI payment protocols, QR code mechanics, IT Act 66D, and financial fraud hotlines.",
    questions: [
      {
        id: "q8_1",
        question: "What is the universal architectural rule regarding the Unified Payments Interface (UPI) PIN?",
        options: [
          "A UPI PIN is needed to both receive and send payments",
          "A UPI PIN is ONLY required to DEBIT (send) money, NEVER to receive money",
          "A UPI PIN is required whenever an SMS notification is received",
          "Entering a UPI PIN verifies that your identity is clean from criminal records"
        ],
        correctAnswerIndex: 1,
        explanation: "Entering a UPI PIN authorizes the immediate debiting of funds from your linked bank account. You NEVER need to enter your PIN or scan a QR code to receive money.",
        relatedTopic: "UPI Architecture & Transaction Rules"
      },
      {
        id: "q8_2",
        question: "How do scammers on platforms like OLX manipulate victims using UPI 'Collect Requests'?",
        options: [
          "They hack into the victim's phone hardware through the charging cable",
          "They send a Collect Request disguised as a payment receipt and urge the victim to approve and enter their PIN to 'claim' the advance payment",
          "They cancel the user's internet banking subscription",
          "They install a physical card skimmer inside the phone screen"
        ],
        correctAnswerIndex: 1,
        explanation: "Fraudsters initiate a reverse 'Collect Request' (which pulls money from the victim), falsely telling the seller: 'Approve this request and enter your PIN so the advance gets credited.'",
        relatedTopic: "UPI Collect Request Exploitation"
      },
      {
        id: "q8_3",
        question: "Under the Information Technology Act, 2000, which sections are primarily registered in police FIRs for UPI payment fraud?",
        options: [
          "Section 66C (Identity Theft) and Section 66D (Cheating by Impersonation)",
          "Section 69A and Section 79",
          "Section 292 and Section 294",
          "Section 120B exclusively"
        ],
        correctAnswerIndex: 0,
        explanation: "Sections 66C (fraudulent use of electronic passwords/PINs) and 66D (cheating by personation using a computer resource) are the primary IT Act provisions invoked for UPI fraud.",
        relatedTopic: "IT Act Provisions for UPI Fraud"
      },
      {
        id: "q8_4",
        question: "What is the 'Golden Window' period for reporting a financial cyber fraud to Helpline 1930 for the highest probability of recovering funds?",
        options: [
          "Within 1 to 2 hours of the fraudulent debit",
          "After waiting 30 days for a bank statement",
          "Within 6 months of filing a physical tax return",
          "Reporting time does not affect fund recovery at all"
        ],
        correctAnswerIndex: 0,
        explanation: "Reporting within the first 1 to 2 hours ('Golden Window') allows the Indian Cyber Crime Coordination Centre (I4C) system to freeze the funds before money mules withdraw them at ATMs.",
        relatedTopic: "Golden Window & Fund Interdiction"
      },
      {
        id: "q8_5",
        question: "When scanning a merchant QR code in a store, what safety check should you perform before entering your PIN?",
        options: [
          "Ensure your screen brightness is at 100%",
          "Verify the beneficiary's registered business name displayed on the payment screen matches the physical store",
          "Restart your phone twice before confirming the payment",
          "Ask the cashier to provide their personal home address"
        ],
        correctAnswerIndex: 1,
        explanation: "Always check the verified merchant name displayed on the payment confirmation screen before entering your PIN to avoid paying malicious QR codes pasted over legitimate stickers.",
        relatedTopic: "Consumer Precautions"
      }
    ]
  },
  {
    id: 9,
    caseSlug: "target-corporation-breach",
    title: "Target Corporation Supply Chain & POS Data Breach Quiz",
    description: "Assess your knowledge of POS RAM scraping malware, third-party vendor risk, and PCI DSS compliance.",
    questions: [
      {
        id: "q9_1",
        question: "How did cybercriminals initially gain access to Target Corporation's corporate network in 2013?",
        options: [
          "By guessing the root password on Target's public website",
          "By stealing vendor portal credentials from an external third-party HVAC contractor through a phishing email",
          "By bribing in-store cashiers to hand over register flash drives",
          "By exploiting a flaw in Target's mobile consumer shopping app"
        ],
        correctAnswerIndex: 1,
        explanation: "Attackers phished employees at Fazio Mechanical Services, a refrigeration contractor, stealing vendor credentials that had unsegmented routing into Target's wider corporate network.",
        relatedTopic: "Third-Party Vendor Attack Vector"
      },
      {
        id: "q9_2",
        question: "What type of malware was deployed on Target's cash registers to steal 40 million credit card records?",
        options: [
          "A crypto-ransomware worm",
          "A RAM-scraping (memory-scraping) trojan ('BlackPOS') that intercepted card data in volatile memory before encryption",
          "A distributed denial of service botnet",
          "An email auto-responder script"
        ],
        correctAnswerIndex: 1,
        explanation: "BlackPOS scraped track 1 and 2 credit card data directly from the Point of Sale register's volatile RAM during the brief millisecond window when the card was swiped before encryption occurred.",
        relatedTopic: "RAM Scraping Malware Mechanics"
      },
      {
        id: "q9_3",
        question: "What network architecture failure allowed attackers to move from a facilities vendor portal to checkout registers?",
        options: [
          "Lack of high-speed fiber internet connections",
          "Inadequate network segmentation between supplier portals and the Cardholder Data Environment (CDE)",
          "Target was using satellite internet instead of cables",
          "All cash registers were connected to public customer Wi-Fi"
        ],
        correctAnswerIndex: 1,
        explanation: "Target failed to enforce strict micro-segmentation, allowing traffic to route laterally from general vendor billing zones directly into the sensitive PCI cardholder transaction environment.",
        relatedTopic: "Network Segmentation & PCI DSS"
      },
      {
        id: "q9_4",
        question: "Under the FTC Act Section 5, why did the multi-state attorneys general investigation hold Target liable?",
        options: [
          "Because Target failed to employ reasonable and appropriate data security safeguards to protect customer data",
          "Because Target failed to open its stores on time on Black Friday",
          "Because Target charged excessive credit card processing fees",
          "Because Target refused to accept cash payments"
        ],
        correctAnswerIndex: 0,
        explanation: "State Attorneys General and federal regulators held that failing to maintain reasonable vendor access controls and ignoring intrusion alerts constituted unfair commercial security practices.",
        relatedTopic: "FTC Section 5 Unfair Security Practices"
      },
      {
        id: "q9_5",
        question: "What major payment hardware technology was widely accelerated across the United States as a direct consequence of the Target breach?",
        options: [
          "Magnetic stripe card swiping",
          "EMV chip cards and Point-to-Point Encryption (P2PE)",
          "Paper check processing machines",
          "Cryptocurrency barcode scanning"
        ],
        correctAnswerIndex: 1,
        explanation: "The Target breach catalyzed the US migration from easily cloned magnetic stripes to cryptographic EMV chip cards and Point-to-Point Encryption (P2PE).",
        relatedTopic: "Payment Security Standards"
      }
    ]
  },
  {
    id: 10,
    caseSlug: "linkedin-credential-scraping",
    title: "LinkedIn Credential Theft & Mass Profile Scraping Quiz",
    description: "Evaluate your understanding of public web scraping, API enumeration, CFAA jurisprudence, and hiQ Labs v. LinkedIn.",
    questions: [
      {
        id: "q10_1",
        question: "In the landmark case hiQ Labs, Inc. v. LinkedIn Corp., what did the US Ninth Circuit Court of Appeals determine regarding automated scraping?",
        options: [
          "Scraping public data is punishable by mandatory 10-year prison sentences under CFAA",
          "Querying publicly accessible internet pages that require no login or authentication does not constitute access 'without authorization' under the CFAA",
          "All web scrapers must register with the Federal Communications Commission",
          "Websites are legally forbidden from implementing rate-limiting"
        ],
        correctAnswerIndex: 1,
        explanation: "The Ninth Circuit held that the Computer Fraud and Abuse Act (CFAA) anti-hacking provisions were intended to prevent breaking into gated systems, not viewing or querying publicly open web data.",
        relatedTopic: "CFAA Interpretation & hiQ v. LinkedIn"
      },
      {
        id: "q10_2",
        question: "How did attackers harvest records of approximately 700 million LinkedIn users in 2021?",
        options: [
          "They breached LinkedIn's internal oracle database via zero-day SQL injection",
          "They automated requests against official APIs and public profile endpoints using sequential user IDs (parameter tampering/enumeration)",
          "They stole physical hard drives from LinkedIn's primary data center",
          "They spoofed LinkedIn's top-level DNS domain name"
        ],
        correctAnswerIndex: 1,
        explanation: "Attackers did not compromise core internal servers; rather, they used automated bots to systematically cycle through user IDs on open APIs and public profiles, scraping exposed attributes at scale.",
        relatedTopic: "API Enumeration & Scraping"
      },
      {
        id: "q10_3",
        question: "Under the European Union GDPR, why can commercial entities still face heavy fines for scraping 'publicly available' personal data?",
        options: [
          "Because European law requires all internet bots to pay royalties to creators",
          "Because personal data remains protected by GDPR principles (purpose limitation and legal basis) regardless of whether it is publicly displayed",
          "Because GDPR bans all forms of search engines in Europe",
          "Because scraping uses electrical power regulated by EU green energy laws"
        ],
        correctAnswerIndex: 1,
        explanation: "Under GDPR, the fact that personal information is publicly accessible on the web does NOT grant third parties a lawful basis to scrape, aggregate, and commercialize it without user consent.",
        relatedTopic: "GDPR Application to Public Data"
      },
      {
        id: "q10_4",
        question: "What technical defense is most effective at preventing automated bots from enumerating and dumping millions of user profiles?",
        options: [
          "Changing the color of the website header daily",
          "Behavioral rate limiting, IP reputation filtering, CAPTCHAs, and requiring authentication to access profile contact fields",
          "Encrypting HTML tags with AES-256",
          "Disabling CSS stylesheets on the server"
        ],
        correctAnswerIndex: 1,
        explanation: "Throttling request velocity via rate limiting, detecting headless browser signatures, deploying CAPTCHAs, and requiring session authentication mitigate automated mass scraping.",
        relatedTopic: "Anti-Scraping Technical Defenses"
      },
      {
        id: "q10_5",
        question: "What privacy setting should individuals configure on professional networking platforms to reduce their exposure to data scrapers?",
        options: [
          "Make sure your personal phone number and personal email are hidden from public web search engines and non-connections",
          "Use your password as your public username",
          "Connect with every single anonymous invitation you receive",
          "Never log into your account from a desktop computer"
        ],
        correctAnswerIndex: 0,
        explanation: "Restricting the visibility of sensitive contact fields (phone number, private email) to approved direct connections prevents automated scrapers from weaponizing your dossier.",
        relatedTopic: "User Profile Hardening"
      }
    ]
  }
];
