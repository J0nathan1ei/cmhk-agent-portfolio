import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  CircleDollarSign,
  Database,
  FileChartColumn,
  FlaskConical,
  GitBranch,
  MessageSquareText,
  Network,
  Presentation,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Store,
} from "lucide-react";
import "./styles.css";
import projectPoster from "./assets/cmhk-ai-agent-poster.png";

const PRESENTATION_URL = "#";
const PORTFOLIO_URL = "#";

const tags = [
  "AI Agent",
  "Telecom Recommendation",
  "Dify Workflow",
  "Stakeholder Alignment",
  "Neo4j PoC",
  "Black-box Testing",
];

const problemItems = [
  "Customers struggle to understand plan terms such as local data, Mainland China & Macau data, contract period, admin fee, monthly fee, and promotional conditions.",
  "Frontline service quality depends heavily on staff experience, which may create inconsistency in explanation and recommendation logic.",
  "Static FAQ and traditional search cannot reliably match natural-language customer needs to personalized telecom plan options.",
  "Inaccurate AI recommendations can mislead customers, reduce trust, and create compliance or legal risk.",
];

const targetUsers = [
  {
    icon: MessageSquareText,
    title: "Customer-facing chatbot",
    user: "Mobile plan customers",
    need: "Explain budget, data usage, travel habits, and contract preferences in natural language.",
    value:
      "The AI Agent summarizes requirements, compares relevant plans, and provides preliminary recommendations with clear reasoning.",
  },
  {
    icon: Store,
    title: "Frontline staff assistant",
    user: "CMHK store staff",
    need: "Quickly query plans, structure customer needs, and compare options during live conversations.",
    value:
      "The assistant supports staff with faster information lookup while keeping final judgment human-led.",
  },
];

const workflow = [
  "User Input",
  "Intent Understanding",
  "Requirement Extraction",
  "Plan Retrieval",
  "Recommendation Generation",
  "Explanation & Validation",
];

const graphEntities = [
  { label: "RatePlan", x: "50%", y: "48%" },
  { label: "PlanOffer", x: "20%", y: "24%" },
  { label: "DataAllowance", x: "78%", y: "24%" },
  { label: "DataCoverage", x: "80%", y: "72%" },
  { label: "ContractFee", x: "22%", y: "74%" },
  { label: "ContractPeriod", x: "50%", y: "86%" },
];

const findings = [
  "AI Agents have practical potential for telecom plan lookup, requirement summarization, and initial screening.",
  "Frontline staff are open to AI support, but do not want automation to replace the trust built through human conversation.",
  "The key challenge is not generating fluent answers, but grounding recommendations in accurate and traceable plan data.",
  "Graph databases can represent complex product relationships, while natural-language-to-Cypher stability remains a deployment challenge.",
  "AI transformation value depends on business fit, user acceptance, risk control, and organizational adoption.",
];

const deliverables = [
  ["Cleaned telecom plan dataset", "Structured plan fields for retrieval, comparison, and prototype validation."],
  ["Neo4j graph database PoC", "Modeled plan offers, data allowances, coverage regions, fees, and contract relationships."],
  ["Dify AI Agent workflow prototype", "Built an interactive workflow for requirement extraction and preliminary plan recommendation."],
  ["Black-box testing results", "Tested simulated customer personas and evaluated recommendation behavior."],
  ["Project poster", "Summarized the project problem, method, solution design, and outcomes for exhibition."],
  ["Stakeholder interview findings", "Synthesized internal tech leader and frontline staff insights."],
  ["Final presentation materials", "Communicated project value, implementation logic, limitations, and future direction."],
];

function Section({ eyebrow, title, children, className = "", id }) {
  return (
    <section className={`section ${className}`} id={id}>
      <div className="section-heading">
        <span>{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function App() {
  const openDifyAssistant = (event) => {
    event.preventDefault();

    const chatButton = document.querySelector("#dify-chatbot-bubble-button");

    if (chatButton) {
      chatButton.click();
      return;
    }

    document.querySelector("#assistant-guide")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <nav className="top-nav" aria-label="Project navigation">
        <a className="brand" href="#top" aria-label="CMHK Agent home">
          <span className="brand-mark">CM</span>
          <span>CMHK Agent</span>
        </a>
        <div className="nav-actions">
          <a href="#assistant-guide">Assistant</a>
          <a href="#poster">Poster</a>
          <a href="#deliverables">Deliverables</a>
          <a className="icon-link" href={PORTFOLIO_URL} aria-label="Back to portfolio">
            <ArrowLeft size={18} />
          </a>
        </div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="kicker">CityUHK Business College &amp; China Mobile Hong Kong</p>
            <h1>CMHK Agent</h1>
            <p className="subtitle">
              AI-powered telecom plan recommendation prototype for customer service and frontline staff support.
            </p>
            <p className="hero-intro">
              A portfolio case study on designing an AI Agent for Hong Kong telecom plan recommendation, combining business research,
              user needs analysis, structured plan data, Dify workflow prototyping, Neo4j exploration, and black-box testing.
            </p>
            <div className="tag-row">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="button-row">
              <button className="primary-button" type="button" onClick={openDifyAssistant}>
                Try AI Assistant <ArrowRight size={18} />
              </button>
              <a className="secondary-button" href="#poster">
                <FileChartColumn size={18} /> View Project Poster
              </a>
              <a className="secondary-button" href="#deliverables">
                <FileChartColumn size={18} /> View Deliverables
              </a>
              <a className="secondary-button" href={PRESENTATION_URL}>
                <Presentation size={18} /> View Presentation
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="AI Agent telecom workflow visual">
            <div className="signal-panel">
              <div className="panel-header">
                <span className="status-dot"></span>
                <span>Recommendation Workflow</span>
              </div>
              <div className="chat-card user">
                <span>Customer</span>
                I need a lower monthly fee, enough data for streaming, and occasional Mainland travel.
              </div>
              <div className="intent-grid">
                <div><CircleDollarSign size={18} /> Budget</div>
                <div><Database size={18} /> Data usage</div>
                <div><Network size={18} /> Coverage</div>
              </div>
              <div className="chat-card agent">
                <span>AI Agent</span>
                Extracted needs, matched plan conditions, and generated a staff-reviewable recommendation.
              </div>
              <div className="confidence-bar">
                <span>Grounded recommendation</span>
                <strong>Human-in-the-loop</strong>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section eyebrow="01 / Overview" title="Project Overview">
        <div className="split">
          <p>
            As telecom plan options become more complex across data allowance, contract terms, monthly fees, promotional conditions,
            and coverage areas, customers often struggle to compare plans quickly. Frontline staff also need to translate customer needs
            into suitable options through highly experience-driven conversations.
          </p>
          <p>
            This project explored whether an AI Agent can assist both customers and CMHK store staff by collecting requirements,
            explaining plan differences, filtering relevant options, and improving service efficiency while preserving human judgment.
          </p>
        </div>
      </Section>

      <Section eyebrow="02 / Problem" title="Problem Statement" className="soft-band">
        <div className="problem-grid">
          {problemItems.map((item, index) => (
            <article className="problem-card" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="03 / Users" title="Target Users">
        <div className="use-case-grid">
          {targetUsers.map(({ icon: Icon, title, user, need, value }) => (
            <article className="use-card" key={title}>
              <div className="card-icon"><Icon size={24} /></div>
              <h3>{title}</h3>
              <dl>
                <dt>Target user</dt>
                <dd>{user}</dd>
                <dt>Core need</dt>
                <dd>{need}</dd>
                <dt>Agent value</dt>
                <dd>{value}</dd>
              </dl>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="04 / Discovery" title="Research and Discovery" className="soft-band">
        <div className="timeline">
          <article>
            <span>Internal tech leader interview</span>
            <p>
              We clarified management expectations beyond technical feasibility, including recommendation accuracy, user experience,
              business conversion, employee adoption, compliance risk, and customer trust.
            </p>
          </article>
          <article>
            <span>Frontline staff interviews</span>
            <p>
              Store service remained highly dependent on staff experience and face-to-face communication. Staff saw AI value in explaining
              data usage, summarizing customer needs, and searching plans faster.
            </p>
          </article>
          <article>
            <span>Positioning decision</span>
            <p>
              Because inaccurate recommendations could weaken trust, the project positioned the AI Agent as a staff-support tool rather
              than a fully automated sales replacement.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="05 / Solution" title="Solution Design">
        <div className="solution-grid">
          <article>
            <Database size={26} />
            <h3>Structured telecom plan data</h3>
            <p>Plan names, monthly fees, contract periods, data allowance, coverage areas, local data, Mainland & Macau data, and promotional conditions.</p>
          </article>
          <article>
            <BrainCircuit size={26} />
            <h3>Dify AI Agent workflow</h3>
            <p>Natural-language understanding, key condition extraction, plan retrieval, and recommendation explanation.</p>
          </article>
          <article>
            <SearchCheck size={26} />
            <h3>Testing and validation</h3>
            <p>Persona-based black-box tests to evaluate whether the Agent produces reasonable recommendations and handles uncertainty.</p>
          </article>
        </div>
        <div className="workflow-strip" aria-label="AI Agent workflow">
          {workflow.map((step, index) => (
            <React.Fragment key={step}>
              <div className="workflow-step">{step}</div>
              {index < workflow.length - 1 && <ArrowRight className="workflow-arrow" size={20} />}
            </React.Fragment>
          ))}
        </div>
      </Section>

      <Section eyebrow="06 / Assistant" title="Try the AI Assistant" className="assistant-section soft-band" id="assistant-guide">
        <p className="section-lead">
          The Dify workflow assistant is embedded as a chat bubble in the bottom-right corner. Visitors can use it to simulate telecom
          plan recommendation conversations and understand how the prototype gathers requirements before suggesting plan options.
        </p>
        <div className="assistant-guide">
          <article>
            <Bot size={26} />
            <h3>Open the chat bubble</h3>
            <p>Click the blue assistant button in the bottom-right corner of the page to start a conversation.</p>
          </article>
          <article>
            <MessageSquareText size={26} />
            <h3>Describe a customer scenario</h3>
            <p>Try inputs such as budget, monthly data needs, Mainland or Macau travel, student status, or contract preference.</p>
          </article>
          <article>
            <SearchCheck size={26} />
            <h3>Review the recommendation</h3>
            <p>Check whether the assistant extracts the right needs, explains its reasoning, and avoids unsupported claims.</p>
          </article>
        </div>
      </Section>

      <Section eyebrow="07 / Poster" title="Project Poster" className="poster-section" id="poster">
        <p className="section-lead">
          The final project poster summarizes the CMHK AI Agent project objective, data cleaning process, dialogue flow design,
          Neo4j graph database research, workflow architecture, and key impact takeaways.
        </p>
        <div className="poster-frame">
          <img
            src={projectPoster}
            alt="CMHK AI Agent Project poster showing project objective, data cleaning, dialogue flow design, Neo4j graph database research, workflow architecture, and impact takeaways."
          />
        </div>
      </Section>

      <Section eyebrow="08 / Neo4j" title="Neo4j Graph Database Exploration">
        <div className="graph-layout">
          <div>
            <p>
              We explored Neo4j as a proof of concept for representing telecom product knowledge. Key entities included PlanOffer,
              DataAllowance, DataCoverage, ContractFee, ContractPeriod, and RatePlan, connected through relationships such as
              HAS_DATA_ALLOWANCE, COVERED_IN, HAS_CONTRACT_FEE, and HAS_CONTRACT_PERIOD.
            </p>
            <p>
              The graph structure made product relationships easier to reason about, but natural-language-to-Cypher stability in Dify
              remained limited, with approximate accuracy around 80%. Neo4j was therefore kept as an independent technical exploration
              rather than fully integrated into the final recommendation flow.
            </p>
          </div>
          <div className="graph-card" aria-label="Simplified graph database diagram">
            <svg viewBox="0 0 520 360" role="img">
              <line x1="260" y1="173" x2="104" y2="86" />
              <line x1="260" y1="173" x2="406" y2="86" />
              <line x1="260" y1="173" x2="416" y2="260" />
              <line x1="260" y1="173" x2="114" y2="266" />
              <line x1="260" y1="173" x2="260" y2="310" />
              {graphEntities.map((node) => (
                <g key={node.label}>
                  <circle cx={node.x} cy={node.y} r="48" />
                  <text x={node.x} y={node.y}>{node.label}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </Section>

      <Section eyebrow="09 / Validation" title="Testing and Validation" className="soft-band">
        <div className="validation-grid">
          <article>
            <FlaskConical size={26} />
            <h3>Black-box testing method</h3>
            <p>
              We used OpenClaw-style automated testing thinking to simulate natural-language customer profiles and observe the Dify
              workflow response without relying on internal model details.
            </p>
          </article>
          <article>
            <Sparkles size={26} />
            <h3>Simulated personas</h3>
            <p>
              Budget-limited users, high-data users, frequent Hong Kong-Mainland travelers, and short-contract preference users were
              used as representative cases.
            </p>
          </article>
          <article>
            <ShieldCheck size={26} />
            <h3>Risk focus</h3>
            <p>
              Evaluation emphasized recommendation accuracy, requirement understanding, explanation clarity, uncertainty handling,
              and avoidance of unsupported claims.
            </p>
          </article>
        </div>
      </Section>

      <Section eyebrow="10 / Findings" title="Key Findings">
        <div className="finding-list">
          {findings.map((finding) => (
            <article key={finding}><CheckCircle2 size={18} /><p>{finding}</p></article>
          ))}
        </div>
      </Section>

      <Section eyebrow="11 / Deliverables" title="Project Deliverables" className="soft-band" id="deliverables">
        <div className="deliverable-grid">
          {deliverables.map(([title, text]) => (
            <article key={title}>
              <GitBranch size={20} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <footer>
        <a className="secondary-button" href={PORTFOLIO_URL}>
          <ArrowLeft size={18} /> Back to Portfolio
        </a>
        <p>CMHK Agent: AI-powered Telecom Plan Recommendation Prototype</p>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
