// an array containing the stories data
const storiesData = [
    { 
        id: 'from-missions-to-empowerment',
        name: "Joseph",
        location: "Kisii, Kenya",
        profession: "Boda Boda Rider",
        image: require('../../data/images/events/kireita/ruth_1.jpg'), 
        title: "From Emissions to Empowerment: How a Boda Rider Became a Climate Hero", 
        summary: "When Joseph, a 29-year-old boda boda rider from Kisii, first heard about Gokijany, he was skeptical. “I thought climate change was only a government thing,” he says. But when fuel prices rose, he began looking for ways to save. A friend helped him download Gokijany, and that was the beginning of a new journey." ,
        content: `
            When Joseph, a 29-year-old boda boda rider from Kisii, first heard about Gokijany, he was skeptical. “I thought climate change was only a government thing,” he says. But when fuel prices rose, he began looking for ways to save. A friend helped him download Gokijany, and that was the beginning of a new journey.
            Through the app, Joseph began tracking his fuel usage and found that minor changes in his routes and idling times significantly reduced his carbon emissions. Soon, he started earning carbon credits — which he converted into airtime and small savings. “I never imagined I could earn by riding smarter,” he says. “Now I tell my fellow riders: don’t just hustle, hustle green.
        `
    },
    { 
        id: "farming-with-a-new-purpose",
        name: "Miriam",
        location: "Eldama Ravine, Kenya",
        profession: "Maize Farmer",
        image: require('../../data/images/slider-2.jpg'), 
        title: "Farming with a New Purpose: Miriam's Sustainable Turnaround", 
        summary: "Miriam, a 45-year-old maize farmer in Eldama Ravine, always cared about her land — but she never imagined she could fight climate change from her shamba. After joining a cooperative that partnered with Gokijany, she was introduced to carbon offset farming techniques: tree planting, biofertilizers, and soil carbon monitoring.",
        content: `
            Miriam, a 45-year-old maize farmer in Eldama Ravine, always cared about her land — but she never imagined she could fight climate change from her shamba. After joining a cooperative that partnered with Gokijany, she was introduced to carbon offset farming techniques: tree planting, biofertilizers, and soil carbon monitoring.
            Within 6 months, her land was not only more fertile, but she started earning carbon credits. “I used to burn crop waste — now I compost it. I plant trees. I use less fertilizer. Gokijany made me realize that small changes add up — for the planet and for my pocket.”
        `
    },
    { 
        id: 'green-tech-for-the-people',
        name: "Aisha Mohammed",
        location: "Nairobi, Kenya",
        profession: "University Student (Environmental Studies)",
        image: require('../../data/images/events/kireita/ruth_2.jpg'), 
        title: "Green Tech for the People: Aisha’s Climate Story", 
        summary: "Aisha is a 22-year-old student in Nairobi who wanted to make a difference but didn’t know where to start. “I kept hearing about carbon footprints and climate justice, but it all felt too big,” she says. When she came across Gokijany on Instagram, it was the first time she saw climate action in a local, practical context.",
        content: `
            Aisha is a 22-year-old student in Nairobi who wanted to make a difference but didn’t know where to start. “I kept hearing about carbon footprints and climate justice, but it all felt too big,” she says. When she came across Gokijany on Instagram, it was the first time she saw climate action in a local, practical context.
            Now, she offsets her daily commute, educates her campus peers, and invests in local green projects directly from her Gokijany wallet. “It’s not just about reducing carbon,” she says. “It’s about knowing that young people like me actually have tools to create real change.”
        `
    },
    { 
        id: 'turning-trash-into-triumph',
        name: "Peter",
        location: "Umoja, Nairobi, Kenya",
        profession: "Waste Collection Business Owner",
        image: require('../../data/images/events/kireita/kireita_3.jpg'), 
        title: "Turning Trash into Triumph: Peter’s Waste Management Win", 
        summary: "Peter runs a small waste collection business in Umoja, Nairobi. For years, he felt invisible — doing dirty work with little reward. That changed when he discovered Gokijany’s Carbon Wallet feature. By properly sorting recyclables and reducing landfill emissions, Peter’s business became eligible for carbon offset rewards.",
        content: `
            Peter runs a small waste collection business in Umoja, Nairobi. For years, he felt invisible — doing dirty work with little reward. That changed when he discovered Gokijany’s Carbon Wallet feature. By properly sorting recyclables and reducing landfill emissions, Peter’s business became eligible for carbon offset rewards.
            “Now, I don't just collect trash. I help reduce methane emissions,” he says. His income has increased, and his clients are proud to be part of a green cycle. “For once, waste is paying back — thanks to Gokijany.”
        `
    },
    { 
        id: "the-corporate-shift",
        name: "Janet",
        location: "Nairobi Kenya",
        profession: "Accountant / Office Administrator",
        image: require('../../data/images/slider-5.jpg'), 
        title: "The Corporate Shift: How Janet Made Her Office Go Green", 
        summary: "Janet works in a busy Nairobi accounting firm. After attending a sustainability workshop, she introduced Gokijany to her company’s leadership. Together, they started tracking the carbon impact of office activities — from travel to energy use.",
        content: `
            Janet works in a busy Nairobi accounting firm. After attending a sustainability workshop, she introduced Gokijany to her company’s leadership. Together, they started tracking the carbon impact of office activities — from travel to energy use.
            “It was eye-opening,” she recalls. “Simple actions like switching off lights and limiting printing made a big difference.” The firm now offsets its emissions monthly through Gokijany, and Janet leads their Green Office Team. “We’re not just crunching numbers anymore. We’re saving the planet too.”
        `
    },
    { 
        id: 'teaching-the-future',
        name: "Mr. Otieno",
        location: "Kisumu, Kenya",
        profession: "Primary School Teacher",
        image: require('../../data/images/slider-6.jpg'), 
        title: "Teaching the Future: Mr. Otieno’s Classroom Goes Green", 
        summary: "At a public primary school in Kisumu, Mr. Otieno wanted to teach more than just the syllabus — he wanted to teach sustainability. When he discovered Gokijany, he began using it as a learning tool. The students tracked the school’s electricity use and even planted trees whose carbon offset could be monitored in real time.",
        content: `
            At a public primary school in Kisumu, Mr. Otieno wanted to teach more than just the syllabus — he wanted to teach sustainability. When he discovered Gokijany, he began using it as a learning tool. The students tracked the school’s electricity use and even planted trees whose carbon offset could be monitored in real time.
            “The kids were amazed to see numbers showing how much carbon their trees were absorbing,” he says. “Gokijany made climate change something they could touch, feel, and impact. Now, they call themselves the Green Squad.”
        `
    },
    { 
        id: "empowering-women-empowering-the-earth",
        name: "Fatma",
        location: "Garissa, Kenya",
        profession: "Women's Cooperative Leader (Clean Energy Advocate",
        image: require('../../data/images/slider-6.jpg'), 
        title: "Empowering Women, Empowering the Earth: Fatma’s Solar Journey", 
        summary: "Fatma runs a women’s cooperative in Garissa focused on clean cooking and energy solutions. For years, they struggled to secure funding — until they joined a pilot program with Gokijany. The app tracked emissions reduced through their adoption of solar cookers, turning those savings into verified carbon credits.",
        content: `
        Fatma runs a women’s cooperative in Garissa focused on clean cooking and energy solutions. For years, they struggled to secure funding — until they joined a pilot program with Gokijany. The app tracked emissions reduced through their 
        adoption of solar cookers, turning those savings into verified carbon credits.
        With Gokijany, we finally had data — and that changed everything,” Fatma says. The group now earns passive income 
        and has gained recognition from local NGOs. “We used to just survive. Now we’re building something for the next generation.
        `
    },
    { 
        id: "coding-for-climate",
        name: "Brian",
        location: "Kampala, Uganda",
        profession: "Software Developer / Tech Contributor",
        image: require('../../data/images/slider-6.jpg'), 
        title: "Coding for Climate: Brian Builds Green Tech for the Masses", 
        summary: "Brian, a 23-year-old developer in Kampala, Uganda, stumbled upon Gokijany while researching carbon markets. Intrigued, he began contributing code to localize the platform for Ugandan users — translating dashboards and integrating regional partners.",
        content: `
            Brian, a 23-year-old developer in Kampala, Uganda, stumbled upon Gokijany while researching carbon markets. Intrigued, he began contributing code to localize the platform for Ugandan users — translating dashboards and integrating regional partners.
            Climate tech felt far away from African developers like me,” he shares. “But Gokijany changed that. It welcomed my skills and gave me purpose.” Today, Brian is part of Gokijany’s growing developer community, creating tools that help his peers take climate action through tech.
        `
    }
]

export default storiesData
