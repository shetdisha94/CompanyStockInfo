function(element){

  const companies= {}; 

  const tableRows= document.querySelectorAll('tbody > tr');

  tableRows.forEach(row => {
    const links = row.querySelectorAll('a');
    
    links.forEach(link => {
        const companyName = link.textContent.trim();
        const companyURL = link.href;
        companies[companyName] = companyURL;
    });
});
console.log(companies)
return JSON.stringify(companies);

}