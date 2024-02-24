const express = require("express");
const SERVER = {
  HOST: "localhost",
  PORT: 3000,
};
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const items = [
    {
      title: "B",
      message:
        "Banhado por uma rica diversidade natural, o Brasil encanta com suas vastas florestas tropicais, praias de areias douradas e majestosas montanhas. Sua biodiversidade única e paisagens deslumbrantes são verdadeiros tesouros naturais que cativam o coração de visitantes e habitantes.",
    },
    {
      title: "R",
      message:
        "Rico em cultura e história, o Brasil é um caldeirão de influências indígenas, africanas, europeias e asiáticas. Desde as tradições ancestrais até as expressões contemporâneas, sua rica herança cultural se manifesta em sua música vibrante, danças apaixonantes e festivais coloridos.",
    },
    {
      title: "A",
      message:
        "Acolhedor e hospitaleiro, o povo brasileiro é conhecido por sua calorosa hospitalidade e espírito acolhedor. Com um sorriso sincero e uma generosidade sem igual, os brasileiros recebem seus visitantes de braços abertos, compartilhando sua cultura, comida deliciosa e alegria contagiante.",
    },
    {
      title: "S",
      message:
        "Sob o sol tropical do Brasil, a vida é celebrada com paixão e entusiasmo. Das festas de carnaval extravagantes aos pequenos momentos compartilhados com amigos e familiares, a alegria de viver ressoa em toda parte. Cada dia é uma oportunidade para dançar, cantar e aproveitar o presente.",
    },
    {
      title: "I",
      message:
        "Inspirando-se na diversidade e na beleza ao seu redor, o Brasil é um celeiro de criatividade e inovação. De artistas renomados a empreendedores visionários, sua cultura vibrante e ambiente estimulante inspiram a imaginação e impulsionam o progresso em todas as áreas.",
    },
    {
      title: "L",
      message:
        "Lar de paisagens deslumbrantes e experiências inesquecíveis, o Brasil é um destino de viagem verdadeiramente excepcional. De aventuras na Amazônia a relaxantes dias ensolarados nas praias paradisíacas, sua diversidade geográfica oferece uma infinidade de oportunidades para explorar e se maravilhar.",
    },
  ];
  res.render("pages/index", { anagrams: items });
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(SERVER.PORT, () =>
  console.log(`Server is running at ${SERVER.HOST}:${SERVER.PORT}`)
);
