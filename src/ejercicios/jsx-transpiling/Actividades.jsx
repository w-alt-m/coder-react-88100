/* Actividad 3: Botón Multiuso II
En un componente botón no es tan cómodo establecer su label como si fuese un atributo, sino que sería más fácil de entender si el texto lo escribo como hijo del componente. Aplicar la prop children para esto.

💡 Tips

En un componente botón no es tan cómodo establecer su label como si fuese un atributo, sino que sería más fácil de entender si el texto lo escribo como hijo del componente. Aplicar la prop children para esto. */

export default function BotonActividadTres(props, color, callback) {
  console.log("///////////////// Ejercicio 3 /////////////////");

  return (
    <>
      <button style={{ backgroundColor: props.color }} onClick={props.callback}>
        {props.children}
      </button>
    </>
  );
}

/* Ejemplo de uso:

<BotonActividadTres color={"red"} callback={() => {alert("esto es un alert");}}> esto es el children </BotonActividadTres>


*/
