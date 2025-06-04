import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown, Mail, Linkedin, Download, Calendar,
  MapPin, Code, Database, Cloud, Settings, Moon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Pavan_Resume.pdf";
    link.download = "Venkat_Pavan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "University of Missouri",
      period: "Jan 2025 – Present",
      location: "Missouri, USA",
      highlights: [
        "Developed scalable micro-service applications on AWS using Spring Boot, reducing operational costs by 30%",
        "Implemented React.js SPAs with 25% improved load times through Webpack and Babel optimization",
        "Maintained Apache Kafka clusters with 99.9% uptime across 50 broker nodes",
        "Configured CI/CD pipelines reducing release cycles by 60%"
      ]
    },
    {
      title: "Graduate Assistant",
      company: "University of Missouri",
      period: "Jan 2024 – Dec 2024",
      location: "Missouri, USA",
      highlights: [
        "Built REST APIs with Spring Boot achieving 40% lower latency under load",
        "Engineered React.js/Node.js frontend interfaces with responsive layouts",
        "Optimized PostgreSQL/MongoDB schemas increasing query performance by 35%",
        "Configured Spring Cloud Gateway for intelligent routing and load balancing"
      ]
    },
    {
      title: "Systems Engineer",
      company: "Infosys",
      period: "Mar 2021 – Dec 2022",
      location: "Hyderabad, India",
      highlights: [
        "Designed scalable backend systems with Spring Boot, improving response efficiency by 30%",
        "Delivered reusable React.js components reducing development time by 25%",
        "Integrated Kafka/RabbitMQ achieving 99.95% event success rate",
        "Automated CI/CD deployments with Jenkins for rapid releases"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "C", "C++", "C#", "JavaScript", "TypeScript"],
    "Backend Technologies": ["Spring Boot", "Spring MVC", "Spring Security", "Spring Cloud", "Hibernate"],
    "Web & API Development": ["ReactJS", "Angular", "Node.js", "RESTful APIs", "Microservices"],
    "Database": ["MySQL", "MongoDB", "PostgreSQL", "GCP Cloud Spanner"],
    "Cloud & DevOps": ["AWS", "GCP", "Docker", "Jenkins", "Kubernetes"],
    "Testing & Tools": ["JUnit", "Postman", "Git", "Maven", "Agile/Scrum"]
  };

  const education = [
    {
      degree: "MS in Computer Science",
      school: "University of Missouri",
      period: "Jan 2023 - Dec 2024"
    },
    {
      degree: "Bachelor's Degree",
      school: "Anil Neerukonda Institute of Technology and Sciences",
      period: "Aug 2016 - Sept 2020"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:bg-gradient-to-br dark:from-gray-100 dark:via-blue-100 dark:to-gray-100">
      {/* Navbar */}
      <nav className="w-full bg-transparent py-6 px-8 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="text-2xl font-bold">
          <a href="#home" className="text-purple-700 dark:text-purple-700">Pavan</a>
        </div>
        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          <a href="#about" className="text-gray-200 hover:text-purple-400 font-medium transition">About</a>
          <a href="#experience" className="text-gray-200 hover:text-purple-400 font-medium transition">Experience</a>
          <a href="#skills" className="text-gray-200 hover:text-purple-400 font-medium transition">Skills</a>
          <a href="#projects" className="text-gray-200 hover:text-purple-400 font-medium transition">Projects</a>
          <a href="#education" className="text-gray-200 hover:text-purple-400 font-medium transition">Education</a>
          <a href="#contact" className="text-gray-200 hover:text-purple-400 font-medium transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">VP</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Venkat Pavan <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Poolla</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Full-Stack Java Developer specializing in microservices, Spring Boot, and cloud technologies
          </motion.p>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-white h-8 w-8" />
        </motion.div>
      </section>

      {/* Professional Summary */}
      <section id="about" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Professional Summary</h2>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Full-stack Java developer with 3+ years of experience delivering secure, 
                  low-latency microservice platforms in high-throughput environments. Proficient in Core Java 8-17, 
                  Spring Boot, AWS, Terraform, Docker/Kubernetes, Kafka, and CI/CD automation. Adept at end-to-end SDLC—from 
                  design and coding to production support—while championing observability, resiliency, and inclusive team culture.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle className="text-2xl text-white mb-2">{exp.title}</CardTitle>
                          <CardDescription className="text-blue-400 text-lg font-semibold">{exp.company}</CardDescription>
                        </div>
                        <div className="mt-2 md:mt-0 text-right">
                          <div className="flex items-center text-gray-300 mb-1">
                            <Calendar className="h-4 w-4 mr-2" />
                            {exp.period}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <MapPin className="h-4 w-4 mr-2" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start text-gray-300">
                            <span className="text-blue-400 mr-3 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section id="skills" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Technical Skills</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skills).map(([category, skillList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full hover:bg-white/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        {category === "Programming Languages" && <Code className="mr-2 h-5 w-5 text-blue-400" />}
                        {category === "Database" && <Database className="mr-2 h-5 w-5 text-blue-400" />}
                        {category === "Cloud & DevOps" && <Cloud className="mr-2 h-5 w-5 text-blue-400" />}
                        {!["Programming Languages", "Database", "Cloud & DevOps"].includes(category) && <Settings className="mr-2 h-5 w-5 text-blue-400" />}
                        {category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, i) => (
                          <Badge key={i} variant="secondary" className="bg-blue-600/30 text-blue-200 hover:bg-blue-600/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Education</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-blue-400 text-lg">{edu.school}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {/* Project 1 */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Smart Task Manager</CardTitle>
                  <CardDescription className="text-blue-400 text-lg">
                    A full-stack productivity app for managing daily tasks and deadlines.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Built with React, Spring Boot, and MongoDB. Features real-time collaboration and notifications.
                  </p>
                  <a
                    href="https://github.com/your-github-link-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub Repository
                  </a>
                </CardContent>
              </Card>
              {/* Project 2 */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Cloud Expense Tracker</CardTitle>
                  <CardDescription className="text-blue-400 text-lg">
                    Track and visualize expenses with cloud sync and analytics.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Developed using React, AWS Lambda, and DynamoDB. Includes charts and export features.
                  </p>
                  <a
                    href="https://github.com/your-github-link-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub Repository
                  </a>
                </CardContent>
              </Card>
              {/* Project 3 */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Random Portfolio Project</CardTitle>
                  <CardDescription className="text-blue-400 text-lg">
                    A sample project description goes here for demonstration.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    This project showcases integration of various APIs and modern UI/UX practices.
                  </p>
                  <a
                    href="https://github.com/your-github-link-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub Repository
                  </a>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
            <p className="text-xl text-gray-300 mb-12">
              Ready to discuss opportunities in full-stack development and microservices architecture
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white hover:text-black px-8 py-4"
              >
                <a href="mailto:pavanpv02@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white hover:text-black px-8 py-4"
              >
                <a
                  href="https://www.linkedin.com/in/pavan-poolla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn Profile
                </a>
              </Button>
              <Button
                onClick={handleDownload}
                size="lg"
                variant="outline"
                className="border-white text-white bg-white/10 hover:bg-white hover:text-black px-8 py-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

