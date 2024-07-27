E-Commerce React Native App
Descripción
Esta aplicación de comercio electrónico, desarrollada en React Native, se enfoca en la venta de ropa y ofrece funcionalidades para la gestión de productos, carrito de compras, órdenes y perfil de usuario. Los usuarios pueden explorar diversas categorías de ropa, gestionar su carrito de compras, realizar pedidos y actualizar su perfil.

Tecnologías Utilizadas
React Native: Framework para el desarrollo de aplicaciones móviles.
Firebase: Para la persistencia de datos en la nube, incluyendo categorías, productos, órdenes de compra, autenticación y almacenamiento de imágenes de usuario.
SQLite: Para el almacenamiento local de datos del usuario.
Expo: Para el desarrollo y gestión de dependencias.

Instalación
Clona el repositorio:
sh
Copiar código
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
Instala las dependencias:
sh
Copiar código
npm install
Inicia el proyecto:
sh
Copiar código
npm start
Funcionalidades
Shop: Navega por las categorías y productos disponibles. Visualiza los detalles de cada prenda de ropa.
Cart: Confirma pedidos y elimina artículos del carrito.
Order: Visualiza las órdenes realizadas.
Profile: Permite ver y editar información del perfil, tomar fotos, ver la ubicación del address y cerrar sesión.
Persistencia de Datos
Firebase: Utilizado para almacenar datos en la nube, como categorías, productos, órdenes y autenticación de usuarios.
SQLite: Utilizado para el almacenamiento local de datos del usuario.
Notas Importantes
Este proyecto no es compatible con la web debido a la dependencia de SQLite, que no es compatible con entornos web.
Asegúrate de tener correctamente configurado tu proyecto de Firebase y las credenciales necesarias para que la autenticación y el almacenamiento funcionen adecuadamente.
