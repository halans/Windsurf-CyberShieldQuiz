// Cybersecurity questions for SMBs, categorized
// Each question has: id, category, question, options, answer, explanation, (plus optional fields)

function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const questions = [
  {
    id: 1,
    category: "Phishing",
    question: "You receive an email from your 'bank' asking you to urgently verify your account by clicking a link. What should you do?",
    options: [
      "Click the link and enter your details to be safe.",
      "Ignore the email; it's probably spam.",
      "Contact your bank using a trusted method to verify the request.",
      "Forward the email to your colleagues."
    ],
    answer: 2,
    explanation: "Phishing emails often create urgency. Never click links or provide information; always verify requests using official contact methods.",
    securityTip: '',
    scenario: ''
  },
  {
    id: 2,
    category: "Password Hygiene",
    question: "Which of the following is the most secure password?",
    options: [
      "password123",
      "Company2023",
      "!Qz8$1vB#4rT",
      "JohnSmith1"
    ],
    answer: 2,
    explanation: "A strong password uses a mix of letters, numbers, and symbols, and is not based on personal or company info.",
    securityTip: '',
    scenario: ''
  },
  {
    id: 3,
    category: "Ransomware",
    question: "What is the best way to protect your business from ransomware attacks?",
    options: [
      "Pay the ransom if attacked.",
      "Regularly back up data and train employees.",
      "Ignore suspicious emails.",
      "Disable antivirus software."
    ],
    answer: 1,
    explanation: "Regular backups and employee training are the best defenses. Never pay the ransom.",
    securityTip: '',
    scenario: ''
  },
  {
    id: 4,
    category: "Secure Remote Work",
    question: "Which practice improves security for remote workers?",
    options: [
      "Using public Wi-Fi without a VPN.",
      "Sharing passwords via email.",
      "Enabling multi-factor authentication (MFA).",
      "Leaving devices unlocked."
    ],
    answer: 2,
    explanation: "MFA adds an extra layer of security, especially for remote access.",
    securityTip: '',
    scenario: 'You are working from home.'
  },
  // Phishing Protection Questions
  {
    id: 5,
    category: 'Phishing',
    question: 'What is the best action to take when you receive an unexpected email asking you to click a link and verify your account information?',
    options: [
      'Click the link and provide the requested information to prevent account lockout',
      'Forward the email to your IT department or security team for verification',
      'Reply directly to the sender to confirm if the request is legitimate',
      'Ignore it if it looks suspicious, but click if it seems legitimate'
    ],
    answer: 1,
    explanation: 'Clicking on links in suspicious emails is a common way for attackers to steal credentials or install malware. Always verify unexpected requests through official channels, not via the email itself.',
    securityTip: 'Contact the supposed sender organization directly using their official phone number or website (typed directly in your browser, not from the email) to verify if the request is legitimate.',
    scenario: 'You receive an email appearing to be from your bank stating there\'s an urgent security issue with your account. It asks you to click a link and log in to verify your information.'
  },
  {
    id: 6,
    category: 'Phishing',
    question: 'Which of the following is NOT a common indicator of a phishing email?',
    options: [
      'Urgent action required language and threats',
      'Spelling and grammatical errors',
      'Mismatched or suspicious URLs in links',
      'Email sent from a company employee during regular business hours'
    ],
    answer: 3,
    explanation: 'While phishing emails often contain urgency, threats, errors, and suspicious URLs, receiving a work email from a colleague during business hours is normal behavior and not inherently suspicious.',
    securityTip: 'Develop a habit of checking sender email addresses, hovering over links before clicking, and being suspicious of unusual requests, even if they appear to come from known contacts.',
    scenario: 'You receive multiple emails throughout your workday from different senders. You need to identify which ones might be phishing attempts.'
  },
  {
    id: 7,
    category: 'Phishing',
    question: 'A client sends you an email with an attachment you weren\'t expecting. What should you do?',
    options: [
      'Open it immediately to see what they sent',
      'Download and scan it with antivirus before opening',
      'Contact the client through a different channel to verify they sent it',
      'Forward it to a colleague to check first'
    ],
    answer: 2,
    explanation: 'Attackers often impersonate known contacts to trick you into opening malicious attachments. Verifying through a different channel (phone call, text) ensures the email is legitimate.',
    securityTip: 'Always be suspicious of unexpected attachments, even from known contacts. Phishers often compromise email accounts and send malware to the victim\'s contacts.',
    scenario: 'You\'ve been working with a client for weeks. They suddenly send an email with an attachment labeled "Invoice_due.doc" but there\'s no text in the email body.'
  },
  {
    id: 8,
    category: 'Phishing',
    question: 'Which action provides the MOST protection against spear phishing attacks targeting small businesses?',
    options: [
      'Installing the latest antivirus software',
      'Employee security awareness training with simulated phishing tests',
      'Using spam filters on email accounts',
      'Implementing a firewall'
    ],
    answer: 1,
    explanation: 'While technical controls help, human awareness is the strongest defense against targeted phishing. Regular training with realistic simulations helps employees recognize and appropriately respond to sophisticated attacks.',
    securityTip: 'Conduct phishing simulations quarterly, targeting different departments with relevant scenarios. Review results with employees as learning opportunities rather than punitive measures.',
    scenario: 'Your small accounting firm has been targeted by hackers who are sending personalized emails that appear to come from specific clients, with details obtained from social media.'
  },
  { 
    id: 9,
    category: 'Phishing',
    question: 'What is "vishing" and how should small businesses protect against it?',
    options: [
      'Video-based phishing using fake video calls; protect by verifying call invites',
      'Voice phishing via phone calls; protect by verifying caller identity through official channels',
      'Vulnerable phishing targeting system vulnerabilities; protect with software patches',
      'Viral phishing using social media; protect by limiting company information online'
    ],
    answer: 1,
    explanation: 'Vishing (voice phishing) involves phone calls from scammers posing as trusted entities to trick victims into revealing sensitive information or making payments.',
    securityTip: 'Establish verification procedures for phone requests involving sensitive information or financial transactions. Always call back using a known, verified number rather than one provided by the caller.',
    scenario: 'Your receptionist receives a call from someone claiming to be from your bank\'s fraud department, asking to verify recent transactions by providing account details.'
  },
  { 
    id: 10,
    category: 'Phishing',
    question: 'What technique do attackers use in "clone phishing"?',
    options: [
      'Creating fake social media profiles that look like legitimate companies',
      'Duplicating a legitimate email previously sent but replacing attachments or links with malicious ones',
      'Installing cloning software on computers to duplicate credentials',
      'Creating websites that perfectly mimic banking portals'
    ],
    answer: 1,
    explanation: 'Clone phishing replicates a legitimate email the victim has already received, making minor changes like replacing a legitimate attachment or link with a malicious one. The familiarity makes it highly effective.',
    securityTip: 'Be suspicious of duplicate emails, especially those asking you to re-download attachments or re-click links. Verify directly with the sender if you receive an unexpected duplicate.',
    scenario: 'You received an email from a supplier with a price quote PDF last week. Today, you receive what appears to be the exact same email, but the message says "Updated attachment with corrected prices".'
  },
  { 
    id: 11,
    category: 'Phishing',
    question: 'Which scenario is an example of "smishing"?',
    options: [
      'Receiving an email claiming you won a prize',
      'Getting a text message with a link to "verify your bank account"',
      'Finding a USB drive in your office parking lot',
      'A caller claiming to be from technical support'
    ],
    answer: 1,
    explanation: 'Smishing is phishing conducted via SMS (text messages). Attackers send texts with malicious links or phone numbers, often creating urgency to prompt immediate action.',
    securityTip: 'Never click links in unexpected text messages. If you think a message might be legitimate, manually navigate to the company\'s official website or call their official number.',
    scenario: 'While at work, you receive a text message saying "Your business payment was declined. Verify your information immediately: [link]"'
  },
  { 
    id: 12,   
    category: 'Phishing',
    question: 'What is the purpose of a "phishing kit" in cyberattacks?',
    options: [
      'Software to detect and prevent phishing attempts',
      'Training materials to educate employees about phishing',
      'Specialized hardware for stealing data from physical locations',
      'Packaged tools and templates that help attackers create convincing phishing campaigns' 
    ],
    answer: 3,
    explanation: 'Phishing kits are packaged collections of files that simplify the process of creating and deploying phishing sites. They typically include duplicate website templates, scripts for collecting and transmitting stolen data, and evasion techniques.',
    securityTip: 'Look for subtle signs of fake websites: incorrect URLs, missing HTTPS, unusual request methods, grammar errors, or page elements that don\'t quite match the legitimate site.',
    scenario: 'Your security team discovered several employees received emails directing them to a site identical to your company\'s payroll portal, but with a slightly different URL.'
  },
  { 
    id: 13,
    category: 'Phishing',
    question: 'What is "business email compromise" (BEC) and how does it typically target small businesses?',
    options: [
      'Sending mass spam emails to businesses; targets everyone with generic messages',
      'Compromising executive emails to request unusual wire transfers; targets finance staff',
      'Hacking business websites to steal customer data; targets website administrators',
      'Creating fake business advertisements; targets potential customers'
    ],
    answer: 1,
    explanation: 'BEC attacks involve compromising or impersonating executive email accounts, then using the trusted identity to authorize fraudulent wire transfers or request sensitive information from employees.',
    securityTip: 'Implement a verification policy for all financial requests that requires a second channel confirmation (phone call, in-person verification) regardless of who makes the request.',
    scenario: 'Your accounting clerk receives an email appearing to be from the CEO asking for an urgent wire transfer to a new vendor, emphasizing the matter is confidential and time-sensitive.'
  },
  
  // Password Hygiene Questions
  { 
    id: 14,
    category: 'Password Hygiene',
    question: 'What is the most secure approach to password management for your business?',
    options: [
      'Using the same strong password across all business accounts',
      'Writing passwords down and storing them in a locked desk',
      'Using a reputable password manager with unique, complex passwords for each account',
      'Creating passwords based on a pattern that only employees know'
    ],
    answer: 2,
    explanation: 'Password managers allow you to generate, store, and use unique, complex passwords for each account without having to remember them all, greatly improving security while maintaining usability.',
    securityTip: 'Choose a password manager that offers business plans with features like shared vaults, user management, and security policies to ensure consistent password practices across your organization.',
    scenario: 'Your small business has dozens of online accounts, and employees are struggling to remember all their passwords. Some have started writing them down on sticky notes.'
  },
  { 
    id: 15, 
    category: 'Password Hygiene',
    question: 'Which of the following passwords would be most difficult for attackers to crack?',
    options: [
      'Company2023!',
      'P@ssw0rd',
      'October2023',
      'kH8$p3@Lm7!xZ'
    ],
    answer: 3,
    explanation: 'The strongest password uses a mix of uppercase and lowercase letters, numbers, and special characters without relying on predictable patterns or dictionary words.',
    securityTip: 'Instead of trying to create and remember complex passwords, use a password generator built into a password manager to create truly random and strong passwords.',
    scenario: 'You need to create a new password for your company\'s financial system that stores sensitive client information.'
  },
  { 
    id: 16,   
    category: 'Password Hygiene',
    question: 'What is multi-factor authentication (MFA) and why is it important for small businesses?',
    options: [
      'Using multiple passwords for one account; important because it creates backup access methods',
      'Having multiple administrators approve access; important for segregation of duties',
      'Using two or more verification methods to access an account; important because it prevents access even if passwords are compromised',
      'Changing passwords multiple times per year; important to stay ahead of hackers'
    ],
    answer: 2,
    explanation: 'Multi-factor authentication requires users to verify their identity using at least two different factors: something they know (password), something they have (phone), or something they are (fingerprint).',
    securityTip: 'Implement MFA on all critical business applications, especially email, financial services, cloud storage, and remote access systems. Mobile authenticator apps are generally more secure than SMS-based verification.',
    scenario: 'Your small business recently had an incident where an employee\'s email password was stolen, but no data breach occurred. You\'re evaluating security improvements.'
  },
  { 
    id: 17, 
    category: 'Password Hygiene',
    question: 'What password practice creates the GREATEST security risk for small businesses?',
    options: [
      'Using password managers to store credentials',
      'Requiring password changes every 90 days',
      'Sharing administrator passwords among the IT team',
      'Using biometric authentication when available'
    ],
    answer: 2,
    explanation: 'Sharing administrator passwords eliminates accountability, increases the risk of unauthorized access, and makes it impossible to know who performed specific actions. It also dramatically increases the impact if an employee leaves on bad terms.',
    securityTip: 'Create individual administrator accounts for each IT team member who needs elevated privileges. Use a privileged access management solution for shared admin accounts that masks the actual password and logs usage.',
    scenario: 'Your IT support team needs administrator access to maintain company systems. You\'re deciding how to handle these privileged credentials.'
  },
  { 
    id: 18,   
    category: 'Password Hygiene',
    question: 'What is a passphrase and why might it be better than a traditional password?',
    options: [
      'A password that only grants partial access; better because it limits potential damage',
      'A long sequence of random words; better because it\'s easier to remember yet harder to crack',
      'A password provided by your IT department; better because it\'s professionally generated',
      'A temporary password used during recovery; better because it expires quickly'
    ],
    answer: 1,
    explanation: 'A passphrase is a sequence of words used as a credential. They\'re more secure than traditional passwords because their length creates complexity while being easier to remember than random character strings.',
    securityTip: 'Create strong passphrases by using 4+ random words, adding numbers or symbols, and avoiding famous quotes or phrases. For example: "correct-horse-battery-staple-42!" is both memorable and highly secure.',
    scenario: 'You\'re developing a new password policy for your small business and want to balance security with usability so employees don\'t resort to insecure workarounds.'
  },
  { 
    id: 19,   
    category: 'Password Hygiene',
    question: 'When a software service offers "Single Sign-On" (SSO) for your business, what security considerations should you evaluate?',
    options: [
      'SSO always reduces security and should be avoided by small businesses',
      'SSO is only secure if you change the master password daily',
      'SSO can enhance security but makes the primary credential more critical to protect with MFA and strong authentication',
      'SSO is only appropriate for non-sensitive applications like time tracking'
    ],
    answer: 2,
    explanation: 'Single Sign-On provides convenience and can improve security by reducing password fatigue and enabling central enforcement of authentication policies. However, it creates a single point of failure that requires robust protection.',
    securityTip: 'When implementing SSO, always enforce MFA, strict password policies, and activity monitoring for the primary account. Consider advanced security features like adaptive authentication that examines login context (location, device, time) for suspicious activity.',
    scenario: 'Your growing small business now uses dozens of cloud applications. You\'re considering implementing Single Sign-On to simplify access management.'
  },
  { 
    id: 20,   
    category: 'Password Hygiene',
    question: 'What is "credential stuffing" and how can small businesses defend against it?',
    options: [
      'Hackers manually guessing passwords; defend by limiting login attempts',
      'Using stolen username/password combinations on multiple sites; defend with unique passwords and MFA',
      'Bribing employees for credentials; defend with security awareness training',
      'Stealing password databases; defend with encryption'
    ],
    answer: 1,
    explanation: 'Credential stuffing is an attack where hackers use automated tools to try username and password combinations leaked from other breaches across multiple websites. It exploits password reuse across services.',
    securityTip: 'Check if employee credentials have been exposed in known breaches using services like Have I Been Pwned. Require employees to change any passwords that have been compromised and encourage unique passwords for each service.',
    scenario: 'Several of your business accounts were accessed by unauthorized users, but your systems weren\'t directly breached. The affected employees all used the same passwords across personal and work accounts.'
  },
  { 
    id: 21,   
    category: 'Password Hygiene',
    question: 'What is the recommended way to handle shared passwords for business social media accounts?',
    options: [
      'Email the password to everyone who needs access',
      'Create a shared document with all passwords that the team can access',
      'Use a business password manager with controlled sharing and access logging',
      'Create login credentials using a standard formula that all employees know'
    ],
    answer: 2,
    explanation: 'Business password managers allow secure sharing of credentials without exposing the actual password to users, provide detailed access logs, allow quick revocation of access, and simplify password updates without needing to notify everyone.',
    securityTip: 'When possible, use the built-in team/role functionality in platforms rather than sharing primary passwords. Many services now offer business accounts with proper role-based access control.',
    scenario: 'Your marketing team needs access to various social media accounts for your business, but you need to maintain control and security.'
  },
  { 
    id: 22,   
    category: 'Password Hygiene',
    question: 'Which approach to passwords is MOST aligned with current NIST (National Institute of Standards and Technology) guidelines?',
    options: [
      'Requiring special characters, numbers, uppercase and lowercase letters, and 90-day password changes',
      'Using longer passwords or passphrases, checking against compromised passwords, and not requiring regular changes without reason',
      'Implementing password hints and security questions for all accounts',
      'Sharing admin passwords but changing them monthly with complex requirements'
    ],
    answer: 1,
    explanation: 'Current NIST guidelines have moved away from arbitrary complexity rules and scheduled password changes, which often lead to predictable patterns. Instead, they recommend longer passwords, checking against compromised password lists, and only requiring changes when necessary.',
    securityTip: 'Focus your password policy on password length (minimum 12 characters), avoiding compromised passwords, and using MFA rather than complex composition rules that frustrate users and often result in less secure practices.',
    scenario: 'You\'re updating your small business\'s cybersecurity policies and want to implement password guidelines that align with current best practices.'
  },
  { 
    id: 23,   
    category: 'Password Hygiene',
    question: 'What security risk does using the "remember password" feature in browsers create for business accounts?',
    options: [
      'It makes passwords load too slowly when accessing websites',
      'It prevents the use of complex passwords since they don\'t need to be typed',
      'It prevents password managers from working properly',
      'It allows anyone with access to the device to potentially access those accounts without authentication'
    ],
    answer: 3,
    explanation: 'When passwords are saved in browsers, anyone who gains access to the device—whether through theft, unauthorized use, or malware—may be able to access those accounts without knowing the password.',
    securityTip: 'Use a dedicated password manager instead of browser password saving. If employees must use browser password features, require device encryption, screen locks with short timeouts, and consider a policy requiring the browser\'s master password feature.',
    scenario: 'Your employees frequently work on company laptops in public locations like cafes and airports, and many use the browser\'s "remember password" feature for convenience.'
  },
  { 
    id: 24,   
    category: 'Password Hygiene',
    question: 'What is a "password spray" attack and why is it effective against businesses?',
    options: [
      'Using high-powered computers to rapidly try millions of password combinations for one account',
      'Trying a few common passwords against many different accounts to avoid lockouts',
      'Using personal information gathered from social media to guess passwords',
      'Installing keyloggers on employee computers to capture passwords as they\'re typed'
    ],
    answer: 1,
    explanation: 'Unlike brute force attacks that try many passwords against one account, password spraying tries a few commonly used passwords against many accounts. This helps attackers avoid account lockouts while still finding vulnerable accounts.',
    securityTip: 'Protect against password spraying by banning common passwords, implementing MFA, using account lockout policies, and monitoring for unusual login patterns across multiple accounts.',
    scenario: 'Your cloud email provider notified you of suspicious login attempts affecting multiple company accounts, but none were locked out for excessive failed attempts.'
  },
  
  // Ransomware Defense Questions
  { 
    id: 25,   
    category: 'Ransomware',
    question: 'What is the MOST important defense against ransomware attacks?',
    options: [
      'Having comprehensive cyber insurance',
      'Maintaining regular, tested backups that are isolated from your network',
      'Installing antivirus software on all company computers',
      'Paying the ransom quickly to minimize disruption'
    ],
    answer: 1,
    explanation: 'While antivirus software helps, the most effective defense against ransomware is having proper backups that can\'t be encrypted by attackers. This allows you to restore systems without paying ransom.',
    securityTip: 'Follow the 3-2-1 backup rule: maintain at least 3 copies of important data, store them on 2 different media types, with 1 copy stored offsite or completely offline.',
    scenario: 'Your employee reports that all files on their computer have been encrypted, and there\'s a message demanding payment in cryptocurrency to restore access.'
  },
  { 
    id: 26,   
    category: 'Ransomware',
    question: 'If your business is hit with ransomware, what should you do first?',
    options: [
      'Pay the ransom immediately to regain access to your data',
      'Try to negotiate with the attackers for a lower ransom',
      'Disconnect infected systems from the network to prevent spread',
      'Delete the encrypted files and restore from the most recent backup'
    ],
    answer: 2,
    explanation: 'Immediately isolating infected systems prevents the ransomware from spreading to other devices on your network, potentially saving unaffected systems and data.',
    securityTip: 'Develop and practice an incident response plan specifically for ransomware scenarios so your team knows exactly what steps to take without hesitation.',
    scenario: 'One of your employees just called in a panic saying their computer screen shows a ransomware demand and they can\'t access any files.'
  },
  { 
    id: 27,   
    category: 'Ransomware',
    question: 'Which practice provides the LEAST protection against ransomware?',
    options: [
      'Regularly applying software updates and patches',
      'Training employees to recognize phishing attempts',
      'Implementing application whitelisting',
      'Installing the most expensive antivirus solution available'
    ],
    answer: 3,
    explanation: 'While antivirus software is important, simply buying the most expensive solution doesn\'t guarantee protection. Modern ransomware often evades traditional antivirus, making a layered security approach more effective than relying on any single tool.',
    securityTip: 'Focus on a defense-in-depth strategy: combine technical controls (patching, access restrictions, network segmentation) with human-centered approaches (training, clear procedures) for better ransomware protection.',
    scenario: 'Your board has approved a cybersecurity budget increase after hearing about ransomware attacks on similar businesses. You need to allocate these funds effectively.'
  },
  { 
    id: 28,   
    category: 'Ransomware',
    question: 'What technology helps prevent malicious ransomware attachments from reaching employee inboxes?',
    options: [
      'Firewall',
      'Virtual Private Network (VPN)',
      'Email sandboxing and content filtering',
      'Disk encryption'
    ],
    answer: 2,
    explanation: 'Email sandboxing opens attachments in an isolated environment to observe behavior before delivering to users. Content filtering scans attachments for malicious code or suspicious characteristics.',
    securityTip: 'Implement email security that combines multiple detection methods: signature-based detection, sandboxing, URL filtering, and sender authentication protocols like DMARC, SPF, and DKIM.',
    scenario: 'Your small business receives numerous emails with attachments from clients and vendors daily, but you\'re concerned about ransomware being delivered this way.'
  },
  { 
    id: 29,   
    category: 'Ransomware',
    question: 'Why do cybersecurity experts generally advise against paying ransomware demands?',
    options: [
      'It\'s always illegal to pay ransom demands',
      'Payment guarantees you\'ll get your data back without issues',
      'Payment encourages more attacks and doesn\'t guarantee data recovery',
      'Most small businesses are fully covered by insurance for such payments'
    ],
    answer: 2,
    explanation: 'Paying ransom does not guarantee you\'ll recover your data, may mark you as a willing payer for future attacks, financially supports criminal enterprises, and doesn\'t remove any malware from your systems.',
    securityTip: 'Before an attack occurs, consult with legal counsel and cybersecurity experts to develop a ransomware response policy. Understand regulatory implications, insurance coverage, and reporting obligations if your business faces a ransomware demand.',
    scenario: 'Your business-critical systems have been encrypted by ransomware. The attackers demand $25,000 in cryptocurrency, threatening to double the amount after 72 hours.'
  },
  { 
    id: 30,   
    category: 'Ransomware',
    question: 'What is "RaaS" and why is it concerning for small businesses?',
    options: [
      'Recovery as a Service - concerning because it\'s often too expensive for small businesses',
      'Ransomware as a Service - concerning because it makes launching ransomware attacks accessible to non-technical criminals',
      'Remote access as a Service - concerning because it creates security vulnerabilities',
      'Restoration as a Service - concerning because it\'s not effective for serious ransomware variants'
    ],
    answer: 1,
    explanation: 'Ransomware as a Service (RaaS) is a business model where ransomware developers lease their malware to affiliates who conduct attacks, splitting any ransom payments. This model has substantially lowered the technical barrier to entry for cybercriminals.',
    securityTip: 'As RaaS makes ransomware more prevalent, focus on prevention and recovery rather than just detection. Implement strict access controls, application whitelisting, and maintain verified offline backups.',
    scenario: 'Your IT consultant warns that ransomware attacks against small businesses in your industry have tripled, with many new attackers who don\'t appear technically sophisticated yet are using advanced ransomware.'
  },
  { 
    id: 31,   
    category: 'Ransomware',
    question: 'What is "double extortion" in ransomware attacks?',
    options: [
      'When attackers encrypt your data twice with different algorithms',
      'When attackers demand two separate ransom payments',
      'When attackers both encrypt your data and threaten to publish stolen copies if not paid',
      'When attackers target both your main systems and your backups'
    ],
    answer: 2,
    explanation: 'Double extortion is a tactic where attackers not only encrypt your data but also exfiltrate (steal) copies. They then threaten to publish or sell this sensitive data unless the ransom is paid, creating pressure even if you have backups.',
    securityTip: 'Protect against data exfiltration by implementing data loss prevention tools, network monitoring for unusual outbound traffic, and encryption of sensitive data at rest so stolen information remains unreadable.',
    scenario: 'Your company suffered a ransomware attack. Even though you have good backups, the attackers are now threatening to release your customer data on the dark web unless you pay.'
  },
  { 
    id: 32,   
    category: 'Ransomware',
    question: 'Which access control practice most effectively limits the potential damage from ransomware?',
    options: [
      'Giving all employees administrator access so they can install security updates',
      'Implementing the principle of least privilege where users only have access to what they need',
      'Having a single administrator account shared by all IT staff',
      'Changing all passwords simultaneously on a monthly basis'
    ],
    answer: 1,
    explanation: 'The principle of least privilege ensures users only have access to the systems and data necessary for their roles. This limits how much data ransomware can encrypt when it executes with user-level permissions.',
    securityTip: 'Regularly audit user permissions and remove unnecessary access rights. Use role-based access control and require additional authentication for sensitive operations or data access.',
    scenario: 'You\'re reviewing your network structure after hearing about a similar business that had ransomware spread throughout their entire system, encrypting all company data.'
  },
  { 
    id: 33,   
    category: 'Ransomware',
    question: 'What is "network segmentation" and how does it help protect against ransomware?',
    options: [
      'Backing up the network regularly; helps by providing clean restore points',
      'Shutting down the network at night; helps by limiting attack windows',
      'Dividing the network into separate parts with controlled access between them; helps by containing infections to one segment',
      'Monitoring network traffic; helps by detecting ransomware communication'
    ],
    answer: 2,
    explanation: 'Network segmentation divides your network into isolated zones with limited communication between them. If ransomware infects one segment, proper segmentation prevents it from spreading throughout your entire network.',
    securityTip: 'Implement both logical segmentation (using VLANs, firewalls) and identity-based segmentation (zero trust) to contain potential ransomware infections. Critical systems and data should reside in more restricted segments.',
    scenario: 'Your business has grown to include multiple departments with varying data sensitivity levels, all currently on the same network with full internal access.'
  },
  { 
    id: 34,   
    category: 'Ransomware',
    question: 'Which file types are most commonly used to deliver ransomware?',
    options: [
      'JPEG and PNG image files',
      'MP3 and MP4 media files',
      'Office documents (.doc, .xls) and PDF files with macros or JavaScript',
      'Plain text (.txt) and HTML files'
    ],
    answer: 2,
    explanation: 'Office documents and PDFs that contain active content like macros, JavaScript, or embedded objects are frequently used to deliver ransomware because they can execute code when opened.',
    securityTip: 'Configure Microsoft Office to disable macros by default or only allow signed macros from trusted locations. Train users to be suspicious of documents requesting to "Enable Content" or "Enable Editing."',
    scenario: 'Your employees regularly receive and open various document attachments from customers, vendors, and partners as part of normal business operations.'
  },
  { 
    id: 35,   
    category: 'Ransomware',
    question: 'What is the purpose of an "air-gapped" backup in ransomware defense?',
    options: [
      'Backups that are encrypted with specialized software',
      'Backups stored in a physically separate location, completely disconnected from any network',
      'Backups that are automatically updated whenever changes occur',
      'Backups that only contain the most critical business data'
    ],
    answer: 1,
    explanation: 'An air-gapped backup is completely disconnected from any network, making it impossible for ransomware to reach and encrypt it. This ensures you always have a clean backup for recovery.',
    securityTip: 'Create a rotation system for air-gapped backups to maintain recency while preserving their isolated status. Use write-once media or backup systems with immutable storage features for additional protection.',
    scenario: 'You\'re evaluating your backup strategy after learning that several companies in your industry had both their primary systems and online backup solutions encrypted by ransomware.'
  },
  
  // Secure Remote Work Questions
  {
    category: "Secure Remote Work",
    question: 'What is the most secure way for employees to connect to company resources when working remotely?',
    options: [
      'Email documents to personal accounts for home access',
      'Use public Wi-Fi with HTTPS websites only',
      'Connect via a company VPN before accessing any business systems',
      'Use personal devices without additional security measures'
    ],
    answer: 2,
    explanation: 'A VPN (Virtual Private Network) encrypts the connection between the remote device and your company network, protecting data in transit and helping prevent unauthorized access.',
    securityTip: 'Combine VPN use with multi-factor authentication for remote access to significantly enhance your security posture for remote work.',
    scenario: 'Your employees need to access internal company resources while working from various locations outside the office.'
  },
  { 
    id: 36,   
    category: "Secure Remote Work",
    question: 'Which practice creates the highest security risk for remote workers?',
    options: [
      'Using video conferencing for team meetings',
      'Allowing family members to occasionally use work devices',
      'Working from a home office instead of public locations',
      'Using cloud storage solutions for document sharing'
    ],
    answer: 1,
    explanation: 'When family members use work devices, they may inadvertently install malware, access sensitive information, or change important settings, potentially compromising security.',
    securityTip: 'Create a clear policy that work devices are for employee use only, and provide guidelines for secure physical storage of devices when not in use.',
    scenario: 'Your employees are working from home using company-provided laptops that contain sensitive business information.'
  },
  { 
    id: 37,   
    category: "Secure Remote Work",
    question: 'When working remotely, what should employees do to secure their home WiFi networks?',
    options: [
      'Leave the network open so it\'s easier to reconnect devices',
      'Use the default router password to avoid forgetting it',
      'Change the default router credentials and use WPA3 or WPA2 encryption',
      'Connect through a neighbor\'s network to mask their location'
    ],
    answer: 2,
    explanation: 'Securing home networks is essential when they\'re used for business purposes. Default router credentials are widely known and WPA3/WPA2 encryption protects data transmitted over the network.',
    securityTip: 'Provide employees with a home network security checklist that includes: changing default passwords, enabling strong encryption, updating router firmware, setting up a guest network for non-work devices, and using strong WiFi passwords.',
    scenario: 'Your company has shifted to a hybrid work model where employees spend part of their week working from home using their personal internet connections.'
  },
  { 
    id: 38,   
    category: "Secure Remote Work",
    question: 'What is the best approach for secure file sharing when working remotely?',
    options: [
      'Sending files as email attachments',
      'Using personal cloud storage accounts like personal Dropbox or Google Drive',
      'Using a company-approved, encrypted file sharing solution with access controls',
      'Storing files on USB drives to transfer between devices'
    ],
    answer: 2,
    explanation: 'Company-approved solutions ensure data remains protected with encryption, access controls, audit logging, and compliance with your security policies, while still enabling productive collaboration.',
    securityTip: 'Select file sharing solutions that offer end-to-end encryption, granular permissions, expiring links, and integration with your identity management system for seamless but secure access.',
    scenario: 'Your remote team needs to collaborate on documents containing proprietary business information and occasionally share files with clients.'
  },
  { 
    id: 39,   
    category: "Secure Remote Work",
    question: 'Which video conferencing practice is MOST important for small business security?',
    options: [
      'Always requiring registration for all participants',
      'Using meeting passwords and waiting rooms to control participant access',
      'Recording all meetings for future reference',
      'Using the most expensive enterprise video platform available'
    ],
    answer: 1,
    explanation: 'Passwords prevent unauthorized access to meetings, while waiting rooms allow hosts to verify participants before granting access, preventing "meeting bombing" and unauthorized access to sensitive discussions.',
    securityTip: 'Don\'t reuse meeting links and passwords for recurring sensitive meetings. Distribute meeting access information through secure channels, not public websites or social media.',
    scenario: 'Your team regularly discusses sensitive business information, client data, and proprietary processes in video conferences with internal staff and external partners.'
  },
  { 
    id: 40,   
    category: "Secure Remote Work",
    question: 'What is a "shadow IT" risk associated with remote work?',
    options: [
      'Employees working at night when visibility is reduced',
      'Using personal email for business communications to hide activities',
      'Employees using unauthorized applications and services to perform their work',
      'The risk of power outages affecting home offices'
    ],
    answer: 2,
    explanation: 'Shadow IT refers to technology solutions adopted without IT approval. Remote workers often use unauthorized tools that may lack proper security controls, creating data leakage risks and compliance issues.',
    securityTip: 'Create an easy process for employees to request new tools, maintain an approved application list with secure alternatives for common needs, and use discovery tools to identify unauthorized application usage.',
    scenario: 'Your remote employees need various collaboration and productivity tools to do their jobs effectively, but your IT team has limited visibility into what software is being used.'
  },
  { 
    id: 41,   
    category: "Secure Remote Work",
    question: 'Which approach BEST secures remote desktop access to office computers?',
    options: [
      'Simply allowing Remote Desktop Protocol (RDP) through your firewall on the default port',
      'Using remote desktop through a secure VPN connection with MFA and limited user access',
      'Having employees use personal remote access tools of their choice',
      'Emailing login credentials to employees when they need to connect remotely'
    ],
    answer: 1,
    explanation: 'RDP can be secure when properly implemented with multiple protective layers: VPN provides encrypted tunneling, MFA ensures stronger authentication, and limiting which users can connect reduces the attack surface.',
    securityTip: 'If using RDP, ensure it\'s always behind a VPN, keep systems fully patched, use non-standard ports, implement account lockout policies, enable Network Level Authentication, and restrict IP addresses that can connect.',
    scenario: 'Some of your employees need to access their desktop computers in the office while working remotely.'
  },
  { 
    id: 42,   
    category: "Secure Remote Work",
    question: 'What is the biggest physical security concern for remote workers?',
    options: [
      'Ergonomic desk setup causing productivity issues',
      'Visual hacking - unauthorized individuals viewing sensitive information on screens',
      'Home office decoration choices reflecting poorly in video meetings',
      'Noise levels disrupting conference calls'
    ],
    answer: 1,
    explanation: 'Visual hacking occurs when sensitive information is exposed to unauthorized individuals who can view screens, documents, or whiteboards. In remote settings, this risk increases with household members, visitors, or work in public places.',
    securityTip: 'Provide privacy screens for laptops, train employees to be aware of their surroundings during work, encourage clean desk practices, and remind staff to lock devices when stepping away, even at home.',
    scenario: 'Your employees frequently handle confidential information on their screens while working from various locations including home, cafes, and co-working spaces.'
  },
  { 
    id: 43,   
    category: "Secure Remote Work",
    question: 'What is a "zero trust" security model and how does it relate to remote work?',
    options: [
      'Assuming all employees are potential threats; related to remote work because employers can\'t physically monitor staff',
      'Never trusting any device or user by default, regardless of location; related to remote work by securing access without depending on network location',
      'Using zero-day exploits to test security; related to remote work by finding vulnerabilities in remote access tools',
      'Having no trust level for new employees; related to remote work by requiring in-person onboarding'
    ],
    answer: 1,
    explanation: 'Zero trust security verifies every access request as if it originates from an untrusted network—perfect for remote work where traditional network perimeters are irrelevant. It authenticates and authorizes based on all available data points, not just location.',
    securityTip: 'Implement zero trust principles incrementally: start with strong identity verification (MFA), then add device health validation, access controls based on least privilege, and continuous monitoring for suspicious activities.',
    scenario: 'Your business is shifting to permanent hybrid work, and your traditional security approach assumed that internal network connections were trusted while external ones required additional verification.'
  },
  { 
    id: 44,   
    category: "Secure Remote Work",
    question: 'What security capabilities should a small business look for in remote endpoint protection?',
    options: [
      'Only antivirus capabilities to keep costs low',
      'Full disk encryption and remote lock/wipe capabilities for lost or stolen devices',
      'Employee monitoring including webcam access to ensure productivity',
      'Protection that only activates when connected to company VPN'
    ],
    answer: 1,
    explanation: 'For remote devices, the risk of physical loss or theft increases significantly. Full disk encryption protects data even if devices are stolen, while remote lock/wipe capabilities allow businesses to protect data if a device is lost or an employee is terminated.',
    securityTip: 'Implement a unified endpoint management solution that handles both encryption and remote wipe functions, with clear procedures for employees to report lost or stolen devices immediately.',
    scenario: 'Your sales team travels frequently with laptops containing sensitive customer and pricing information, while other employees work from home offices or public locations.'
  },
  { 
    id: 45,   
    category: "Secure Remote Work",
    question: 'What should be included in a remote work security policy for small businesses?',
    options: [
      'Only technical requirements for VPN and antivirus',
      'Prohibition of all remote work due to security concerns',
      'Comprehensive guidelines covering approved devices, networks, applications, data handling, incident reporting, and physical security',
      'Recommendations that employees should follow at their discretion'
    ],
    answer: 2,
    explanation: 'An effective remote work security policy must be comprehensive, addressing both technical and human aspects of security across devices, networks, applications, and physical environments.',
    securityTip: 'Make your remote work policy practical and enforceable. Include clear guidance for common scenarios, provide security tools that enable rather than obstruct productivity, and regularly remind employees of key practices.',
    scenario: 'You\'re formalizing your company\'s remote work program after an initial period of ad-hoc arrangements and need to establish clear security expectations.'
  },
  
  // Device Security Questions
  { 
    id: 46,   
    category: 'Device Security',
    question: 'What is the best approach to mobile device security for small business?',
    options: [
      'Allow employees to use their personal devices with no restrictions',
      'Implement a Mobile Device Management (MDM) solution to manage all devices accessing company data',
      'Only permit company-owned devices for business use',
      'Prohibit mobile devices entirely from accessing company systems'
    ],
    answer: 1,
    explanation: 'An MDM solution allows you to enforce security policies, remotely wipe data if a device is lost, and separate personal data from business data, even on employee-owned devices.',
    securityTip: 'Choose an MDM (Mobile Device Management) solution appropriate for your business size that supports both company-owned and personal devices if you have a BYOD (Bring Your Own Device) policy.',
    scenario: 'Your employees use a mix of personal and company-provided smartphones and tablets to access work email, documents, and applications.'
  },
  { 
    id: 47,   
    category: 'Device Security',
    question: 'How should a small business handle software updates on company devices?',
    options: [
      'Let employees decide when to update their devices',
      'Only update when absolutely necessary to avoid disruption',
      'Automatically deploy critical security updates as soon as possible',
      'Update all devices annually during IT maintenance'
    ],
    answer: 2,
    explanation: 'Promptly installing security updates is crucial as they patch known vulnerabilities that attackers actively exploit. Delaying updates leaves your systems exposed to preventable attacks.',
    securityTip: 'Configure automatic updates for operating systems and critical software, but test updates on non-critical systems first when possible to avoid disruptions.',
    scenario: 'You manage various computers and mobile devices for your small business, and regularly receive update notifications from vendors like Microsoft, Apple, and Google.'
  },
  { 
    id: 48,   
    category: 'Device Security',
    question: 'What is the biggest security risk of allowing employees to use personal devices (BYOD) for work?',
    options: [
      'Higher costs compared to company-provided devices',
      'Decreased productivity due to personal use',
      'Limited ability to enforce security controls on devices containing company data',
      'Employees becoming too attached to their devices'
    ],
    answer: 2,
    explanation: 'With personal devices, businesses have limited control over security settings, installed applications, and other users who may access the device, all while company data resides on these less-controlled environments.',
    securityTip: 'If implementing BYOD, use containerization technology to separate work and personal data, require security measures like screen locks and encryption, and implement conditional access policies that check device security status before allowing company resource access.',
    scenario: 'Your small business is considering a BYOD policy to save costs and give employees flexibility in device choice.'
  },
  { 
    id: 49,   
    category: 'Device Security',
    question: 'What is the purpose of "application whitelisting" on company devices?',
    options: [
      'To make all applications appear with a white background for better visibility',
      'To identify which applications have been security tested',
      'To highlight which applications are most frequently used',
      'To allow only pre-approved applications to run, blocking all others'
    ],
    answer: 3,
    explanation: 'Application whitelisting is a security approach that only permits approved software to run on a system, automatically blocking all other executables. This prevents malware and unauthorized software from running even if they infiltrate the device.',
    securityTip: 'Start with a restrictive application whitelist on the most sensitive systems accessing critical data. For less sensitive systems, consider application blacklisting (blocking known bad software) if whitelisting is too restrictive for your business needs.',
    scenario: 'Your employees require various software tools to perform their jobs, but you\'re concerned about the security risks of unauthorized or malicious applications.'
  },
  { 
    id: 50,   
    category: 'Device Security',
    question: 'What should you do with old company devices before disposal or resale?',
    options: [
      'Delete all files and perform a standard format of the storage drives',
      'Perform a factory reset and then sell or dispose of the device',
      'Use specialized disk wiping software or physically destroy storage media, depending on sensitivity',
      'Remove the battery to prevent the device from being powered on'
    ],
    answer: 2,
    explanation: 'Standard deletion and formatting don\'t completely remove data, which can be recovered with forensic tools. Proper data sanitization requires specialized disk-wiping software that overwrites data multiple times or physical destruction for highly sensitive information.',
    securityTip: 'Create a formal device retirement process that documents the sanitization method used for each device. For highly regulated industries, consider retaining these records to demonstrate compliance with data protection requirements.',
    scenario: 'Your company is upgrading employee laptops and disposing of older devices that contain company emails, documents, and possibly customer information.'
  },
  { 
    id: 51,   
    category: 'Device Security',
    question: 'Which of the following is the MOST effective way to protect sensitive data if a company laptop is stolen?',
    options: [
      'Having a strong Windows/macOS user password',
      'Using full-disk encryption',
      'Placing a security cable lock on the laptop',
      'Labeling the laptop with the company\'s name and return information'
    ],
    answer: 1,
    explanation: 'Full-disk encryption protects all data on the device by making it unreadable without the correct encryption key. Unlike login passwords, which can be bypassed by removing the drive, encryption protects data even if the storage is physically removed from the device.',
    securityTip: 'Use built-in encryption tools like BitLocker (Windows), FileVault (Mac), or cross-platform solutions. Store recovery keys securely in your IT management system, not on the device itself.',
    scenario: 'Your employees travel with laptops containing confidential company information and customer data, creating risk of device loss or theft.'
  },
  { 
    id: 52,   
    category: 'Device Security',
    question: 'When using public charging stations for mobile devices, what security risk should small business employees be aware of?',
    options: [
      'Overcharging the battery may cause data loss',
      '"Juice Jacking" attacks that can steal data or install malware through charging ports',
      'Public chargers are too slow for business efficiency',
      'The device might become incompatible with company systems'
    ],
    answer: 1,
    explanation: 'Juice Jacking is an attack where malicious charging stations use USB data connections to access device data or install malware while charging. USB connections can transfer data and power simultaneously, creating this vulnerability.',
    securityTip: 'Provide employees with "USB condoms" (power-only adapters that block data pins) or portable battery packs for travel. Encourage use of personal wall chargers rather than USB charging stations in public places.',
    scenario: 'Your team travels frequently and needs to charge their company smartphones and tablets in airports, hotels, and conference centers.'
  },
  { 
    id: 53,   
    category: 'Device Security',
    question: 'What feature helps protect company data when an employee uses a personal smartphone for work email and applications?',
    options: [
      'Setting a bright screen to prevent visual hacking',
      'Work profile or containerization that separates work and personal data',
      'Using the phone\'s stylus instead of typing with fingers',
      'Turning off all notifications for work applications'
    ],
    answer: 1,
    explanation: 'Containerization creates a separate, encrypted space on the device for work data and applications, preventing personal apps from accessing business data and allowing selective remote wiping of only business data if needed.',
    securityTip: 'Use MDM (Mobile Device Management) solutions that support work profiles or containers for major mobile platforms. Educate employees that this separation protects both their privacy and company data by establishing clear boundaries.',
    scenario: 'Your employees use their personal smartphones to access company email, contacts, and documents for convenience and responsiveness when away from their desks.'
  },
  { 
    id: 54,   
    category: 'Device Security',
    question: 'What security feature should be enabled on ALL company and employee-owned devices used for work?',
    options: [
      'Biometric authentication when available (fingerprint/face recognition)',
      'Screen lock with reasonable timeout period and strong authentication',
      'GPS tracking to locate lost devices',
      'Same standard password across all company devices for IT support'
    ],
    answer: 1,
    explanation: 'Screen locks prevent unauthorized access when devices are left unattended, lost, or stolen. Combined with strong authentication (PIN, password, or biometrics) and reasonable timeouts, this forms the first line of defense for device security.',
    securityTip: 'Set a maximum screen lock timeout in your security policy (e.g., 5 minutes), but allow users to choose shorter timeouts if preferred. Balance security with usability—too short creates frustration, too long creates risk.',
    scenario: 'Your employees work with company data on various devices throughout the day, sometimes stepping away from their devices during meetings or breaks.'
  },
  { 
    id: 55,   
    category: 'Device Security',
    question: 'Which of these is a sign that a company device may be compromised with malware?',
    options: [
      'The device is running faster than usual',
      'Battery life has improved significantly',
      'The device is unusually slow, shows unexpected pop-ups, or has high network activity when idle',
      'The device requires regular software updates'
    ],
    answer: 2,
    explanation: 'Unusual behavior like system slowdowns, unexpected pop-ups, excessive network activity when not in use, rapid battery drain, or strange system errors can indicate malware infection.',
    securityTip: 'Create a simple guide for employees on recognizing potential compromise signs and establish a no-blame reporting process so infected devices can be quickly addressed without employees fearing punishment.',
    scenario: 'Your employees use various company devices daily but aren\'t IT experts who can identify technical security issues.'
  },
  { 
    id: 56,   
    category: 'Device Security',
    question: 'What is "jailbreaking" or "rooting" a mobile device, and why is it a security concern?',
    options: [
      'Installing approved security software; it\'s a concern because it uses additional battery power',
      'Removing manufacturer restrictions to gain full access to the operating system; it\'s a concern because it bypasses security controls',
      'Physically opening a device to repair it; it\'s a concern because it voids warranties',
      'Connecting to cell towers in other countries; it\'s a concern because of increased data charges'
    ],
    answer: 1,
    explanation: 'Jailbreaking (iOS) or rooting (Android) bypasses manufacturer security restrictions, allowing installation of unauthorized apps and modifications to core system functions. This undermines the security model and exposes devices to increased risk.',
    securityTip: 'Include clear prohibitions against using jailbroken/rooted devices for work in your security policy. Configure your MDM to detect and prevent jailbroken/rooted devices from accessing company resources.',
    scenario: 'An employee mentions they\'ve jailbroken their personal iPhone to customize it and install apps not available in the App Store. They use this phone for company email.'
  },
  
  // Data Protection Questions
  { 
    id: 57,   
    category: 'Secure Data',
    question: 'What is the most important first step in protecting your business data?',
    options: [
      'Purchasing the most expensive security software available',
      'Identifying and classifying what data you have and where it\'s stored',
      'Encrypting all company hard drives',
      'Moving all data to cloud storage providers'
    ],
    answer: 1,
    explanation: 'Before you can properly protect your data, you need to know what sensitive information your business has, where it\'s located, and how valuable or regulated it is.',
    securityTip: 'Create a simple data inventory that identifies what types of data you collect (customer info, financial data, etc.), where it\'s stored, who has access, and any regulatory requirements that apply to it.',
    scenario: 'Your small business has grown organically and now stores various types of information across different systems, but you\'ve never formally assessed your data security needs.'
  },
  { 
    id: 58,   
    category: 'Secure Data',
    question: 'Which practice best protects sensitive customer data?',
    options: [
      'Storing it on a password-protected computer',
      'Encrypting the data and limiting access to only those who need it',
      'Keeping backup copies in multiple locations',
      'Deleting it immediately after use'
    ],
    answer: 1,
    explanation: 'Encryption renders data unreadable without the proper key, protecting it even if devices are stolen or compromised. Combining encryption with proper access control is a fundamental security practice.',
    securityTip: 'Use strong encryption for both data at rest (stored) and data in transit (being sent). Implement role-based access controls so employees can only access the data they need for their job.',
    scenario: 'Your business collects and stores customer payment information, contact details, and purchase history as part of your operations.'
  },
  { 
    id: 59,   
    category: 'Secure Data',
    question: 'What is a data retention policy and why is it important for small businesses?',
    options: [
      'A policy to retain all data indefinitely for future use; important for preserving business history',
      'Guidelines for how long different types of data should be kept before secure deletion; important for reducing risk and complying with regulations',
      'A backup strategy that retains multiple copies; important for disaster recovery',
      'Rules for retaining physical copies of digital data; important for audits'
    ],
    answer: 1,
    explanation: 'A data retention policy defines how long different types of data should be kept based on business needs and legal requirements. It reduces storage costs, improves system performance, decreases breach impact, and helps regulatory compliance.',
    securityTip: 'Create a simple retention schedule based on data types: define minimum retention periods for legal compliance and maximum periods to limit risk. Include guidelines for secure data deletion when retention periods end.',
    scenario: 'Your business has been operating for years and has accumulated large amounts of customer data, employee records, financial information, and operational data, much of which may no longer be needed.'
  },
  { 
    id: 60,   
    category: 'Secure Data',
    question: 'What is a common mistake small businesses make when backing up their data?',
    options: [
      'Testing backups too frequently',
      'Using multiple backup methods',
      'Never testing if backups can be successfully restored',
      'Encrypting backup data'
    ],
    answer: 2,
    explanation: 'Many businesses create backups but never verify if the data can actually be restored successfully. This creates a false sense of security when the backup process may be incomplete or corrupted.',
    securityTip: 'Schedule regular backup restoration tests at least quarterly. Create a simple checklist to verify that critical business data can be recovered, and document the time required to restore operations.',
    scenario: 'Your small business performs regular automated backups of all important data, but you\'ve never had to use these backups in an actual recovery situation.'
  },
  { 
    id: 61,   
    category: 'Secure Data',
    question: 'Under privacy regulations like GDPR or CCPA, what is a small business required to do if a customer requests access to their personal data?',
    options: [
      'Ignore the request if you\'re a small business, as these regulations only apply to large corporations',
      'Provide a copy of all their personal data you hold, explain how it\'s used, and with whom it\'s shared (within required timeframes)',
      'Charge a substantial fee to discourage such requests',
      'Only respond if the request comes through an attorney'
    ],
    answer: 1,
    explanation: 'Many privacy regulations grant individuals rights to access, correct, and delete their personal data. Businesses of all sizes must respond to these requests within specified timeframes (typically 30-45 days).',
    securityTip: 'Create a simple process for handling data access requests: verify the requester\'s identity, document the request, know where all customer data is stored, and have templates ready for responses.',
    scenario: 'Your business collects customer information for sales and marketing purposes. A customer has emailed asking for "all the personal data you have about me" and mentioned GDPR/CCPA rights.'
  },
  { 
    id: 62,   
    category: 'Secure Data',
    question: 'What is the principle of "data minimization" and why is it important for small business security?',
    options: [
      'Collecting and storing only the minimum amount of data necessary for your business purpose; important because it reduces breach impact and compliance burdens',
      'Minimizing the number of employees who can access data; important for internal security',
      'Using the smallest possible storage devices; important for physical security',
      'Reducing the amount spent on data security; important for budget management'
    ],
    answer: 0,
    explanation: 'Data minimization means only collecting and retaining data that serves a legitimate business purpose. This reduces potential damage from breaches, lowers storage costs, and simplifies compliance with privacy regulations.',
    securityTip: 'Audit your data collection practices regularly: question whether each piece of information you collect is necessary, set automatic deletion timeframes for unneeded data, and consider anonymizing data when possible.',
    scenario: 'Your business collects extensive information from customers during transactions, including details that aren\'t essential for providing your products or services.'
  },
  { 
    id: 63,   
    category: 'Secure Data',
    question: 'Which method is most secure for disposing of old paper documents containing sensitive business or customer information?',
    options: [
      'Recycling them in a paper recycling bin',
      'Tearing each paper in half before discarding',
      'Using a cross-cut shredder or professional document destruction service',
      'Burning the documents in a controlled fire'
    ],
    answer: 2,
    explanation: 'Cross-cut shredders make document reconstruction extremely difficult by cutting papers into tiny confetti-like pieces. Professional destruction services provide certificates of destruction and comply with regulatory requirements.',
    securityTip: 'Create a document destruction policy that classifies documents by sensitivity level. Non-sensitive documents can be recycled, while sensitive information should be cross-cut shredded or professionally destroyed.',
    scenario: 'Your small business is clearing out old filing cabinets that contain tax records, customer information, employee files, and various business documents from several years ago.'
  },
  { 
    id: 64,   
    category: 'Secure Data',
    question: 'What should a small business consider when selecting a cloud service provider for storing sensitive data?',
    options: [
      'Only choosing the cheapest provider to minimize costs',
      'Only using providers that store data in your home country',
      'The provider\'s security practices, compliance certifications, encryption methods, and data access controls',
      'Selecting only the newest companies with the most modern websites'
    ],
    answer: 2,
    explanation: 'Cloud security depends on the provider\'s security controls, compliance certifications (like SOC 2, ISO 27001), data encryption capabilities, access management features, and transparency about security practices.',
    securityTip: 'Review the provider\'s security documentation, ask about encryption both in transit and at rest, understand their backup procedures, and verify their compliance with regulations relevant to your industry.',
    scenario: 'You\'re considering moving your customer database, financial records, and proprietary business documents to a cloud storage service for better accessibility and collaboration.'
  },
  { 
    id: 65,   
    category: 'Secure Data',
    question: 'What is a "business continuity plan" and why do small businesses need one?',
    options: [
      'A plan for expanding the business; needed for investor meetings',
      'A comprehensive strategy for maintaining critical operations during disruptions; needed to survive disasters or major incidents',
      'A marketing plan for business promotion; needed to attract new customers',
      'A financial plan for business spending; needed for tax purposes'
    ],
    answer: 1,
    explanation: 'A business continuity plan outlines how a business will continue operating during unplanned disruptions in service. It includes strategies for maintaining critical functions, communication protocols, and recovery procedures.',
    securityTip: 'Create a simple business continuity plan by identifying your most critical business functions, determining acceptable downtime for each, establishing alternate procedures during system outages, and documenting emergency contact information.',
    scenario: 'Your small business relies heavily on its customer database, order processing system, and communication tools. You\'re concerned about potential disruptions from cybersecurity incidents, power outages, or natural disasters.'
  },
  { 
    id: 66,   
    category: 'Secure Data',
    question: 'What is a "supply chain attack" and how can it affect small businesses?',
    options: [
      'Disruptions in product deliveries; affects businesses by causing inventory shortages',
      'Compromise of a vendor or software provider that spreads to their customers; affects businesses by introducing vulnerabilities through trusted relationships',
      'Price increases from suppliers; affects businesses by reducing profit margins',
      'Physical theft from delivery vehicles; affects businesses through product losses'
    ],
    answer: 1,
    explanation: 'Supply chain attacks target businesses through their vendors, service providers, or software suppliers. The attacker compromises the supply chain to gain access to the supplier\'s customers, using trusted relationships to spread malware or gain unauthorized access.',
    securityTip: 'Assess the security practices of key vendors, include security requirements in contracts, limit vendor access to only necessary systems, monitor vendor activities on your network, and have an incident response plan for supply chain compromises.',
    scenario: 'Your business relies on specialized software from a smaller vendor for critical operations. Recent news mentioned similar businesses being hacked through vulnerabilities in vendor software.'
  },
  { 
    id: 67,   
    category: 'Secure Data',
    question: 'What does "personally identifiable information" (PII) include, and why should small businesses protect it carefully?',
    options: [
      'Only Social Security numbers and credit card data; should be protected because it\'s required by law',
      'Names, addresses, phone numbers, email addresses, financial details, etc.; should be protected due to privacy regulations and breach consequences',
      'Only information collected with the customer\'s permission; only needs protection if the customer requests it',
      'Business operating procedures and financial records; should be protected as trade secrets'
    ],
    answer: 1,
    explanation: 'PII is any data that could potentially identify a specific individual, including direct identifiers (names, SSNs) and indirect identifiers that can be combined with other information to identify someone. Privacy laws worldwide require protection of this information.',
    securityTip: 'Inventory all PII your business collects, implement appropriate security controls based on sensitivity, minimize collection to only what\'s necessary, and create a data breach response plan specific to PII exposures.',
    scenario: 'Your small business collects and stores various customer details including contact information, purchase history, payment data, and in some cases, more sensitive information like dates of birth or account numbers.'
  }
];

const randomizedQuestions = shuffle(questions).slice(0, 50);
export default randomizedQuestions;
