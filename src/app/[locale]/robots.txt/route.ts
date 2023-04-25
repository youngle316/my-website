import { NextResponse } from 'next/server';

export async function GET() {
  function generateRobots() {
    return `# *
    User-agent: *
    Allow: /
    
    # Host
    Host: https://younglele.cn
    
    # Sitemaps
    Sitemap: https://younglele.cn/sitemap.xml
  `;
  }

  const body = generateRobots();
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}
