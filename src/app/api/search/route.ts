import { db } from '@/lib/prisma'

//! Agregar validacion para poder buscar usuarios
export async function GET(req: Request) {
  const url = new URL(req.url)
  const q = url.searchParams.get('q')

  if (!q) return new Response('Consulta invalida', { status: 400 })

  const results = await db.user.findMany({
    where: {
      name: {
        startsWith: q,
      },
    },
    include: {
      _count: true,
    },
    take: 5,
  })

  return new Response(JSON.stringify(results))
}
