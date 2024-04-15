type Department = {
    title: string,
    icon?: string,
    highlight?: boolean
}

type FooterLinks = {
    title: string,
    links: Link[]
}

type Link = {
    title: string,
    url: string
}

type Product = {
    imageUrl: string,
    colors: Color[],
    price: string,
    name: string,
    description: string
}

type Color = {
    codeHex: string
}