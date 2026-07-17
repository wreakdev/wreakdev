```go
type WreakDev struct {
        Name    string
        Stack   []string
        Focus   []string
        Sec     string
        Role    string
        Mission string
        Driver  string
        Env     string
}

var GithubUser = WreakDev{
        Name:      "WreakDev // Wreak1337",
        Stack:    []string{"Linux", "Docker", "Python", "Go"},
        Focus:    []string{"Infrastructure Pentesting", "CTF"},
        Sec:      "Offensive Security // TryHackMe",
        Role:     "Infrastructure Pentester // Developer",
        Mission:  "Building Backend & Automation Tools",
        Driver:   "Fedora Linux",
        Env:      "RPi 5 (8GB) // Debian // Hosting & Lab",
}
```
<br>

```go
type Links struct {
        PortFolio       string
        GitHub          string
        TryHackMe       string 
}

var Social = Link{
        PortFolio:  "https://wreakdev.vercel.app",
        TryHackMe:  "https://tryhackme.com/p/Wreak1337"
}
```