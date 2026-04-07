const TechStack = () => {
  const stackGroups = [
    {
      title: "Languages",
      items: ["Java", "Kotlin", "Go", "TypeScript"],
    },
    {
      title: "Backend & APIs",
      items: ["Microservices", "REST APIs", "Distributed Systems", "System Design"],
    },
    {
      title: "Cloud Security",
      items: ["OPA/Rego", "Policy Evaluation", "Asset-Policy Matching", "Compliance Controls"],
    },
    {
      title: "Observability",
      items: ["OpenSearch", "Distributed Tracing", "Logging Pipelines", "Reliability Engineering"],
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
