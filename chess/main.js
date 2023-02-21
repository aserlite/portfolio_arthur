let caseSize = document.getElementById('tailleCases');
caseSize.addEventListener('change', (event) => {
    document.documentElement.style.setProperty('--taille-case', caseSize.value+'px');
});
