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

var GithubUser = WreakDev{
        Name:      "WreakDev // Wreak1337",
        Stack:    []string{"Linux", "Docker", "Python", "Go"},
        Focus:    []string{"Infrastructure Pentesting", "CTF"},
        Sec:      []string{"Offensive Security", "TryHackMe"}
        Role:     []string{"Infrastructure Pentester", "Developer"},
        Mission:  "Building Backend // Automation Tools",
        Driver:   "Fedora Linux",
        HomeLab:  "RPi 5 (8GB)",
}
```

---

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
