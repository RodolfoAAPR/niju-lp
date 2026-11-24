/* Links e dados oficiais da Niju. Fonte: site oficial e Instagram. */

export const contato = {
  telefoneExibido: "+55 49 3361-5191",
  telefoneHref: "tel:+554933615191",
  email: "vendas@niju.com.br",
  endereco: "Rua Delfim Moreira da C. 698D, Bela Vista, Chapecó, SC",
  enderecoCurto: "Chapecó, SC",
  instagram: "https://www.instagram.com/niju.camaras/",
  facebook: "https://www.facebook.com/niju.camaras",
  site: "https://www.niju.com.br/",
  cnpj: "00.087.181/0001-35",
  razao: "NIJU INDÚSTRIA E COMÉRCIO DE IMPLEMENTOS RODOVIARIOS LTDA",
};

const onde = encodeURIComponent(`Niju Implementos Rodoviários, ${contato.endereco}`);

/* Abrir o endereço no app de mapas. */
export const mapas = {
  google: `https://www.google.com/maps/search/?api=1&query=${onde}`,
  waze: `https://www.waze.com/ul?q=${onde}&navigate=yes`,
  apple: `https://maps.apple.com/?q=${onde}`,
};

/* Telefone abre o WhatsApp com mensagem pronta. */
export const whatsappUrl = `https://wa.me/554933615191?text=${encodeURIComponent("Olá, quero receber mais informações dos produtos Niju")}`;

export function mailtoOrcamento(produto: string, nome: string, empresa: string, whatsapp: string, mensagem: string) {
  const assunto = `Pedido de orçamento: ${produto}`;
  const corpo = [`Nome: ${nome}`, `Empresa: ${empresa}`, `WhatsApp: ${whatsapp}`, `Produto: ${produto}`, "", mensagem].join("\n");
  return `mailto:${contato.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
}
