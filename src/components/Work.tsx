import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const featuredWork = [
  {
    title: "Enterprise Posture Management Platform",
    category: "Atlassian",
    details:
      "Building services that enforce compliance controls across multiple Atlassian products and deployment environments, with a strong focus on governance and policy consistency at scale.",
    impact:
      "Improved the team's ability to standardize posture checks and streamline compliance readiness for enterprise customers.",
    stack: "Kotlin, Java, Distributed Systems, Cloud Compliance",
  },
  {
    title: "Policy Service Ownership",
    category: "SentinelOne",
    details:
      "Owned the cloud-native Policy Service that evaluates security policies using OPA/Rego and performs scalable real-time matching between assets and policy rules.",
    impact:
      "Increased policy evaluation reliability and improved visibility into enforcement lifecycle and observability.",
    stack: "Go, OPA/Rego, Cloud Security, Microservices",
  },
  {
    title: "VMware Aria Log Insight Cloud",
    category: "VMware",
    details:
      "Designed and delivered backend APIs and custom features including dynamic tagging and circuit breaker behavior for large-scale log management workflows.",
    impact:
      "Raised system reliability and performance while strengthening end-to-end monitoring through distributed tracing and robust testing.",
    stack: "Java, REST APIs, Observability, OpenSearch",
  },
  {
    title: "EV.Cloud and VIC",
    category: "Veritas",
    details:
      "Contributed to backend product engineering for information classification and cloud data protection services in production enterprise environments.",
    impact:
      "Supported feature delivery across core workflows and improved maintainability for long-term product evolution.",
    stack: "Java, Backend Engineering, Enterprise Security",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Featured <span>Work</span>
        </h2>
        <div className="work-flex">
          {featuredWork.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Problem space</h4>
                <p>{item.details}</p>
                <h4>Impact</h4>
                <p>{item.impact}</p>
                <h4>Core stack</h4>
                <p>{item.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
