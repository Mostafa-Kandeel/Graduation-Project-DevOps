# LanWave IT Consulting Website

A modern and responsive web application for **LanWave IT Consulting – Egypt**, showcasing the company’s IT services, expertise, and contact information.  

🔗 **Live Preview:** http://35.170.118.197/
![LanWave Website Screenshot](https://github.com/Mostafa-Kandeel/Graduation-Project-DevOps/blob/main/Frondend/images/home-page.png)

---

## 🏢 About LanWave
**Founded in 2025, LanWave has been at the forefront of delivering cutting-edge IT solutions to businesses across the region. What started as a small team of passionate technologists has grown into a leading provider of comprehensive IT services.

We have successfully partnered with over 500 organizations, helping them navigate the complexities of modern technology. Our commitment to excellence and innovation has earned us a reputation as a trusted advisor in the IT industry.

**Today, we continue to push boundaries and set new standards in IT service delivery, maintaining a 99.9% uptime guarantee and delivering solutions that drive real business value for our clients.**
---

## 👨‍💻 Our Expertise

Our team consists of highly skilled professionals in areas such as:

- **Network Engineering** – Designing and implementing secure network infrastructures  
- **Cloud & DevOps** – Cloud migration, automation, CI/CD, and modern DevOps practices  
- **Cybersecurity** – Threat protection, security assessments, and advanced security solutions  
- **Managed IT Services** – Proactive IT management and monitoring  
- **IT Support & Operations** – Reliable 24/7 support and operational excellence  
- **Software & Web Solutions** – Custom software and web application development  

---
## ✔ Functional Requirements
- The website must display company information, services, and contact details.
- Users should be able to navigate between sections smoothly without page reloads (SPA behavior).
- The Services section must show detailed descriptions of offered IT solutions.
- The Contact section must allow users to send inquiries via a form.
- The website must be fully responsive across desktop, tablet, and mobile devices.
- Pages/components should load quickly using Vite’s optimized build.

---
## ✔ Non-Functional Requirements
- **Performance:** Pages should load in under 2 seconds on standard networks.
- **Usability:** Simple, clean, and intuitive UI designed for non-technical users.
- **Reliability:** Website should maintain high uptime via Bolt.host hosting.
- **Security:** All connections served over HTTPS.
- **Scalability:** Codebase allows adding more pages and services easily.
- **Maintainability:** React components structured for easy updates.
- **Compatibility:** Website must run on modern browsers (Chrome, Edge, Firefox, Safari).
- **SEO:** Proper metadata and fast performance for better search visibility.


---

## 🌟 Our Culture

At LanWave, we foster a culture of:

- Innovation  
- Continuous learning  
- Professional growth  
- Collaboration  

We empower ambitious technical and operational professionals to build impactful and rewarding careers — shaping the future of IT in Egypt and beyond.

---
## 🖥️ Technology Stack
This project demonstrates a complete CI/CD pipeline for deploying a modern React application on AWS using Terraform, Docker, Ansible, and GitHub Actions.
---
Frontend
  ```bash
          ⚛ React 18.3.1 – Frontend framework
          ⚡ Vite – Fast build tool
          🎨 Tailwind CSS – Utility-first CSS framework
          🛣 React Router – Client-side routing
  ```
Infrastructure & DevOps
  ```bash
          ☁️ Amazon Web Services (AWS) – Cloud provider
          🏗 Terraform – Infrastructure as Code (IaC)
          🐳 Docker – Containerization
          ⚙️ Ansible – Configuration management
          🌐 Nginx – Reverse proxy & web server
   ```
Version Control & CI/CD
  ```bash
          🧾 Git & GitHub – Source control
          🤖 GitHub Actions – CI/CD automation
  ```
---
## 📦 Installation & Setup

Clone the repository:

```bash
git clone git@github.com:Mostafa-Kandeel/Graduation-Project-DevOps.git
cd Graduation-Project-DevOps
```
```bash
Developer → Frontend → Git → GitHub

GitHub
 ├─ CI (GitHub Actions)
 │    └─ Docker Build
 │    └─ Push Image → ECR
 │
 └─ CD (GitHub Actions)
      └─ Ansible
      └─ Deploy → EC2
            └─ Run App Container

Terraform → AWS (Create Infra: EC2, ECR)
```
## System Design
Link : https://app.eraser.io/workspace/AVft6U7QdEAplbkHWcrI?origin=share
![System Design Screenshot]()


