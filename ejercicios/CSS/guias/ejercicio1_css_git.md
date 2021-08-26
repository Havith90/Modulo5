# Ejercicio 1 | Css | Git

> Entregar el link de github en los buzones de: Trazando tus bloques (Core) y Acerca de Python (Core)

## Enunciado

Tomando en cuenta el *modelo de caja, concepto de Lego y construcción por Capas* realizar la maquetación de la siguiente imagen de referencia.

![Web UI minimalista](https://typegang.com/inspiration/ui/minimal-photography-web-app/minimal-photography-web-app.jpg)
Sacado de: [TypeGang](https://typegang.com/inspiration/ui/minimal-photography-web-app/?utm_source=feed)

## Pasos para guiarse en el ejercicio

### Git

Para finalizar la configuración con Git para los nuevos requerimientos de seguridad es necesario crear un par de llaves 🔐🔑 que nos permitan identificarnos con la plataforma de Github 🐱🐙

Para ello podríamos seguir los siguientes pasos:

1. Configurar el nombre de usuario y correo de git

    ```bash
        git config --global user.name "TU NOMBRE DE USUARIO EN GITHUB"
        git config --global user.email "TU CORREO UTILIZADO EN GITHUB"
    ```

2. Crear el par de llaves

    ```bash
        ssh-keygen -t rsa -b 4096 -C "TU CORREO UTILIZADO EN GITHUB"
    ```

3. Agregar la llave **pública** al perfil de Github

    Buscar en la carpeta de tu usuario (sea linux/windows/mac) la carpeta llamada *.ssh* En esa carpeta deberá existir dos nuevos archivos uno llamado *id_rsa* y *id_rsa.pub*. La llave pública para agregar en Github es la finalizada en .pub (significa .public)

4. Registrar el link al repositorio utilizando **ssh**

    Si ya tienes configurado un *origin* con tu repositorio existente, entonces debemos eliminarlo utilizando el siguiente comando:

    ```bash
        git remote remove origin
    ```

    Y luego agregar el nuevo *origin* utilizando **ssh** que lo puedes encontrar disponble en tu repositorio en el botón verde 🟩 que dice Code. Luego debes ejecutar el siguiente código en tu repositorio

    ```bash
        git remote add origin git@github.com:TU_NOMBRE_USUARIO/NOMBRE_REPOSITORIO
    ```

5. Realizar la prueba de conexión

    ```bash
        # Realizar la prueba de conexión
        git -T git@github.com
    ```

### CSS

1. Crear un archivo en la raiz de su proyecto llamado *index.html*
2. Crear un archivo *css/index.css*
3. Enlazar ambos archivos utilizando la etiqueta *<link>*
4. Apoyándose de la etiqueta *<div>* crear la maqueta para el diseño presentado
5. Utilizando las propiedades de css como: display ; margin ; padding ; border ; position ; width ; height. Construir la maqueta analizada posteriormente.
6. Utilizar comando de Git para subir su código al repositorio

    ```bash
    git status              # verificar estado de git
    git add .               # agregar cambios a "listo para commit"
    git commit -m "mensaje" # confirmar cambios a través de un commit 
    git push                # cargar commit al repositorio remoto
    ```
