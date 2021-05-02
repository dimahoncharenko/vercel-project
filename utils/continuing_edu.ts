export let Headings = [
    {
        heading: "Безперервна освіта",
        href: "/articles/continuing_edu/preview"
    },
    {
        heading: "Іноземний досвід",
        href: "/articles/continuing_edu/foreign_experience"
    },
    {
        heading: "Український досвід",
        href: "/articles/continuing_edu/ukrainian_experience"
    },
    {
        heading: "Принципи освіти протягом життя",
        href: "/articles/continuing_edu/principles"
    },
    {
        heading: "Висновки",
        href: "/articles/continuing_edu/overview"
    }
];

type Heading = {
    heading: string,
    href: string
};

export type Headings = Heading[];