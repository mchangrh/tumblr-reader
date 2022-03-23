addEventListener('fetch', (e) => {
  e.respondWith(proxyRequest(e.request))
});

async function proxyRequest(r) {
  const targetUrl = new URL(r.url).searchParams.get('url')
  if (!targetUrl) return new Response('include url like ?url=https://blog.tumblr.com/post/123', { status: 400 })
  targetUrl.replace("http://", "https://")
  const subreq = await fetch("https://www.tumblr.com/oembed/1.0?format=json&url=" + targetUrl)
  if (!subreq.ok) {
    return new Response(subreq.statusText, { status: subreq.status })
  } else {
    const data = await subreq.json()
    return new Response(data.html, {
      status: 200,
      headers: {
        "content-type": 'text/html;charset=utf-8'
      }
    })
  }
}