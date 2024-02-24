import "../../../../infra/database.js"

async function status(request, response) {
  response.status(200).json({ chave: "123456789" });
}

export default status;