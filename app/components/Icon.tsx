import { Cassandra } from "@/public/assets/icons/Cassandra";
import { CursorAI } from "@/public/assets/icons/CursorAI";
import { Docker } from "@/public/assets/icons/Docker";
import { Elasticsearch } from "@/public/assets/icons/Elasticsearch";
import { Fastapi } from "@/public/assets/icons/Fastapi";
import { Flutter } from "@/public/assets/icons/Flutter";
import { Github } from "@/public/assets/icons/Github";
import { Gitlab } from "@/public/assets/icons/Gitlab";
import { Grafana } from "@/public/assets/icons/Grafana";
import { IntellijIdea } from "@/public/assets/icons/IntellijIdea";
import { Jira } from "@/public/assets/icons/Jira";
import { Kubernetes } from "@/public/assets/icons/Kubernetes";
import { Mysql } from "@/public/assets/icons/Mysql";
import { Nodejs } from "@/public/assets/icons/Nodejs";
import { Postgresql } from "@/public/assets/icons/Postgresql";
import { Prometheus } from "@/public/assets/icons/Prometheus";
import { React } from "@/public/assets/icons/React";
import { Redis } from "@/public/assets/icons/Redis";
import { Spring } from "@/public/assets/icons/Spring";
import { Tailwindcss } from "@/public/assets/icons/Tailwindcss";
import { Typescript } from "@/public/assets/icons/Typescript";
import { VisualStudioCode } from "@/public/assets/icons/VisualStudioCode";
import { Vue } from "@/public/assets/icons/Vue";
import { Webstorm } from "@/public/assets/icons/Webstorm";
import { JSX, SVGProps } from "react";

export const IconMap: Record<
  string,
  (props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
  React: React,
  "Vue.js": Vue,
  "Tailwind CSS": Tailwindcss,
  TypeScript: Typescript,
  "Node.js": Nodejs,
  "Spring Boot": Spring,
  FastAPI: Fastapi,
  Flutter: Flutter,
  "React Native": React,
  PostgreSQL: Postgresql,
  Redis: Redis,
  Elasticsearch: Elasticsearch,
  Cassandra: Cassandra,
  Kubernetes: Kubernetes,
  Docker: Docker,
  Prometheus: Prometheus,
  Grafana: Grafana,
  GitLab: Gitlab,
  "CursorAI": CursorAI,
  "IntelliJ IDEA": IntellijIdea,
  Webstorm: Webstorm,
  Jira: Jira,
  "GitHub": Github,
};
