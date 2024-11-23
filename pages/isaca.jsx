import GlobalBanner from "@/components/blocks/globals/GlobalBanner";
import GlobalOverview from "@/components/blocks/globals/GlobalOverview";
import GlobalRepeaters from "@/components/blocks/globals/GlobalRepeaters";

export default function Isaca() {
  const items = [
    {
      title: "Introduction",
      description: `
                <p><strong>Objective:</strong> To introduce ISACA (Information Systems Audit and Control Association) as a global leader in IT governance, risk management, and cybersecurity. This section will focus on ISACA’s history, purpose, and role in fostering professional excellence.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>            
                </p>
                <p>
                <ul>
                    <li>
                        ISACA was founded in 1969 to address the growing need for standardized IT auditing practices.
                    </li>
                    <li>
                        It is now a global association that empowers IT professionals with knowledge, tools, and credentials.
                    </li>
                    <li>
                        ISACA supports over 170,000 members across 188 countries, emphasizing innovation and professional development.
                    </li>
                </ul>
                </p>    
            `,
    },
    {
      title: "ISACA’s Core Objectives",
      description: `
                <p><strong>Objective:</strong> To explain ISACA’s mission to advance technology professionals’ careers and enhance organizations’ IT systems.</p>
                <br />
                <p>
                    <strong>Key points:</strong>            
                </p>
                <p>
                <ul>
                    <li>
                        <strong>Professional Development:</strong>
                        <ul>
                            <li>Offering globally recognized certifications and educational resources.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Community Building:</strong>
                        <ul>
                            <li>Fostering collaboration among IT professionals worldwide.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Standards and Frameworks:</strong>
                        <ul>
                            <li>Developing industry standards like COBIT (Control Objectives for Information and Related Technologies) for IT governance and management.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Advocacy:</strong>
                        <ul>
                            <li>Promoting ethical IT practices and guiding organizations toward compliance and risk mitigation.</li>
                        </ul>
                    </li>
                </ul>
                </p>    
            `,
    },
    {
      title: "ISACA Certifications",
      description: `
                <p><strong>Objective:</strong> To highlight ISACA’s globally respected certifications, essential for IT governance, security, and auditing professionals.</p>
                <br />
                <p>
                    <strong>Key Certifications:</strong>            
                </p>
                <p>
                <ul>
                    <li>
                        <strong>Certified Information Systems Auditor (CISA):</strong>
                        <ul>
                            <li>Focus: IT auditing, control, and assurance.</li>
                            <li>Target Audience: IT auditors, compliance professionals, and risk managers.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Certified Information Security Manager (CISM):</strong>
                        <ul>
                            <li>Focus: Managing and developing security programs.</li>
                            <li>Target Audience: Security professionals in managerial roles.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Certified in Risk and Information Systems Control (CRISC):</strong>
                        <ul>
                            <li>Focus: Identifying and managing IT risk.</li>
                            <li>Target Audience: Risk management and control professionals.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Certified Data Privacy Solutions Engineer (CDPSE):</strong>
                        <ul>
                            <li>Focus: Designing and implementing privacy solutions.</li>
                            <li>Target Audience: Privacy-focused IT professionals.</li>
                        </ul>
                    </li>
                </ul>
                </p>    
            `,
    },
    {
      title: "ISACA’s Contribution to IT Governance",
      description: `
                <p><strong>Objective:</strong> To discuss ISACA’s impact on IT governance and how it supports organizations worldwide.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>
                </p>
                <p>
                <ul>
                    <li>
                        <strong>COBIT Framework:</strong>
                        <ul>
                            <li>A globally recognized framework for IT governance and management.</li>
                            <li>Helps organizations align IT goals with business objectives.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Improved Decision-Making:</strong>
                        <ul>
                            <li>Provides tools and guidelines to ensure informed decisions on IT investments and risks.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Compliance Support:</strong>
                        <ul>
                            <li>Enables organizations to comply with regulatory requirements efficiently.</li>
                        </ul>
                    </li>
                </ul>
                </p>
            `,
    },
    {
      title: "ISACA’s Global Community and Networking Opportunities",
      description: `
                <p><strong>Objective:</strong> To highlight ISACA’s role in fostering a global community of IT professionals and the benefits of networking.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>
                </p>
                <p>
                <ul>
                    <li>
                        Provides opportunities to connect with industry experts through local chapters and global events.
                    </li>
                    <li>
                        Hosts conferences, webinars, and training programs for knowledge sharing and skill-building.
                    </li>
                    <li>
                        Offers a platform for collaboration on emerging IT challenges and innovations.
                    </li>
                </ul>
                </p>
            `,
    },
    {
      title: "The Future of ISACA",
      description: `
                <p><strong>Objective:</strong> To explore ISACA’s vision for the future and its ongoing commitment to innovation.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>
                </p>
                <p>
                <ul>
                    <li>
                        Expanding focus on emerging technologies like AI, IoT, and blockchain to address new challenges.
                    </li>
                    <li>
                        Enhancing support for IT professionals through advanced training and certifications.
                    </li>
                    <li>
                        Promoting diversity, equity, and inclusion within the global IT community.
                    </li>
                </ul>
                </p>
            `,
    },
  ];

  return (
    <>
      <GlobalBanner
        title="Information Systems Audit and Control Association"
        subtext="ISACA"
        description="Empowering IT Professionals Worldwide: ISACA's Role in Advancing IT Governance, Cybersecurity, and Risk Management Through Education and Certification"
      />

      <GlobalOverview description="This presentation will delve into ISACA's pivotal role in advancing IT governance, risk management, and cybersecurity. It will explore ISACA's globally recognized certifications, frameworks like COBIT, and initiatives that empower IT professionals and organizations to navigate the challenges of a dynamic digital world." />
      <GlobalRepeaters items={items} />
    </>
  );
}
