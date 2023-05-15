function calculateQualificationIndex() {
  const numCandidatosQualificados = parseFloat(document.getElementById("num-candidatos-qualificados").value);
  const numCandidatosScreening = parseFloat(document.getElementById("num-candidatos-screening").value);
  const qualificationIndex = (numCandidatosQualificados / numCandidatosScreening) * 100;
  document.getElementById("result").innerHTML = `Índice de Qualificação de Candidatos: ${qualificationIndex.toFixed(2)}%`;
}

