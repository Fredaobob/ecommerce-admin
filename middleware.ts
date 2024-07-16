import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/api/:path*"]);

export default clerkMiddleware((auth, req) => {
  if (isPublicRoute(req)) return; // Se for uma rota pública, não faça nada
  auth(); // Para qualquer outra rota, requer autenticação
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
