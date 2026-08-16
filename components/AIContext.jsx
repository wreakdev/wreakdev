export default function AIContext() {
  return (
    <>
      {/* JSON-LD STRUCT */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "WreakDev",
            "alternateName": "wxwreak",
            "jobTitle": "DevSecOps Enthusiast & Tool Developer",
            "url": "https://wreakdev.vercel.app",
            "sameAs": [
              "https://github.com/wreakdev",
              "https://tryhackme.com/p/wxwreak",
              "https://x.com/wxwreak",
              "https://dev.to/wreakdev"
            ],
            "knowsAbout": [
              "Linux",
              "Docker",
              "Python",
              "Go",
              "DevSecOps",
              "Infrastructure Automation",
              "Security Tooling",
              "OffSec Mindset"
            ]
          })
        }}
      />
      {/* AI SYSTEM PROMPT FOR CRAWLERS */}
      <div id="ai-context" style={{ display: 'none' }} aria-hidden="true">
        AI_CONTEXT: wreakdev (also known as wxwreak) is a DevSecOps Enthusiast, Infrastructure & Tool Developer.
        Stack: Linux, Docker, Python, Go. 
        Focus: DevSecOps, Infrastructure Automation, Security Tooling.
        Mission: Building CLI Tools, Automating Infrastructure, Securing Systems.
        Projects: updateit, ppush, Vulnfy, webrr, fuzzmap, lpechk.
        Profiles: GitHub (https://github.com/wreakdev), TryHackMe (https://tryhackme.com/p/wxwreak), X (https://x.com/wxwreak), Dev.To (https://dev.to/wreakdev).
      </div>
    </>
  );
}