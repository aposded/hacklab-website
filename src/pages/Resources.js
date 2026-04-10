import React from 'react'
import { Link } from 'react-router-dom'
import Heading from '../components/Text/Heading'
import Subheading from '../components/Text/Subheading'
import Text from '../components/Text/Text'

export default function Resources() {
    return (
        <div className="mx-auto max-w-4xl px-4 pb-16 text-justify">
            <div className="flex items-center justify-between flex-wrap gap-4 py-8">
                <Heading>Resources</Heading>
                <Link to="/challenge" className="text-primary hover:underline text-lg">← Back to Challenge</Link>
            </div>

            <div className="mb-8 p-4 rounded-lg bg-gray-800/50">
                <Subheading className="mb-2">Main resource hub</Subheading>
                <a href="https://www.startupschool.org/?utm_campaign=ycdc_header&utm_source=yc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                    https://www.startupschool.org/
                </a>
            </div>

            {/* Module 1 */}
            <section className="mb-12">
                <Subheading className="mb-2">1 – What is a Startup, Team & Entrepreneurial Mindset? (1h 15 min)</Subheading>
                <Text className="mb-4">In this module, you'll explore what makes a startup different from a traditional company, how to increase your chances of success, and how to build and manage strong co-founder relationships.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">Startup Hiring 101</span> — Catheryn Li built the YC co-founder matching platform. This discussion with YC Visiting Partner Divya Bhat covers the importance of having a co-founder, how to get and vet one, and how to build a successful working relationship with your co-founder.
                        <br /><a href="https://startuphiring101.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to succeed with a startup? (16 min)</span> — Sam Altman, CEO of OpenAI, shares his thoughts on how you can succeed with a startup.
                        <br /><a href="https://www.youtube.com/watch?v=0lJKucu6HJc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sam Altman - How to Succeed with a Startup</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to Launch Your Startup? (21 min)</span> — Kat Mañalac is the head of YC's Outreach team and advises early stage founders on their launches during the YC batch. She shares the multitude of ways to launch a product and how to get attention for them.
                        <br /><a href="https://www.youtube.com/watch?v=u36A-YTxiOw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Best Way To Launch Your Startup | Startup School</a>
                    </li>
                    <li>
                        <span className="font-semibold">What we know about startups (6 min)</span> — A startup differs in significant ways from a big company. This video by Steve Blank helps you understand how a startup is different and outlines different kinds of startups.
                        <br /><a href="https://www.youtube.com/watch?v=FCiHWQlrlvY" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Startups: What We Know About Startups</a>
                    </li>
                    <li>
                        <span className="font-semibold">Keys To Successful Co-Founder Relationships (31 min)</span> — Catheryn Li and Divya Bhat on co-founder matching and building successful working relationships.
                        <br /><a href="https://youtu.be/A4SLDQDXdp0?si=BUKDQmXpkhZO34rK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Watch on YouTube</a>
                    </li>
                </ul>
            </section>

            {/* Module 2 */}
            <section className="mb-12">
                <Subheading className="mb-2">2 – Identifying a Real Problem (47 min)</Subheading>
                <Text className="mb-4">In this module, you'll learn how to adopt a problem-first mindset, define clear problem statements, and recognize early signs that distinguish strong problems from weak ones. You'll also begin identifying customer personas and understanding their pain points.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">The Importance of Validating Problems Before Building the MVP</span> — Before building a solution, founders must ensure the problem is real. Learn how to validate by engaging directly with potential users and testing assumptions.
                        <br /><a href="https://medium.com/%40jjv/the-importance-of-validating-problems-before-building-the-mvp-0b9788c74906" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to Get and Evaluate Startup Ideas (30 min)</span> — YC Group Partner Jared Friedman shares a framework for how to get and evaluate startup ideas, with examples of YC companies.
                        <br /><a href="https://www.youtube.com/watch?v=Th8JoIan4dg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">How to Get and Evaluate Startup Ideas | Startup School</a>
                    </li>
                    <li>
                        <span className="font-semibold">The Surprising Secret Behind Successful Product Launches: Mastering Problem Validation</span> — Identify target users, conduct customer interviews, analyze insights, and validate whether the pain point is significant enough.
                        <br /><a href="https://prelaunch.com/blog/problem-validation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                    <li>
                        <span className="font-semibold">How To Focus On The Right Problems (17 min)</span> — Dalton and Michael share advice for how to zero in on solving the problems that matter most for your business.
                    </li>
                    <li>
                        <span className="font-semibold">Problem First Approach</span> — A structured problem-solving method that emphasizes identifying and deeply understanding a problem before exploring solutions.
                        <br /><a href="https://agilebrandguide.com/wiki/uncategorized/problem-first-approach-pfa/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                </ul>
            </section>

            {/* Module 3 */}
            <section className="mb-12">
                <Subheading className="mb-2">3 – Understanding your market (1h)</Subheading>
                <Text className="mb-4">This module focuses on how to assess your market opportunity and gather the insights needed to make smart, strategic decisions. You'll learn how to calculate your Total Addressable Market (TAM) and conduct effective market research.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">5 Steps to Validate Your Business Idea</span> — Define key assumptions, estimate market size, gather feedback through interviews and surveys, and run early product tests.
                        <br /><a href="https://online.hbs.edu/blog/post/market-validation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to calculate Total Addressable Market (TAM) (15 min)</span> — Definitions, common mistakes, and how to estimate TAM properly. Steve Barsh demonstrates the simple formula that applies to every startup.
                        <br /><a href="https://www.youtube.com/watch?v=M_RMTC2YmXY" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">How to calculate Total Addressable Market (TAM) - Startups 101</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to Conduct Market Research for a Business Idea (20 min)</span> — Step-by-step methods to gather, analyze, and apply market data effectively.
                        <br /><a href="https://www.youtube.com/watch?v=EUp8hJVRmCI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">How to Conduct Market Research for a Business Idea</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to Conduct Market Research for a Startup</span> — Gather and analyze data to understand customer needs, identify target segments, and refine your value proposition.
                        <br /><a href="https://online.hbs.edu/blog/post/how-to-do-market-research-for-a-startup" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                </ul>
            </section>

            {/* Module 4 */}
            <section className="mb-12">
                <Subheading className="mb-2">4 – Building the Solution & MVP (37 min)</Subheading>
                <Text className="mb-4">In this module, you'll learn how to identify the right features to build first, how to prototype your solution effectively, and how to collect meaningful insights by talking to users.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">How to Launch Your Startup? (21 min)</span> — Kat Mañalac on ways to launch a product and get attention. Tangible strategies and examples.
                        <br /><a href="https://www.youtube.com/watch?v=u36A-YTxiOw" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">The Best Way To Launch Your Startup | Startup School</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to build an MVP (16 min)</span> — YC Group Partner Michael Seibel on determining your MVP feature set, building prototypes, and presenting your MVP to early customers or investors.
                        <br /><a href="https://www.youtube.com/watch?v=QRZ_l7cVzzU" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Watch on YouTube</a>
                    </li>
                    <li>
                        <span className="font-semibold">Don't Serve Burnt Pizza (And Other Lessons in Building Minimum Lovable Products)</span> — Jiaona Zhang (Dropbox, Airbnb, WeWork, Stanford) on building MLPs that win users' hearts.
                        <br /><a href="https://www.youtube.com/watch?v=EUp8hJVRmCI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Watch on YouTube</a>
                    </li>
                </ul>
            </section>

            {/* Module 5 */}
            <section className="mb-12">
                <Subheading className="mb-2">5 – Validating your MVP (19 min)</Subheading>
                <Text className="mb-4">This module focuses on how to test whether your MVP truly solves a real problem. You'll learn how to gather meaningful user feedback, avoid false positives, and iterate based on evidence.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">Proving It (3 min)</span> — Test all aspects of your business model to find out what works, what doesn't, and what needs to change.
                    </li>
                    <li>
                        <span className="font-semibold">How to Effectively Test Your MVP (9 min)</span> — Phuong on refining MVPs by observing real user behavior, engaging early adopters, and using structured feedback methods.
                        <br /><a href="https://www.youtube.com/watch?v=563e-4NNZP0" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">How to Effectively Test Your MVP</a>
                    </li>
                    <li>
                        <span className="font-semibold">MVP Testing Validation: 12 Proven Strategies to Test and Validate Your MVP</span> — Adam Fard outlines 12 strategies to test and validate an MVP.
                        <br /><a href="https://adamfard.com/blog/mvp-testing-validation" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                    <li>
                        <span className="font-semibold">MVP Testing - A Guide to Validate a Minimum Viable Product</span> — Testing core functionalities with real users to gather feedback and iterate based on data.
                        <br /><a href="https://uxcam.com/blog/mvp-testing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                    <li>
                        <span className="font-semibold">Understand Your Customers (7 min)</span> — Identify your customers, their common characteristics, their problem, and how they describe that problem.
                        <br /><a href="https://www.youtube.com/watch?v=XO9udWDu_ck" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Watch on YouTube</a>
                    </li>
                    <li>
                        <span className="font-semibold">A Beginner's Guide to Hypothesis Testing in Business</span> — Validate your business idea by identifying assumptions, conducting user interviews, and testing prototypes.
                        <br /><a href="https://online.hbs.edu/blog/post/hypothesis-testing" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                </ul>
            </section>

            {/* Module 6 */}
            <section className="mb-12">
                <Subheading className="mb-2">6 – Business Models (1h 50 min)</Subheading>
                <Text className="mb-4">This module explores how to design a business model that transforms a great product into a sustainable company. You'll learn key frameworks for differentiation, value creation, and growth.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">Startup Secrets: Business Model (1h 50 min)</span> — Learn how innovators apply C.O.R.E differentiation, multipliers, and levers to disrupt the market. Case studies from Acquia, FormLabs, Diagnostics for All, and Opex Engine.
                        <br /><a href="https://www.youtube.com/watch?v=K0Eu6cL0BR8" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Harvard i-lab | Startup Secrets: Business Model</a>
                    </li>
                </ul>
            </section>

            {/* Module 7 */}
            <section className="mb-12">
                <Subheading className="mb-2">7 – Go-To-Market & Sales (2h 44 min)</Subheading>
                <Text className="mb-4">This module covers how to structure a strong Go-To-Market (GTM) strategy and lay the foundation for early sales traction.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">Startup Secrets: Go to Market Strategies (2h)</span> — Strategic and tactical frameworks to enter a market and occupy a dominant position. Develop your "brand essence" and integrate key marketing assets.
                        <br /><a href="https://www.youtube.com/watch?v=rqi-n0hA4uo" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Harvard i-lab | Startup Secrets: Go to Market Strategies</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to talk to users (17 min)</span> — YC Group Partner Gustaf Alströmer on how to talk to current and potential users, run great user interviews, and interpret feedback.
                        <br /><a href="https://www.youtube.com/watch?v=z1iF1c8w5Lg" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">How To Talk To Users | Startup School</a>
                    </li>
                    <li>
                        <span className="font-semibold">Setting KPIs and Goals (27 min)</span> — YC Visiting Partner Divya Bhat on how to set KPIs and prioritize your time to launch faster and make real progress.
                        <br /><a href="https://www.youtube.com/watch?v=6DTK9yDP6p0" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Watch on YouTube</a>
                    </li>
                    <li>
                        <span className="font-semibold">16 Startup Metrics</span> — a16z partners break down 16 key startup metrics: revenue vs. bookings, CAC, churn, LTV, GMV, burn rate, DAU/MAU, and more.
                        <br /><a href="http://a16z.com/16-startup-metrics/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                </ul>
            </section>

            {/* Fundraising */}
            <section className="mb-12">
                <Subheading className="mb-2">Fundraising</Subheading>
                <Text className="mb-4">This module covers how startup fundraising works, how to prepare for investor conversations, and whether venture capital is the right path for you. You'll also find resources on legal setup and early-stage incorporation in Italy.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">How Startup Fundraising Works (28 min)</span> — YC Group Partner Brad Flora on how modern startup fundraising works.
                        <br /><a href="https://www.youtube.com/watch?v=zBUhQPPS9AY" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">How Startup Fundraising Works | Startup School</a>
                    </li>
                    <li>
                        <span className="font-semibold">Your First VC Meeting (4 min)</span> — Jeff Bussgang (Flybridge Capital, Harvard Business School) on how to stand out to an investor and what to watch when negotiating.
                        <br /><a href="https://www.youtube.com/watch?v=iV1e8VMjNY4" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Financing Your Venture: Venture Capital - Your First Meeting with a VC</a>
                    </li>
                    <li>
                        <span className="font-semibold">320 Questions an Investor Will Ask Your StartUp</span> — Mikhail Raevskiy on anticipating tough questions and preparing systematically for pitches.
                        <br /><a href="https://medium.com/swlh/how-to-prepare-for-pitching-list-of-320-questions-an-investor-will-ask-23aedfcff946" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                    <li>
                        <span className="font-semibold">IS VC right for you? (3 min)</span> — Jeff Bussgang on when you need venture capital and what to watch out for.
                        <br /><a href="https://www.youtube.com/watch?v=gWLRnGsuOJI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Financing Your Venture: Is Venture Capital Right For You?</a>
                    </li>
                    <li>
                        <span className="font-semibold">Italy Founder Series: Build Your Startup</span> — Company types (S.r.l. vs. S.p.A.), incorporation process, by-laws, share capital, administration, IP, and employee agreements.
                        <br /><a href="https://www.orrick.com/en/Insights/2024/12/Italy-Founders-Series-Build-Your-Startup" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                </ul>
            </section>

            {/* General Resources */}
            <section className="mb-12">
                <Subheading className="mb-2">General Resources</Subheading>
                <ul className="list-disc pl-6 space-y-2 text-light">
                    <li><a href="https://www.startupschool.org/?utm_campaign=ycdc_header&utm_source=yc" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">YC Startup School</a></li>
                    <li><a href="https://www.b4i.unibocconi.it/curated-content/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">B4i Curated Content</a></li>
                    <li><a href="https://toolkit.techstars.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Techstars Toolkit</a></li>
                    <li><a href="https://www.entrepreneurship.org/learning-paths" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Entrepreneurship.org - Learning Paths</a></li>
                </ul>
            </section>

            {/* IP & Patents */}
            <section className="mb-12">
                <Subheading className="mb-2">Intellectual Property, Patents & Tech Transfer</Subheading>
                <Text className="mb-4">Understanding how to protect your innovation is critical for any startup. This module covers types of IP, when to protect them, and how to navigate patent processes in Italy.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">Why Patenting is Important (2 min)</span> — Patents allow a long-term view of your investments and enable the exchange of information.
                        <br /><a href="https://www.youtube.com/watch?v=VEU3BJewuKI" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Why Patenting is Important</a>
                    </li>
                    <li>
                        <span className="font-semibold">Patent Guide – Studio Legale Adamo</span> — Comprehensive legal guide on what can be patented, requirements and procedures in Italy, and strategies for safeguarding IP.
                        <br /><a href="https://www.studiolegaleadamo.it/come-brevettare-unidea-un-prodotto-o-un-oggetto" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to File a Patent – Jacobacci</span> — Practical guide on patents, utility models, industrial designs, and fiscal benefits such as the patent box.
                        <br /><a href="https://www.jacobacci.com/brevetto-come-tutelare-le-proprie-invenzioni#depositare" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                </ul>
            </section>

            {/* Low Code & No Code */}
            <section className="mb-12">
                <Subheading className="mb-2">Low Code & No Code</Subheading>
                <Text className="mb-4">Build apps, dashboards, or websites without being a coding expert. Low-code and no-code platforms let you create powerful tools and digital products fast.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">What is Low Code (3 min)</span> — Jamil Spain on how low-code platforms deliver productivity gains. Tools: OutSystems, Mendix, Microsoft Power Apps, SAP Build Apps.
                        <br /><a href="https://www.outsystems.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">OutSystems</a> · <a href="https://www.mendix.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mendix</a> · <a href="https://www.microsoft.com/it-it/power-platform/products/power-apps?market=it" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Power Apps</a> · <a href="https://www.sap.com/products/technology-platform/low-code-app-builder.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SAP Build Apps</a>
                    </li>
                    <li>
                        <span className="font-semibold">What is No Code (3 min)</span> — Build UIs, dashboards, websites, and more with no coding. Tools: <a href="https://lovable.link/39EeHhh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lovable</a> · <a href="https://airtable.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Airtable</a> (databases) · <a href="https://bubble.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Bubble</a> (web apps) · <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Zapier</a> (automation)
                    </li>
                </ul>
            </section>

            {/* Pitching */}
            <section className="mb-12">
                <Subheading className="mb-2">Pitching</Subheading>
                <Text className="mb-4">Craft a compelling pitch, structure your presentation effectively, and understand what investors are really looking for.</Text>
                <ul className="list-disc pl-6 space-y-3 text-light">
                    <li>
                        <span className="font-semibold">Powerful Presentations: Crafting Your WOW Statement (7 min)</span> — Nathan Gold on creating a single statement that makes people say "wow."
                        <br /><a href="https://www.youtube.com/watch?v=3U_i0sy0Y_Y" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Powerful Presentations: Crafting Your WOW Statement</a>
                    </li>
                    <li>
                        <span className="font-semibold">How to Pitch Your Startup (27 min)</span> — YC Partner Kevin Hale on packaging your idea and communicating it clearly to investors.
                        <br /><a href="https://www.youtube.com/watch?v=17XZGUX_9iM" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Kevin Hale - How to Pitch Your Startup</a>
                    </li>
                    <li>
                        <span className="font-semibold">Powerful Presentations: Presentation Categories (4 min)</span> — Nathan Gold on different presentation lengths and audiences.
                    </li>
                    <li>
                        <span className="font-semibold">Powerful Presentations: First Impressions (7 min)</span> — Nathan Gold's SSAME tool: stories, similes, analogies, metaphors, and examples.
                    </li>
                    <li>
                        <span className="font-semibold">Lessons From A Study of Perfect Pitch Decks</span> — TechCrunch analysis: VCs spend an average of 3 minutes 44 seconds on a deck. Clarity and structure are essential.
                        <br /><a href="https://techcrunch.com/2015/06/08/lessons-from-a-study-of-perfect-pitch-decks-vcs-spend-an-average-of-3-minutes-44-seconds-on-them/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a>
                    </li>
                </ul>
            </section>

            {/* Suggested Readings */}
            <section className="mb-12">
                <Subheading className="mb-2">Suggested Readings</Subheading>
                <ul className="list-disc pl-6 space-y-2 text-light">
                    <li><span className="font-semibold">Start With Why</span> by Simon Sinek — <a href="https://www.amazon.it/Start-Why-Leaders-Inspire-Everyone/dp/1591846447" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a></li>
                    <li><span className="font-semibold">Zero to One</span> by Peter Thiel — <a href="https://www.amazon.it/Zero-one-Peter-Thiel/dp/0753555204" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Link to Article</a></li>
                    <li><span className="font-semibold">The Lean Startup</span> by Eric Ries</li>
                    <li><span className="font-semibold">The Hard Thing About Hard Things</span> by Ben Horowitz</li>
                    <li><span className="font-semibold">High Output Management</span> by Andy Grove</li>
                    <li><span className="font-semibold">Crossing the Chasm</span> by Geoffrey A. Moore</li>
                </ul>
                <Text className="mt-2">For more readings and useful content, visit the <a href="https://www.ycombinator.com/library" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Y Combinator Library</a>.</Text>
            </section>
        </div>
    )
}
