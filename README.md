```go
type WreakDev struct {
        Name    string
        Stack   []string
        Focus   []string
        Sec     []string
        Role    []string
        Mission string
        Driver  string
        HomeLab string
}

type Links struct {
        portfolio  string
        TryHackMe  string 
}

var GithubUser = WreakDev{
        Name:      "wreakdev // wxwreak",
        Stack:    []string{"Linux", "Docker", "Python", "Go"},
        Focus:    []string{"Infrastructure Pentesting", "CTF"},
        Sec:      []string{"Offensive Security", "TryHackMe"},
        Role:     []string{"Infrastructure Pentester", "Developer"},
        Mission:  "Building Backend // Automation Tools",
        Driver:   "Fedora Linux",
        HomeLab:  "Raspberry Pi",
}

var Social = Link{
        portfolio:  "https://wreakdev.vercel.app",
        TryHackMe:  "https://tryhackme.com/p/wxwreak"
}

```
