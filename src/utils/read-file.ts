export async function readFile(pathToFile: string) {
  const decoder = new TextDecoder('utf-8');
  const data = await Deno.readFile(pathToFile);
  const decoded = decoder.decode(data);

  return { decoder, data, decoded };
}
