import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer - II</h4>
                <h5>Atlassian</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Building enterprise posture management capabilities to enforce
              robust compliance standards across Atlassian products and
              environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Development Engineer</h4>
                <h5>SentinelOne</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Owned the Policy Service for cloud-native security, managing
              Rego-based policy evaluation, scalable asset-policy matching, and
              policy lifecycle reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MTS-2 / R&D Engineer-2</h4>
                <h5>VMware (Broadcom)</h5>
              </div>
              <h3>2022 - 2024</h3>
            </div>
            <p>
              Built backend capabilities for Aria Log Insight Cloud, including
              scalable APIs, dynamic tagging, circuit breaker features, and
              improved observability with strong test coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
