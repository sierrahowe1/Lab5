export const resumeData = {
    hero: {
        name: "Sierra Howe",
        title: "Portfolio",
        short_bio: " ",
        linkedIn: " ",
        github: "https://github.com/sierrahowe1"
    },
    skills: {
        frontend: ["React", "HTML", "CSS", "JavaScript", "TalwindCSS"],
        backend: ["Java", "C", "C#", "Python", "Postgres", "MySQL", "Express", "ASP.NET" ],
        tools: ["GitHub", "Bruno", "VSCode", "JUnit", "Microsoft SQL Server" ]
    },
    projects: [
        {
          id: 1,
          name: "Bloggster - Blog Management Site", 
          description: "Worked with two collaborators to create a website to manage blogs. Users are able to register or login depending on their account status and “Bloggster” with authenticate them using email verification. After the user is verified, they are able to create new blogs for their own account and delete them, view blogs by other users, like and comment on those blogs, change their password and username, and edit their profile for public viewership.",
          technologies: ["React", "Restful API", "Python", "FLASK", "MySQL"],
          link: "https://github.com/shotcaller/cs3103Project"
        },

        {
            id: 2,
            name: "Student Grade Management System",
            description: "Collaborated with another student to create a system that simplifies the orianization of student data and the computation of grades and GPA. The intended purpose of the system is to let users store and update student's data, store student records, visualize the student's GPA performance using ASCII bar charts, and import or export student information through CSV files all while using linked lists for proper data managemet. C was the language used for this project.",
            technologies: ["C", "VSCode", "GitHub"],
            link: "https://github.com/sierrahowe1/CS2263_Project"
        }
    ],

    experience: [
        {
            id: 1,
            organization: "CGI",
            role: "Developer",
            duration: "May 2025 - August 2025",
            description: "Contributed to the development and maintenance of an ASP.NET web application in an Agile, team-based environment, Implemented and updated frontend features using HTML and CSS and worked with SQL to support application data requirements, Worked on assigned request items and tickets, implementing enhancements, fixes, and updates in alignment with client and project requirements, Collaborated with team members to design and deliver efficient solutions while meeting sprint goals and deadlines, Expanded technical knowledge though hands-on development, independent research, and formal training."
        },

        {
            id: 2,
            organization: "CGI",
            role: "Technology Consultant",
            duration: "September 2024 - December 2024",
            description: "Worked with the Endpoint Services team to deliver technical support for device management, softwaee troubleshooting, and Microsoft Intune-related challenges, Managed daily IT tasks, ensuring efficient resolution and effective client communication, Grew a deeper technical understanding of Windows and other operating systems through firsthand experience and training, Facilitated productive client interactions, ensuring issues were resolved effeciently and professionally."
        },

        {
            id: 3,
            organization: "UNB Integrated Technology Services",
            role: "Student Consultant",
            duration: "September 2023 - December 2023",
            description: "Reviewed, analyzed, and resolved IT issues of all types, Provided in-person IT support as well as managed support requests via phone calls and through an online ticketing system, Collaborated with team members to acheive shared goals and investigated recurring problems to implement long-term solutions, Worked with various operating systems such as Windows, MacOS, Linux, iOS, and Android"
        }

    ],

    education: [
        {
            id: 1,
            insitution: "University of New Brunswick",
            degree: "Bachelor of Computer Science",
            duration: "May 2023 - present",
        },

        {
            id: 2,
            institution: "Leo Hayes High School",
            degree: "High School Diploma",
            duration: "September 2018 - June 2022"
        }
    ],

    contact: {
        email: "sierra.howe@unb.ca"
    }

};