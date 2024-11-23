import GlobalBanner from "@/components/blocks/globals/GlobalBanner";
import GlobalOverview from "@/components/blocks/globals/GlobalOverview";
import GlobalRepeaters from "@/components/blocks/globals/GlobalRepeaters";

export default function Npc() {
  const items = [
    {
      title: "Introduction",
      description: `
        <p><strong>Objective:</strong> To introduce the National Privacy Commission (NPC) as the primary government agency responsible for enforcing data privacy laws in the Philippines.</p>
        <br />
        <p>
          <strong>Key Points:</strong>            
        </p>
        <p>
        <ul>
          <li>
            The NPC was established through the Data Privacy Act of 2012 (RA 10173) to protect personal information and ensure compliance with data privacy standards.
          </li>
          <li>
            It aims to cultivate a culture of privacy in both public and private organizations across the country.
          </li>
          <li>
            The NPC is responsible for monitoring and implementing data privacy regulations and addressing privacy-related concerns.
          </li>
        </ul>
        </p>    
      `,
    },
    {
      title: "Data Privacy Act of 2012",
      description: `
        <p><strong>Objective:</strong> To provide an overview of the Data Privacy Act of 2012 (Republic Act 10173) and its significance in safeguarding personal data.</p>
        <br />
        <p>
          <strong>Key Points:</strong>            
        </p>
        <p>
        <ul>
          <li>
            <strong>Purpose:</strong> To protect the privacy of individuals while ensuring the free flow of information for innovation and growth.
          </li>
          <li>
            <strong>Scope:</strong> Covers all entities that process personal information, including public and private organizations.
          </li>
          <li>
            <strong>Key Provisions:</strong>
            <ul>
              <li>Rights of Data Subjects (e.g., right to access, correct, and erase personal data).</li>
              <li>Obligations of Personal Information Controllers (PICs) and Personal Information Processors (PIPs).</li>
              <li>Mandatory notification of data breaches within 72 hours.</li>
            </ul>
          </li>
        </ul>
        </p>    
      `,
    },
    {
      title: "NPC's Core Functions",
      description: `
        <p><strong>Objective:</strong> To explain the key responsibilities and activities of the National Privacy Commission in upholding data privacy laws.</p>
        <br />
        <p>
          <strong>Core Functions:</strong>            
        </p>
        <p>
        <ul>
          <li>
            <strong>Policy Formulation:</strong> Developing rules, regulations, and policies for the implementation of the Data Privacy Act.
          </li>
          <li>
            <strong>Compliance Monitoring:</strong> Ensuring that organizations comply with data privacy requirements through audits and investigations.
          </li>
          <li>
            <strong>Education and Advocacy:</strong> Conducting awareness campaigns, workshops, and training to promote data privacy.
          </li>
          <li>
            <strong>Enforcement:</strong> Investigating complaints, resolving disputes, and imposing penalties for non-compliance.
          </li>
        </ul>
        </p>    
      `,
    },
    {
      title: "Challenges in Data Privacy",
      description: `
        <p><strong>Objective:</strong> To highlight the common challenges faced by organizations and individuals in ensuring data privacy in the digital age.</p>
        <br />
        <p>
          <strong>Key Challenges:</strong>            
        </p>
        <p>
        <ul>
          <li>
            <strong>Rapid Technological Advancement:</strong> The fast pace of innovation often outpaces the development of privacy regulations.
          </li>
          <li>
            <strong>Cybersecurity Threats:</strong> Increasing frequency and sophistication of cyberattacks targeting personal data.
          </li>
          <li>
            <strong>Lack of Awareness:</strong> Limited understanding among individuals and organizations about their rights and responsibilities under the Data Privacy Act.
          </li>
          <li>
            <strong>Compliance Costs:</strong> Small and medium-sized enterprises may find it challenging to allocate resources for data privacy compliance.
          </li>
        </ul>
        </p>    
      `,
    },
    {
      title: "Future Directions",
      description: `
        <p><strong>Objective:</strong> To explore the National Privacy Commission’s vision for the future of data privacy in the Philippines.</p>
        <br />
        <p>
          <strong>Key Areas of Focus:</strong>            
        </p>
        <p>
        <ul>
          <li>
            Enhancing collaboration with international data protection agencies to address cross-border data privacy concerns.
          </li>
          <li>
            Strengthening cybersecurity measures to protect personal information from emerging threats.
          </li>
          <li>
            Encouraging innovation while ensuring data privacy by promoting privacy-by-design principles.
          </li>
          <li>
            Expanding education and outreach programs to improve public awareness of data privacy rights and responsibilities.
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
