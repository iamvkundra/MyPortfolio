const TechStack = () => {
  const stackGroups = [
    {
      title: "Data & Office",
      items: ["MS Excel (Advanced)", "MS Word", "MS Power Point", "Corel Draw"],
    },
    {
      title: "Finance & Accounts",
      items: ["Tally.erp 9 with GST", "Ledger Management", "Financial Reporting", "Bank Reconciliation"],
    },
    {
      title: "Information Systems",
      items: ["J-Guruji ICT Platform", "e-Vidya Vahini", "DTH-TV Content", "DIKHSHA Platform"],
    },
    {
      title: "Analysis & Speed",
      items: ["Pivot Tables/Charts", "V-Lookup", "Hindi Typing (30 WPM)", "English Typing (34 WPM)"],
    },
  ];

  return (
    <div className="techstack">
      <h2>Core Tech Stack</h2>
      <p className="techstack-subtitle">
        Tools and technologies I use to build secure, scalable backend platforms.
      </p>
      <div className="techstack-grid">
        {stackGroups.map((group) => (
          <div className="techstack-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="techstack-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
