export let Headings = [
    {
        heading: "ІТ у професійній діяльності вчителя",
        href: "/preview"
    },
    {
        heading: "Етапи розвитку ІТ",
        href: "/stages"
    },
    {
        heading: "ІТ-компетентність",
        href: "/competence"
    },
    {
        heading: "Переваги використання ІТ в освіті",
        href: "/benefits"
    },
    {
        heading: "Існуючі недоліки та проблеми застосування ІТ",
        href: "/shortcomings"
    }
];

type Heading = {
    heading: string,
    href: string
};

export type Headings = Heading[];