function mostrarReloj() {
    const ahora = new Date();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();
    const ampm = horas >= 12 ? 'PM' : 'AM';
  
    const horaFormateada = horas % 12 || 12; 
  
    const reloj = `${horaFormateada}:${minutos}:${segundos} ${ampm}`;
    console.log(reloj);
  }

  setInterval(mostrarReloj, 1000);
  mostrarReloj()