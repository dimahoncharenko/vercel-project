export let Headings = [
    {
        heading: "ІТ у професійній діяльності вчителя",
        href: "/articles/IT_in_education/preview"
    },
    {
        heading: "Етапи розвитку ІТ",
        href: "/articles/IT_in_education/stages"
    },
    {
        heading: "ІТ-компетентність",
        href: "/articles/IT_in_education/competence"
    },
    {
        heading: "Переваги використання ІТ в освіті",
        href: "/articles/IT_in_education/benefits"
    },
    {
        heading: "Існуючі недоліки та проблеми застосування ІТ",
        href: "/articles/IT_in_education/shortcomings"
    }
];

type Heading = {
    heading: string,
    href: string
};

export type Headings = Heading[];