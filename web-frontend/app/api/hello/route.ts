export async function GET(request: Request) {
  const res = await fetch(
    `https://widget.hashmail.dev/notifier_tracking_script.js`
  );

  console.log(
    new TextDecoder().decode((await res.body?.getReader().read())!.value!)
  );
  return new Response("Hello, Next.js!");
}
