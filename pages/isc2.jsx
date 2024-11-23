import GlobalBanner from "@/components/blocks/globals/GlobalBanner";
import GlobalOverview from "@/components/blocks/globals/GlobalOverview";
import GlobalRepeaters from "@/components/blocks/globals/GlobalRepeaters";

export default function ISC2() {
  const items = [
    {
      title: "Introduction to ISC2 and Global Cybersecurity Workforce",
      description: `
              <p><strong>Objective:</strong> The International Information System Security Certification Consortium (ISC2) is a global leader in cybersecurity certifications, training, and research. ISC2 empowers cybersecurity professionals worldwide, addressing the growing demand for talent to combat the increasing risks in cybersecurity. As the demand for skilled cybersecurity professionals continues to rise, ISC2’s certifications and programs help fill the critical workforce gap and prepare the next generation of leaders in the field.</p>
              <br />
              <p><strong>Key Insights:</strong></p>
              <ul>
                <li>The global cybersecurity workforce gap continues to grow, with an estimated 4.8 million unfilled cybersecurity jobs globally, highlighting the urgent need for skilled professionals.</li>
                <li>As industries increasingly rely on technology, the demand for cybersecurity certifications and expertise is expected to continue rising, particularly in the face of emerging threats like AI-powered cyberattacks and evolving data privacy regulations.</li>
                <li>ISC2 plays a crucial role in filling this gap by offering industry-leading certifications such as CISSP, SSCP, and CCSP, which validate critical skills required for modern cybersecurity challenges.</li>
                <li>According to ISC2's 2024 Cybersecurity Workforce Study, the majority of organizations report difficulties in recruiting qualified cybersecurity staff, which is exacerbated by a fast-changing threat landscape.</li>
              </ul>
              <br />
              <p><strong>ISC2's Impact:</strong> ISC2 is instrumental in providing professionals with the tools and knowledge necessary to protect against advanced threats. The organization's ongoing training programs, certifications, and research contribute significantly to global efforts in strengthening cybersecurity defenses.</p>
              <br />
              <p><strong>Key Certifications:</strong></p>
              <ul>
                <li>CISSP: Certified Information Systems Security Professional – A globally recognized certification for experienced cybersecurity practitioners, focusing on various domains of information security.</li>
                <li>SSCP: Systems Security Certified Practitioner – Designed for entry-level professionals, providing foundational knowledge of cybersecurity fundamentals and best practices.</li>
                <li>CCSP: Certified Cloud Security Professional – Focuses on cloud security, a rapidly growing area of cybersecurity due to the widespread adoption of cloud computing technologies.</li>
              </ul>
          `,
    },
    {
      title: "Global Impact of ISC2",
      description: `
              <p><strong>Expanding Cybersecurity Reach:</strong> ISC2 plays a significant role in the global fight against cyber threats by advancing security standards across industries and nations. With cybersecurity threats becoming more sophisticated, ISC2's efforts are essential in raising awareness and providing solutions through its various programs. Their initiatives help shape policies, best practices, and frameworks that directly influence the global security landscape.</p>
              <br />
              <p><strong>Focus on Education and Training:</strong> ISC2’s investment in training and development programs helps to fill gaps in technical expertise, particularly in areas such as risk management, threat detection, and cloud security. These programs equip professionals with the necessary skills to prevent, detect, and respond to emerging threats. ISC2’s certifications, such as the Certified Cloud Security Professional (CCSP), are highly sought after, recognizing expertise in the specialized area of cloud security, a key focus for many enterprises globally.</p>
              <br />
              <p><strong>Advancing Diversity in Cybersecurity:</strong> ISC2 is committed to fostering diversity in the cybersecurity workforce. Programs like the Women’s Cybersecurity Scholarships are a testament to the organization's dedication to ensuring that all voices are represented in this critical sector. These scholarships aim to increase the participation of women in cybersecurity, an industry still predominantly male-dominated.</p>
          `,
    },
    {
      title: "The Challenges of Cybersecurity Workforce Development",
      description: `
              <p><strong>Workforce Shortage:</strong> The cybersecurity workforce continues to face significant challenges. According to ISC2's 2024 Cybersecurity Workforce Study, the skills gap is a critical issue, with many organizations struggling to find and retain cybersecurity professionals. This shortage is worsened by the rapidly evolving threat landscape, which requires constant adaptation and upskilling of existing professionals.</p>
              <br />
              <p><strong>Changing Nature of Cybersecurity Threats:</strong> Emerging threats like AI-driven attacks, ransomware, and data breaches continue to evolve, demanding advanced skills and expertise from the cybersecurity workforce. As technology advances, new attack vectors are discovered, and the need for a skilled and dynamic workforce becomes even more pressing. ISC2 plays a pivotal role in addressing this challenge through its training and certification programs that focus on future-proofing the cybersecurity workforce.</p>
              <br />
              <p><strong>Expanding Access to Education:</strong> With a global shortage of cybersecurity professionals, increasing access to cybersecurity education is essential. ISC2’s initiatives include offering scholarships and support to students, veterans, and underrepresented groups to help bridge the gap in cybersecurity education and employment opportunities.</p>
          `,
    },
    {
      title: "ISC2’s Global Certification Programs",
      description: `
              <p><strong>Industry-Recognized Certifications:</strong> ISC2 offers a range of certifications that validate cybersecurity professionals' skills across different stages of their careers. These certifications are globally recognized and respected within the cybersecurity industry.</p>
              <br />
              <p><strong>Key Certifications:</strong></p>
              <ul>
                <li><strong>CISSP</strong> – The Certified Information Systems Security Professional certification is the most globally recognized credential for cybersecurity professionals. It focuses on a wide range of domains including risk management, cryptography, and security architecture.</li>
                <li><strong>SSCP</strong> – The Systems Security Certified Practitioner certification is ideal for professionals looking to start their cybersecurity careers. It focuses on implementing security measures and maintaining systems security.</li>
                <li><strong>CCSP</strong> – The Certified Cloud Security Professional certification targets professionals managing cloud security. With the increasing adoption of cloud-based solutions, this certification is highly relevant for modern cybersecurity teams.</li>
              </ul>
              <br />
              <p><strong>Additional Training and Resources:</strong> Beyond certifications, ISC2 offers a range of training resources and community support to help individuals stay current with cybersecurity trends and best practices. The ISC2 community is one of the largest and most active professional networks in the cybersecurity space, offering forums, conferences, and peer learning opportunities.</p>
          `,
    },
  ];

  return (
    <>
      <GlobalBanner
        title="International Information System Security Certification Consortium,"
        subtext="ISC2"
        description="This report highlights ISC2's contributions in the cybersecurity field, including certifications, training, and its global impact on tackling the skills gap."
      />

      <GlobalOverview description=" (ISC2) to nurture an emerging new profession with the expertise, standards and ethical practices necessary to secure our economies, nations and personal lives." />
      <GlobalRepeaters items={items} />
    </>
  );
}
