const socialLinks = [
    {
      href: "https://www.linkedin.com/in/mohamedlaaguili2001/",
      className: "linkedin shadow",
      iconClass: "bi-linkedin",
      target: "_blank",
    },
    {
      href: "https://www.github.com/MOHAMED-LAAGUILI",
      className: "github shadow",
      iconClass: "bi-github",
      target: "_blank",
    },
    {
      href: "https://discordapp.com/users/1316675038598139936",
      className: "discord shadow",
      iconClass: "bi-discord",
      target: "_blank",
    },
  ],
  renderSocialLinks = (a, s) => {
    const e = document.getElementById(s);
    a.forEach(({ href: a, className: s, iconClass: i, target: n }) => {
      const t = document.createElement("a");
      (t.href = a), (t.className = s), n && (t.target = n);
      const c = document.createElement("i");
      (c.className = i), t.appendChild(c), e.appendChild(t);
    });
  };
renderSocialLinks(socialLinks, "social-links-container");
