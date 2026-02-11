import Projects from "./projects";
import Layout from "@/components/layout/layout";
import { githubOwner } from "@/utility/constants/app-data";

export default function Page() {
  return (
    <Layout>
      <Projects githubOwner={githubOwner}></Projects>
    </Layout>
  );
}
