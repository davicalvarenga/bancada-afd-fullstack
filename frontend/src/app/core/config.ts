/**
 * Base da API. Caminho relativo: na Vercel, front e back ficam no mesmo
 * domínio e a rewrite `/api/(.*)` do vercel.json da raiz leva ao serviço
 * `backend` (o Nest já atende sob o prefixo global `/api`).
 */
export const API_BASE = '/api';
