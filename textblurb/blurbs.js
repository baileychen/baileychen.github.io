// veeva
const internship2018 = {
    title: `Increased access for process management tools`,
    intro: 'Built portal to enable users to navigate and troubleshoot the setup of all versions of a process workflow.',
    linkPath: '/cases/workflow',
    wow: 'oo',
    introMoreDetailed:
        'Built a full-stack feature to create a "Version Controller" that enables users to navigate and explore the setup of all versions of a process workflow. This feature addressed a common source of confusion for customers and reduced production costs by ~15%.',
    background: `Documents are numerous and important in the healthcare industry - from keeping track of clinical trials to promotional material and these documents need to follow numerous, stringent compliance rules. To streamline this complexity, we want to organize and formalize the process of various events like: sending notifications, assigning tasks for people to complete, finalizing document drafts, etc., and we do so by grouping these events into "workflows". For example, a biopharmaceutical company might want to create a workflow on a promotional document to get certain people to verify that the document makes accurate claims about a drug.`,
    problem: {
        painPoint: `Before the Version Controller, whenever someone wanted to examine the setup of a workflow, they would only see the latest version of a workflow, which could be different from the workflow version running on the document. So clearly, this doesn't always help the user see how the running workflow is setup. This mismatch in workflow versions is actually a major source of confusion for customers and this underlying 'workflow' logic runs across multiple applications on Veeva's 'Vault' platform (user: does this setup actually reflect what is running on my document? how do I know? Send help!).`,
        productionImpact: `For my team, around half of the production issues were related to document workflows. To resolve the issue, customers would need to contact Veeva employees who would need to go through the Java backend and query to the MySQL database to find the version of the workflow running on a document. And even then, it would be inconvenient to try viewing the setup of past workflow versions.`,
    },
    fix: `Now, with the Version Controller, users can access an enhanced menu-widget option to navigate through the setup of all versions of a workflow. They can also see the version of a workflow a document is running against so that there is no version mismatch. All this information is extracted at runtime. This would let customers examine and resolve these document workflow related issues themselves and spare the process of contacting support altogether!`,
    whatILearned: `A lot of what I learned over the summer was working with JavaScript and UI in general, along with learning how to communicate effectively at different technical levels (talking to product managers vs. developers). The iterative process of discussing the plan for API changes and working towards the best customer user-experience was also something I delved into and learned about!`,
    screenshotCaptions: {
        dialog: [
            `Pop-up Dialog that provides contextual information on workflows (version number, last modified, etc)`,
            `Navigation links to all workflow versions`,
        ],
        workflowView: `Read-only view of past workflow versions setup (it would be bad if a user could bring back an old broken workflow version. Yikes!)`,
    },
};
const tripReport = {
    title: `Modernized user experience for clinical trial oversight`,
    intro: 'Monitoring and overseeing clinical trials ensures compliance with important protocols and regulations. I modernized the frontend component of this process using React.',
    linkPath: '/cases/oversight',
};
const archiveStudy = {
    title: `One-click clinical study archival`,
    intro: `When a clinical trial is finished, it is vital to archive all sensitive documents and related data. I created a one-click action to automate this time-consuming process.`,
    linkPath: '/cases/archive',
};
const veeva = [tripReport, archiveStudy, internship2018];
const workExperience = {
    veeva,
    berkeleySummer2016: {
        title: '',
        intro: `The summer after my freshman year, I interned at the Rio Lab at University of California, Berkeley. During my time there, I got to learn and used various molecular laboratory techniques such as in vivo Excision Assays, transfections, cell transformations, and more! All this was to explore the ability of the THAP9 gene of different species (human, fruit fly, zebrafish) to mobilize the fruit fly P-element DNA sequence.`,
        summary: `For the summer after my freshman year, I mainly worked on studying the P-element in Drosophila (fruit fly), which is a well-known transposable element – meaning this DNA sequence can have its position be changed in the genome. P-elements are mainly moved by a transposase, an enzyme that moves transposable elements via a cut-and-paste mechanism.`,
        techniquesAndSpecificArea: `During the summer, I used various molecular laboratory techniques such as: in vivo Excision Assays, transfections, cell transformations, and more to explore and quantify the ability of transposase gene (THAP9) in different species: human, drosophila, and zebrafish transposase gene (THAP9 gene) to mobilize and move drosophila P-element.`,
        details: [
            `The experiment to quantity the ability of a THAP9 gene to mobilize a P-element was designed by having two plasmids: one with Ampicillin resistance gene and a transposase gene, the other with Ampicillin resistance gene and Kanamycin resistance gene. The Kanamycin resistance gene, however, was inactive because it was split into two sections because a P-element was interjected in the middle.`,
            `Later, these two plasmids were inserted into drosophila L2 cells via transformation. If the transposase enzyme successfully moved the P-element and the Kanamycin resistance gene was properly repaired, then the bacteria colonies formed by those drosophila L2 cells would be both Kanamycin and Ampicillin resistant! If the transposition/moving of the P-element was not successful, then the bacteria colonies would only be Ampicillin resistant. Due to this experimental design, I was able to quantify the ability of transposase gene belonging to different species to mobilize drosophila P-element.`,
        ],
        figureCaption: `Figure: Min, B., Weinert, B. T. & Rio, D. C. Interplay between Drosophila Blooms syndrome helicase and Ku autoantigen during nonhomologous end joining repair of P element-induced DNA breaks. Proceedings of the National Academy of Sciences 101, 8906–8911 (2004).`,
    },
    stanfordSummer2015: {
        title: '',
        intro: 'The summer before my freshman year, I interned at the Sidow Lab at Stanford University. I had the opportunity to work on genomic and cancer research using modern laboratory technology like next-generation high-throughput sequencing!',
        summary:
            'To explore the causes and roots of cancer development, I compared the differences between cancer tissue and control normal tissue. Two ways I did this were by comparing cancer and normal tissue by examining differences in the genome and gene expression profile.',
        details:
            'By looking at the genome of a tissue, I examined both the genes and non-coding DNA, and more. Through this, I examined what a cell’s sequence could possibly do. By looking at the gene expression profile, I examined the functionality of the genome (what genes were being transcribed into RNA) and what a cell’s sequence was actually doing at a point in time. Technology like next-generation high-throughput sequencing (NGS) facilitated this work and allowed the parallelization of DNA and RNA sequencing to greatly increase the number of sequences read each run.',
    },
};
const introBlurbs = [
    'Software engineer building intuitive and streamlined solutions to Clinical Trial processes. Modernizing user-experience for clinical trial management. React enthusiast and Java sipper.',
];
const veevaOverview = {
    title: `Optimizing user experience for Life Sciences tools`,
    introVeeva: `Veeva Systems provides cloud software solutions for the Life Sciences industry.`,
    introMe: `For the past 2.5 years, I have optimized the front-end user experience for various clinical trial management and admin tools.`,
};

const blurbs = { introBlurbs, veevaOverview, workExperience };

export default blurbs;
