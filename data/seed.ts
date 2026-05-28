import { featuredProducts } from "./categories";

async function main() {
  console.log(`Seed placeholder: ${featuredProducts.length} products ready.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
