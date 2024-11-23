import GlobalBanner from "@/components/blocks/globals/GlobalBanner";
import GlobalOverview from "@/components/blocks/globals/GlobalOverview";
import GlobalRepeaters from "@/components/blocks/globals/GlobalRepeaters";

export default function Pcert() {
  const items = [
    {
      title: "Introduction",
      description: `
                <p><strong>Objective:</strong> To introduce the Philippine Computer Emergency Response Team (PHCERT) as a key organization in managing cybersecurity threats in the Philippines.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>            
                </p>
                <p>
                <ul>
                    <li>
                        Established to respond to cybersecurity incidents and improve the nation’s resilience to digital threats.
                    </li>
                    <li>
                        Works closely with government, private institutions, and international organizations to promote cybersecurity awareness.
                    </li>
                    <li>
                        Plays a central role in incident handling, threat intelligence sharing, and cybersecurity capacity building.
                    </li>
                </ul>
                </p>
            `,
    },
    {
      title: "Mission and Objectives of PHCERT",
      description: `
                <p><strong>Objective:</strong> To explain PHCERT’s mission and core objectives in strengthening cybersecurity in the Philippines.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>            
                </p>
                <p>
                <ul>
                    <li>
                        <strong>Mission:</strong> To protect the Philippine cyberspace by mitigating risks, responding to incidents, and improving overall cybersecurity awareness.
                    </li>
                    <li>
                        <strong>Core Objectives:</strong>
                        <ul>
                            <li>Provide rapid response to cybersecurity incidents and minimize their impact.</li>
                            <li>Develop national cybersecurity policies and frameworks in collaboration with other stakeholders.</li>
                            <li>Facilitate education and training to improve cybersecurity skills across sectors.</li>
                            <li>Foster partnerships to enhance information sharing and coordinated responses.</li>
                        </ul>
                    </li>
                </ul>
                </p>
            `,
    },
    {
      title: "Core Services Offered by PHCERT",
      description: `
                <p><strong>Objective:</strong> To outline the services PHCERT provides to support cybersecurity in the Philippines.</p>
                <br />
                <p>
                    <strong>Key Services:</strong>            
                </p>
                <p>
                <ul>
                    <li>
                        <strong>Incident Response:</strong> 
                        <ul>
                            <li>Providing support for detecting, analyzing, and mitigating cybersecurity incidents.</li>
                            <li>Coordinating with affected entities to ensure a swift resolution.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Threat Intelligence:</strong>
                        <ul>
                            <li>Gathering, analyzing, and sharing information about cybersecurity threats and vulnerabilities.</li>
                            <li>Providing advisories and alerts to stakeholders to prevent potential attacks.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Capacity Building:</strong>
                        <ul>
                            <li>Conducting training, workshops, and awareness campaigns for government agencies, businesses, and individuals.</li>
                            <li>Enhancing the skills of cybersecurity professionals in the Philippines.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Policy Development:</strong>
                        <ul>
                            <li>Assisting in the creation of national cybersecurity policies and frameworks.</li>
                            <li>Providing expertise to align policies with global best practices.</li>
                        </ul>
                    </li>
                </ul>
                </p>
            `,
    },
    {
      title: "PHCERT’s Role in Incident Handling",
      description: `
                <p><strong>Objective:</strong> To explain how PHCERT manages and responds to cybersecurity incidents effectively.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>            
                </p>
                <p>
                <ul>
                    <li>
                        <strong>Incident Coordination:</strong> Acts as a central hub for reporting and managing cybersecurity incidents in the Philippines.
                    </li>
                    <li>
                        <strong>Forensic Analysis:</strong> Provides technical expertise to analyze cyberattacks and prevent recurrence.
                    </li>
                    <li>
                        <strong>Collaboration:</strong> Works with local and international CERTs, law enforcement agencies, and private entities to handle complex incidents.
                    </li>
                    <li>
                        <strong>Public Advisories:</strong> Issues alerts and best practices to prevent future incidents.
                    </li>
                </ul>
                </p>
            `,
    },
    {
      title: "Partnerships and Collaboration",
      description: `
                <p><strong>Objective:</strong> To emphasize PHCERT’s collaborative efforts in strengthening national and regional cybersecurity.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>
                </p>
                <p>
                <ul>
                    <li>
                        <strong>Government Collaboration:</strong> 
                        <ul>
                            <li>Works with agencies like the National Privacy Commission (NPC) and the Department of Information and Communications Technology (DICT).</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Private Sector Engagement:</strong>
                        <ul>
                            <li>Partners with companies to enhance threat intelligence sharing and strengthen cybersecurity defenses.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>International Cooperation:</strong>
                        <ul>
                            <li>Collaborates with global organizations like FIRST (Forum of Incident Response and Security Teams) and APNIC to adopt global best practices.</li>
                        </ul>
                    </li>
                </ul>
                </p>
            `,
    },
    {
      title: "Cybersecurity Challenges and PHCERT’s Solutions",
      description: `
                <p><strong>Objective:</strong> To discuss the key cybersecurity challenges in the Philippines and how PHCERT addresses them.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>
                </p>
                <p>
                <ul>
                    <li>
                        <strong>Challenges:</strong>
                        <ul>
                            <li>Rising incidents of phishing, ransomware, and data breaches.</li>
                            <li>Lack of skilled cybersecurity professionals.</li>
                            <li>Growing attack surface due to digital transformation.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Solutions:</strong>
                        <ul>
                            <li>Improving incident response times and capabilities through enhanced systems and tools.</li>
                            <li>Providing specialized training programs to upskill IT professionals.</li>
                            <li>Promoting awareness campaigns to educate the public about cybersecurity risks.</li>
                        </ul>
                    </li>
                </ul>
                </p>
            `,
    },
    {
      title: "The Future of PHCERT",
      description: `
                <p><strong>Objective:</strong> To explore PHCERT’s vision for the future and its plans for advancing national cybersecurity.</p>
                <br />
                <p>
                    <strong>Key Points:</strong>
                </p>
                <p>
                <ul>
                    <li>
                        Strengthening its capabilities to handle more sophisticated cyber threats.
                    </li>
                    <li>
                        Expanding partnerships with local and global organizations to improve threat intelligence sharing.
                    </li>
                    <li>
                        Advocating for the integration of cybersecurity into education systems to build a talent pipeline for the future.
                    </li>
                    <li>
                        Adopting emerging technologies like AI and machine learning to enhance threat detection and response.
                    </li>
                </ul>
                </p>
            `,
    },
  ];

  return (
    <>
      <GlobalBanner
        title="Philippine Computer Emergency Response Team"
        subtext="PHCERT"
        description="Cybersecurity Preparedness and Response in the Philippines: The Critical Role of PHCERT in Mitigating Cyber Threats"
      />

      <GlobalOverview description="This presentation will delve into the Philippine Computer Emergency Response Team's (PHCERT) pivotal role in fortifying the country's cybersecurity infrastructure. It will highlight PHCERT's mission, its proactive measures to address cybersecurity challenges, and its contributions to building a secure digital ecosystem in the Philippines." />

      <GlobalRepeaters items={items} />
    </>
  );
}
