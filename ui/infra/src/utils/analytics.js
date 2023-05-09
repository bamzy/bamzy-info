export default function sendToAnalytics(metric) {
    metric.currentDate = Date.now(); 
    const elasticBody = {document:metric};
    elasticBody.indexName = 'react_logs' 
    const body = JSON.stringify(elasticBody);
    const url = 'http://localhost:8083/insertDoc';
    // var blob = new Blob([body], { type: "application/json" });
    // navigator.sendBeacon(url, blob);
    fetch(url, { body, method: 'POST', keepalive: true,headers:{'Content-Type':'application/json'} });
  }