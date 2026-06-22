export async function getJobs() {
  const res = await fetch("/api/jobs");
  const data = await res.json();
 return data;
}
