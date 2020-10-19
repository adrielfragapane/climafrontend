La aplicación fue pensada de la siguiente manera:

Separar la vista en dos partes, una que muestra la información pedida, y otra que muestra el mapa.

La estructura de la aplicación es la siguiente

App: {
    Info: {
        Login,
        Datos
    },
    Map
}

Se utiliza Bootstrap como framework de CSS

El componente "Info" muestra la vista de "Login" o "Datos" dependiendo del estado de autenticación.

En la vista de login se puede crear una cuenta y luego con esta misma se puede iniciar sesión.

Una vez creada la cuenta o iniciada la sesión, se visualiza el componente "Datos". En esta vista, inciialemnte se consulta a la API por todas las ciudades que posee, para crear los respectivos botones.

Una vez seleccionada una ciudad, se realiza otra consulta a la API pidiendo todos los datos de la ciudad.
Cuando se obtienen los datos, se renderizan los mismos, mas una imágen que también se enecuentra alojada en el backend.

En las consultas se agrega el header "Authorization" con el accessToken obtenido, si el token es válido, la API devolverá los datos. En caso de no ser válido, regresará un status 403, y se elimina el token almacenado en localStorage y se refresca la vista para visualizar nuevamente el componente "Login".

El token tiene 30 segundos de validez.

