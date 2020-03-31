async function loadResults() {
  const results = await fetch("/results.json");
  const body = await results.json();
  console.log(body);
  
  
  for (const fileResult of body.testResults) {
    
  }
  
}

loadResults();