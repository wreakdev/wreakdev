```go
type wxwreak struct {
        Name       string
        Stack      []string
        Focus      []string
        Sec        []string
        Role       []string
        Mission    string
        Driver     string
        HomeLab    string
        Portfolio  string
        TryHackMe  string
        Twitter    string
        DevTo      string
}

var GithubUser = wxwreak{
        Name:       "wxwreak",
        Stack:      []string{"Linux", "Docker", "Python", "Go"},
        Focus:      []string{"DevSecOps", "Infrastructure Automation", "Security Tooling"},
        Sec:        []string{"OffSec Mindset", "Web Recon & Fuzzing", "TryHackMe"},
        Role:       []string{"DevSecOps Enthusiast", "Infrastructure & Tool Developer"},
        Mission:    "Building CLI Tools // Automating Infrastructure // Securing Systems",
        Driver:     "Fedora Linux",
        HomeLab:    "Raspberry Pi",
        Portfolio:  "https://wxwreak.vercel.app",
        TryHackMe:  "https://tryhackme.com/p/wxwreak",
        Twitter:    "https://x.com/wxwreak",
        DevTo:      "https://dev.to/wxwreak"
}
```