// Centralized portfolio data — edit this file to update content across all pages.

export const personal = {
	name: "Fares Elsadek",
	title: "Backend Software Engineer",
	location: "Cairo, Egypt",
	email: "fares7elsadek@gmail.com",
	phone: "+201023261885",
	linkedin: "https://linkedin.com/in/fares-elsadek",
	github: "https://github.com/fares7elsadek",
	medium: "https://medium.com/@fares7elsadek",
	summary:
		"Backend Software Engineer focused on building scalable APIs, distributed systems, and cloud-native applications. Experienced in designing observable, reliable backend services with a strong foundation in security and DevOps.",
};

export interface Experience {
	company: string;
	title: string;
	location: string;
	dates: string;
	points: string[];
}

export const experience: Experience[] = [
	{
		company: "Health Insights Group",
		title: "Software Engineer",
		location: "Cairo, Egypt",
		dates: "December 2025 – Present",
		points: [
			"Worked on backend modules for a healthcare platform, contributing to feature development and maintenance.",
			"Helped redesign the real-time notification legacy system to support higher connection counts using SignalR and a Redis backplane.",
			"Participated in architecture discussions, code reviews, and technical planning.",
			"Collaborated with clinical and product teams to translate requirements into production-ready features.",
			"Supported production systems by resolving bugs, improving performance, and contributing to roadmap planning.",
		],
	},
	{
		company: "EJADA Systems",
		title: "Software Engineer Intern",
		location: "Cairo, Egypt",
		dates: "July 2024 – September 2024",
		points: [
			"Developed application backend features and maintained CRM integrations.",
			"Designed SQL Server queries for CRM and reporting workflows.",
			"Automated business processes using JavaScript.",
			"Built internal dashboards for data insights.",
			"Implemented role-based security controls.",
		],
	},
	{
		company: "HackerOne",
		title: "Web Security Researcher",
		location: "Remote",
		dates: "January 2023 – April 2024",
		points: [
			"Identified and responsibly disclosed vulnerabilities for programs including U.S. DoD and AT&T.",
			"Received Hall of Fame recognition across multiple programs.",
			"Applied security knowledge to API design, authentication, and architecture decisions.",
		],
	},
	{
		company: "ITI",
		title: "Cyber Security Intern",
		location: "Cairo, Egypt",
		dates: "August 2022 – September 2022",
		points: [
			"Completed 120-hour cyber security training.",
			"Studied computer networking fundamentals, Windows Server Administration, RedHat System Administration, and firewall technologies.",
		],
	},
];

export interface Project {
	name: string;
	description: string;
	github: string;
	tech: string[];
	highlights: string[];
	featured: boolean;
}

export const projects: Project[] = [
	{
		name: "DevTalk",
		description:
			"A developer social platform with posts, comments, voting, bookmarks, and categorized feeds.",
		github: "https://github.com/fares7elsadek/DevTalk-Web-API",
		tech: [
			".NET 9",
			"SignalR",
			"Redis",
			"Elasticsearch",
			"Kibana",
			"OpenTelemetry",
			"Prometheus",
			"Grafana",
			"Azure",
			"GitHub Actions",
		],
		highlights: [
			"Built using Clean Architecture and CQRS via the Mediator library.",
			"Implemented real-time notifications using SignalR with an in-memory message queue for asynchronous processing.",
			"Implemented end-to-end observability using OpenTelemetry, collecting distributed traces and metrics, exposing them to Prometheus, and visualizing request throughput, latency, and error rates through Grafana dashboards.",
			"Used Redis caching with event-driven cache invalidation to keep data fresh and responsive.",
			"Integrated Serilog logging with Elasticsearch and Kibana for log analytics and diagnostics.",
			"Used cursor-based pagination for efficient large dataset retrieval over offset pagination.",
			"Deployed to Azure using GitHub Actions CI/CD pipelines.",
		],
		featured: true,
	},
	{
		name: "Limitry",
		description:
			"A Redis-backed distributed rate limiter in Go supporting Token Bucket and Sliding Window Counter algorithms.",
		github: "https://github.com/fares7elsadek/Limitry",
		tech: [
			"Go",
			"Redis",
			"Lua",
			"OpenTelemetry",
			"Prometheus",
			"Grafana",
			"k6",
			"Kubernetes",
			"Kustomize",
			"Docker",
		],
		highlights: [
			"Implemented Token Bucket and Sliding Window Counter algorithms via atomic Lua scripts.",
			"Designed dual-mode architecture: transparent reverse proxy and standalone check API, allowing drop-in integration with any stack.",
			"Implemented per-route configuration with fail-open/closed resilience policy for Redis outages.",
			"Instrumented full observability pipeline using OpenTelemetry for distributed tracing, Prometheus for metrics, and Grafana for dashboards.",
			"Shipped production Kubernetes manifests using Kustomize to deploy the full stack (Limitry, Redis, OTel Collector, Jaeger, Prometheus, Grafana) into a dedicated namespace with a single command.",
			"Load-tested with k6 across smoke, load, and spike scenarios (180K+ total requests, p95 latency under 6ms for Check API and 35ms for Proxy mode, 0% error rate at 100 concurrent users).",
		],
		featured: true,
	},
	{
		name: "SyncSpace",
		description:
			"A Discord-style collaboration platform with messaging, notifications, video rooms, and real-time presence.",
		github: "https://github.com/fares7elsadek/SyncSpace-SpringBoot",
		tech: [
			"Spring Boot",
			"Angular",
			"WebSocket/STOMP",
			"PostgreSQL",
			"Redis",
			"Keycloak",
			"Docker",
			"AWS EC2",
		],
		highlights: [
			"Designed as a 6-module modular monolith with clean architecture.",
			"Implemented OAuth2/OIDC authentication with Keycloak and JWT.",
			"Applied CQRS read/write separation and Redis caching.",
			"Used PostgreSQL schema-per-module design with Flyway migrations and indexing.",
			"Deployed with Docker on AWS EC2 behind Nginx with SSL.",
			"Built CI/CD pipelines using GitHub Actions.",
			"Added optimistic locking, event sourcing, attachment handling, and invite systems.",
			"Wrote unit tests using JUnit 5 and Mockito.",
		],
		featured: true,
	},
	{
		name: "Platform-Command",
		description: "Two communicating microservices with synchronous and asynchronous messaging.",
		github: "https://github.com/fares7elsadek/.NET-Microservices-with-REST-gRPC-RabbitMQ",
		tech: [".NET Core", "RabbitMQ", "REST", "gRPC", "Docker", "Kubernetes"],
		highlights: [
			"Used synchronous REST and asynchronous RabbitMQ communication.",
			"Containerized with Docker and deployed on Kubernetes with ingress routing.",
		],
		featured: false,
	},
	{
		name: "ClickMart",
		description: "A complete e-commerce application with product management, cart, and payments.",
		github: "https://github.com/fares7elsadek/ClickMart",
		tech: ["ASP.NET MVC", "SQL Server", "Stripe", "Bootstrap"],
		highlights: [
			"Added product management, cart, order processing, Stripe payments, and email notifications.",
			"Used Repository Pattern and Unit of Work.",
			"Applied N-tier architecture.",
		],
		featured: false,
	},
	{
		name: "QuesGenie",
		description: "Fine-tuned T5 models for automatic question generation.",
		github: "https://github.com/fares7elsadek/QuesGenie",
		tech: ["PyTorch", "Hugging Face Transformers", "T5"],
		highlights: [
			"Fine-tuned T5-small and T5-base models for question generation.",
			"Generated MCQs, fill-in-the-blank, and matching questions.",
		],
		featured: false,
	},
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export interface SkillCategory {
	name: string;
	items: string[];
}

export const skills: SkillCategory[] = [
	{
		name: "Languages",
		items: ["C#", "Java", "Go", "Python", "JavaScript", "TypeScript", "C++"],
	},
	{
		name: "Backend & Frameworks",
		items: [".NET Core", "Spring Boot", "SignalR", "Angular"],
	},
	{
		name: "Databases & Search",
		items: ["SQL Server", "PostgreSQL", "Redis", "Elasticsearch"],
	},
	{
		name: "Architecture",
		items: [
			"Clean Architecture",
			"CQRS",
			"Microservices",
			"Modular Monolith",
			"Repository Pattern",
			"Event-Driven Design",
		],
	},
	{
		name: "DevOps & Cloud",
		items: ["Docker", "Kubernetes", "AWS", "Azure", "Nginx", "GitHub Actions", "CI/CD"],
	},
	{
		name: "Security",
		items: ["OAuth2", "JWT", "Keycloak", "Secure Coding Practices"],
	},
];

export const education = {
	degree: "Bachelor of Computer Science",
	university: "Ain Shams University",
	location: "Cairo, Egypt",
	dates: "September 2021 – May 2025",
};

export interface Certification {
	name: string;
	issuer: string;
}

export const certifications: Certification[] = [
	{ name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
	{ name: "Certified AppSec Practitioner (CAP)", issuer: "SecOps Group" },
	{ name: "Object Oriented Programming in Java", issuer: "UC San Diego (Coursera)" },
	{ name: "Cyber Security Training — 120 hours", issuer: "ITI" },
];

export interface Volunteering {
	org: string;
	role: string;
}

export const volunteering: Volunteering[] = [
	{ org: "Cyberus ASU Committee", role: "Web Security Instructor" },
	{ org: "ACM ASCIS", role: "Problem Solving Committee" },
];
