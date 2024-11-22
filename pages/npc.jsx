import GlobalBanner from "@/components/blocks/globals/GlobalBanner";
import GlobalOverview from "@/components/blocks/globals/GlobalOverview";
import GlobalRepeaters from "@/components/blocks/globals/GlobalRepeaters";

export default function Npc() {
  const items = [
    {
      title: "Introduction",
      description: `
        <p>To set the context for the discussion on data privacy, emphasizing the importance of protecting personal information in the digital era and the critical role of the National Privacy Commission (NPC).</p>
        <br />
        <p>
            <strong>Key Points:</strong>            
        </p>
        <p>
        <ul>
            <li>
                The rise of digital transformation has led to the proliferation of data, making privacy a global concern.
            </li>
            <li>
                In the Philippines, personal information is often at risk due to data breaches, phishing scams, and misuse of information.
            </li>
            <li>
                The NPC was established under the Data Privacy Act of 2012 to protect the rights of individuals and ensure organizations responsibly handle personal data.
            </li>
            <li>
                Importance of public awareness and organizational accountability in building a privacy-resilient society.
            </li>
        </ul>
        </p>    
        `,
    },
    {
      title: "The Data Privacy Act of 2012",
      description: `
        <p>To provide a detailed understanding of the law that governs data privacy in the Philippines.</p>
        <br />
        <p>
            <strong>Key Points:</strong>            
        </p>
        <p>
        <ul>
            <li>
                <strong>Overview of the Law:</strong> Enacted as Republic Act No. 10173, it aims to protect personal information collected, processed, and stored by both public and private sectors.
            </li>
            <li>
                <strong>Principles of Data Privacy:</strong>
                <ul>
                  <li><strong>Transparency:</strong> Organizations must inform individuals about how their data is used.</li>
                  <li><strong>Legitimate Purpose:</strong> Data should only be collected for a lawful and specific purpose.</li>
                  <li><strong>Proportionality:</strong> Data collected must be relevant and not excessive for its intended use.</li>
                </ul>
            </li>
            <li>
              <strong>Rights of Data Subjects:</strong>
              <ul>
                <li>
                  Right to be informed
                </li>
                <li>
                  Right to access
                </li>
                <li>
                  Right to object to processing
                </li>
                <li>
                  Right to data portability
                </li>
                <li>
                  Right to file a complaint
                </li>
              </ul>
            </li>
            <li>
              <strong>Obligations of Organizations:</strong>
              <ul>
                <li>Secure consent before collecting data</li>
                <li>Appoint a Data Protection Officer (DPO)</li>
                <li>Implement security measures to prevent breaches</li>
              </ul> 
            </li> 
        </ul>
        </p>  
        `,
    },
    {
      title: "Challenges in Data Privacy",
      description: `
        <p>To discuss the challenges organizations and individuals face in ensuring data privacy.</p>
        <br />
        <p>
            <strong>Key Points:</strong>            
        </p>
        <p>
        <ul>
            <li>
                <strong>Increasing Cyber Threats:</strong> Rise in cyber-attacks, data breaches, and ransomware incidents targeting personal information.
            </li>
            <li>
                <strong>Emerging Technologies:</strong> Adoption of AI, IoT, and cloud computing raises privacy risks due to the vast amount of data generated.
            </li>
            <li>
                <strong>Sector-Specific Concerns:</strong>
                <ul>
                  <li>
                    <strong>E-commerce:</strong> Handling payment and personal details securely.
                  </li>
                  <li>
                    <strong>Fintech:</strong> Balancing innovation with regulatory compliance.
                  </li>
                  <li>
                    <strong>Social Media:</strong> Addressing misuse and unauthorized access to user data.
                  </li>
                </ul>
            </li>
        </ul>
        </p>    
        `,
    },
    {
      title: "NPC’s Initiatives and Programs",
      description: `
        <p>To highlight how the NPC promotes and enforces data privacy in the Philippines.</p>
        <br />
        <p>
            <strong>Key Points:</strong>            
        </p>
        <p>
        <ul>
            <li>
                <strong>Awareness Campaigns:</strong> Outreach programs targeting businesses, schools, and local government units to spread awareness about data privacy.
            </li>
            <li>
              <strong>Compliance Assistance:</strong> Guidelines for organizations on how to comply with the Data Privacy Act, such as the NPC’s Privacy Toolkit.
            </li>
            <li>
              <strong>Capacity Building:</strong> Training and certification programs for DPOs and privacy practitioners.
            </li>
            <li>
              <strong>Enforcement Actions:</strong> Case studies on breaches and violations investigated by NPC, showcasing accountability.
            </li>
            <li>
              <strong>International Collaboration:</strong> Partnerships with global organizations to align with international privacy standards and practices.
            </li>
        </ul>
        </p>    
        `,
    },
    {
      title: "Strengthening Privacy Compliance",
      description: `
        <p>To provide actionable strategies for organizations to achieve and maintain compliance.</p>
        <br />
        <p>
            <strong>Key Points:</strong>            
        </p>
        <p>
        <ul>
            <li>
               <strong>Appointing a Data Protection Officer (DPO):</strong> Ensures oversight of privacy policies and implementation of security measures.
            </li>
            <li>
               <strong>Data Mapping:</strong> Understanding how personal data flows within the organization to identify risks.
            </li>
            <li>
               <strong>Risk Assessments:</strong> Conducting regular Privacy Impact Assessments (PIA) to mitigate vulnerabilities.
            </li>
            <li>
               <strong>Training Employees:</strong> Building a culture of privacy awareness among staff.
            </li>
            <li>
               <strong>Incident Response Plans:</strong> Preparing for and effectively responding to data breaches.
            </li>
        </ul>
        </p>    
        `,
    },
    {
      title: "Future Directions",
      description: `
        <p>To explore the NPC’s vision for addressing emerging privacy challenges and enhancing its regulatory framework.</p>
        <br />
        <p>
            <strong>Key Points:</strong>            
        </p>
        <p>
        <ul>
            <li>
               <strong>Adapting Policies for Emerging Technologies:</strong> AI and big data require updated guidelines to balance innovation with privacy.
            </li>
            <li>
               <strong>Strengthening Cross-Sector Collaboration:</strong> Partnering with industries, government, and academia to foster privacy resilience.
            </li>
            <li>
               <strong>Expanding Public Awareness:</strong> Scaling outreach to educate individuals about their privacy rights and responsibilities.
            </li>
            <li>
               <strong>Improving Breach Reporting Mechanisms:</strong> Streamlining processes for faster resolution of privacy-related incidents.
            </li>
        </ul>
        </p>    
        `,
    },
    {
      title: "Conclusion",
      description: `
        <p>To summarize the presentation and inspire the audience to take active steps in protecting data privacy.</p>
        <br />
        <p>
            <strong>Key Points:</strong>            
        </p>
        <p>
        <ul>
            <li>
              Emphasize the shared responsibility of the government, organizations, and individuals in ensuring data privacy.
            </li>
            <li>
              Encourage organizations to adopt privacy-by-design principles in their operations.
            </li>
            <li>
              Call on individuals to stay informed about their rights and report any violations to the NPC.
            </li>
            <li>
              Reinforce the NPC’s role as a trusted partner in safeguarding personal data.
            </li>
        </ul>
        </p>    
        `,
    },
  ];
  return (
    <>
      <GlobalBanner
        title="National Privacy Commission"
        subtext="NPC"
        description="Strengthening Data Privacy in the Digital Age: The Role of the National Privacy Commission (NPC) in Safeguarding Personal Information"
      />

      <GlobalOverview description="This presentation will focus on the NPC's role in addressing the challenges of data privacy in a rapidly evolving digital landscape. It will highlight the key principles of the Data Privacy Act of 2012, showcase NPC initiatives, and provide actionable insights for organizations and individuals to enhance compliance and security." />

      <GlobalRepeaters items={items} />
    </>
  );
}
