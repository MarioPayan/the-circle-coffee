import { capitalizeWords } from "@/lib/utils"

const data = {
  name: 'the circle',
  slogan: 'Transformar, conectar y buen café',
  mainColor: '#5D5DFF',
  description: '¡Bienvenido a nuestra tienda de café colombiano! Sumérgete en una experiencia única de sabores y aromas que solo Colombia puede ofrecer.',
  logo: <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
</svg>
}

const headerData = {
  logo: data.logo,
}

const heroData = {
  title: capitalizeWords(data.name),
  subtitle: data.description
}

const featuresData = {
  title: "Sumérgete en el Mundo Cafetero",
  subtitle: "Descubre, Aprende y Disfruta: Actividades para los Amantes del Café",
  items: [
    {
      icon: <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
      <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
      <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
    </svg>,
      title: "Tostado Apasionado",
      subtitle: "Sumérgete en el fascinante arte del tostado de café. Únete a nuestras sesiones y descubre los secretos detrás de ese aroma irresistible. Deja que el café despierte tus sentidos.",
    },
    {
      icon: <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
      <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
      <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
    </svg>,
      title: "Descubre y Adquiere",
      subtitle: "Explora nuestra exclusiva selección de granos de café colombiano. Ofrecemos granos frescos listos para llevar a casa, para que disfrutes la auténtica esencia del café colombiano en cada taza.",
    },
    {
      icon: <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
      <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
      <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
    </svg>,
      title: "Catas Exquisitas",
      subtitle: "Únete a nuestras catas de café, donde cada sorbo es una experiencia sensorial. Descubre las sutilezas de los diferentes perfiles de sabor en un emocionante viaje de degustación.",
    },
    {
      icon: <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
      <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
      <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
    </svg>,
      title: "Cursos para Aficionados",
      subtitle: "Conviértete en un maestro del café con nuestros cursos especializados. Descubre la historia del café y aprende técnicas de preparación para disfrutar al máximo tu café.",
    },
    {
      icon: <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
      <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
      <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
    </svg>,
      title: "Magia Tostadora",
      subtitle: "Observa de cerca el arte del tostado en nuestra tostadora de café. Experimenta el proceso en acción y comprende cómo cada lote se transforma en una obra maestra tostada.",
    },
    {
      icon: <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
      <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
      <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
    </svg>,
      title: "Productos Café",
      subtitle: "Explora nuestra gama de productos inspirados en el café, desde exquisitos chocolates hasta artículos de cuidado personal. Cada artículo captura la esencia del café colombiano. ¡Descubre cómo el café puede ser mucho más que una bebida!",
    },
  ]
}

export {
    heroData,
    featuresData,
    headerData,
}
