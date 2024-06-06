interface navigationProps {
  id: number;
  title: string;
  link: string;
}

const navigation: navigationProps[] = [
  {
    id: 1,
    title: "Pricing",
    link: "pricing",
  },
  {
    id: 2,
    title: "Product",
    link: "product",
  },
  {
    id: 3,
    title: "About Us",
    link: "about",
  },
  {
    id: 4,
    title: "Careers",
    link: "careers",
  },
  {
    id: 5,
    title: "Community",
    link: "community",
  },
];

export { navigation };
