// Cases 1 - 10 definitions
export const casesBatch1 = [
  {
    id: 1,
    slug: "facebook-cambridge-analytica",
    title: "The Facebook–Cambridge Analytica Scandal",
    category: "Data Breach",
    keywords: ["data privacy", "consent", "API harvesting", "electoral manipulation", "profiling"],
    country: "United States & United Kingdom",
    jurisdiction: "US Federal Trade Commission (FTC) & UK Information Commissioner's Office (ICO)",
    incidentDate: "March 2018 (Disclosed)",
    year: "2018",
    summary: "How personal data of up to 87 million users was harvested via third-party quiz apps and misused for political psychographic profiling.",
    introduction: "In early 2018, whistleblowers revealed that political consulting firm Cambridge Analytica illicitly harvested profile data from up to 87 million Facebook users without their explicit consent to build voter-targeting models.",
    overview: "The scandal originated through a personality quiz app named 'This Is Your Digital Life', developed in 2013 by researcher Aleksandr Kogan. Although only around 270,000 users installed the quiz, Facebook's Open Graph API permissions at the time allowed the app to harvest demographic, 'like', and friend-network data from all friends of those users without their knowledge or consent. This data was subsequently transferred to Cambridge Analytica in violation of Facebook's terms of service, where it was utilized to build psychographic profiles during major electoral campaigns.",
    timeline: [
      { date: "2013", title: "App Deployment", description: "Dr. Aleksandr Kogan launches 'This Is Your Digital Life' quiz, exploiting Facebook's v1.0 API permissions." },
      { date: "2014", title: "API Deprecation", description: "Facebook begins restricting friend-permission APIs, but does not actively audit previously harvested datasets." },
      { date: "Dec 2015", title: "First Guardian Report", description: "The Guardian reports Cambridge Analytica using voter data collected from Facebook; Facebook requests data deletion certification." },
      { date: "Mar 2018", title: "Whistleblower Revelations", description: "Christopher Wylie and Carole Cadwalladr publish explosive exposés in The Guardian and The New York Times." },
      { date: "Jul 2019", title: "Historic FTC Settlement", description: "US FTC announces unprecedented $5 billion penalty against Facebook for deceptive privacy practices." }
    ],
    topics: [
      { name: "Third-Party API Over-Permissioning", category: "System Architecture", description: "Allowing external application tokens to query indirect friend graph data without bilateral consent." },
      { name: "Psychographic Profiling", category: "Data Ethics", description: "Using psychometric behavioral metrics derived from social likes to target political messaging." },
      { name: "Vendor Auditing Failures", category: "Compliance", description: "Relying on self-signed attestations of data deletion rather than programmatic technical verification." }
    ],
    laws: [
      {
        jurisdiction: "United States",
        lawName: "Federal Trade Commission Act (15 U.S.C. § 45)",
        section: "Section 5 (Unfair or Deceptive Acts or Practices)",
        explanation: "Prohibits unfair or deceptive acts or practices affecting commerce. The FTC held that Facebook deceived users regarding third-party access to personal data.",
        incidentConnection: "Facebook violated its 2012 consent order requiring explicit user opt-in before sharing profile data beyond designated privacy settings.",
        status: "Resulted in a record $5 Billion FTC monetary fine and mandatory independent privacy committee governance.",
        sourceUrl: "https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook"
      },
      {
        jurisdiction: "United Kingdom",
        lawName: "Data Protection Act 1998 (pre-GDPR)",
        section: "First & Seventh Data Protection Principles",
        explanation: "Required fair and lawful data processing and appropriate technical and organizational measures against unauthorized processing.",
        incidentConnection: "The UK Information Commissioner's Office found Facebook failed to safeguard user data and prevent misuse.",
        status: "ICO issued the maximum statutory fine of £500,000 permissible under the 1998 Act.",
        sourceUrl: "https://ico.org.uk/about-the-ico/news-and-events/news-and-blogs/2018/10/ico-issues-maximum-500-000-fine-to-facebook-for-failing-to-protect-users-personal-information/"
      },
      {
        jurisdiction: "India (Comparative Context)",
        lawName: "Information Technology Act, 2000 & DPDP Act 2023",
        section: "Section 43A (IT Act) & Section 6 (DPDP Act)",
        explanation: "Section 43A mandates reasonable security practices for sensitive personal data; DPDP Act 2023 requires unbundled, unconditional consent for specified purposes.",
        incidentConnection: "CBI initiated a preliminary enquiry in India into whether data of Indian citizens was compromised for electoral influence.",
        status: "Active focus under India's Digital Personal Data Protection Act, 2023.",
        sourceUrl: "https://www.meity.gov.in/content/digital-personal-data-protection-act-2023"
      }
    ],
    impact: [
      { metric: "87 Million", label: "Profiles Harvested", detail: "Global users whose profile attributes and friend lists were ingested without direct knowledge." },
      { metric: "$5.0 Billion", label: "FTC Penalty", detail: "Largest civil penalty in history for privacy violations levied against a tech company." },
      { metric: "£500,000", label: "UK ICO Fine", detail: "Maximum permissible fine under pre-GDPR British data privacy statutes." },
      { metric: "68% Drop", label: "Trust Index", detail: "Consumer confidence in social platform privacy commitments plummeted globally." }
    ],
    lessons: [
      { category: "Individuals", tip: "Regularly audit third-party app authorizations", explanation: "Review connected application tokens in account settings and revoke permissions for dormant quizzes and tools." },
      { category: "Individuals", tip: "Recognize psychographic bait", explanation: "Viral behavioral quizzes frequently serve as harvesting mechanisms for behavioral advertising networks." },
      { category: "Developers", tip: "Enforce Least Privilege API Scopes", explanation: "Never permit APIs to return transitive connection data (e.g., friends' data) based on a single user's token." },
      { category: "Compliance", tip: "Demand forensic proof of data deletion", explanation: "Legal undertakings and paper agreements are insufficient without cryptographic proofs and access revocation." }
    ],
    sources: [
      { title: "FTC Imposes $5 Billion Penalty and New Privacy Restrictions on Facebook", publisher: "US Federal Trade Commission", url: "https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook", date: "July 24, 2019" },
      { title: "Investigation into the use of data analytics in political campaigns", publisher: "UK Information Commissioner's Office (ICO)", url: "https://ico.org.uk", date: "November 6, 2018" },
      { title: "The Cambridge Analytica Files: Exposed", publisher: "The Guardian", url: "https://www.theguardian.com/news/series/cambridge-analytica-files", date: "March 17, 2018" }
    ],
    image: "/images/cases/cambridge-analytica.svg",
    imageAlt: "Digital data network node visualization representing Facebook data sharing",
    estimatedReadTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    slug: "indian-bank-phishing-scam",
    title: "The Indian Bank Phishing & Smishing Campaigns",
    category: "Online Fraud",
    keywords: ["phishing", "smishing", "net banking", "reverse proxy", "OTP fraud", "cyber fraud"],
    country: "India",
    jurisdiction: "India (IT Act 2000 & Bharatiya Nyaya Sanhita / IPC)",
    incidentDate: "2021–2022 (Surge)",
    year: "2022",
    summary: "How deceptive SMS notices regarding expired PAN cards and KYC updates tricked thousands into fraudulent banking clones.",
    introduction: "Across 2021 and 2022, a coordinated wave of 'KYC suspension' SMS messages impersonating major Indian banks (SBI, HDFC, ICICI) defrauded depositors of tens of crores through cloned net-banking portals and OTP interception.",
    overview: "Attackers leveraged bulk SMS headers and automated spoofing to transmit urgent alerts stating: 'Your bank account has been suspended due to pending PAN/KYC update. Click here to prevent account closure.' Victims clicking the embedded shortlinks landed on pixel-perfect replicas of official banking portals. Malicious JavaScript captured usernames, passwords, and secondary OTPs in real-time, instantly transmitting credentials via Telegram bots to fraudsters who triggered immediate fund exfiltration via mule accounts and UPI bridges.",
    timeline: [
      { date: "Oct 2021", title: "Spike in Smishing Traffic", description: "State cyber cells report an unprecedented surge in fake bank KYC SMS messages containing shortened bit.ly and ngrok URLs." },
      { date: "Jan 2022", title: "Cert-In High Severity Advisory", description: "CERT-In issues advisory CIVN-2022-0043 alerting citizens to targeted phishing against major banking institutions." },
      { date: "Mar 2022", title: "Mule Account Syndicates Busted", description: "Delhi Police Special Cell and Cyber Crime units dismantle multi-state fraud rings operating out of Jamtara and Mewat." },
      { date: "Jun 2022", title: "RBI Tightens DLT Regulations", description: "TRAI and RBI mandate strict template registration on Distributed Ledger Technology (DLT) telecom platforms to curb spoofed SMS." }
    ],
    topics: [
      { name: "Smishing (SMS Phishing)", category: "Social Engineering", description: "Exploiting SMS urgency, fake regulatory deadlines, and fear of financial exclusion." },
      { name: "Adversary-in-the-Middle (AiTM)", category: "Exploitation", description: "Real-time relaying of victim-entered one-time passwords to bypass two-factor authentication." },
      { name: "Mule Account Networks", category: "Financial Crime", description: "Funneling illicit transfers through rented or compromised bank accounts to obscure the money trail." }
    ],
    laws: [
      {
        jurisdiction: "India",
        lawName: "Information Technology Act, 2000",
        section: "Section 66C (Identity Theft) & Section 66D (Cheating by Impersonation)",
        explanation: "Section 66C penalizes fraudulent use of electronic signatures, passwords or unique identification. Section 66D punishes cheating by impersonating using computer resources with imprisonment up to 3 years and fine up to ₹1 lakh.",
        incidentConnection: "Perpetrators hosted fraudulent banking websites and impersonated legitimate banking officers to harvest victim credentials.",
        status: "Primary statutory provisions invoked in cyber police FIRs across all states.",
        sourceUrl: "https://www.indiacode.nic.in/handle/123456789/1999"
      },
      {
        jurisdiction: "India",
        lawName: "Indian Penal Code (now Bharatiya Nyaya Sanhita)",
        section: "Section 419 & 420 (Cheating & Dishonestly Inducing Delivery of Property)",
        explanation: "Sections 419/420 IPC (Sections 318/319 BNS) penalize criminal fraud and deceptive deprivation of property with up to 7 years imprisonment.",
        incidentConnection: "Applied alongside IT Act to recover funds and prosecute organized financial syndicate operators.",
        status: "Active penal law for multi-crore criminal conspiracies.",
        sourceUrl: "https://www.indiacode.nic.in"
      },
      {
        jurisdiction: "India (Banking Regulatory)",
        lawName: "RBI Master Direction on Customer Protection",
        section: "Zero Liability & Limited Liability Framework (2017/2021)",
        explanation: "Mandates zero liability for customers if unauthorized electronic transactions occur through bank negligence or third-party breaches reported within 3 days.",
        incidentConnection: "Determined whether victims could obtain bank reimbursements when OTPs were unwittingly shared due to deceptive phishing.",
        status: "Standard framework used by Banking Ombudsmen for claims evaluation.",
        sourceUrl: "https://www.rbi.org.in"
      }
    ],
    impact: [
      { metric: "₹100+ Crore", label: "Estimated Loss", detail: "Aggregated nationwide losses reported across cybercrime portals during the KYC wave." },
      { metric: "50,000+", label: "Spoofed Domains Blocked", detail: "DoT and CERT-In issued emergency takedown directives against illicit banking domains." },
      { metric: "24-48 Hours", label: "Golden Window", detail: "Critical timeframe to report on National Helpline 1930 to freeze funds in mule accounts." }
    ],
    lessons: [
      { category: "Individuals", tip: "Banks never ask for KYC updates over SMS links", explanation: "Official KYC is conducted in-branch or inside official authenticated mobile applications." },
      { category: "Individuals", tip: "Inspect URLs carefully before entering OTPs", explanation: "Verify the domain name in the address bar. Fraudulent domains use subtle typos like sbi-kyc-update.com." },
      { category: "Organizations", tip: "Implement FIDO2 / WebAuthn Hardware Keys", explanation: "Phishing-resistant passkeys cannot be stolen by reverse-proxy phishing sites unlike SMS OTPs." }
    ],
    sources: [
      { title: "CERT-In Advisory CIVN-2022-0043 on Banking Phishing", publisher: "CERT-In", url: "https://www.cert-in.org.in", date: "January 2022" },
      { title: "National Cyber Crime Reporting Portal Advisory on KYC Frauds", publisher: "Ministry of Home Affairs (MHA)", url: "https://cybercrime.gov.in", date: "April 2022" },
      { title: "Customer Protection – Limiting Liability in Unauthorized Electronic Transactions", publisher: "Reserve Bank of India", url: "https://www.rbi.org.in", date: "July 2017" }
    ],
    image: "/images/cases/bank-phishing.svg",
    imageAlt: "Graphic representation of spoofed banking alert and phishing warning",
    estimatedReadTime: "6 min read",
    featured: true
  },
  {
    id: 3,
    slug: "wannacry-ransomware-attack",
    title: "WannaCry Ransomware Attack",
    category: "Ransomware",
    keywords: ["ransomware", "EternalBlue", "SMBv1", "worm", "NHS", "critical infrastructure"],
    country: "Global (150+ Countries)",
    jurisdiction: "International Cyber Law / UK Computer Misuse Act / US CFAA",
    incidentDate: "May 12, 2017",
    year: "2017",
    summary: "A global cyberattack utilizing weaponized SMB exploits that paralyzed hospital systems, rail networks, and telecommunications in hours.",
    introduction: "On May 12, 2017, the WannaCry cryptographic worm spread across more than 200,000 computers in 150 countries within 24 hours, crippling Britain's National Health Service, Renault, FedEx, and critical state networks.",
    overview: "WannaCry combined ransomware payload encryption with a self-propagating network worm mechanism. It weaponized 'EternalBlue', an exploit developed by the NSA that targeted an unauthenticated remote code execution vulnerability in Microsoft's Server Message Block version 1 (SMBv1) protocol (CVE-2017-0144). Although Microsoft had released patch MS17-010 two months prior, thousands of hospitals, transport operators, and industrial enterprises had failed to patch legacy Windows installations.",
    timeline: [
      { date: "Mar 14, 2017", title: "Microsoft Releases MS17-010", description: "Microsoft issues critical security bulletin patching SMBv1 vulnerability CVE-2017-0144." },
      { date: "Apr 14, 2017", title: "Shadow Brokers Leak", description: "Hacker group Shadow Brokers dumps NSA cyber weapons online, including EternalBlue." },
      { date: "May 12, 2017 (08:00 UTC)", title: "Outbreak Commences", description: "WannaCry begins infective propagation across Europe and Asia; UK NHS trusts report locked emergency terminals." },
      { date: "May 12, 2017 (14:30 UTC)", title: "Kill Switch Triggered", description: "Researcher Marcus Hutchins registers hardcoded unregistered domain, unintentionally halting propagation." }
    ],
    topics: [
      { name: "Wormable Exploits (EternalBlue)", category: "Vulnerability Exploitation", description: "Exploiting SMB protocol buffers to achieve remote execution without victim interaction." },
      { name: "Legacy System Technical Debt", category: "Infrastructure", description: "Running unpatched Windows XP and Windows 7 systems in critical health environments." },
      { name: "Cryptographic Extortion", category: "Malware", description: "Encrypting local documents with RSA-2048 and demanding $300-$600 in Bitcoin." }
    ],
    laws: [
      {
        jurisdiction: "United Kingdom",
        lawName: "Computer Misuse Act 1990",
        section: "Section 3 & 3ZA (Unauthorised acts causing serious damage)",
        explanation: "Criminalizes unauthorized acts with intent to impair computer operation, carrying life imprisonment when critical health infrastructure is endangered.",
        incidentConnection: "Applied in British police investigations into the disruption of 80 NHS trusts and cancellation of 19,000 appointments.",
        status: "Benchmark statutory test for attacks on public health infrastructure.",
        sourceUrl: "https://www.legislation.gov.uk/ukpga/1990/18/contents"
      },
      {
        jurisdiction: "United States",
        lawName: "Computer Fraud and Abuse Act (18 U.S.C. § 1030)",
        section: "§ 1030(a)(5)(A) (Intentional Damage to Protected Computers)",
        explanation: "Penalizes intentionally causing transmission of code resulting in unauthorized damage to protected computers exceeding statutory thresholds.",
        incidentConnection: "US Department of Justice unsealed indictments against North Korean state-sponsored actors (Lazarus Group).",
        status: "Federal criminal indictments issued by DOJ in 2018 and 2020.",
        sourceUrl: "https://www.justice.gov/opa/pr/north-korean-regime-backed-programmer-charged-conspiracy-conduct-multiple-cyberattacks-and"
      },
      {
        jurisdiction: "India (Comparative Context)",
        lawName: "Information Technology Act, 2000",
        section: "Section 43, 66 & 66F (Cyber Terrorism)",
        explanation: "Section 66F punishes cyber terrorism threatening critical infrastructure or national security with life imprisonment.",
        incidentConnection: "CERT-In tracked WannaCry incidents affecting state police computers and municipal offices across Gujarat and Andhra Pradesh.",
        status: "Governed under National Critical Information Infrastructure Protection Centre (NCIIPC) protocols.",
        sourceUrl: "https://nciipc.gov.in"
      }
    ],
    impact: [
      { metric: "200,000+", label: "Infected Systems", detail: "Spanned across 150 countries within 24 hours of weaponization." },
      { metric: "£92 Million", label: "Cost to UK NHS", detail: "Direct IT remediation costs and cancelled surgical appointments." },
      { metric: "$4.0 Billion", label: "Global Economic Impact", detail: "Estimated global losses according to cybersecurity risk modeling firm Cyence." },
      { metric: "19,000+", label: "Medical Appointments", detail: "Elective procedures and cancer care consultations canceled due to system lockout." }
    ],
    lessons: [
      { category: "Enterprise", tip: "Implement aggressive patch management", explanation: "Critical security bulletins like MS17-010 must be applied within days of vendor release." },
      { category: "Infrastructure", tip: "Disable obsolete protocols (SMBv1)", explanation: "Legacy protocols lacking modern authentication guarantees must be retired from corporate networks." },
      { category: "Resilience", tip: "Maintain immutable offline backups", explanation: "Regular offline 3-2-1 backups ensure organizations can restore operations without paying extortions." }
    ],
    sources: [
      { title: "Investigation: WannaCry cyber attack and the NHS", publisher: "UK National Audit Office (NAO)", url: "https://www.nao.org.uk/reports/investigation-wannacry-cyber-attack-and-the-nhs/", date: "October 2017" },
      { title: "Microsoft Security Bulletin MS17-010", publisher: "Microsoft MSRC", url: "https://learn.microsoft.com/en-us/security-updates/securitybulletins/2017/ms17-010", date: "March 2017" },
      { title: "Justice Department Indictment on Worldwide WannaCry Scheme", publisher: "US Department of Justice", url: "https://www.justice.gov", date: "September 2018" }
    ],
    image: "/images/cases/wannacry.svg",
    imageAlt: "Locked computer screen graphic depicting cryptographic ransomware alert",
    estimatedReadTime: "7 min read",
    featured: true
  },
  {
    id: 4,
    slug: "instagram-data-leak",
    title: "The Instagram Data Scraping & Exposure",
    category: "Social Media",
    keywords: ["data scraping", "API abuse", "PII exposure", "GDPR", "teen privacy"],
    country: "International / European Union",
    jurisdiction: "European Union (GDPR) & Irish Data Protection Commission (DPC)",
    incidentDate: "2021–2022 (Regulatory Ruling)",
    year: "2021",
    summary: "How unprotected scraping databases and default business-account settings exposed contact information of millions of users including teenagers.",
    introduction: "Between 2019 and 2021, investigative reports and regulatory inquiries revealed that contact details for millions of Instagram users—including phone numbers and email addresses of underage business-account users—were exposed to unauthorized scrapers.",
    overview: "The vulnerability emerged from dual factors: automated web-scraping scripts abusing unprotected API endpoints, and Instagram's default profile settings for business accounts. Teenage users who transitioned their accounts to 'business' status to access platform analytics unwittingly had their phone numbers and email addresses rendered publicly visible in the page source and queryable via public API calls without age verification or privacy guardrails.",
    timeline: [
      { date: "May 2019", title: "Unprotected Database Discovery", description: "Security researcher Anurag Sen discovers AWS database containing 49 million records scraped from Instagram influencers." },
      { date: "Oct 2020", title: "Irish DPC Launches Inquiry", description: "Ireland's Data Protection Commission initiates formal statutory investigation into Instagram's handling of children's data." },
      { date: "Sep 2022", title: "Historic €405M Penalty", description: "Irish DPC concludes inquiry, issuing a record €405 Million GDPR fine against Meta for child data privacy breaches." }
    ],
    topics: [
      { name: "Automated API Scraping", category: "Application Security", description: "Using botnets to systematically harvest publicly exposed metadata at scale." },
      { name: "Default Privacy Configurations", category: "UX Architecture", description: "Enabling public exposure of contact details by default without age-appropriate friction." },
      { name: "Special Category Data Protections", category: "Regulatory Compliance", description: "Heightened legal duty of care owed to children and minor account holders." }
    ],
    laws: [
      {
        jurisdiction: "European Union",
        lawName: "General Data Protection Regulation (GDPR)",
        section: "Article 5(1)(a), Article 12, Article 24 & Article 25 (Data Protection by Design)",
        explanation: "Requires that privacy protections and data minimization be integrated into system architecture by default, especially for minors.",
        incidentConnection: "Meta was found guilty of failing to provide privacy by default for minor accounts transitioning to business profiles.",
        status: "Resulted in a €405 Million penalty issued by the Irish Data Protection Commission in September 2022.",
        sourceUrl: "https://www.dataprotection.ie/en/news-media/press-releases/data-protection-commission-announces-decision-inquiry-meta-instagram"
      },
      {
        jurisdiction: "India (Comparative Context)",
        lawName: "Digital Personal Data Protection Act, 2023",
        section: "Section 9 (Additional obligations in relation to children)",
        explanation: "Prohibits tracking, behavioral monitoring, and targeted advertising directed at children under 18 without verifiable parental consent.",
        incidentConnection: "Creates strict compliance benchmarks for social media platforms operating in India regarding youth privacy.",
        status: "Key statutory benchmark for all online services catering to Indian youth.",
        sourceUrl: "https://www.meity.gov.in"
      }
    ],
    impact: [
      { metric: "€405 Million", label: "GDPR Penalty", detail: "Second largest fine ever levied under European data protection legislation." },
      { metric: "Millions", label: "Teen Profiles Exposed", detail: "Contact information accessible to commercial spammers and scraping brokers." },
      { metric: "Platform Overhaul", label: "Remediation", detail: "Default private setting mandated for all new signups under age 18." }
    ],
    lessons: [
      { category: "Individuals", tip: "Avoid converting personal accounts to business", explanation: "Business profiles display contact methods publicly; keep personal accounts set to Private." },
      { category: "Developers", tip: "Implement Rate Limiting and Anti-Scraping Defenses", explanation: "Guard open profile endpoints with CAPTCHAs, bot fingerprinting, and strict egress limits." },
      { category: "Product Designers", tip: "Enforce Privacy by Default", explanation: "Default privacy settings must always favor the highest level of restriction, particularly for youth." }
    ],
    sources: [
      { title: "Irish DPC Announces Decision in Inquiry into Meta regarding Instagram", publisher: "Data Protection Commission Ireland", url: "https://www.dataprotection.ie", date: "September 5, 2022" },
      { title: "EDPB Binding Decision 2/2022 on Instagram Inquiry", publisher: "European Data Protection Board", url: "https://edpb.europa.eu", date: "July 28, 2022" }
    ],
    image: "/images/cases/instagram-leak.svg",
    imageAlt: "Graphic of social media profile silhouette and privacy shield",
    estimatedReadTime: "6 min read",
    featured: true
  },
  {
    id: 5,
    slug: "celebrity-deepfake-scams",
    title: "Celebrity Deepfake Scams & AI Voice Clones",
    category: "Identity Theft",
    keywords: ["deepfake", "generative AI", "voice clone", "synthetic media", "financial scam", "defamation"],
    country: "India & Global",
    jurisdiction: "India (IT Act 2000 & IT Rules 2021) & Global Jurisdictions",
    incidentDate: "2023–2024",
    year: "2023",
    summary: "How hyper-realistic synthetic video and cloned audio of public figures were deployed to orchestrate viral investment scams and disinformation.",
    introduction: "In late 2023, synthetic deepfake videos featuring Indian celebrities and business leaders (such as Sachin Tendulkar, Rashmika Mandanna, and industrialist executives) proliferated across social platforms to promote fraudulent gaming apps and fake high-yield investment schemes.",
    overview: "Using modern deep learning and diffusion models, fraudsters generated photorealistic face-swapped video and synchronized neural voice clones. The media depicted recognizable figures endorsing unlicensed gambling portals or high-return stock schemes. The high fidelity of synthetic audio made it nearly impossible for casual viewers to discern artificial artifacts, leading to significant financial losses and reputational damage.",
    timeline: [
      { date: "Nov 2023", title: "Rashmika Mandanna Deepfake Viral", description: "Viral synthetic face-swap video sparks nationwide debate on generative AI abuse and digital consent." },
      { date: "Dec 2023", title: "MeitY Issues Deepfake Advisory", description: "Ministry of Electronics and IT issues urgent directive to social media intermediaries under IT Rules 2021." },
      { date: "Jan 2024", title: "Arrests in Delhi and Andhra Pradesh", description: "Cyber police apprehend perpetrators responsible for creating and distributing synthetic deepfake media." }
    ],
    topics: [
      { name: "Generative Adversarial Networks (GANs)", category: "Synthetic Media", description: "Neural networks trained on celebrity likenesses to synthesize authentic facial movements." },
      { name: "Voice Cloning & Audio Synthesis", category: "Social Engineering", description: "Replicating vocal timber, accents, and emotional cadence from brief public audio samples." },
      { name: "Algorithmic Virality Exploitation", category: "Platform Dynamics", description: "Exploiting recommendation algorithms to distribute sensational synthetic media before takedown." }
    ],
    laws: [
      {
        jurisdiction: "India",
        lawName: "Information Technology Act, 2000 & IT Rules 2021",
        section: "Section 66D, 66E (Privacy) & Rule 3(1)(b) / Rule 3(2)(b)",
        explanation: "Section 66D penalizes cheating by impersonation. Rule 3(2)(b) requires intermediaries to remove non-consensual sexually explicit or morphed content within 24 hours.",
        incidentConnection: "Applied directly by law enforcement to prosecute creators and issue compliance notices to host platforms.",
        status: "Active enforcement basis for all synthetic media cases in India.",
        sourceUrl: "https://www.meity.gov.in"
      },
      {
        jurisdiction: "India",
        lawName: "Copyright Act 1957 & Common Law Personality Rights",
        section: "Moral Rights & Tort of Passing Off",
        explanation: "Protects individuals against unauthorized commercial exploitation and deceptive endorsement using their voice, image, or persona.",
        incidentConnection: "High Court of Delhi granted dynamic injunctions protecting personality rights of celebrities like Amitabh Bachchan and Anil Kapoor.",
        status: "Established judicial precedent across Indian High Courts.",
        sourceUrl: "https://delhihighcourt.nic.in"
      }
    ],
    impact: [
      { metric: "24 Hours", label: "Mandatory Takedown", detail: "Statutory deadline for social platforms to remove impersonating synthetic media upon complaint." },
      { metric: "₹1 Lakh+", label: "Statutory Penalty", detail: "Financial penalty alongside up to 3 years imprisonment under Section 66D." },
      { metric: "100M+", label: "Viral Impressions", detail: "Aggregate views generated by celebrity investment deepfakes prior to algorithmic removal." }
    ],
    lessons: [
      { category: "Individuals", tip: "Look for subtle visual and audio artifacts", explanation: "Inspect unnatural blinking, mismatched lip-sync, edge blurring around the jawline, and robotic vocal cadences." },
      { category: "Investors", tip: "Verify financial claims on official portals", explanation: "Never invest in stock tips or gaming portals promoted via social video ads, regardless of who appears to endorse it." },
      { category: "Platforms", tip: "Deploy C2PA Content Credentials", explanation: "Attach cryptographic provenance metadata to synthetic outputs to establish digital authenticity." }
    ],
    sources: [
      { title: "MeitY Advisory on Deepfakes and Misinformation", publisher: "Press Information Bureau (PIB) India", url: "https://pib.gov.in", date: "December 26, 2023" },
      { title: "Delhi High Court Ruling on Personality Rights in Digital Age", publisher: "Delhi High Court", url: "https://delhihighcourt.nic.in", date: "November 2022" }
    ],
    image: "/images/cases/deepfake-scams.svg",
    imageAlt: "Digital wireframe human face with biometric scan overlay",
    estimatedReadTime: "5 min read",
    featured: false
  },
  {
    id: 6,
    slug: "online-harassment-and-stalking",
    title: "Online Harassment, Doxxing & Cyberstalking",
    category: "Cyberbullying",
    keywords: ["cyberstalking", "doxxing", "harassment", "trolling", "defamation", "IT Act 66E"],
    country: "India",
    jurisdiction: "India (IT Act 2000 & Bharatiya Nyaya Sanhita / IPC Section 354D)",
    incidentDate: "2020–2022",
    year: "2020",
    summary: "Examining targeted digital intimidation, non-consensual disclosure of personal records (doxxing), and state legal protections.",
    introduction: "The rapid expansion of social platforms has witnessed severe escalations in digital harassment, including persistent surveillance, threatening communications, morphing photos, and doxxing (publishing home addresses and phone numbers online to incite harassment).",
    overview: "Cyberstalking often begins with persistent unwanted messaging across multiple accounts. When blocked, perpetrators frequently resort to creating cloned profiles, publishing victim phone numbers on classified adult websites, or circulating manipulated private imagery to coerce, humiliate, or extort victims. Indian statutory law has evolved significantly to criminalize digital monitoring and privacy violations under both penal codes and cyber statutes.",
    timeline: [
      { date: "2013", title: "Criminal Law Amendment Act", description: "India formalizes digital stalking as a specific punishable criminal offense under IPC Section 354D." },
      { date: "2020", title: "Surge During Lockdowns", description: "National Commission for Women (NCW) reports 100%+ increase in cyberbullying and cyber harassment complaints." },
      { date: "2021", title: "IT Intermediary Rules Enacted", description: "Mandates Grievance Officers and strict 24-hour response timelines for non-consensual intimate or morphed imagery." }
    ],
    topics: [
      { name: "Digital Doxxing & OSINT Misuse", category: "Privacy Violation", description: "Weaponizing open-source intelligence to broadcast a victim's private residential and contact details." },
      { name: "Persistent Digital Surveillance", category: "Cybercrime", description: "Using spyware, burner accounts, and geotags to track individual movements and online presence." },
      { name: "Psychological Coercion", category: "Social Dynamics", description: "Coordinated digital mobbing designed to force victims off public and professional forums." }
    ],
    laws: [
      {
        jurisdiction: "India",
        lawName: "Indian Penal Code / Bharatiya Nyaya Sanhita",
        section: "Section 354D IPC (Section 78 BNS) - Stalking",
        explanation: "Criminalizes monitoring the use by a woman of the internet, email, or any other form of electronic communication, punishable by up to 5 years imprisonment.",
        incidentConnection: "Primary penal statute deployed in police complaints involving online tracking and persistent unsolicited messaging.",
        status: "Cognizable offense with non-bailable provisions on second conviction.",
        sourceUrl: "https://www.indiacode.nic.in"
      },
      {
        jurisdiction: "India",
        lawName: "Information Technology Act, 2000",
        section: "Section 66E (Privacy Violation) & Section 67/67A (Obscene/Sexually Explicit Material)",
        explanation: "Section 66E punishes capturing or publishing private images without consent. Section 67/67A carries up to 5 to 7 years imprisonment for publishing explicit digital content.",
        incidentConnection: "Invoked when stalkers circulate morphed photographs or private communications to cause humiliation.",
        status: "Strict liability provisions routinely enforced by Cyber Crime Cells.",
        sourceUrl: "https://www.indiacode.nic.in"
      }
    ],
    impact: [
      { metric: "Up to 5 Years", label: "Imprisonment", detail: "Statutory prison term for persistent cyberstalking under Indian criminal law." },
      { metric: "24 Hours", label: "Intermediary Removal", detail: "Mandatory timeline for platforms to remove non-consensual sensitive content under IT Rules." },
      { metric: "1930 / Portal", label: "Specialized Cell", detail: "Designated National Cybercrime Reporting Portal category for women and child cyber protections." }
    ],
    lessons: [
      { category: "Individuals", tip: "Preserve electronic evidence immediately", explanation: "Take timestamped screenshots of messages, profile handles, URLs, and headers before blocking the perpetrator." },
      { category: "Individuals", tip: "Lock down social privacy settings", explanation: "Restrict profile visibility to approved friends, disable location tagging, and hide contact info." },
      { category: "Support", tip: "File formal reports without delay", explanation: "Lodge complaints on cybercrime.gov.in under the anonymous reporting feature for rapid intermediary takedown." }
    ],
    sources: [
      { title: "National Crime Records Bureau (NCRB) Cyber Crime Statistics", publisher: "Ministry of Home Affairs", url: "https://ncrb.gov.in", date: "December 2022" },
      { title: "Guidelines for Prevention of Cyber Stalking and Online Abuse", publisher: "National Commission for Women (NCW)", url: "http://ncw.nic.in", date: "May 2021" }
    ],
    image: "/images/cases/cyberstalking.svg",
    imageAlt: "Graphic depicting cybersecurity shield blocking malicious online messages",
    estimatedReadTime: "6 min read",
    featured: false
  },
  {
    id: 7,
    slug: "state-sponsored-cyber-attacks",
    title: "State-Sponsored Cyber Espionage: SolarWinds Supply Chain",
    category: "Cyber Espionage",
    keywords: ["supply chain", "APT29", "SUNBURST", "SolarWinds", "backdoor", "nation-state"],
    country: "United States & Global",
    jurisdiction: "United States Cybersecurity & Infrastructure Security Agency (CISA) & International Law",
    incidentDate: "December 2020 (Disclosed)",
    year: "2020",
    summary: "How sophisticated nation-state actors compromised a trusted enterprise network management software to infiltrate top government agencies.",
    introduction: "In late 2020, security firm FireEye uncovered a catastrophic supply chain breach: Russian Foreign Intelligence Service (SVR / APT29) hackers had inserted a covert backdoor into legitimate software updates for SolarWinds Orion, a network monitoring platform used by 300,000 organizations worldwide.",
    overview: "Rather than attacking fortified government perimeters directly, attackers targeted SolarWinds' build pipeline. By injecting malicious code ('SUNBURST') into official Orion digital updates signed with valid cryptographic certificates, the attackers established stealthy persistence inside multiple US cabinet departments (Treasury, Homeland Security, State, Defense) and Fortune 500 enterprises for over nine months undetected.",
    timeline: [
      { date: "Sep 2019", title: "Initial Infiltration", description: "Threat actors test code injection techniques within SolarWinds' software assembly pipeline." },
      { date: "Feb 2020", title: "SUNBURST Injected", description: "Trojanized updates containing the SUNBURST backdoor are digitally signed and distributed to 18,000 customers." },
      { date: "Dec 8, 2020", title: "FireEye Disclosure", description: "FireEye announces its internal security tools were stolen, tracing origin back to SolarWinds Orion DLL." },
      { date: "Dec 13, 2020", title: "CISA Emergency Directive", description: "CISA issues Emergency Directive 21-01 ordering all federal civilian agencies to immediately disconnect Orion." }
    ],
    topics: [
      { name: "Software Supply Chain Poisoning", category: "Attack Vector", description: "Compromising upstream software builds to distribute backdoors through trusted vendor updates." },
      { name: "Code Signing Certificate Abuse", category: "Cryptographic Security", description: "Signing malicious binaries with legitimate enterprise private keys to bypass endpoint defenses." },
      { name: "Living-off-the-Land (LotL)", category: "Evasion Technique", description: "Using built-in Windows admin tools (PowerShell, WMI) to move laterally without triggering antivirus." }
    ],
    laws: [
      {
        jurisdiction: "United States",
        lawName: "Cybersecurity Information Sharing Act (CISA Act of 2015)",
        section: "6 U.S.C. §§ 1501-1510 & Presidential Policy Directive 41",
        explanation: "Authorizes emergency operational directives by CISA and shields entities sharing cyber threat indicators from antitrust and liability claims.",
        incidentConnection: "Enabled CISA Emergency Directive 21-01 requiring federal agencies to take impacted servers offline immediately.",
        status: "Foundation of US Federal operational response architecture.",
        sourceUrl: "https://www.cisa.gov/news-events/directives/ed-21-01-mitigate-solarwinds-orion-code-compromise"
      },
      {
        jurisdiction: "United States",
        lawName: "Executive Order 14028",
        section: "Improving the Nation's Cybersecurity (Section 4: Software Supply Chain)",
        explanation: "Mandated Software Bill of Materials (SBOM) and strict build-pipeline verification standards for all federal software vendors.",
        incidentConnection: "Direct legislative aftermath of the SolarWinds and subsequent supply chain incidents.",
        status: "Enforced across all US government software procurement.",
        sourceUrl: "https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/"
      }
    ],
    impact: [
      { metric: "18,000", label: "Vulnerable Clients", detail: "Organizations that downloaded the trojanized Orion update package." },
      { metric: "9 Months", label: "Dwell Time", detail: "Adversaries operated inside high-security networks before detection." },
      { metric: "9 US Agencies", label: "Confirmed Infiltrated", detail: "Including Departments of Treasury, Homeland Security, Commerce, and Energy." }
    ],
    lessons: [
      { category: "Software Vendors", tip: "Implement Reproducible, Isolated Builds", explanation: "Build software in ephemeral, tamper-proof pipelines with cryptographically verifiable checksums." },
      { category: "Enterprises", tip: "Require Software Bill of Materials (SBOM)", explanation: "Demand complete visibility into third-party libraries and code dependencies from all software suppliers." },
      { category: "Security Teams", tip: "Enforce Zero Trust Network Segmentation", explanation: "Never assume internal network monitoring servers are trustworthy; restrict their outbound internet access." }
    ],
    sources: [
      { title: "Emergency Directive 21-01: Mitigate SolarWinds Orion Code Compromise", publisher: "CISA", url: "https://www.cisa.gov", date: "December 13, 2020" },
      { title: "Highly Evasive Attacker Leverages SolarWinds Supply Chain", publisher: "Mandiant / FireEye", url: "https://www.mandiant.com", date: "December 13, 2020" }
    ],
    image: "/images/cases/solarwinds.svg",
    imageAlt: "Network globe graphic illustrating supply chain nodes connecting to data centers",
    estimatedReadTime: "7 min read",
    featured: false
  },
  {
    id: 8,
    slug: "upi-payment-scam-wave",
    title: "UPI Payment Fraud & QR Code Phishing Waves",
    category: "Online Fraud",
    keywords: ["UPI", "QR code", "collect request", "social engineering", "OLX scam", "fintech"],
    country: "India",
    jurisdiction: "India (IT Act 2000, NPCI Guidelines & RBI Regulations)",
    incidentDate: "2022–2023",
    year: "2023",
    summary: "How deceptive 'Scan QR to Receive Money' tricks and fake collect requests exploited consumer misunderstandings of UPI architecture.",
    introduction: "With the astronomical expansion of the Unified Payments Interface (UPI) across India, cybercriminals pioneered social engineering campaigns that deceptively manipulated users into entering their UPI PINs under the guise of receiving payments.",
    overview: "A prevalent vector involves fake buyers on secondhand marketplaces (like OLX or Quikr). The scammer contacts a seller, agrees to the purchase price without bargaining, and sends a QR code or UPI 'Collect Request', falsely claiming: 'Scan this QR code and enter your PIN to accept the advance payment.' In reality, UPI architecture requires a PIN only to debit money, never to receive money. Unwitting users entering their PIN instantly authorized debits from their linked savings accounts.",
    timeline: [
      { date: "2021", title: "Surge in Secondhand Marketplace Scams", description: "State cyber helplines record thousands of reports of fake army personnel buying furniture via fake UPI QR codes." },
      { date: "2022", title: "NPCI Introduces Safety Pop-ups", description: "National Payments Corporation of India (NPCI) mandates prominent red warning banners on UPI Collect Requests." },
      { date: "2023", title: "1930 Helpline Expansion", description: "Integration of Citizen Financial Cyber Fraud Reporting System enables immediate real-time freezing of fraudulent UPI transactions." }
    ],
    topics: [
      { name: "UPI Collect Request Exploitation", category: "Payment Architecture", description: "Abusing reverse payment request protocols to solicit unauthorized debit authorizations." },
      { name: "Cognitive Authority Heuristics", category: "Social Engineering", description: "Impersonating military personnel or official government representatives to build unearned trust." },
      { name: "Rapid Multi-Tier Fund Dispersal", category: "Money Laundering", description: "Splitting stolen funds across hundreds of UPI handles and digital wallets within minutes." }
    ],
    laws: [
      {
        jurisdiction: "India",
        lawName: "Information Technology Act, 2000",
        section: "Section 66C (Identity Theft) & Section 66D (Cheating by Impersonation)",
        explanation: "Penalizes cheating by impersonation using electronic communication and fraudulent use of unique authentication PINs.",
        incidentConnection: "Forms the statutory basis for cybercrime police registration against fraudulent UPI merchant handles.",
        status: "Standard statutory benchmark enforced nationwide.",
        sourceUrl: "https://www.indiacode.nic.in"
      },
      {
        jurisdiction: "India",
        lawName: "Payment and Settlement Systems Act, 2007",
        section: "Section 18 & NPCI Procedural Guidelines",
        explanation: "Empowers RBI and NPCI to establish systemic risk controls and transaction verification standards across payment networks.",
        incidentConnection: "Mandates fraud monitoring, beneficiary display verification, and two-factor compliance on UPI switches.",
        status: "Active regulatory framework governing all UPI apps (GPay, PhonePe, Paytm).",
        sourceUrl: "https://www.rbi.org.in"
      }
    ],
    impact: [
      { metric: "₹10,000–₹1L+", label: "Average Loss / Victim", detail: "Savings debited before victim realizes PIN authorized a debit, not a credit." },
      { metric: "Golden Hour", label: "Reporting Window", detail: "Calling 1930 within 2 hours enables banking switches to interdict funds in transit." },
      { metric: "10 Billion+", label: "Monthly UPI Scale", detail: "Vast transactional volume creates vast surface area for social engineering." }
    ],
    lessons: [
      { category: "Golden Rule", tip: "UPI PIN is ONLY for paying, NEVER for receiving", explanation: "You NEVER need to enter your UPI PIN, password, or scan a QR code to receive money into your bank." },
      { category: "Individuals", tip: "Beware of rushed online marketplace buyers", explanation: "Fraudsters avoid in-person inspection and immediately offer instant digital advance payments." },
      { category: "Action", tip: "Dial 1930 immediately upon unauthorized debit", explanation: "Reporting immediately to the Cyber Fraud Helpline can freeze funds in the receiving intermediary wallet." }
    ],
    sources: [
      { title: "NPCI Consumer Advisory on UPI Safety and PIN Rules", publisher: "National Payments Corporation of India", url: "https://www.npci.org.in", date: "March 2023" },
      { title: "Citizen Financial Cyber Fraud Reporting System Advisory", publisher: "Indian Cyber Crime Coordination Centre (I4C)", url: "https://cybercrime.gov.in", date: "November 2023" }
    ],
    image: "/images/cases/upi-scam.svg",
    imageAlt: "Graphic of smartphone displaying UPI QR code and security warning badge",
    estimatedReadTime: "6 min read",
    featured: false
  },
  {
    id: 9,
    slug: "target-corporation-breach",
    title: "Target Corporation Supply Chain & POS Data Breach",
    category: "Data Breach",
    keywords: ["POS malware", "supply chain", "HVAC vendor", "credit card breach", "FTC Act"],
    country: "United States",
    jurisdiction: "United States (State Breach Notification Laws & FTC Act Section 5)",
    incidentDate: "November–December 2013",
    year: "2013",
    summary: "How stolen credentials from a third-party HVAC contractor led to the compromise of 40 million credit card records during Black Friday.",
    introduction: "During the 2013 holiday shopping season, Target Corporation suffered one of the most consequential retail breaches in history when hackers stole payment card records and personal details for over 110 million customers.",
    overview: "The breach originated through a spear-phishing attack against Fazio Mechanical Services, a third-party heating and refrigeration contractor. Using the contractor's stolen vendor portal credentials, attackers penetrated Target's internal network, escalated privileges, traversed past insufficient network segmentation, and installed custom RAM-scraping malware ('BlackPOS') across thousands of in-store Point-of-Sale cash registers to intercept unencrypted credit card data as cards were swiped.",
    timeline: [
      { date: "Sep 2013", title: "Contractor Phished", description: "HVAC vendor employee opens phishing email containing Citadel banking trojan, compromising portal credentials." },
      { date: "Nov 15, 2013", title: "Target Network Infiltrated", description: "Attackers access Target supplier portal and pivot across corporate network into POS environment." },
      { date: "Nov 30, 2013", title: "BlackPOS Deployed", description: "Malware deployed across registers; FireEye intrusion alerts are generated but unaddressed by internal security teams." },
      { date: "Dec 12, 2013", title: "US DOJ Informs Target", description: "Federal law enforcement alerts Target after banks discover massive batches of cloned credit cards on dark web." }
    ],
    topics: [
      { name: "Third-Party Vendor Risk", category: "Supply Chain", description: "Failing to isolate vendor network access from sensitive core transaction processing networks." },
      { name: "RAM Scraping (Memory Scraper)", category: "Malware Architecture", description: "Harvesting track 1 and track 2 credit card data from volatile system memory before encryption." },
      { name: "Security Alert Fatigue", category: "Incident Response", description: "Ignoring automated security appliance alerts due to organizational communication silos." }
    ],
    laws: [
      {
        jurisdiction: "United States",
        lawName: "FTC Act (15 U.S.C. § 45) & State Multi-District Litigation",
        section: "Section 5 (Unfair Cybersecurity Practices)",
        explanation: "Held that failing to employ reasonable and appropriate data security practices constitutes an unfair business practice.",
        incidentConnection: "Target reached an $18.5 million multi-state settlement with 47 state attorneys general alongside $39 million to financial institutions.",
        status: "Landmark precedent establishing corporate liability for vendor-originated breaches.",
        sourceUrl: "https://www.ftc.gov"
      },
      {
        jurisdiction: "Payment Card Industry",
        lawName: "PCI DSS (Payment Card Industry Data Security Standard)",
        section: "Requirement 1 & 10 (Firewall Configurations & Monitoring)",
        explanation: "Mandates rigorous network segmentation between cardholder data environments (CDE) and general corporate networks.",
        incidentConnection: "Target's architecture failed PCI DSS segmentation requirements, permitting lateral traversal from billing to POS.",
        status: "Prompted nationwide US adoption of EMV chip cards over magnetic stripe swipes.",
        sourceUrl: "https://www.pcisecuritystandards.org"
      }
    ],
    impact: [
      { metric: "40 Million", label: "Credit Cards Stolen", detail: "Card numbers, expiration dates, and CVVs harvested directly from POS memory." },
      { metric: "70 Million", label: "Personal Records", detail: "Customer names, addresses, phone numbers, and emails compromised." },
      { metric: "$202 Million", label: "Direct Costs", detail: "Legal settlements, forensic remediation, and regulatory compliance upgrades." },
      { metric: "Executive Resignations", label: "Leadership Impact", detail: "Target CEO and CIO both resigned in the fallout of the incident." }
    ],
    lessons: [
      { category: "Enterprises", tip: "Enforce strict micro-segmentation", explanation: "Supplier portals and facilities maintenance networks must NEVER possess routing paths to financial transaction databases." },
      { category: "Enterprises", tip: "Require Multi-Factor Authentication (MFA) on all vendor logins", explanation: "Simple password logins for contractors provide zero resilience against commodity phishing." },
      { category: "Retail", tip: "Migrate to Point-to-Point Encryption (P2PE)", explanation: "Encrypt card data at the physical hardware reader so POS terminal memory never handles plaintext cardholder numbers." }
    ],
    sources: [
      { title: "Target Multi-State Settlement Agreement", publisher: "Office of the Attorney General (California & 46 States)", url: "https://oag.ca.gov", date: "May 2017" },
      { title: "A 'Kill Chain' Analysis of the 2013 Target Data Breach", publisher: "US Senate Committee on Commerce, Science, and Transportation", url: "https://www.commerce.senate.gov", date: "March 2014" }
    ],
    image: "/images/cases/target-breach.svg",
    imageAlt: "Retail point of sale terminal graphic with data breach warning shield",
    estimatedReadTime: "7 min read",
    featured: false
  },
  {
    id: 10,
    slug: "linkedin-credential-scraping",
    title: "LinkedIn Credential Theft & Mass Profile Scraping",
    category: "Identity Theft",
    keywords: ["scraping", "credential stuffing", "API abuse", "CFAA", "hiQ Labs", "public data"],
    country: "United States",
    jurisdiction: "United States (CFAA 18 U.S.C. § 1030 & Ninth Circuit Precedent)",
    incidentDate: "2016–2021",
    year: "2021",
    summary: "How scraped datasets of 700 million LinkedIn users ignited the definitive legal battle over automated scraping of publicly accessible internet data.",
    introduction: "In mid-2021, databases containing records of approximately 700 million LinkedIn users (93% of its user base) were listed for sale on dark web hacker forums, highlighting the critical legal boundary between unauthorized hacking and automated web scraping.",
    overview: "Unlike traditional breaches where firewalls are breached, threat actors harvested LinkedIn data by abusing official APIs and automated scraping bots that extracted public profile attributes: full names, email addresses, phone numbers, workplace histories, and social handles. This incident occurred alongside LinkedIn's landmark federal legal battle against hiQ Labs regarding whether scraping publicly visible data violates the Computer Fraud and Abuse Act (CFAA).",
    timeline: [
      { date: "2017", title: "LinkedIn Issues Cease-and-Desist", description: "LinkedIn demands hiQ Labs cease automated scraping of public member profiles, citing CFAA violations." },
      { date: "2019", title: "Ninth Circuit Decision", description: "Court rules scraping publicly available web data does not constitute 'access without authorization' under CFAA." },
      { date: "Jun 2021", title: "700M Record Scraping Exposed", description: "Forums list comprehensive dataset scraped via automated API enumeration for sale." },
      { date: "Nov 2022", title: "Settlement Reached", description: "hiQ Labs and LinkedIn enter consent judgment prohibiting unauthorized bot scraping under common law breach of contract." }
    ],
    topics: [
      { name: "Public Data Scraping at Scale", category: "Data Exposure", description: "Harvesting millions of individual public data points into aggregated, weaponizable target dossiers." },
      { name: "API Enumeration & Parameter Tampering", category: "API Security", description: "Cycling through sequential user IDs to dump profile records faster than manual browsing." },
      { name: "CFAA Authorization Limits", category: "Cyber Law Jurisprudence", description: "Differentiating between password-protected system intrusion and querying public HTTP endpoints." }
    ],
    laws: [
      {
        jurisdiction: "United States",
        lawName: "Computer Fraud and Abuse Act (18 U.S.C. § 1030)",
        section: "§ 1030(a)(2) (Unauthorized Computer Access)",
        explanation: "Prohibits intentionally accessing a computer without authorization or exceeding authorized access to obtain information.",
        incidentConnection: "Litigated in hiQ Labs, Inc. v. LinkedIn Corp.; Ninth Circuit established CFAA was not designed to prevent querying public websites lacking login gates.",
        status: "Seminal landmark judicial precedent limiting federal anti-hacking statute overreach.",
        sourceUrl: "https://www.ca9.uscourts.gov"
      },
      {
        jurisdiction: "European Union",
        lawName: "General Data Protection Regulation (GDPR)",
        section: "Article 6 (Lawfulness of Processing) & Purpose Limitation",
        explanation: "Public availability of personal data does not exempt third parties from needing a lawful basis (or consent) to harvest and process it.",
        incidentConnection: "European regulators warned that scraped databases remain subject to GDPR data processing restrictions.",
        status: "Strictly enforced by European Data Protection Authorities against commercial scrapers (e.g. Clearview AI).",
        sourceUrl: "https://edpb.europa.eu"
      }
    ],
    impact: [
      { metric: "700 Million", label: "Profiles Scraped", detail: "Represented ~93% of LinkedIn's registered global member base at time of discovery." },
      { metric: "$0 Ransom", label: "Nature of Incident", detail: "Not a core internal database breach, but aggressive extraction of publicly accessible metadata." },
      { metric: "Legal Precedent", label: "Court Impact", detail: "Reshaped the modern legal interpretation of internet scraping under US federal law." }
    ],
    lessons: [
      { category: "Individuals", tip: "Limit phone and email exposure on public profiles", explanation: "Configure platform visibility settings to conceal private contact details from public web indexing." },
      { category: "Enterprises", tip: "Deploy Behavior-Based Anti-Bot Protection", explanation: "Implement automated rate limiting, IP reputation scoring, and CAPTCHAs to throttle bulk queries." },
      { category: "Legal / Compliance", tip: "Terms of Service enforcement vs CFAA", explanation: "Enforce scraping restrictions through contract law and technical gates rather than relying on federal criminal statutes." }
    ],
    sources: [
      { title: "hiQ Labs, Inc. v. LinkedIn Corp., 31 F.4th 1180 (9th Cir. 2022)", publisher: "US Court of Appeals for the Ninth Circuit", url: "https://cdn.ca9.uscourts.gov", date: "April 18, 2022" },
      { title: "LinkedIn Official Statement on Scraped Data Listing", publisher: "LinkedIn Pressroom", url: "https://news.linkedin.com", date: "June 29, 2021" }
    ],
    image: "/images/cases/linkedin-scraping.svg",
    imageAlt: "Graphic showing automated scraping robot extracting profile records into a database",
    estimatedReadTime: "5 min read",
    featured: false
  }
];
