async function loadResults() {
  const results = await fetch("/results.json");
  const body = await results.body.json();
  console.log(body);
}

loadResults();