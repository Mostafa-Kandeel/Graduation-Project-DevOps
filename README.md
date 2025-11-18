# LanWave IT Consulting Website

A modern and responsive web application for **LanWave IT Consulting – Egypt**, showcasing the company’s IT services, expertise, and contact information.  
This website is built as a **Single Page Application (SPA)** using React, offering smooth navigation and a clean professional UI.

🔗 **Live Preview:** https://lanwave-it-consultin-ogy3.bolt.host/
![LanWave Website Screenshot](https://github.com/Mostafa-Kandeel/Graduation-Project-DevOps/blob/main/Frondend/images/home-page.png)

---

## 🏢 About LanWave
**Founded in 2010, LanWave has been at the forefront of delivering cutting-edge IT solutions to businesses across the region. What started as a small team of passionate technologists has grown into a leading provider of comprehensive IT services.

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

- ⚛ **React 18.3.1** – Frontend Framework  
- ⚡ **Vite** – Fast Build Tool  
- 🎨 **Tailwind CSS** – Styling  
- 🛣 **React Router** – Routing  
- ☁️ **Bolt.host** – Deployment  


---

## 📦 Installation & Setup

Clone the repository:

```bash
git clone git@github.com:Mostafa-Kandeel/Graduation-Project-DevOps.git
cd Graduation-Project-DevOps
```
## Docker Deployment

This project can be containerized and deployed using Docker. Below are the commands to build, run, and manage the Docker container.

### Prerequisites
- Docker installed on your system
- Docker daemon running

### Build Docker Image

Build the Docker image with the tag `lanwave:v1`:

```bash
docker build -t lanwave:v1 .
```

### Run Docker Container

Run the container in detached mode, mapping port 8080 on the host to port 80 in the container:

```bash
docker run -d --name lan-web -p 8080:80 lanwave:v1
```

The website will be accessible at `http://localhost:8080`

### Access Container Shell

To access the container's shell for debugging or inspection:

```bash
docker exec -it lan-web sh
```

### Stop Container

Stop the running container:

```bash
docker container stop lan-web
```

### Remove Container

Remove the stopped container:

```bash
docker container rm lan-web
```

### Remove Docker Image

Remove the Docker image:

```bash
docker rmi lanwave:v1
```

### Complete Cleanup and Rebuild

To completely clean up and rebuild from scratch:

```bash
# Stop and remove container
docker container stop lan-web
docker container rm lan-web

# Remove image
docker rmi lanwave:v1

# Rebuild image
docker build -t lanwave:v1 .

# Run new container
docker run -d --name lan-web -p 8080:80 lanwave:v1
```
